import { Inject } from '@nestjs/common';
import { SentryService } from '@ntegral/nestjs-sentry';

export const SentryOverwatchAsync = () => {
  const injectSentry = Inject(SentryService);

  return (target: any, _propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
    injectSentry(target, 'sentry');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const originalMethod: () => Promise<void> = propertyDescriptor.value;
    propertyDescriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        const sentry = this.sentry as SentryService;
        sentry.instance().captureException(error);
        // avoid throwing error here, otherwise the cron job will stop and app will crash
        // throw error;
      }
    };
  };
};
