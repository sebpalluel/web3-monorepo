<template>
    <v-app>
        <v-main>
            <HelloWorld />
            <p v-if="error">Something went wrong...</p>
            <p v-else-if="loading">Loading...</p>
            <p
                v-for="character in result.characters.results"
                v-else
                :key="character.id"
            >
                {{ character.name }}
            </p>
            <div></div>
        </v-main>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
    query Characters {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    setup() {
        const { result, loading, error } = useQuery(CHARACTERS_QUERY)
        return {
            result,
            loading,
            error
        }
    }
}
</script>
