<script lang="ts" setup>
import { useUserStore, FormRegister } from '@/store/user'

let formData: FormRegister = reactive({
    email: '',
    password: '',
    password_confirmation: ''
})
const user = useUserStore()
</script>

<template>
    <div class="d-flex flex-column pa-5 ma-5">
        <input v-model="formData.email" placeholder="email" />
        <input v-model="formData.password" placeholder="password" />
        <v-btn color="primary" @click="() => user.register(formData)">
            Register
        </v-btn>
        <NuxtLink to="/auth"> Login </NuxtLink>
    </div>
</template>
