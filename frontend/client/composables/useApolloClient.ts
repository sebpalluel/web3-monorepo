// https://github.com/stevenlsjr/sls-blog/blob/fbb824995ed087f4fa35e7b1d06a7d4ed759e34e/packages/client-nuxt/composables/provideApolloClient.ts
// + check Basics: Client setup https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/

import { provide, Ref } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    split,
    concat,
    Operation,
    ApolloLink,
    NormalizedCacheObject
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
// import { WebSocketLink } from '@apollo/client/link/ws'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import merge from 'deepmerge'

import { getJwtToken } from '@/utils/auth'
import console, { log } from 'console'

let apolloClient: ApolloClient<NormalizedCacheObject>

function getHeaders() {
    const headers = {} as HeadersInit
    const token = getJwtToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
    return headers
}

function operationIsSubscription(operation: Operation): boolean {
    const definition = getMainDefinition(operation.query)
    const isSubscription =
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    return isSubscription
}

let wsLink: GraphQLWsLink

function getOrCreateWebsocketLink() {
    wsLink ??= new GraphQLWsLink(
        // TODO check error gestion on abnormal event, onNonLazyError
        // https://github.com/enisdenjo/graphql-ws/blob/master/docs/interfaces/client.ClientOptions.md#lazy
        createClient({
            url:
                process.env['GQL_WS_API_ENDPOINT']
                    ?.replace('http', 'ws')
                    .replace('https', 'wss') || '',
            lazy: true,
            webSocketImpl: WebSocket,
            retryAttempts: 10,
            connectionParams: () => {
                return { headers: getHeaders() }
            }
        })
    )
    return wsLink
}

function createLink(): ApolloLink {
    const httpLink = new HttpLink({
        uri: process.env['GQL_API_ENDPOINT'],
        credentials: 'include'
    })
    const authLink = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                ...getHeaders()
            }
        }))
        return forward(operation)
    })

    const isSSR = process.server
    // link websocket only when query not made server side
    if (!isSSR) {
        return ApolloLink.from([
            authLink,
            // Use "getOrCreateWebsocketLink" to init WS lazily
            // otherwise WS connection will be created + used even if using "query"
            ApolloLink.split(
                operationIsSubscription,
                getOrCreateWebsocketLink,
                httpLink
            )
        ])
    } else {
        return ApolloLink.from([authLink, httpLink])
    }
}

function createApolloClient() {
    const link = createLink()
    console.log({ link })
    return new ApolloClient({
        ssrMode: process.server, // Set this on the server to optimize queries when SSR
        link,
        cache: new InMemoryCache(),
        // This will temporary disable query force-fetching
        // https://www.apollographql.com/docs/react/performance/server-side-rendering/
        ssrForceFetchDelay: !process.server ? 100 : 0
    })
}

// function getHttpGqlLinks(
//     graphqlUri: string,
//     graphqlWsUri: string,
//     isSSR: boolean
// ): ApolloLink {
//     const httpLink = new HttpLink({
//         uri: graphqlUri
//     })
//     if (!isSSR) {
//         wsLink = new GraphQLWsLink(
//             createClient({
//                 uri: graphqlWsUri,
//                 lazy: true,
//                 reconnect: true,
//                 webSocketImpl: WebSocket
//             })
//         )
//         const link = split(
//             ({ query }) => {
//                 const definition = getMainDefinition(query)
//                 return (
//                     definition.kind === 'OperationDefinition' &&
//                     definition.operation === 'subscription'
//                 )
//             },
//             wsLink,
//             httpLink
//         )
//         return link
//     } else {
//         return httpLink
//     }
// }

// const apolloAuthContext = setContext(async (_, { headers }) => {
//     let jwt_token: string | null = '' // todo use pinia store ?
//     if (!process.server) {
//         jwt_token = localStorage.getItem('token')
//     }
//     console.log({ jwt_token, server: process.server })
//     return {
//         headers: {
//             ...headers,
//             Authorization: jwt_token ? `Bearer ${jwt_token}` : ''
//         }
//     }
// })

export function initializeApolloClient() {
    const _apolloClient = apolloClient ?? createApolloClient()

    const apolloState: Ref<NormalizedCacheObject | undefined> = useState(
        '__APOLLO_STATE__',
        () => undefined
    )
    const nuxt = useNuxtApp()
    const isSSR = process.server
    const key = 'default'
    // For SSG and SSR always create a new Apollo Client
    if (isSSR) {
        nuxt.hook('app:rendered', () => {
            // serialize apollo state for browser
            nuxt.payload.data['apollo-' + key] = _apolloClient.extract()
        })
        return _apolloClient
    } else {
        // Create the Apollo Client once in the client
        if (!apolloClient) apolloClient = _apolloClient

        const data = nuxt.payload.data['apollo-' + key]
        if (data) {
            // deserialize server-side apollo cache
            _apolloClient.cache.restore(JSON.parse(JSON.stringify(data)))
        }
        return _apolloClient
    }
}

export function useApolloClient() {
    const nuxt = useNuxtApp()
    const apolloClient = initializeApolloClient()
    provide(DefaultApolloClient, apolloClient)
    nuxt.provide('apollo', apolloClient)
}

// TODO create error handling layer, needed to detect if error is due to bad authentication
// if it's the case handle auth logic
// const errorHandlingLayer = setContext()

// export function useApolloClient() {
//     const apolloState: Ref<NormalizedCacheObject | undefined> = useState(
//         '__APOLLO_STATE__',
//         () => undefined
//     )
//     const nuxt = useNuxtApp()
//     const isSSR = process.server
//     const { graphqlUri, graphqlWsUri } = useRuntimeConfig()
//     const cache = new InMemoryCache()
//     const httpGqlLinks = getHttpGqlLinks(graphqlUri, graphqlWsUri, isSSR)
//     const key = 'default'

//     if (isSSR) {
//         apolloClient = new ApolloClient({
//             link: apolloAuthContext.concat(httpGqlLinks),
//             cache,
//             // Set this on the server to optimize queries when SSR
//             ssrMode: true
//         })
//         nuxt.hook('app:rendered', () => {
//             // serialize apollo state for browser
//             nuxt.payload.data['apollo-' + key] = apolloClient.extract()
//         })
//     } else {
//         const data = nuxt.payload.data['apollo-' + key]
//         if (data) {
//             // deserialize server-side apollo cache
//             cache.restore(JSON.parse(JSON.stringify(data)))
//         }
//         apolloClient = new ApolloClient({
//             link: apolloAuthContext.concat(httpGqlLinks),
//             cache,
//             // This will temporary disable query force-fetching
//             ssrForceFetchDelay: 100
//         })
//     }

//     provide(DefaultApolloClient, apolloClient)
//     nuxt.provide('apollo', apolloClient)
// }
