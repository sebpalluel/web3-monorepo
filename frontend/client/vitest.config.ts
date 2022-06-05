import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        deps: {
            inline: [/@nuxt\/test-utils-edge/]
            // inline: ['@nuxt/test-utils-edge']
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
            '~': path.resolve(__dirname, './'),
            '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts')
        }
    }
})
