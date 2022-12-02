const userHeaders = {
  'x-hasura-role': 'user',
  'x-hasura-default-role': 'user',
  'x-hasura-admin-secret': 'password',
};

const adminHeaders = {
  'x-hasura-role': 'admin',
  'x-hasura-default-role': 'admin',
  'x-hasura-admin-secret': 'password',
};

const gqlPath = 'libs/client/gql';

module.exports = {
  projects: {
    admin: {
      schema: `${gqlPath}/admin/src/generated/schema.json`,
      documents: `${gqlPath}/admin/src/queries/**/*.gql`,
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:8080/v1/graphql',
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
            url: 'http://localhost:8080/v1/graphql',
            headers: userHeaders,
          },
        },
      },
    },
    thegraph: {
      schema: [
        `${gqlPath}/thegraph/src/.graphclient/schema.graphql`,
        `${gqlPath}/thegraph/src/.graphclient/sources/**/schema.graphql`,
      ],
      documents: `${gqlPath}/thegraph/src/queries/**/*.gql`,
    },
  },
};
