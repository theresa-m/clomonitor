import { CheckSet, Repository } from '../types';
import sortRepos from './sortRepos';

interface Test {
  input: Repository[];
  output: Repository[];
}

const tests: Test[] = [
  { input: [], output: [] },
  {
    input: [
      {
        digest: 'a4bc7a836890b69fb7eff81ccfa91d50d1010e6d',
        check_sets: [CheckSet.Code],
        name: 'sdk-java',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: 'eafd6d64-db79-40ea-9936-081e1bb9f980',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0179-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-java',
      },
      {
        digest: '0b058d07a816205061232a3521fd6ad6f372e28e',
        check_sets: [CheckSet.Community],
        name: 'spec',
        report: {
          data: {
            best_practices: {
              artifacthub_badge: false,
              community_meeting: true,
              openssf_badge: false,
            },
            documentation: {
              adopters: false,
              changelog: false,
              code_of_conduct: false,
              contributing: false,
              governance: false,
              maintainers: true,
              readme: true,
              roadmap: false,
              website: true,
            },
            license: {
              approved: true,
              fossa_badge: false,
              spdx_id: 'Apache-2.0',
            },

            security: {
              security_policy: false,
            },
          },
          errors: null,

          report_id: '08ba4671-dd4c-4567-a216-e299cc0ac39f',
          updated_at: 1645138031,
        },
        repository_id: '00000000-0000-0041-0000-000000000000',
        score: {
          best_practices: 25,
          documentation: 60,
          global: 41,
          license: 80,

          security: 0,
        },
        url: 'https://github.com/cloudevents/spec',
      },
    ],
    output: [
      {
        digest: '0b058d07a816205061232a3521fd6ad6f372e28e',
        check_sets: [CheckSet.Community],
        name: 'spec',
        report: {
          data: {
            best_practices: {
              artifacthub_badge: false,
              community_meeting: true,
              openssf_badge: false,
            },
            documentation: {
              adopters: false,
              changelog: false,
              code_of_conduct: false,
              contributing: false,
              governance: false,
              maintainers: true,
              readme: true,
              roadmap: false,
              website: true,
            },
            license: {
              approved: true,
              fossa_badge: false,
              spdx_id: 'Apache-2.0',
            },

            security: {
              security_policy: false,
            },
          },
          errors: null,

          report_id: '08ba4671-dd4c-4567-a216-e299cc0ac39f',
          updated_at: 1645138031,
        },
        repository_id: '00000000-0000-0041-0000-000000000000',
        score: {
          best_practices: 25,
          documentation: 60,
          global: 41,
          license: 80,

          security: 0,
        },
        url: 'https://github.com/cloudevents/spec',
      },
      {
        digest: 'a4bc7a836890b69fb7eff81ccfa91d50d1010e6d',
        check_sets: [CheckSet.Code],
        name: 'sdk-java',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: 'eafd6d64-db79-40ea-9936-081e1bb9f980',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0179-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-java',
      },
    ],
  },
  {
    input: [
      {
        digest: 'c420da479343bc71a5ba4d5ed41841280f4c989a',
        check_sets: [CheckSet.Code],
        name: 'sdk-javascript',
        report: {
          data: {
            documentation: {
              contributing: true,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: '7376f1a4-0d40-4ee3-bdf3-8bbce13d4ec9',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0180-0000-000000000000',
        score: {
          documentation: 90,
          global: 95,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-javascript',
      },
      {
        digest: '409982e9e97a8a450b1bfbbbc2a16a8c08c78f62',
        check_sets: [CheckSet.Code],
        name: 'sdk-csharp',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: 'ae7b3c76-bbd7-43b0-a03b-8420c77abf71',
          updated_at: 1645138094,
        },
        repository_id: '00000000-0000-0181-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-csharp',
      },
      {
        digest: '705e8b41004dba4f9a2dda0993205f9d610c7161',
        check_sets: [CheckSet.Code],
        name: 'sdk-python',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: '4ae8ed7d-dc6c-46bd-b88d-05a8df7933b0',
          updated_at: 1645138094,
        },
        repository_id: '00000000-0000-0182-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-python',
      },
      {
        digest: '9f80fd3a004fcabea03987db1fdfcb324deef14e',
        check_sets: [CheckSet.Code],
        name: 'sdk-go',
        report: {
          data: {
            documentation: {
              contributing: true,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: '065d234e-f627-4cb2-b52b-6e70e69e294f',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0178-0000-000000000000',
        score: {
          documentation: 90,
          global: 95,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-go',
      },
      {
        digest: 'a4bc7a836890b69fb7eff81ccfa91d50d1010e6d',
        check_sets: [CheckSet.Code],
        name: 'sdk-java',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: 'eafd6d64-db79-40ea-9936-081e1bb9f980',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0179-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-java',
      },
      {
        digest: '0b058d07a816205061232a3521fd6ad6f372e28e',
        check_sets: [CheckSet.Community],
        name: 'spec',
        report: {
          data: {
            best_practices: {
              artifacthub_badge: false,
              community_meeting: true,
              openssf_badge: false,
            },
            documentation: {
              adopters: false,
              changelog: false,
              code_of_conduct: false,
              contributing: false,
              governance: false,
              maintainers: true,
              readme: true,
              roadmap: false,
              website: true,
            },
            license: {
              approved: true,
              fossa_badge: false,
              spdx_id: 'Apache-2.0',
            },

            security: {
              security_policy: false,
            },
          },
          errors: null,

          report_id: '08ba4671-dd4c-4567-a216-e299cc0ac39f',
          updated_at: 1645138031,
        },
        repository_id: '00000000-0000-0041-0000-000000000000',
        score: {
          best_practices: 25,
          documentation: 60,
          global: 41,
          license: 80,

          security: 0,
        },
        url: 'https://github.com/cloudevents/spec',
      },
    ],
    output: [
      {
        digest: '0b058d07a816205061232a3521fd6ad6f372e28e',
        check_sets: [CheckSet.Community],
        name: 'spec',
        report: {
          data: {
            best_practices: {
              artifacthub_badge: false,
              community_meeting: true,
              openssf_badge: false,
            },
            documentation: {
              adopters: false,
              changelog: false,
              code_of_conduct: false,
              contributing: false,
              governance: false,
              maintainers: true,
              readme: true,
              roadmap: false,
              website: true,
            },
            license: {
              approved: true,
              fossa_badge: false,
              spdx_id: 'Apache-2.0',
            },

            security: {
              security_policy: false,
            },
          },
          errors: null,

          report_id: '08ba4671-dd4c-4567-a216-e299cc0ac39f',
          updated_at: 1645138031,
        },
        repository_id: '00000000-0000-0041-0000-000000000000',
        score: {
          best_practices: 25,
          documentation: 60,
          global: 41,
          license: 80,
          security: 0,
        },
        url: 'https://github.com/cloudevents/spec',
      },
      {
        digest: '9f80fd3a004fcabea03987db1fdfcb324deef14e',
        check_sets: [CheckSet.Code],
        name: 'sdk-go',
        report: {
          data: {
            documentation: {
              contributing: true,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: '065d234e-f627-4cb2-b52b-6e70e69e294f',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0178-0000-000000000000',
        score: {
          documentation: 90,
          global: 95,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-go',
      },
      {
        digest: 'c420da479343bc71a5ba4d5ed41841280f4c989a',
        check_sets: [CheckSet.Code],
        name: 'sdk-javascript',
        report: {
          data: {
            documentation: {
              contributing: true,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: '7376f1a4-0d40-4ee3-bdf3-8bbce13d4ec9',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0180-0000-000000000000',
        score: {
          documentation: 90,
          global: 95,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-javascript',
      },
      {
        digest: '409982e9e97a8a450b1bfbbbc2a16a8c08c78f62',
        check_sets: [CheckSet.Code],
        name: 'sdk-csharp',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: 'ae7b3c76-bbd7-43b0-a03b-8420c77abf71',
          updated_at: 1645138094,
        },
        repository_id: '00000000-0000-0181-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-csharp',
      },
      {
        digest: 'a4bc7a836890b69fb7eff81ccfa91d50d1010e6d',
        check_sets: [CheckSet.Code],
        name: 'sdk-java',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,

          report_id: 'eafd6d64-db79-40ea-9936-081e1bb9f980',
          updated_at: 1645138093,
        },
        repository_id: '00000000-0000-0179-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-java',
      },
      {
        digest: '705e8b41004dba4f9a2dda0993205f9d610c7161',
        check_sets: [CheckSet.Code],
        name: 'sdk-python',
        report: {
          data: {
            documentation: {
              contributing: false,
              maintainers: false,
              readme: true,
            },
            license: {
              approved: true,
              spdx_id: 'Apache-2.0',
            },
          },
          errors: null,
          report_id: '4ae8ed7d-dc6c-46bd-b88d-05a8df7933b0',
          updated_at: 1645138094,
        },
        repository_id: '00000000-0000-0182-0000-000000000000',
        score: {
          documentation: 70,
          global: 85,
          license: 100,
        },
        url: 'https://github.com/cloudevents/sdk-python',
      },
    ],
  },
];

describe('sortRepos', () => {
  for (let i = 0; i < tests.length; i++) {
    it('returns ordered repos', () => {
      const actual = sortRepos(tests[i].input);
      expect(actual).toEqual(tests[i].output);
    });
  }
});
