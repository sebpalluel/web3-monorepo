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
        '@pinia/nuxt',
        '@nuxtjs/google-fonts'
    ],
    modules: [
        // https://go.nuxtjs.dev/axios
        ['@nuxtjs/axios', { proxyHeaders: false }], // TODO Set to true when fixed, causing issue with CORS headers policy in django
        '@nuxtjs/tailwindcss'
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
        baseURL: process.env.AUTH_API_ENDPOINT,
        browserBaseURL: process.env.BASE_URL
    },
    publicRuntimeConfig: {
        graphqlUri: process.env.HASURA_URL,
        graphqlWsUri: process.env.HASURA_URL_WS
        //     graphqlUri: 'https://rickandmortyapi.com/graphql',
        //     graphqlWsUri: 'https://rickandmortyapi.com/graphql'
    },
    privateRuntimeConfig: {},
    // graphqlCodegen: {
    //     schema: [process.env.HASURA_URL]
    // },
    // apollo: {
    //     default: {
    //         uri: process.env.HASURA_URL
    //     }
    // },
    // https://google-fonts.nuxtjs.org/options
    googlFonts: {
        famillies: {
            Inter: true
        },
        prefetch: true,
        display: 'swap'
    },
    // https://tailwindcss.nuxtjs.org/options
    tailwindcss: {
        // cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true
    },

    // https://nuxtjs.org/docs/features/loading/
    loading: {
        color: 'blue',
        height: '5px'
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['@headlessui/vue', '@apollo/client', 'ts-invariant/process']
        // postcss: {
        //     // plugins: {
        //     //     tailwindcss: {},
        //     //     autoprefixer: {}
        //     // },
        //     // temporary fix for nuxt3 integration of tailwind
        //     postcssOptions: {
        //         // https://tailwindcss.com/docs/optimizing-for-production
        //         plugins: {
        //             tailwindcss: {},
        //             autoprefixer: {},
        //             ...(process.env.NODE_ENV === 'production'
        //                 ? { cssnano: {} }
        //                 : {})
        //         }
        //     }
        // }
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
