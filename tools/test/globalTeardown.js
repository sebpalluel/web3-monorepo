/* eslint-disable @typescript-eslint/no-var-requires */
const isCI = require('is-ci');
const docker = require('docker-compose');

module.exports = async () => {
  if (isCI) {
    // ️️️✅ Best Practice: Leave the DB up in dev environment
    docker.down();
  } else {
    // ✅ Best Practice: Clean the database occasionally
    if (Math.ceil(Math.random() * 10) === 10) {
      // TODO: Clean the database entirely instead of table
      // await new OrderRepository().cleanup();
    }
  }
};
