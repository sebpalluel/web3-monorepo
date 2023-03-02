/* eslint-disable */
export default {
  displayName: 'client-hasura-fetcher',
  preset: '../../../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/libs/client/hasura/fetcher',
};
