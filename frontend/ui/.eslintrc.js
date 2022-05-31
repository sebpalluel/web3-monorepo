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
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/script-setup-no-uses-vars': 'off'
    }
}
