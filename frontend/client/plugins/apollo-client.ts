import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.GQL_API_ENDPOINT,
        // other configuration
    })
    nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})


// import { defineNuxtPlugin, NuxtApp } from '#app'
// import { refreshToken } from '@/store/user'

// import { ApolloClient, InMemoryCache, from } from '@apollo/client/core'
// import {
//     DefaultApolloClient,
//     provideApolloClient
// } from '@vue/apollo-composable'
// import { HttpLink, split } from '@apollo/client/core'
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
// import { createClient } from 'graphql-ws'
// import WebSocket from 'ws'
// import { getMainDefinition } from '@apollo/client/utilities'
// import { onError } from '@apollo/client/link/error'

// // Solution to support nuxt3 with apollo https://dev.to/joshwcorbett/nuxt-3-apollo-client-h6
// // https://www.apollographql.com/docs/react/api/link/apollo-link-subscriptions/
// // https://v4.apollo.vuejs.org/guide-composable/subscription.html#client-setup

// // @ts-ignore
// export default defineNuxtPlugin((nuxt: NuxtApp) => {
//     // Create an http link:
//     const httpLink = new HttpLink({
//         uri: process.env.GQL_API_ENDPOINT,
//         headers: () => {
//             const accessToken = ''
//             // const accessToken = await refreshToken(
//             //     nuxtApp.$axios,
//             //     nuxtApp.$apollo
//             // )
//             return {
//                 Authorization: accessToken ? `Bearer ${accessToken}` : ''
//             }
//         }
//     })

//     // Create a WebSocket link:
//     // https://github.com/enisdenjo/graphql-ws/blob/master/docs/interfaces/client.ClientOptions.md
//     const wsLink = new GraphQLWsLink(
//         createClient({
//             url: process.env.GQL_WS_API_ENDPOINT,
//             lazy: true,
//             reconnect: true,
//             webSocketImpl: WebSocket,
//             connectionParams: () => {
//                 const accessToken = ''
//                 // const accessToken = await refreshToken(
//                 //     nuxtApp.$axios,
//                 //     nuxtApp.$apollo
//                 // )
//                 return {
//                     headers: {
//                         Authorization: accessToken
//                             ? `Bearer ${accessToken}`
//                             : ''
//                     }
//                 }
//             }
//         })
//     )

//     // error handling for apollo client
//     const errorLink = onError(({ graphQLErrors, networkError }) => {
//         if (graphQLErrors)
//             graphQLErrors.forEach(({ message, locations, path }) =>
//                 console.log(
//                     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//                 )
//             )

//         if (networkError) console.log(`[Network error]: ${networkError}`)
//     })

//     // using the ability to split links, you can send data to each link
//     // depending on what kind of operation is being sent
//     const link = split(
//         // split based on operation type
//         ({ query }) => {
//             const definition = getMainDefinition(query)
//             return (
//                 definition.kind === 'OperationDefinition' &&
//                 definition.operation === 'subscription'
//             )
//         },
//         wsLink,
//         httpLink
//     )

//     const apolloClient = new ApolloClient({
//         cache: new InMemoryCache(),
//         //https://www.apollographql.com/docs/react/api/link/introduction/
//         link: from([errorLink, link]),
//         connectToDevTools: true
//     })
//     // provideApolloClient(apolloClient)
//     nuxt.vueApp.provide(DefaultApolloClient, apolloClient)
//     // nuxt.vueApp.provide('apollo', { DefaultApolloClient, apolloClient })
// })
