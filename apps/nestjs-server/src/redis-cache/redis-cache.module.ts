import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

export const REDIS_CACHE = 'REDIS_CACHE';

// https://github.com/dabroek/node-cache-manager-redis-store/issues/40#issuecomment-1318528768

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: REDIS_CACHE,
      useFactory: async (configService: ConfigService) =>
        await redisStore({
          socket: {
            host: configService.get('REDISHOST'),
            port: +configService.get('REDISPORT'),
          },
          ttl: 60 * 60 * 24 * 7, // 24 hours * 7 days = 1 week
        }),
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_CACHE],
})
export class RedisCacheModule {}
