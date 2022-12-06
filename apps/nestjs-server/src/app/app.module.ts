import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// https://blog.logrocket.com/add-redis-cache-nestjs-app/
import { redisStore } from 'cache-manager-redis-store';
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
import { RedisCacheModule } from '../redis-cache/redis-cache.module';

export const REDIS_CACHE = 'REDIS_CACHE';

@Module({
  imports: [
    isProd()
      ? RedisCacheModule
      : CacheModule.register({
          ttl: 0,
          isGlobal: true,
        }),
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
