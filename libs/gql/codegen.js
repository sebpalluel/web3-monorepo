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
  let schema = {};
  schema[process.env.HASURA_URL] = { headers };
  return schema;
};

module.exports = {
  overwrite: true,
  watch: true,
  generates: {
    'libs/gql/src/user/generated/gql.schema.json': {
      schema: [hasuraSchema()],
      plugins: ['introspection'],
    },
    'libs/gql/src/user/generated/gql.schema.graphql': {
      schema: [hasuraSchema()],
      plugins: ['schema-ast'],
    },
    'libs/gql/src/user/generated/index.tsx': {
      schema: [hasuraSchema()],
      documents: ['libs/gql/src/user/queries/**/*.{graphql,gql}'],
      ...pluginsAndConfig,
    },
    'libs/gql/src/admin/generated/gql.schema.json': {
      schema: [hasuraSchema(adminHeaders)],
      plugins: ['introspection'],
    },
    'libs/gql/src/admin/generated/gql.schema.graphql': {
      schema: [hasuraSchema(adminHeaders)],
      plugins: ['schema-ast'],
    },
    'libs/gql/src/admin/generated/index.tsx': {
      schema: [hasuraSchema(adminHeaders)],
      documents: ['libs/gql/src/admin/queries/**/*.{graphql,gql}'],
      ...pluginsAndConfig,
    },
  },
};
