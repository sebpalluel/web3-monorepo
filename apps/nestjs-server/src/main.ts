/**
 *  This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as SentryTracing from '@sentry/tracing';
import { isProd } from '@utils';

import { AppModule } from './app/app.module';
import { AppConfigService } from './app/app-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfigService>(AppConfigService);
  if (isProd()) {
    if (appConfig.hasuraProjectEndpoint)
      app.enableCors({ origin: appConfig.hasuraProjectEndpoint });
    else Logger.error('HASURA_PROJECT_ENDPOINT is not set in your env');
    if (appConfig.sentryDsn) {
      Logger.log('SENTRY_DSN is set in your env, all error will be reported to Sentry');
      SentryTracing.addExtensionMethods();
    } else Logger.error('SENTRY_DSN is not set in your env');
  }
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(appConfig.port, appConfig.host);
  Logger.log(
    `🚀 Nestjs Server Application is running on: http://${appConfig.host}:${appConfig.port}/${globalPrefix}`,
    isProd() ? `Accepting requests from: ${appConfig.hasuraProjectEndpoint}` : ''
  );
}

bootstrap();
