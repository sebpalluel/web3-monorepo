import { NextApiRequest, NextApiResponse } from 'next';
import type { Maybe } from '@utils';

type Middleware = (req: NextApiRequest, res: NextApiResponse) => unknown;

// https://giancarlobuomprisco.com/next/middleware-pipes-nextjs
/**
 * @name withMiddleware
 * @description combine multiple middleware before handling your API endpoint
 * @param middlewares
 */
export function withMiddlewares(...middlewares: Middleware[]) {
  return async function withMiddlewareHandler(req: NextApiRequest, res: NextApiResponse) {
    async function evaluateHandler(
      middleware: Middleware,
      innerMiddleware?: Maybe<Middleware>
    ) {
      // If the property headersSent is true
      // it means that a previous middleware has already called res.send() or res.end().
      // Therefore, we skip as it throws an error.
      if (res.headersSent) {
        return;
      }
      // We iterate over the functions and execute them one by one using the original req and res parameters,
      // unless one of the functions returns an handler:
      // in which case, the handler gets executed as the callback to the previous middleware,
      // and gets removed from the middlewares list,
      // because we already executed it.
      if (typeof middleware === 'function') {
        const handler = await middleware(req, res);

        if (typeof handler === 'function') {
          if (innerMiddleware) {
            await handler(innerMiddleware);

            const index = middlewares.indexOf(innerMiddleware);

            // remove inner middleware
            if (index >= 0) {
              middlewares.splice(index, 1);
            }
          } else {
            await handler();
          }
        }
      }
    }

    for (let index = 0; index < middlewares.length; index++) {
      const middleware = middlewares[index];
      const nextMiddleware = middlewares[index + 1];

      // eslint-disable-next-line no-await-in-loop
      await evaluateHandler(middleware, nextMiddleware);
    }
  };
}
