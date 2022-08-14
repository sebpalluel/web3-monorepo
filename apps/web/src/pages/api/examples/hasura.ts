import { useGetUserQuery } from '@governance/gql-user';
import { getSession } from 'next-auth/react';

// This is an example of how to read a JSON Web Token from an API route
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const id = session?.user?.id;
  if (id) {
    const { data } = useGetUserQuery({ id });
    res.send({ me: data });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
