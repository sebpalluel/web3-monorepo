import type { NextApiRequest, NextApiResponse } from 'next'
import HasuraAdapter from 'lib/hasuraAdapter'
import sha256 from 'crypto-js/sha256'
import { logger } from 'lib/logger'

const hashPassword = (password: string) => {
    return sha256(password).toString()
}
// POST /api/user
async function handlePOST(res: any, req: any) {
    const hasura = HasuraAdapter()
    logger.debug('creating user', {
        ...req.body,
        password: hashPassword(req.body.password)
    })
    const user = await hasura.createUser({
        ...req.body,
        password: hashPassword(req.body.password)
    })
    res.json(user)
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
