import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { deleteUser, deleteUsers, seedDb, queryDb } from '@test-utils/db';

const cypressJsonConfig = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  video: false, // Disable for now in local + CI
  videosFolder: '../../dist/cypress/apps/web-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/web-e2e/screenshots',
  chromeWebSecurity: false,
  specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'src/support/e2e.ts',
  baseUrl: `http://localhost:${process.env.CLIENT_PORT}`,
  experimentalSessionAndOrigin: true,
  defaultCommandTimeout: 15000,
};
export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename),
    ...cypressJsonConfig,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        async 'db:delete-user'(email: string) {
          await deleteUser(email);
          return true;
        },
        async 'db:delete-users'() {
          await deleteUsers();
          return true;
        },
        async 'db:seed-db'(path: string) {
          await seedDb(path);
          return true;
        },
        async 'db:query-db'(sql: string) {
          await queryDb(sql);
          return true;
        },
        //...
      });
      return config;
    },
  },
});
