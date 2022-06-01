<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <!-- <p v-if="error">Something went wrong...</p>
        <p v-else-if="loading">Loading...</p>
        <p
            v-for="character in result.characters.results"
            v-else
            :key="character.id"
        >
            {{ character.name }}
        </p>
        <div></div> -->
    </div>
</template>

<script>
// import gql from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'

// const CHARACTERS_QUERY = gql`
//     query Characters {
//         characters {
//             results {
//                 id
//                 name
//                 image
//             }
//         }
//     }
// `

// export default {
//     setup() {
//         const { result, loading, error } = useQuery(CHARACTERS_QUERY)
//         // onMounted(() => {
//         //     // const res = await this.$axios.$get()
//         //     // console.log({res})
//         // })
//         return {
//             result,
//             loading,
//             error
//         }
//     }
// }
</script>
