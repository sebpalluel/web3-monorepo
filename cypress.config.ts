/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        async 'db:seed'() {
          // // Send request to backend API to re-seed database with test data
          // const { data } = await axios.post(`${testDataApiEndpoint}/seed`);
          // return data;
        },
        //...
      });
      // https://docs.cypress.io/guides/tooling/code-coverage#Install-the-plugin
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
