import { useUserStore } from '@/store/user'

export default function ({ $pinia }) {
    const user = useUserStore($pinia)
    console.log({ isAuthenticated: user.isAuthenticated })
    if (!user.isAuthenticated) {
        // return navigateTo('/auth')
    }
}
