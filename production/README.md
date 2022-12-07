# Deploy this project to production

This project is deployed to production using Vercel for the web app, Hasura cloud for the Hasura GraphQL Server and Google Cloud for the postgresql db and nest js server.

## Nestjs Server + Redis

### Deploy Nestjs-server app to Render.com

Here is a step-by-step guide to deploying a NestJS server app for free with render.com:

1. Sign up for a [free Render account](https://dashboard.render.com/). Render is a platform as a service (PaaS) that allows you to deploy and run your applications in the cloud.

2. Go to the dashboard and select the 'Web Services' option. Make sure to give access to your own repository by clicking on the option `Configure account` on the right. Select your repository and continue

3. Fill-up the form with the corresponding informations as such:

4. Provide a .env file with the following variables and your API keys

```.env
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
```

5. After submitting the form, you should have a first build running. This should take a few minutes to finish.

Your app should now be deployed and running on Render.com. You can access it by running the heroku open command or by going to the app's URL (which will be in the format https://my-app-name.herokuapp.com).

### Deploy Redis database to Render.com

1. Go to the dashboard

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

# make sure to generate a new rsa key for this
NEXTAUTH_SECRET=
```
