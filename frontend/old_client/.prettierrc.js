module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    printWidth: 80,
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            processor: '@graphql-eslint/graphql',
            extends: ['plugin:prettier/recommended']
        },
        {
            files: ['*.graphql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            rules: {
                'prettier/prettier': 'error'
            }
        }
    ]
}
