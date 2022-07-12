const userHeaders = {
    'x-hasura-role': 'user',
    'x-hasura-default-role': 'user',
    'x-hasura-admin-secret':
        process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'password'
}

const hasuraSchema = (headers = userHeaders) => {
    return {
        'http://backend-hasura-engine:8080/v1/graphql': {
            headers
        }
    }
}

module.exports = {
    overwrite: true,
    watch: true,
    generates: {
        './src/generated/user-gql.schema.json': {
            schema: [hasuraSchema()],
            plugins: ['introspection']
        },
        './src/generated/user-gql.schema.graphql': {
            schema: [hasuraSchema()],
            plugins: ['schema-ast']
        },
        './src/generated/user-gql.tsx': {
            schema: [hasuraSchema()],
            documents: ['./src/queries/user/**/*.{graphql,gql}'],
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-query'
            ],
            config: {
                preResolveTypes: true,
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
                enumsAsTypes: true,
                constEnums: true,
                exposeQueryKeys: true,
                exposeFetcher: true
            }
        }

        // './src/admin.ts': {
        //     schema: [
        //         {
        //             'http://localhost:8080/v1/graphql': {
        //                 headers: {
        //                     'x-hasura-role': 'admin',
        //                     'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
        //                 }
        //             }
        //         }
        //     ],
        //     documents: ['./src/admin/**/*.graphql'],
        //     plugins: [
        //         'typescript',
        //         'typescript-operations',
        //         'typescript-graphql-request'
        //     ],
        //     config: {
        //         preResolveTypes: true,
        //         skipTypename: false,
        //         enumsAsTypes: true,
        //         constEnums: true
        //     }
        // }
    }
}
