// https://github.com/stevenlsjr/sls-blog/blob/fbb824995ed087f4fa35e7b1d06a7d4ed759e34e/packages/client-nuxt/composables/provideApolloClient.ts

import { provide, Ref } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    split,
    concat,
    ApolloLink,
    NormalizedCacheObject
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
// import { WebSocketLink } from '@apollo/client/link/ws'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

function getLinks(
    graphqlUri: string,
    graphqlWsUri: string,
    isSSR: boolean
): ApolloLink {
    const httpLink = new HttpLink({
        uri: graphqlUri
    })
    if (!isSSR) {
        const wsLink = new GraphQLWsLink(
            createClient({
                uri: graphqlWsUri,
                lazy: true,
                reconnect: true,
                webSocketImpl: WebSocket
            })
        )
        const link = split(
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
        return link
    } else {
        return httpLink
    }
}

const apolloAuthContext = setContext(async (_, { headers }) => {
    let jwt_token: string | null = '' // todo use pinia store ?
    if (!process.server) {
        jwt_token = localStorage.getItem('token')
    }
    console.log({ jwt_token, server: process.server })
    return {
        headers: {
            ...headers,
            Authorization: jwt_token ? `Bearer ${jwt_token}` : ''
        }
    }
})

export function useApolloClient() {
    const apolloState: Ref<NormalizedCacheObject | undefined> = useState(
        '__APOLLO_STATE__',
        () => undefined
    )
    const nuxt = useNuxtApp()
    const isSSR = process.server
    const { graphqlUri, graphqlWsUri } = useRuntimeConfig()
    const cache = new InMemoryCache()
    const link = getLinks(graphqlUri, graphqlWsUri, isSSR)
    let apolloClient: ApolloClient<NormalizedCacheObject>
    const key = 'default'

    if (isSSR) {
        apolloClient = new ApolloClient({
            link: apolloAuthContext.concat(link),
            cache,
            // Set this on the server to optimize queries when SSR
            ssrMode: true
        })
        nuxt.hook('app:rendered', () => {
            // serialize apollo state for browser
            nuxt.payload.data['apollo-' + key] = apolloClient.extract()
        })
    } else {
        const data = nuxt.payload.data['apollo-' + key]
        if (data) {
            // deserialize server-side apollo cache
            cache.restore(JSON.parse(JSON.stringify(data)))
        }
        apolloClient = new ApolloClient({
            link: apolloAuthContext.concat(link),
            cache,
            // This will temporary disable query force-fetching
            ssrForceFetchDelay: 100
        })
    }

    provide(DefaultApolloClient, apolloClient)
    nuxt.provide('apollo', apolloClient)
}
