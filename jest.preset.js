const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFiles: [`${process.cwd()}/tools/test/jest.setup.ts`],
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
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test,test-hasura,test-prisma --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
};
