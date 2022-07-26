import { hasuraRequest } from 'lib/hasuraAdapter'

import { getToken } from 'next-auth/jwt'

import { getSession } from 'next-auth/react'

// This is an example of how to read a JSON Web Token from an API route
import type { NextApiRequest, NextApiResponse } from 'next'
import { logger } from 'lib/logger'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    const token = await getToken({ req, raw: true })
    console.log({ token })
    logger.debug('hasura test api: ', session, token)

    if (session && token) {
        console.log({ token })

        const data = await hasuraRequest({
            token,
            query: `
            query getUser($id: String!){
                users(where: {id: {_eq: $id}}) {
                    id
                    email
              }
            }
       `,
            variables: {
                id: session?.user?.id
            }
        })
        res.send({ me: data?.users[0] })
    } else {
        res.send({
            error: 'You must be sign in to view the protected content on this page.'
        })
    }
}
