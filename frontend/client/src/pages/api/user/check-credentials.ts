import type { NextApiRequest, NextApiResponse } from 'next'
import { hasuraRequest } from 'lib/hasuraAdapter'
import { GetMyUserByEmailDocument } from 'generated/user-gql'
import {
    withMiddlewares,
    withErrorHandling,
    withMethodsGuard
} from 'lib/middlewares'
import sha256 from 'crypto-js/sha256'
import { logger } from 'lib/logger'
import { omit } from 'lodash'
import { ApiError } from 'next/dist/server/api-utils'

const hashPassword = (password: string) => {
    return sha256(password).toString()
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    logger.debug({ body: req.body })
    if (!req.body) {
        throw new ApiError(400, 'Invalid credentials')
    }
    const data = await hasuraRequest({
        query: GetMyUserByEmailDocument,
        variables: { email: req.body.username },
        admin: true
    })
    const user = data?.users[0]
    if (user && user.password === hashPassword(req.body.password)) {
        res.json(omit(user, 'password'))
    } else {
        throw new ApiError(400, 'Invalid credentials')
    }
}

export default async function checkCredentials(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return withErrorHandling(
        req,
        res
    )(withMiddlewares(withMethodsGuard(['POST']), handler))
}
