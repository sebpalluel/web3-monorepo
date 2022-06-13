<script setup lang="ts">
import { useUserStore, FormLogin } from '@/store/user'

let formData: FormLogin = reactive({
    email: '',
    password: ''
})

const user = useUserStore()

definePageMeta({
    middleware: 'guest'
})
</script>

<template>
    <div class="d-flex flex-column pa-5 ma-5">
        <input v-model="formData.email" placeholder="email" />
        <input v-model="formData.password" placeholder="password" />
        <button
            type="submit"
            class="
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
            @click="() => user.login(formData)"
        >
            Login
        </button>
        <NuxtLink to="/auth/register"> Register </NuxtLink>
    </div>
</template>

<style lang="scss" scoped></style>
