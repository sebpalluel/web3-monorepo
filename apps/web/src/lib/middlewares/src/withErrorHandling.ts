import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { ApiError } from 'next/dist/server/api-utils';
import { StatusCodes } from 'http-status-codes';
import { logger } from '@logger';

// https://giancarlobuomprisco.com/next/handling-api-errors-in-nextjs

function getExceptionStatus(exception: unknown) {
  return exception instanceof ApiError
    ? exception.statusCode
    : StatusCodes.INTERNAL_SERVER_ERROR;
}

function getExceptionMessage(exception: unknown) {
  return isError(exception) ? exception.message : `Internal Server Error`;
}

function getExceptionStack(exception: unknown) {
  return isError(exception) ? exception.stack : undefined;
}

function isError(exception: unknown): exception is Error {
  return exception instanceof Error;
}

export function withErrorHandling(req: NextApiRequest, res: NextApiResponse) {
  return async function (handler: NextApiHandler) {
    try {
      await handler(req, res);
    } catch (exception) {
      const { url, headers } = req;

      const statusCode = getExceptionStatus(exception);
      const message = getExceptionMessage(exception);
      const stack = getExceptionStack(exception);

      // // NB: tweak this according to how you retrieve your user in your requests
      // const user = req.user
      // const userId = user?.uid ?? 'Not Authenticated'

      const referer = headers['referer'];
      const userAgent = headers['user-agent'];

      // this is the context being logged
      const requestContext = {
        url,
        // userId,
        referer,
        userAgent,
        message,
      };

      // edit the message according to your preferences
      const exceptionMessage = `An unhandled exception occurred.`;
      // report only if it's not an handled exception
      if (
        ![StatusCodes.BAD_REQUEST, StatusCodes.FORBIDDEN, StatusCodes.NOT_FOUND].includes(
          statusCode
        )
      ) {
        logger.error(requestContext, exceptionMessage);

        // if we are able to retrieve the stack, we add it to the debugging logs
        if (stack) {
          logger.debug(stack);
        }
      }

      const timestamp = new Date().toISOString();

      // return just enough information without leaking any data
      const responseBody = {
        statusCode,
        timestamp,
        message,
        path: req.url,
      };

      return res.status(statusCode).send(responseBody);
    }
  };
}
