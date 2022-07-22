import type { NextApiRequest, NextApiResponse } from 'next'
import {
    withMiddlewares,
    withErrorHandling,
    withMethodsGuard
} from 'lib/middlewares'
import HasuraAdapter, { hasuraRequest } from 'lib/hasuraAdapter'
import { GetUsersAndAccountByEmailDocument } from 'generated/admin-gql'
import sha256 from 'crypto-js/sha256'
import { logger } from 'lib/logger'
import { ApiError } from 'next/dist/server/api-utils'

const hashPassword = (password: string) => {
    return sha256(password).toString()
}
// POST /api/user
async function handler(req: NextApiRequest, res: NextApiResponse) {
    const hasura = HasuraAdapter()
    const data = await hasuraRequest({
        query: GetUsersAndAccountByEmailDocument,
        variables: { email: req.body.email },
        admin: true
    })
    const existingUser = data?.users[0]
    if (existingUser) {
        let errorMessage = `User with email ${req.body.email} already exists`
        if (existingUser.accounts.length)
            errorMessage += `. Please login using the ${existingUser.accounts[0].provider} provider`
        else errorMessage += '. Please login with this email and your password'
        throw new ApiError(400, errorMessage)
    } else {
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
}

export default function create(req: NextApiRequest, res: NextApiResponse) {
    return withErrorHandling(
        req,
        res
    )(withMiddlewares(withMethodsGuard(['POST']), handler))
}
