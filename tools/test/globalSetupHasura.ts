/* eslint-disable @typescript-eslint/no-var-requires */
const { logger } = require('../../libs/logger/src');
global.fetch = require('node-fetch');

let retriesLeft = 3;

module.exports = async () => {
  logger.info('global-setup: Starting');
  console.time('global-setup');

  // setup env variables
  require('dotenv').config({ path: './tools/test/.env.test.jest' });

  // // ️️️✅ Best Practice: Speed up during development, if already live then do nothing
  // const isDBReachable = await isPortReachable(5454);
  // const isHasuraReachable = await isPortReachable(9696);
  // logger.info('global-setup:', {
  //   isDBReachable,
  //   isHasuraReachable,
  // });
  // // if (!isDBReachable || !isHasuraReachable) {
  // logger.info('global-setup: Launching docker-compose');
  // ️️️// ✅ Best Practice: Start the infrastructure within a test hook - No failures occur because the DB is down
  // try {
  // await dockerCompose.upAll({
  //   cwd: path.join(__dirname),
  //   log: true,
  //   composeOptions: [['--env-file', '.env.test.jest']],
  // });
  // } catch (e) {
  //   // bypass error of recreation
  //   logger.error(e);
  // } finally {
  // await for hasura to be ready
  const hasuraUrl = `http://localhost:9696/healthz`;
  logger.info(`Waiting for hasura to be ready at ${hasuraUrl}`);
  let hasuraReady = false;
  while (!hasuraReady) {
    try {
      const res = await fetch(hasuraUrl);
      logger.debug(`Hasura status: ${res.status}`);
      if (res.status === 200) {
        hasuraReady = true;
        if (res.statusText === 'OK') {
          logger.info('Hasura is ready');
        } else {
          logger.error(`Hasura healthz: ${res.statusText}`);
        }
      }
    } catch (e) {
      logger.debug(`Hasura failure: ${e}`);
      // wait 3sec for hasura to be ready
      await new Promise((resolve) => setTimeout(resolve, 3000));
      retriesLeft -= 1;
      if (!retriesLeft) {
        throw new Error('Hasura is not reachable');
      }
    }
  }
  // }
  // }

  // // ️️️✅ Best Practice: Use npm script for data seeding and migrations
  // execSync('npm run db:migrate');
  // // ✅ Best Practice: Seed only metadata and not test record, read "Dealing with data" section for further information
  // execSync('npm run db:seed');
  // }

  // 👍🏼 We're ready
  console.timeEnd('global-setup');
};
