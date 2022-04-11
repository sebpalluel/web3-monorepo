import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3020/graphql'
})
// Cache implementation
const cache = new InMemoryCache()
// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient
})

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives
}) // Replaces new Vuetify(...)

app.use(vuetify)

app.use(apolloProvider)

app.mount('#app')
