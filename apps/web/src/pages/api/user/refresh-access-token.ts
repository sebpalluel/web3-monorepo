import type { NextApiRequest, NextApiResponse } from 'next';
import { adminSdk } from '@client/gql/admin';
import {
  withMiddlewares,
  withErrorHandling,
  withMethodsGuard,
  withSession,
} from '../../../lib/middlewares';
import { logger } from '@logger';
import { ApiError } from 'next/dist/server/api-utils';

// TODO: implement refesh access token for credentials
async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({});
}

export default async function refreshAccessToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return withErrorHandling(
    req,
    res
  )(withMiddlewares(withMethodsGuard(['GET']), withSession, handler));
}
