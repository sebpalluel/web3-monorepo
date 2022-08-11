const userHeaders = {
  'x-hasura-role': 'user',
  'x-hasura-default-role': 'user',
  'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'password',
};

const adminHeaders = {
  'x-hasura-role': 'admin',
  'x-hasura-default-role': 'admin',
  'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'password',
};

const pluginsAndConfig = {
  plugins: [
    'typescript',
    'typescript-operations',
    'typescript-react-query',
    'typescript-graphql-request',
  ],
  config: {
    preResolveTypes: true,
    constEnums: true,
    exposeQueryKeys: true,
    exposeFetcher: true,
    documentMode: 'external',
    importDocumentNodeExternallyFrom: './index',
    fetcher: {
      func: '@governance/hasura-fetcher#fetchData',
      isReactHook: false,
    },
  },
};

const adminPluginsAndConfig = {
  plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk', 'add'],
  config: {
    noExport: true,
    documentMode: 'string',
    content: `import { fetchDataAdmin } from "@governance/hasura-fetcher";\n
    export const adminSdk = getSdk(fetchDataAdmin());`,
    placement: 'append',
  },
};

const hasuraSchema = (headers = userHeaders) => {
  let schema = {};
  schema[process.env.NEXT_PUBLIC_HASURA_URL] = { headers };
  return schema;
};

module.exports = {
  overwrite: true,
  watch: true,
  generates: {
    'libs/gql/user/src/generated/schema.json': {
      schema: [hasuraSchema()],
      plugins: ['introspection'],
    },
    'libs/gql/user/src/generated/schema.graphql': {
      schema: [hasuraSchema()],
      plugins: ['schema-ast'],
    },
    'libs/gql/user/src/generated/index.ts': {
      schema: [hasuraSchema()],
      documents: ['libs/gql/user/src/queries/**/*.{graphql,gql}'],
      ...pluginsAndConfig,
    },
    'libs/gql/admin/src/generated/schema.json': {
      schema: [hasuraSchema(adminHeaders)],
      plugins: ['introspection'],
    },
    'libs/gql/admin/src/generated/schema.graphql': {
      schema: [hasuraSchema(adminHeaders)],
      plugins: ['schema-ast'],
    },
    'libs/gql/admin/src/generated/index.ts': {
      schema: [hasuraSchema(adminHeaders)],
      documents: ['libs/gql/admin/src/queries/**/*.{graphql,gql}'],
      ...adminPluginsAndConfig,
    },
    // doesn't support yet separated fragments so it faile
    // TODO: follow up on this issue https://github.com/dotansimha/graphql-code-generator/issues/7700
    // ref: https://www.graphql-code-generator.com/plugins/other/hasura-allow-list
    // 'hasura-console/app/metadata/query_collections.yaml': {
    //   schema: [hasuraSchema(adminHeaders)],
    //   documents: ['libs/gql/{admin,user,anonymous}/src/queries/**/*.{graphql,gql}'],
    //   plugins: ['hasura-allow-list'],
    //   hooks: {
    //     afterOneFileWrite: ['make restart-hasura'],
    //   },
    // },
  },
};
