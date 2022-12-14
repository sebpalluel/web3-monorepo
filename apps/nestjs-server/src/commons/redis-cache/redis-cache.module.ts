import { Global, Module, CACHE_MANAGER } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

// https://github.com/dabroek/node-cache-manager-redis-store/issues/40#issuecomment-1318528768

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: CACHE_MANAGER,
      useFactory: async (configService: ConfigService) =>
        await redisStore({
          url: configService.get('REDIS_URL'),
          ttl: 60 * 60 * 24 * 7, // 24 hours * 7 days = 1 week
        }),
      inject: [ConfigService],
    },
  ],
  exports: [CACHE_MANAGER],
})
export class RedisCacheModule {}
