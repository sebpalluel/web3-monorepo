<template>
    <div class="d-flex flex-column">
        <v-text-field v-model="formData.email" v-bind="{ label: 'email' }" />
        <v-text-field
            v-model="formData.password"
            v-bind="{ label: 'password' }"
        />
    </div>
</template>

<script setup lang="ts">
// onMounted(async () => {
//     const res = await $axios.$get('log')
//     console.log({ res })
// })
const formData = {
    email: String,
    password: String
}
</script>

<style lang="scss" scoped></style>
