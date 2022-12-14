import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';
import { isJestRunning } from '@utils';

@Injectable()
export class SentryMiddleware implements NestMiddleware {
  constructor(
    @InjectSentry() private readonly sentry: SentryService,
    private config: ConfigService
  ) {}
  use(req: Request, res: Response, next: NextFunction): void {
    if (isJestRunning() || !this.config.get('SENTRY_DSN')) next();
    else {
      const transaction = this.sentry.instance().startTransaction({
        op: 'request',
        name: req.url,
      });
      this.sentry
        .instance()
        .getCurrentHub()
        .configureScope((scope) => {
          scope.addEventProcessor((event) => {
            event.request = {
              method: req.method,
              url: req.baseUrl,
            };
            return event;
          });
        });

      this.sentry.instance().configureScope((scope) => {
        scope.setSpan(transaction);
      });

      req.on('close', () => {
        transaction.setHttpStatus(res.statusCode);
        transaction.finish();
      });

      next();
    }
  }
}
