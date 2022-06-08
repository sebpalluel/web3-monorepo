<script setup lang="ts">
import { useApolloClient } from '@/composables/useApolloClient'
// TODO add token to headers on init when loggedin and restore when logged out
useApolloClient()
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>
