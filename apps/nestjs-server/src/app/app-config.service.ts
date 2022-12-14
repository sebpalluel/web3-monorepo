import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}
  get env(): string {
    return this.configService.get<string>('app.env');
  }
  get port(): number {
    return this.configService.get<number>('app.port');
  }
  get host(): string {
    return this.configService.get<string>('app.host');
  }
  get sentryDsn(): string {
    return this.configService.get<string>('app.sentryDsn');
  }
  get hasuraProjectEndpoint(): string {
    return this.configService.get<string>('app.hasuraProjectEndpoint');
  }
}
