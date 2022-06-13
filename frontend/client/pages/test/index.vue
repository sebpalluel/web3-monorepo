<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const { result, loading, error } = useQuery(gql`
    query getUsers {
        api_user {
            id
            email
        }
    }
`)

definePageMeta({
    middleware: 'auth'
})
</script>

<template>
    <div class="d-flex flex-column">
        <div class="pb-5">
            <NuxtLink to="/"> Go Home </NuxtLink>
        </div>
        <span class="pb-5"> User list: </span>
        <div v-for="user in result?.api_user" :key="user.id">
            {{ user.email }}
        </div>

        <p v-if="error">Something went wrong... {{ error }}</p>
        <!-- <p v-else-if="loading">Loading...</p>
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
