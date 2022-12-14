import { applyDecorators } from '@nestjs/common';
import { Cron as NestCron, CronOptions } from '@nestjs/schedule';

import { SentryOverwatchAsync } from '../sentry/sentry-overwatch.decorator';

export const Cron = (cronTime: string | Date, options?: CronOptions) => {
  // Ordering is important here, too!
  // The order these must appear in seems to be the reverse of
  // what you'd normally expect when decorating functions
  // declaratively. Likely because the order you specify here
  // is the order the decorators will be applied to the
  // function in.
  return applyDecorators(SentryOverwatchAsync(), NestCron(cronTime, options));
};
