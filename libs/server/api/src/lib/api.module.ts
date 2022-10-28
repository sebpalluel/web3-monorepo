import { Module, Global } from '@nestjs/common';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

export const config = {
  imports: [HttpModule],
  providers: [ApiService, ConfigService],
  exports: [ApiService],
};

@Global()
@Module(config)
export class ApiModule {}
