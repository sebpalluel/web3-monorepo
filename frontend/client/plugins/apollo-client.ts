import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { HttpLink, split } from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

// https://www.apollographql.com/docs/react/api/link/apollo-link-subscriptions/
// https://v4.apollo.vuejs.org/guide-composable/subscription.html#client-setup

export default defineNuxtPlugin(async (nuxtApp) => {
    // Create an http link:
    console.log({ nuxtApp })
    const httpLink = new HttpLink({
        uri: process.env.GQL_API_ENDPOINT,
        headers: async () => {
            const accessToken = ''
            // const accessToken = await token()
            return {
                Authorization: accessToken ? `Bearer ${accessToken}` : ''
            }
        }
    })

    // Create a WebSocket link:
    const wsLink = new GraphQLWsLink(
        createClient({
            url: process.env.GQL_WS_API_ENDPOINT,
            lazy: true,
            reconnect: true,
            connectionParams: async () => {
                const accessToken = ''
                // const accessToken = await token()
                return {
                    headers: {
                        Authorization: accessToken
                            ? `Bearer ${accessToken}`
                            : ''
                    }
                }
            }
        })
    )

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
        // split based on operation type
        ({ query }) => {
            const definition = getMainDefinition(query)
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            )
        },
        wsLink,
        httpLink
    )

    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        link,
        connectToDevTools: true
    })
    nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
