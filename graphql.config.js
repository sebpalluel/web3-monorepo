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

const gqlPath = 'libs/gql/src';

module.exports = {
  projects: {
    admin: {
      schema: `${gqlPath}/admin/generated/schema.json`,
      documents: `${gqlPath}/admin/queries/*.gql`,
      extensions: {
        endpoints: {
          default: {
            url: process.env.HASURA_URL,
            headers: adminHeaders,
          },
        },
      },
    },
    user: {
      schema: `${gqlPath}/user/generated/schema.json`,
      documents: `${gqlPath}/user/queries/*.gql`,
      extensions: {
        endpoints: {
          default: {
            url: process.env.HASURA_URL,
            headers: userHeaders,
          },
        },
      },
    },
  },
};
