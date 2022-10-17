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

const gqlPath = 'libs/gql';

module.exports = {
  projects: {
    admin: {
      schema: `${gqlPath}/admin/src/generated/schema.json`,
      documents: `${gqlPath}/admin/src/queries/**/*.gql`,
      extensions: {
        endpoints: {
          default: {
            url: process.env.NEXT_PUBLIC_HASURA_URL,
            headers: adminHeaders,
          },
        },
      },
    },
    user: {
      schema: `${gqlPath}/user/src/generated/schema.json`,
      documents: `${gqlPath}/user/src/queries/**/*.gql`,
      extensions: {
        endpoints: {
          default: {
            url: process.env.NEXT_PUBLIC_HASURA_URL,
            headers: userHeaders,
          },
        },
      },
    },
    thegraph: {
      schema: [
        `${gqlPath}/thegraph/src/generated/.graphclient/schema.graphql`,
        `${gqlPath}/thegraph/src/generated/.graphclient/sources/**/schema.graphql`,
      ],
      documents: `${gqlPath}/thegraph/src/queries/**/*.gql`,
    },
  },
};
