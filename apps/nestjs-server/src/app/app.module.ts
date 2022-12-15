import { HttpException, MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { SentryInterceptor } from '@ntegral/nestjs-sentry';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { Integrations as SentryIntegrations } from '@sentry/node';

import { PrismaModule } from '@server/prisma';
import { ApiModule } from '@server/api';
import { BalancesService } from '../balances/balances.service';
import { BalancesController } from '../balances/balances.controller';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
// import { WalletController, WalletService } from '@server/wallet';
import { AlchemyService } from '@server/alchemy';

import { AppConfigModule } from './app-config.module';
import { TaskService } from '../task/task.service';
import { HealthModule } from '../commons/health/health.module';
import { WalletService } from '../wallet/wallet.service';
import { WalletProviders } from '../wallet/wallet.module';
import { AppController } from './app.controller';
import { RedisCacheModule } from '../commons/redis-cache/redis-cache.module';
import { SentryMiddleware } from '../commons/sentry/sentry.middleware';

@Module({
  imports: [
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        dsn: config.get('SENTRY_DSN'),
        debug: false,
        environment: process.env.NODE_ENV,
        release: null, // must create a release in sentry.io dashboard
        logLevels: ['error', 'warn', 'debug'],
        enabled: !!config.get('SENTRY_DSN'),
        integrations: [new SentryIntegrations.Http({ tracing: true })],
        tracesSampleRate: 1.0,
      }),
      inject: [ConfigService],
    }),
    RedisCacheModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    AppConfigModule,
    PrismaModule,
    ApiModule,
    HealthModule,
  ],
  controllers: [BalancesController, AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: () =>
        new SentryInterceptor({
          filters: [
            {
              type: HttpException,
              filter: (exception: HttpException) => 500 > exception.getStatus(), // Only report 500 errors
            },
          ],
        }),
    },
    CryptocurrenciesService,
    TaskService,
    BalancesService,
    WalletService,
    ...WalletProviders,
    AlchemyService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(SentryMiddleware).forRoutes('*');
  }
}
