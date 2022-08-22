/* eslint-disable @typescript-eslint/no-var-requires */
const portReachable = require('is-port-reachable');
global.fetch = require('node-fetch');
const dockerCompose = require('docker-compose');

const isServicesAndAppLaunched = async () => {
  console.time('setup docker services and check for web app availability');

  // ️️️✅ Best Practice: Speed up during development, if already live then do nothing
  let isAppReachable = await portReachable(process.env.CLIENT_PORT);
  let isHasuraConsoleReachable = await portReachable(process.env.HASURA_CONSOLE_PORT);
  if (!isAppReachable || !isHasuraConsoleReachable) {
    if (!isHasuraConsoleReachable) {
      await dockerCompose.upAll({
        cwd: './',
        log: true,
        composeOptions: [['--env-file', '.env.local']],
      });
      // await for hasura to be ready
      const hasuraUrl = `http://localhost:${process.env.HASURA_CONSOLE_PORT}/console`;
      let hasuraReady = false;
      while (!hasuraReady) {
        try {
          const res = await fetch(hasuraUrl);
          if (res.status === 200) {
            hasuraReady = true;
            if (res.statusText === 'OK') {
              console.info('Hasura is ready');
            } else console.error(`Hasura healthz: ${res.statusText}`);
          }
        } catch (e) {
          // wait 2sec for hasura to be ready
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    }
    if (!isAppReachable) {
      let appReady = false;
      const appUrl = `http://localhost:${process.env.CLIENT_PORT}/`;
      while (!appReady) {
        try {
          const res = await fetch(appUrl);
          if (res.status === 200) {
            appReady = true;
            console.info('Web app is ready at: ', appUrl);
          }
        } catch (e) {
          // wait 2sec for hasura to be ready
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    }
  }
  // 👍🏼 We're ready
  console.timeEnd('setup docker services and check for web app availability');
  console.log('Services and App ready');
};
isServicesAndAppLaunched();
