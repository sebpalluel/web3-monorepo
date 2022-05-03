import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://rickandmortyapi.com/graphql'
        // uri: process.env.API_ENDPOINT
    })
    nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
