import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as Sentry from '@sentry/node';
const errorsToTrackInSentry = [InternalServerErrorException, TypeError];
const enableSentry = (err) => {
  const sendToSentry = errorsToTrackInSentry.some(
    (errorType) => err instanceof errorType
  );
  if (sendToSentry) Sentry.captureException(err);
  return throwError(() => err);
};
@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(catchError(enableSentry));
  }
}
