import { defineConfig } from 'vitest/config'
export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        deps: {
            inline: [
            '@nuxt/test-utils-edge', '@testing-library/vue']
        }
    }
})
