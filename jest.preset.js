const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFiles: [`${process.cwd()}/tools/test/jest.setup.ts`],
  globalSetup: `${process.cwd()}/tools/test/globalSetup.ts`,
  globalTeardown: `${process.cwd()}/tools/test/globalTeardown.ts`,
};
