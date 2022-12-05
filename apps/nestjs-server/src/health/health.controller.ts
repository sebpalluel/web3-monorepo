import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(
    private healthCheckService: HealthCheckService,
    private http: HttpHealthIndicator,
    private config: ConfigService
  ) {}

  @Get()
  @HealthCheck()
  checkHealth() {
    return this.healthCheckService.check([
      () =>
        this.http.pingCheck(
          'Basic Check',
          `http://${this.config.get('NEST_HOST') || '0.0.0.0'}:${
            this.config.get('NEST_PORT') || 3333
          }/api/`
        ),
    ]);
  }
}
