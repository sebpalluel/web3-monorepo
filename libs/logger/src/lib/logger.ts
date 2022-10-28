import log from 'loglevel';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prefix = require('loglevel-plugin-prefix');

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
};

type level = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

if (process.env.NODE_ENV == 'development') {
  log.setLevel('debug');
}

prefix.reg(log);

prefix.apply(log, {
  format(level: level, name: string, timestamp: string) {
    const color = colors[level];
    // eslint-disable-next-line sonarjs/no-nested-template-literals
    return `${chalk.gray(`[${timestamp}]`)} ${color(level)} ${chalk.green(`${name}:`)}`;
  },
});

export { log as logger };
