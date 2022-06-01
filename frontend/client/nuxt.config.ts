import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    buildModules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    modules: [
        // https://go.nuxtjs.dev/axios
        ['@nuxtjs/axios', { proxyHeaders: false }] // TODO Set to true when fixed, causing issue with CORS headers policy in django
    ],
    plugins: ['~/plugins/axios'],
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        credentials: false,
        headers: {
            common: {
                Accept: 'application/json'
            }
        },
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://localhost:8000/api/',
        browserBaseURL: 'http://localhost:3000'
    },
    // https://nuxtjs.org/docs/features/loading/
    loading: {
        color: 'blue',
        height: '5px'
    },
    css: ['vuetify/styles'],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vuetify', '@apollo/client', 'ts-invariant/process']
    },
    vite: {
        define: {
            'process.env.DEBUG': process.env.NODE_ENV == 'development',
            'import.meta.vitest': process.env.NODE_ENV == 'development'
        }
    },
    // for SSR in prod
    bridge: {
        nitro: process.env.NODE_ENV !== 'production',
        autoImports: true
    },
    vue: {
        config: {
            productionTip: false,
            devtools: process.env.NODE_ENV == 'development'
        }
    }
})
