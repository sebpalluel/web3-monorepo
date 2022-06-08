import { setup } from '@nuxt/test-utils-edge'
import { fileURLToPath } from 'node:url'
import { useUserStore } from './user'
import { createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import Login from '@/pages/auth/index.vue'

describe('User store', async () => {
    // await setup({
    //     rootDir: fileURLToPath(new URL('..', import.meta.url)),
    //     server: true,
    //     browser: true
    // })
    afterEach(() => {
        vi.restoreAllMocks()
    })
    test('login', async () => {
        const formData = {
            email: '',
            password: ''
        }

        const wrapper = mount(Login, {})
        const button = wrapper.find('button')
        await button.trigger('click')
        console.log({ wrapper })
        // const store = useUserStore(createPinia())
        // console.log({ store })
        // expect(store.login).toBeDefined()
        // const mockApi = vi.fn().mockImplementation('this.$nuxt.$axios.post')
        // await store.login()
        // expect(mockApi).toHaveBeenCalled()

        // const res = await $nuxt.$axios.post('/token/', formData)
    })
})
