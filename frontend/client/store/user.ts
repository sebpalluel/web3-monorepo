import { defineStore } from 'pinia'
// import AuthService from '@/services/auth'

export interface User {
    id: string
    email: string
    name: string
    isAdmin: boolean
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
        async login(formData) {
            try {
                console.log({ formData })
                const res = await this.$nuxt.$axios.$post('/token/', formData)
                console.log({ res })
                //     if (signUpUser.success === true){
                //         localStorage.setItem("token", signUpUser.response.tokens.access);
                //         const tokenDecoded = jwt_decode(signUpUser.response.tokens.access);
                //         // We're only storing JWT items for ease of use > the backend will validate all items in queries
                //         localStorage.setItem("token_expiry", tokenDecoded.exp);
                //         localStorage.setItem("user_name", tokenDecoded.user_name);
                //         localStorage.setItem("user_email", tokenDecoded.user_email);
                //         localStorage.setItem("user_role", tokenDecoded["https://hasura.io/jwt/claims"]["x-hasura-default-role"]);
                //         Cookies.set('refresh', signUpUser.response.tokens.refresh, { sameSite: 'strict' });
                //         location.replace("/");
                // } else {
                //     errorMessage = signUpUser.response;
                // }
            } catch (e) {
                console.error({ e })
            }
        }
    },
    getters: {}
})
