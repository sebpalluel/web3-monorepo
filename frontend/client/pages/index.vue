<script setup lang="ts">
import { useUserStore, FormLogin } from '@/store/user'

let formData: FormLogin = reactive({
    email: '',
    password: ''
})

const user = useUserStore()
</script>

<template>
    <div class="d-flex flex-column pa-5 ma-5">
        <input v-model="formData.email" placeholder="email" />
        <input v-model="formData.password" placeholder="password" />
        <v-btn color="primary" @click="() => user.login(formData)">
            Login
        </v-btn>
        <nuxt-link to="/register"> Register </nuxt-link>
    </div>
</template>

<style lang="scss" scoped></style>
