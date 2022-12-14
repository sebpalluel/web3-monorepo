# Deploy this project to production 🚀

This project is deployed to production using:

- Vercel for the web app
- [Hasura cloud](https://cloud.hasura.io/) for the Hasura GraphQL Server
- [Railway.app](https://railway.app/new/template/7UlZ-K?referralCode=WYM_Zc) for the Nestjs server + Postgres & Redis

Additionally, we use [Sentry](https://sentry.io/) for error tracking and monitoring.

## Sentry

Sign up for a [free Sentry account](https://sentry.io/signup/) and create a new organization.

### Setup for Nestjs server

1. Create a new project with the type `Express`.

2. Copy the `DSN` value from the `Client Keys (DSN)` section and set it as an environment variable called `SENTRY_DSN` in your `.env` file.

### Setup for Nextjs web app

1. Create a new project with the type `Next.js`.

2. Copy the `DSN` value from the `Client Keys (DSN)` section and set it as an environment variable called `NEXT_PUBLIC_SENTRY_DSN` in your `.env` file.

## Deploy Nestjs server + Postgres & Redis to Railway.app

Click the button below to deploy the Nestjs server app to Railway.app. This will create a new Railway.app project and deploy the app to it. You will need to provide the following environment variables:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/7UlZ-K?referralCode=WYM_Zc)

```bash
# Set temporally to dummy and update with value of DATABASE_URL from PostgresSQL database deployed on Railway.app
PRISMA_DATABASE_URL=dummy
# Get those on the alchemy dashboard https://dashboard.alchemyapi.io/
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
# Get this on the sentry dashboard from your Express project in https://sentry.io/settings/your-account/projects/
SENTRY_DSN=
NEST_PORT=3000
PORT=3000
# Used to set CORS and only accept requests from your hasura endpoint. Set temporally to dummy. You will be able to get this on the hasura dashboard https://hasura.io/
HASURA_PROJECT_ENDPOINT=dummy
NEST_HOST=0.0.0.0
# Dockerfile used to deploy the Nestjs server app to Railway.app
RAILWAY_DOCKERFILE_PATH=./production/Dockerfile.nestjs-server
# Page number to get the crypto prices from the coingecko api for each platform (ethereum, polygon, arbitrum). If you want to get more tokens, you can increase this value but it's advised to set an API token for coingecko.
ETHEREUM_COINGECKO_PAGE_THRESHOLD=2
POLYGON_COINGECKO_PAGE_THRESHOLD=1
ARBITRUM_COINGECKO_PAGE_THRESHOLD=1

```

## Hasura Cloud + main postgres db

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
