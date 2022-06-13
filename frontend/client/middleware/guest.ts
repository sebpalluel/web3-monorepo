import { getJwtToken } from '@/utils/auth'

export default function ({store, redirect }) {
    if (store.state.user.isAuthenticated) {
        return redirect('/')
    }
}
