import { setup } from '@nuxt/test-utils-edge'
import { useUserStore } from './user'
import { createPinia } from 'pinia'

describe('User store', async () => {
    await setup({})

    test('login', async () => {
        const formData = {
            email: '',
            password: ''
        }
        const store = useUserStore(createPinia())
        console.log({ store })

        // const res = await $nuxt.$axios.post('/token/', formData)
    })
})
