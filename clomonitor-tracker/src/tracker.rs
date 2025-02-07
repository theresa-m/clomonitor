use crate::repository;
use anyhow::Result;
use clomonitor_core::linter::{GithubOptions, LintServices};
use config::Config;
use deadpool_postgres::Pool;
use futures::{
    future,
    stream::{FuturesUnordered, StreamExt},
};
use serde_json::Value;
use std::{sync::Arc, time::Duration};
use tokio::time::timeout;
use tracing::{debug, info};

/// Maximum time that can take tracking a single repository.
const REPOSITORY_TRACK_TIMEOUT: u64 = 300;

/// Track all repositories registered in the database.
pub(crate) async fn run(cfg: &Config, db_pool: &Pool) -> Result<()> {
    info!("tracker started");

    // Setup lint services
    let gh_opts = GithubOptions {
        token: cfg.get_string("creds.githubToken")?,
        ..GithubOptions::default()
    };
    let svc = Arc::new(LintServices::new(&gh_opts)?);

    // Get repositories to process
    let repositories = repository::get_all(&db_pool.get().await?).await?;
    if repositories.is_empty() {
        info!("no repositories found");
        info!("tracker finished");
        return Ok(());
    }

    // Track repositories
    info!("tracking repositories");
    let mut futs = FuturesUnordered::new();
    for repository in repositories {
        let mut db = db_pool.get().await?;
        let svc = svc.clone();
        let github_token = cfg.get_string("creds.githubToken")?;
        futs.push(tokio::spawn(async move {
            timeout(
                Duration::from_secs(REPOSITORY_TRACK_TIMEOUT),
                repository.track(&mut db, &svc, github_token),
            )
            .await
        }));
        if futs.len() == cfg.get::<usize>("tracker.concurrency")? {
            futs.next().await;
        }
    }
    future::join_all(futs).await;

    // Check Github API rate limit status
    let response: Value = svc
        .http_client_gh
        .get("https://api.github.com/rate_limit")
        .send()
        .await?
        .json()
        .await?;
    debug!(
        "github rate limit info: [rate: {}] [graphql: {}]",
        response["rate"], response["resources"]["graphql"]
    );

    info!("tracker finished");
    Ok(())
}
