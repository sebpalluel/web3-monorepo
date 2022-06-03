import { setup } from '@nuxt/test-utils-edge'
import { fileURLToPath } from 'node:url'
import { useUserStore } from './user'
import { createPinia } from 'pinia'

describe('User store', async () => {
    await setup({
        rootDir: fileURLToPath(new URL('..', import.meta.url)),
        server: true
    })
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
