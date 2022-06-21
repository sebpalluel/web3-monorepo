module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        '@nuxtjs/eslint-config-typescript'
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/script-setup-no-uses-vars': 'off'
    },
    overrides: [
        {
            files: ['*.js', '*.ts'],
            processor: '@graphql-eslint/graphql'
        },
        {
            files: ['*.graphql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            rules: {
                '@graphql-eslint/known-type-names': 'error'
            }
        }
    ]
}
