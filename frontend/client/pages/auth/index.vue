<template>
    <div class="d-flex flex-column">
        <v-text-field v-model="formData.email" v-bind="{ label: 'email' }" />
        <v-text-field
            v-model="formData.password"
            v-bind="{ label: 'password', errorMessages: passwordErrors }"
        />
    </div>
</template>

<script setup lang="ts">
// onMounted(async () => {
//     const res = await $axios.$get('log')
//     console.log({ res })
// })

interface FormData {
    email: string
    password: string
}

let formData: FormData = reactive({
    email: '',
    password: ''
})

let passwordErrors = computed(() => {
    const errors: string[] = []
    if (formData.password.length < 8) {
        errors.push('password must be at least 8 characters')
    }
    return errors
});
</script>

<style lang="scss" scoped></style>
