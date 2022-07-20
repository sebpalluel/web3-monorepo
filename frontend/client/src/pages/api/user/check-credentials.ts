import type { NextApiRequest, NextApiResponse } from 'next'
import { hasuraRequest } from 'lib/hasuraAdapter'
import { GetMyUserByEmailDocument } from 'generated/user-gql'
import sha256 from 'crypto-js/sha256'
import { logger } from 'lib/logger'
import { omit } from 'lodash'

const hashPassword = (password: string) => {
    return sha256(password).toString()
}

async function handlePOST(res: any, req: any) {
    const data = await hasuraRequest({
        query: GetMyUserByEmailDocument,
        variables: { email: req.body.username },
        admin: true
    })
    const user = data?.users[0]

    //     await prisma.user.findUnique({
    //         where: { email: req.body.username },
    //         select: {
    //             id: true,
    //             name: true,
    //             email: true,
    //             image: true,
    //             password: true
    //         }
    //     })
    if (user && user.password === hashPassword(req.body.password)) {
        logger.debug('password correct')
        res.json(omit(user, 'password'))
    } else {
        logger.debug('incorrect credentials')
        res.status(400).end('Invalid credentials')
    }
}

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        await handlePOST(res, req)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}
