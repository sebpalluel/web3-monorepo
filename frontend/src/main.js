import 'vuetify/styles' // Global CSS has to be imported
import { createApp, provide, h } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
    ApolloClient,
    // createHttpLink,
    InMemoryCache
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// // HTTP connection to the API
// const httpLink = createHttpLink({
//     // You should use an absolute URL here
//     uri: 'http://localhost:3020/graphql'
// })
// Cache implementation
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    // link: gttpLink,
    uri: 'https://rickandmortyapi.com/graphql'
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})

const vuetify = createVuetify({
    components,
    directives
}) // Replaces new Vuetify(...)

app.use(vuetify)

app.mount('#app')
