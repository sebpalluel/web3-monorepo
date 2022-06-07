import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
// import AuthService from '@/services/auth'

export interface User {
    id: string
    email: string
    name: string
    isAdmin: boolean
}

export interface FormLogin {
    email: string
    password: string
}

export interface FormRegister extends FormLogin {
    password_confirmation: string
}

export interface FormResetPassword {
    old_password: string
    new_password: string
    new_password_confirmation: string
}

function clearToken() {
    localStorage.removeItem('token')
    localStorage.removeItem('token_expiry')
    localStorage.removeItem('user_email')
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_role')
    Cookies.set('refresh', '', { sameSite: 'strict' })
}

function setToken(token: string) {
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
    const tokenDecoded = jwt_decode<MyToken>(token)
    // Load up new token > go home / we'll stash role and user name for display reasons (permissions are handled Hasura/Django-side)
    // Stashing expiry for token expiry to know when to re-run the token refresh
    localStorage.setItem('token', token)
    localStorage.setItem('token_expiry', tokenDecoded.exp)
    localStorage.setItem('user_email', tokenDecoded.user_email)
    localStorage.setItem(
        'user_id',
        tokenDecoded['https://hasura.io/jwt/claims']['x-hasura-user-id']
    )
    localStorage.setItem(
        'user_role',
        tokenDecoded['https://hasura.io/jwt/claims']['x-hasura-default-role']
    )
}

export const refreshToken = async function ($axios: any): Promise<string> {
    let accessToken = ''
    try {
        const refresh = Cookies.get('refresh')
        const accessToken = localStorage.getItem('token')
        const accessExpiry = localStorage.getItem('token_expiry')
        const currentTime = Date.now()
        const currentTimeTrim = (currentTime - (currentTime % 1000)) / 1000
        console.log({ currentTimeTrim, accessExpiry })

        // Token need to be refreshed
        if (
            (accessToken && currentTimeTrim >= accessExpiry) ||
            (!accessToken && refresh)
        ) {
            const res = await $axios.post('/token/refresh/', {
                refresh
            })
            setToken(res.data.access)
        }
        // Refresh token expiry, need to re-login
        else if (!refresh) {
            clearToken()
            navigateTo('/')
        } else {
            // No need to refresh token
        }
    } catch (e) {
        clearToken()
        throw e;
    } finally {
        return accessToken
    }
}

export const useUserStore = defineStore({
    id: 'user-store',
    state: () => {
        let user: User = {
            id: '',
            name: '',
            email: '',
            isAdmin: false
        }
        return user
    },
    actions: {
        async login(formData: FormLogin) {
            try {
                //TODO set back origin formData when based on email
                const res = await this.$nuxt.$axios.post('/token/', {
                    username: formData.email,
                    password: formData.password
                })

                console.log({ res })
                setToken(res.data.access)
            } catch (e) {
                console.error({ e })
            }
        },
        async register(formData: FormRegister) {
            try {
                const res = await this.$nuxt.$axios.post(
                    '/user/register/',
                    formData
                )
                setToken(res.data.access)
            } catch (e) {
                console.error({ e })
            }
        },
        async logout() {
            try {
                clearToken()
                navigateTo('/')
            } catch (e) {
                console.error({ e })
            }
        },
        async resetPassword(email: string) {
            try {
                await this.$nuxt.$axios.post('/user/reset_password/', {
                    email
                })
                // TODO move res message to backend
                //         if (request.ok) {
                //     successMessage = 'We\'ve sent you an email to confirm your account. Selecting the link from your email will allow you to reset the password to your account.';
                // } else {
                //     errorMessage = 'It looks like there was a problem. This could be because that email isn\'t associated with any accounts in our system. Please try again.';
                // }
            } catch (e) {
                console.error({ e })
            }
        },
        async confirmResetPassword(formData: FormResetPassword) {
            try {
                await this.$nuxt.$axios.post('/user/change_password/', formData)
                // TODO move res message to backend
                //     if (request.ok) {
                //     successMessage = 'Your password has been reset. You can now login with your new password.';
                // } else {
                //     errorMessage = 'It looks like there was a problem. This could be because that email isn\'t associated with any accounts in our system. Please try again.';
                // }
            } catch (e) {
                console.error({ e })
            }
        },
        async refreshToken() {
            try {
                await refreshToken(this.$nuxt.$axios)
            } catch (e) {
                console.error({ e })
            }
        }
    },
    getters: {}
})
