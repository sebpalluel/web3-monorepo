// This is an example of to protect an API route
import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';
// import { getToken } from 'next-auth/jwt';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    // const secret = process.env.NEXTAUTH_SECRET;

    // const token = await getToken({
    //   req,
    //   secret,
    //   // Raw gives the un-decoded JWT
    //   raw: true,
    // });

    // const query = gql`
    //   query GetUserName($id: uuid!) {
    //     users_by_pk(id: $id) {
    //       name
    //     }
    //   }
    // `;
    const user = { name: 'dummy' };
    // const { users_by_pk: user } = await request(
    //   process.env.NEXT_PUBLIC_HASURA_URL!,
    //   query,
    //   { id: session.user?.id },
    //   { authorization: `Bearer ${token}` }
    // );
    res.send({
      content: `This is protected content. Your name is ${user.name}`,
    });
  } else {
    res.send({
      error: 'You must be signed in to view the protected content on this page.',
    });
  }
};
