/* eslint-disable */
export default {
  displayName: 'gql-user',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/gql/user',
  // setupFiles: ['../../../tools/test/jest.setup.ts'],
  // globalSetup: '../../../tools/test/globalSetup.js',
  // globalTeardown: '../../../tools/test/globalTeardown.js',
};
