<template>
    <div class="d-flex flex-column pa-5 ma-5">
        <input v-model="formData.email" placeholder="email" />
        <input v-model="formData.password" placeholder="password" />
        <v-btn color="primary" @click="() => user.login(formData)">
            Login
        </v-btn>
    </div>
</template>

<script setup lang="ts">
// onMounted(async () => {
//     const res = await $axios.$get('log')
//     console.log({ res })
// })

import { useUserStore } from '@/store/user'

interface FormData {
    email: string
    password: string
}

let formData: FormData = reactive({
    email: '',
    password: ''
})

const user = useUserStore()

const loginFormatRequest = () => {
    let data = new URLSearchParams()
    for (const [key, value] of Object.entries(formData)) {
        data.append(key, value)
    }
    return data
}

</script>

<style lang="scss" scoped></style>
