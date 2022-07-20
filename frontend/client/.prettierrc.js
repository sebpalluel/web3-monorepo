
module.exports = {
    endOfLine: 'lf',
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    printWidth: 80,
    overrides: [
        {
            files: ['*.graphql', '*.gql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            rules: {
                'prettier/prettier': 'error'
            }
        }
    ]
}
