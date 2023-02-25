import * as Sentry from '@sentry/node';

const SENTRY_DSN = process.env.SENTRY_AUTH_TOKEN
  ? null
  : process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  environment: process.env.NODE_ENV,
  enabled: !!SENTRY_DSN,
  dsn: SENTRY_DSN as string,
  // other options...
});
