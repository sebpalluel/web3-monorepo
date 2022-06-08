<template>
    <div>
        <NuxtPage />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useApolloClient } from '@/composables/useApolloClient'
export default defineComponent({
    async setup() {
        // TODO add token to headers on init when loggedin and restore when logged out
        useApolloClient()
    }
})
</script>
