export default {
  displayName: 'hasura-adapter',
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
  coverageDirectory: '../../../coverage/libs/hasura/adapter',
  // setupFiles: ['../../../tools/test/jest.setup.ts'],
  // globalSetup: '../../../tools/test/globalSetup.js',
  // globalTeardown: '../../../tools/test/globalTeardown.js',
};
