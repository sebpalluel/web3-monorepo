import type { NextApiRequest, NextApiResponse } from 'next'
import { hasuraRequest } from 'lib/hasuraAdapter'
import { GetMyUserAndPasswordByEmailDocument } from 'generated/user-gql'
import {
    withMiddlewares,
    withErrorHandling,
    withMethodsGuard,
    withSession
} from 'lib/middlewares'
import { logger } from 'lib/logger'
import { ApiError } from 'next/dist/server/api-utils'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    logger.debug({ body: req.body, res })
    if (!req.body) {
        throw new ApiError(400, 'Invalid credentials')
    }
    const data = await hasuraRequest({
        query: GetMyUserAndPasswordByEmailDocument,
        variables: { email: req.body.username },
        admin: true
    })
    const { passwords, ...user } = data?.users[0]
    const lastPassword = passwords[passwords.length - 1]
    logger.debug({ user, passwords })
    // if (isPasswordCorrect(req.body.password, lastPassword)) {
    // on success, if attempt > 0, update with attempt to 0
    res.json(user)
    // } else {
    //     // update with attempt+1
    //     // if attempt > process.env.PSWD_MAX_ATTEMPTS, block user and ask to reset password
    //     throw new ApiError(400, 'Invalid credentials')
    // }
}

export default async function checkCredentials(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return withErrorHandling(
        req,
        res
    )(withMiddlewares(withMethodsGuard(['GET']), withSession, handler))
}
