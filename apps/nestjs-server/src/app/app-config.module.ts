import Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { AppConfigService } from './app-config.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: Joi.object({
        NEST_ENV: Joi.string().valid('dev', 'stage', 'test', 'prod').default('dev'),
        NEST_PORT: Joi.number().default('3333'),
        NEST_HOST: Joi.string().default('127.0.0.1'),
        SENTRY_DSN: Joi.string().uri().default(''),
        HASURA_PROJECT_ENDPOINT: Joi.string().uri().default(''),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
