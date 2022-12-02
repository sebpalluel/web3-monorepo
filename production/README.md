# Deploy this project to production

This project is deployed to production using Vercel for the web app, Hasura cloud for the Hasura GraphQL Server and Google Cloud for the postgresql db and nest js server.

## Hasura Cloud + databases

### Hasura Cloud Setup with github

https://hasura.io/docs/latest/deployment/hasura-cloud/ci-cd/github-integration/

### Neon deploy and connect db to Hasura Cloud

- add images of process in hasura cloud

https://neon.tech/docs/guides/hasura/

### Neon deploy and connect db with prisma

https://neon.tech/docs/guides/prisma/

### How to deploy postgresql db on google cloud platform and connect it to your hasura cloud instance

https://hasura.io/docs/latest/databases/connect-db/cloud-databases/gcp/

## Vercel

https://nx.dev/recipes/other/deploy-nextjs-to-vercel

### Add Hasura integration

https://vercel.com/integrations/hasura

Select your hasura project and your vercel project

- add hasura-vercel-integration image

This will add those env variables to your vercel project with the right values:

```.env
HASURA_PROJECT_ENDPOINT
NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT
HASURA_ADMIN_SECRET
```

### Env variables

You are going to need to set env variables in vercel for the web app. You can do this by going to the vercel dashboard and clicking on the project. Then click on settings and then environment variables. You will need to set the following variables:

```.env
NX_CACHE_DIRECTORY=/tmp/.nx

PBKDF2_KEY_SIZE=
PBKDF2_ITERATIONS=
TOKEN_LIFE_TIME=

# for google sign in
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=

# for github sign in
GITHUB_SECRET=
GITHUB_ID=

# your url for the web app deployed on vercel, you should get a default one when you deploy or you can buy a custom domain on the provided dns service of vercel
NEXTAUTH_URL=
NEXTAUTH_COOKIE_NAME=
# make sure to generate a new rsa key for this
NEXTAUTH_SECRET=
```
