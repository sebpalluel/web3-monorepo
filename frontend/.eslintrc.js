module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': ['error']
    }
}
