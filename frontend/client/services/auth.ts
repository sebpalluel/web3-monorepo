export class AuthService {
    constructor({ $axios }) {
        this.$axios = $axios
    }
    login(data) {
        return this.$axios.request('post', '/login', data)
    }
}
