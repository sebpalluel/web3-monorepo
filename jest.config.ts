import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  globalSetup: './tools/test/globalSetup.js',
  globalTeardown: './tools/test/globalTeardown.js',
};
