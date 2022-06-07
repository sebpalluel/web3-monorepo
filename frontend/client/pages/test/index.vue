<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
const { result, loading, error } = await useQuery(gql`
    query getUsers {
        api_user {
            id
            email
        }
    }
`)
// const users = computed(() => result.api_user : [])
</script>

<template>
    <div class="d-flex flex-column">
        <div class="pb-5">
            <NuxtLink to="/"> Go Home </NuxtLink>
        </div>
        <div>
            {{ result }}
        </div>
        <span class="pb-5"> User list: </span>
        <div v-for="user in result.api_user" :key="user.id">
            {{ user.email }}
        </div>
    </div>
</template>
