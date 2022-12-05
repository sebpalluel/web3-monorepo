import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// https://blog.logrocket.com/add-redis-cache-nestjs-app/
import * as redisStore from 'cache-manager-redis-store';
import { ScheduleModule } from '@nestjs/schedule';

import { PrismaModule } from '@server/prisma';
import { ApiModule } from '@server/api';
import { BalancesService } from '../balances/balances.service';
import { BalancesController } from '../balances/balances.controller';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
// import { WalletController, WalletService } from '@server/wallet';
import { AlchemyService } from '@server/alchemy';

import { TaskService } from '../task/task.service';
import { HealthModule } from '../health/health.module';
import { WalletService } from '../wallet/wallet.service';
import { WalletProviders } from '../wallet/wallet.module';
import { AppController } from './app.controller';
import { isProd } from '@utils';

const cacheForDev = {
  ttl: 0,
  isGlobal: true,
};

const cacheForProd = {
  ttl: 60 * 60 * 24 * 7, // 24 hours * 7 days = 1 week
  isGlobal: true,
  store: redisStore,
  host: process.env.REDISHOST,
  port: process.env.REDISPORT,
};

@Module({
  imports: [
    CacheModule.register(isProd() ? cacheForProd : cacheForDev),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    ApiModule,
    HealthModule,
  ],
  controllers: [BalancesController, AppController],
  providers: [
    CryptocurrenciesService,
    TaskService,
    BalancesService,
    WalletService,
    ...WalletProviders,
    AlchemyService,
  ],
})
export class AppModule {}
