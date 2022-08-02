const userHeaders = {
  'x-hasura-role': 'user',
  'x-hasura-default-role': 'user',
  'x-hasura-admin-secret':
    process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'password',
};

const adminHeaders = {
  'x-hasura-role': 'admin',
  'x-hasura-default-role': 'admin',
  'x-hasura-admin-secret':
    process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'password',
};

const pluginsAndConfig = {
  plugins: [
    // 'add',
    'typescript',
    'typescript-operations',
    'typescript-react-query',
  ],
  config: {
    preResolveTypes: true,
    constEnums: true,
    exposeQueryKeys: true,
    exposeFetcher: true,
    // content: `import { fetchParams } from 'lib/hasuraAdapter.ts';`,
    // fetcher: {
    //     endpoint: `${process.env.HASURA_URL}`,
    //     fetchParams: 'await(fetchParams())'
    // }
    // // https://www.graphql-code-generator.com/plugins/typescript/typescript-react-query
    // fetcher: './src/lib/hasuraAdapter.ts#myFetcher',
  },
};

const hasuraSchema = (headers = userHeaders) => {
  return {
    'http://localhost:8080/v1/graphql': {
      headers,
    },
  };
};

module.exports = {
  overwrite: true,
  watch: true,
  generates: {
    'libs/gql/src/lib/generated/user-gql.schema.json': {
      schema: [hasuraSchema()],
      plugins: ['introspection'],
    },
    'libs/gql/src/lib/generated/user-gql.schema.graphql': {
      schema: [hasuraSchema()],
      plugins: ['schema-ast'],
    },
    'libs/gql/src/lib/generated/user-gql.tsx': {
      schema: [hasuraSchema()],
      documents: ['libs/gql/src/lib/queries/user/**/*.{graphql,gql}'],
      ...pluginsAndConfig,
    },
    'libs/gql/src/lib/generated/admin-gql.schema.json': {
      schema: [hasuraSchema(adminHeaders)],
      plugins: ['introspection'],
    },
    'libs/gql/src/lib/generated/admin-gql.schema.graphql': {
      schema: [hasuraSchema(adminHeaders)],
      plugins: ['schema-ast'],
    },
    'libs/gql/src/lib/generated/admin-gql.tsx': {
      schema: [hasuraSchema(adminHeaders)],
      documents: ['libs/gql/src/lib/queries/admin/**/*.{graphql,gql}'],
      ...pluginsAndConfig,
    },
  },
};
