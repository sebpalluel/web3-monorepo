const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFiles: [`${process.cwd()}/tools/test/jest.setup.ts`],
  globalSetup: `${process.cwd()}/tools/test/globalSetup.ts`,
  globalTeardown: `${process.cwd()}/tools/test/globalTeardown.ts`,
  // collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    // global: {
    //   branches: 80,
    //   functions: 80,
    //   lines: 80,
    //   statements: 80,
    // },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
};
