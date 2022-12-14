import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
  env: process.env.NEST_ENV,
  port: process.env.NEST_PORT,
  host: process.env.NEST_HOST,
  sentryDsn: process.env.SENTRY_DSN,
  hasuraProjectEndpoint: process.env.HASURA_PROJECT_ENDPOINT,
}));
