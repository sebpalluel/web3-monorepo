import { unstable_getServerSession } from 'next-auth/next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '@client/next-auth/options';

export async function withSession(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
          res.status(401).json({ message: 'You must be logged in.' });
          return;
        }
        res.status(200).json({
          message: 'Success',
          session,
        });
      } catch (error: any) {
        res.status(500).json({ error: error?.message });
      }
      break;
    case 'POST':
      break;
    default:
      break;
  }
}
