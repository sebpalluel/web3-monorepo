import { hasuraRequest, hasuraClaims } from "lib/hasuraAdapter"

import { getToken } from "next-auth/jwt"

import { getSession } from "next-auth/react"

// This is an example of how to read a JSON Web Token from an API route
import type { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.NEXTAUTH_SECRET

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  const token = await getToken({ req, secret })
  if (session && token) {
    const htoken = await hasuraClaims(token.sub, session?.user?.email);
    const data = await hasuraRequest({
        token: htoken,
        query: `
            query getUser($id: String!){
                users(where: {id: {_eq: $id}}) {
                    id
                    email
                }
            }
       `,
        variables: { 
            id: token.sub
        },
    });
    res.send({ me: data?.users[0] })
  } else {
    res.send({ error: 'You must be sign in to view the protected content on this page.' })
  }
}