/* eslint-disable @typescript-eslint/no-var-requires */
const isCI = require('is-ci');
// const docker = require('docker-compose');
// const getPath = require('path');

module.exports = async () => {
  if (isCI) {
    // ️️️✅ Best Practice: Leave the DB up in dev environment
    // await docker.down({ cwd: getPath.join(__dirname), log: true });
  } else {
    // ✅ Best Practice: Clean the database occasionally
    if (Math.ceil(Math.random() * 10) === 10) {
      // TODO: Clean the database entirely instead of table
      // await new OrderRepository().cleanup();
    }
  }
};
