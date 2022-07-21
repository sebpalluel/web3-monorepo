import type { NextApiRequest, NextApiResponse } from 'next'
import HasuraAdapter, { hasuraRequest } from 'lib/hasuraAdapter'
import { GetUsersAndAccountByEmailDocument } from 'generated/admin-gql'
import sha256 from 'crypto-js/sha256'
import { logger } from 'lib/logger'

const hashPassword = (password: string) => {
    return sha256(password).toString()
}
// POST /api/user
async function handlePOST(res: any, req: any) {
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
            errorMessage += `. Please login with your ${existingUser.accounts[0].provider} account`
        else errorMessage += '. Please login with this email and your password'
        res.status(400).end(errorMessage)
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
