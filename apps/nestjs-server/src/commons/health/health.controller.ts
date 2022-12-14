import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { Transport, RedisOptions } from '@nestjs/microservices';
import { parseURL } from 'ioredis/built/utils';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private config: ConfigService,
    private microservice: MicroserviceHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    const redisOption = parseURL(this.config.get('REDIS_URL'));
    return this.health.check([
      async () =>
        this.microservice.pingCheck<RedisOptions>('redis', {
          transport: Transport.REDIS,
          options: {
            ...redisOption,
          },
        }),
      async () =>
        this.http.pingCheck(
          'Basic Check',
          `http://${this.config.get('NEST_HOST') || '0.0.0.0'}:${
            this.config.get('NEST_PORT') || 3333
          }/api/`
        ),
    ]);
  }
}
