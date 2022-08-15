/* eslint-disable @typescript-eslint/no-var-requires */
const isPortReachable = require('is-port-reachable');
const path = require('path');
const dockerCompose = require('docker-compose');
// const { execSync } = require('child_process');
const { logger } = require('../../libs/logger/src');
const fetch = require('node-fetch');

module.exports = async () => {
  console.time('global-setup');

  // setup env variables
  require('dotenv').config({ path: './tools/test/.env.test' });

  // ️️️✅ Best Practice: Speed up during development, if already live then do nothing
  const isDBReachable = await isPortReachable(process.env.POSTGRES_PORT);
  const isHasuraReachable = await isPortReachable(process.env.HASURA_GRAPHQL_SERVER_PORT);
  if (!isDBReachable || !isHasuraReachable) {
    // ️️️✅ Best Practice: Start the infrastructure within a test hook - No failures occur because the DB is down
    await dockerCompose.upAll({
      cwd: path.join(__dirname),
      log: true,
    });

    // await for hasura to be ready
    const hasuraUrl = `http://localhost:${process.env.HASURA_GRAPHQL_SERVER_PORT}/healthz`;
    logger.info(`Waiting for hasura to be ready at ${hasuraUrl}`);
    let hasuraReady = false;
    while (!hasuraReady) {
      try {
        const res = await fetch(hasuraUrl);
        if (res.status === 200) {
          hasuraReady = true;
          if (res.statusText === 'OK') {
            logger.info('Hasura is ready');
          } else logger.error(`Hasura healthz: ${res.statusText}`);
        }
      } catch (e) {
        // wait 5sec for hasura to be ready
        await new Promise((r) => setTimeout(() => r(), 5000));
      }
    }
  }

  // // ️️️✅ Best Practice: Use npm script for data seeding and migrations
  // execSync('npm run db:migrate');
  // // ✅ Best Practice: Seed only metadata and not test record, read "Dealing with data" section for further information
  // execSync('npm run db:seed');
  // }

  // 👍🏼 We're ready
  console.timeEnd('global-setup');
};
