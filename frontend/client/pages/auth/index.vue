<template>
    <div class="d-flex flex-column">
        <v-text-field v-model="formData.email" v-bind="{ label: 'email' }" />
        <v-text-field v-model="formData.password" v-bind="{ label: 'password' }" />
    </div>
</template>

<script>
export default {
    setup() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
