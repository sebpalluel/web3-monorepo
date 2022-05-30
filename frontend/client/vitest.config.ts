import { defineConfig } from 'vitest/config'
export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        deps: {
            inline: ['@vue', '@nuxt/test-utils-edge', '@testing-library/vue']
        }
    }
})
