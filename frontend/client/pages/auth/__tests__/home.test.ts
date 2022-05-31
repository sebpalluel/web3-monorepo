import { fileURLToPath } from 'node:url'
// import { mount, $fetch, isDev } from '@nuxt/test-utils-edge'
import { render, screen, fireEvent } from '@testing-library/vue'

import Component from './index.vue'

describe('Login page', async () => {
    it("User can enter it's email and password to login", async () => {
        const wrapper = render(Component)
        const email = 'alpha_admin@test.io'
        const view = await screen.getByLabelText('Email')
        console.log({view})
        // await wrapper.get('#email').setValue('alpha_admin@test.io')
        // expect(wrapper.get('#email').text()).toBe(email)
        // const usernameInput = getByLabelText(/email/i)
    })
})
