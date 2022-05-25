import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    modules: [
        // https://go.nuxtjs.dev/axios
        ['@nuxtjs/axios', { proxyHeaders: false }]
    ],
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },
    publicRuntimeConfig: {
        axios: {
            baseURL: 'http://localhost:8000/api/'
        }
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
            'process.env.DEBUG': false
        }
    }
})
