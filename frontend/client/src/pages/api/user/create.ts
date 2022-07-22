import type { NextApiRequest, NextApiResponse } from 'next'
import {
    withMiddlewares,
    withErrorHandling,
    withMethodsGuard
} from 'lib/middlewares'
import { hasuraRequest } from 'lib/hasuraAdapter'
import {
    GetUsersAndAccountByEmailDocument,
    CreateUserWithCredentialsDocument
} from 'generated/admin-gql'
import cryptojs from 'crypto-js'
import { randomBytes } from 'crypto'
import { logger } from 'lib/logger'
import { ApiError } from 'next/dist/server/api-utils'
import type { Password } from 'lib/types/crypto'

// https://cryptosense.com/blog/parameter-choice-for-pbkdf2
const hashPasswordWithSalt = (password: string): Password => {
    // const salt = cryptojs.randomBytes(128).toString('base64')
    let salt = cryptojs.lib.WordArray.random(128 / 8)
    salt = salt.toString(cryptojs.enc.Base64)
    const iterations =
        parseInt(process.env.PBKDF2_ITERATIONS as string) || 10000
    var key512Bits = cryptojs.PBKDF2(password, salt, {
        keySize: parseInt(process.env.PBKDF2_KEY_SIZE as string) || 512 / 32,
        iterations,
        hasher: cryptojs.algo.SHA256
    })
    return {
        hash: key512Bits.toString(cryptojs.enc.Base64),
        salt,
        iterations
    }
}
// POST /api/user
async function handler(req: NextApiRequest, res: NextApiResponse) {
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
        let { password: secret, ...user } = req.body
        const password = hashPasswordWithSalt(secret)
        const id = randomBytes(32).toString('hex')
        user = { ...user, id }
        logger.debug('creating user', {
            user,
            password
        })
        const data = await hasuraRequest({
            query: CreateUserWithCredentialsDocument,
            variables: { user, password: { ...password, userId: id } },
            admin: true
        })
        logger.debug({ data: JSON.parse(JSON.stringify(data)) })
        const createdUser = data?.insert_users_one
        logger.debug('created user', createdUser)
        res.json(createdUser)
    }
}

export default function create(req: NextApiRequest, res: NextApiResponse) {
    return withErrorHandling(
        req,
        res
    )(withMiddlewares(withMethodsGuard(['POST']), handler))
}
