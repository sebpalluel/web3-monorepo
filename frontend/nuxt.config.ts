import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/stylelint-module', '@nuxtjs/eslint-module'],
    css: ['vuetify/styles'],
    build: {
        transpile: ['vuetify', '@apollo/client', 'ts-invariant/process']
    },
    vite: {
        define: {
            'process.env.DEBUG': false
        }
    }
})
