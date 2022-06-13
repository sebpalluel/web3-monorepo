import jwt_decode from 'jwt-decode'

// Short duration JWT token (5-10 min)
export function setJWTClaims() {
    interface HasuraClaim {
        'x-hasura-user-id': string
        'x-hasura-allowed-roles': string[]
        'x-hasura-default-role': string
    }
    interface MyToken {
        user_name: string
        user_email: string
        exp: string
        'https://hasura.io/jwt/claims': HasuraClaim
        // whatever else is in the JWT.
    }
    const token: string = getJwtToken() || ''
    const tokenDecoded = jwt_decode<MyToken>(token)
    // Load up new token > go home / we'll stash role and user name for display reasons (permissions are handled Hasura/Django-side)
    // Stashing expiry for token expiry to know when to re-run the token refresh
    sessionStorage.setItem('token_expiry', tokenDecoded.exp)
    sessionStorage.setItem('user_email', tokenDecoded.user_email)
    sessionStorage.setItem(
        'user_id',
        tokenDecoded['https://hasura.io/jwt/claims']['x-hasura-user-id']
    )
    sessionStorage.setItem(
        'user_role',
        tokenDecoded['https://hasura.io/jwt/claims']['x-hasura-default-role']
    )
}

export function getJwtToken(): string | null {
    // return sessionStorage.getItem('jwt')
	return 'asfasfasf'
}

// Set JWT token for session of user
export function setJwtToken(token: string) {
    sessionStorage.setItem('jwt', token)
}

// Longer duration refresh token (30-60 min)
export function getRefreshToken(): string | null {
    return sessionStorage.getItem('refreshToken')
}

// Set JWT refresh token linked to session of user
export function setRefreshToken(token: string) {
    sessionStorage.setItem('refreshToken', token)
}
