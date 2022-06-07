<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery, useResult } from '@vue/apollo-composable'
const { result, loading, error } = await useQuery(gql`
    query getUsers {
        api_user {
            id
            email
        }
    }
`)
console.log({ result, loading, error })
const users = useResult(result, null, (data) => data.api_user)
</script>

<template>
    <div class="d-flex flex-column">
        <div class="pb-5">
            <NuxtLink to="/"> Go Home </NuxtLink>
        </div>
        <div>
            {{ users }}
        </div>
        <span class="pb-5"> User list: </span>
        <div v-for="user in users" :key="user.id">
            {{ user.email }}
        </div>
    </div>
</template>
