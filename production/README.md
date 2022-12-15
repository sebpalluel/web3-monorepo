# Deploy this project to production in minutes 🚀

This project is deployed to production using:

- [Vercel](https://vercel.com/dashboard) for the web app
- [Hasura cloud](https://cloud.hasura.io/) for the Hasura GraphQL Server & postgres database with the [Neon service](https://console.neon.tech/)
- [Railway.app](https://railway.app/new/template/7UlZ-K?referralCode=WYM_Zc) for the Nestjs server + Postgres & Redis

Additionally, we use [Sentry](https://sentry.io/) for error tracking and monitoring.

The choice of those services is based on the following criteria:

- Easy to setup and deploy
- Easy to use
- Free tier

## Sentry

Sign up for a [free Sentry account](https://sentry.io/signup/) and create a new organization.

### Setup for Nestjs server

1. Create a new project with the type `Express`.

2. Copy the `DSN` value from the `Client Keys (DSN)` and save it for later. It will be used to set the `SENTRY_DSN` environment variable in Railway. It will report any error that occurs in the Nestjs server.

### Setup for Nextjs web app

1. Create a new project with the type `Next.js`.

2. Copy the `DSN` value from the `Client Keys (DSN)` and save it for later. It will ve used to set an environment variable called `NEXT_PUBLIC_SENTRY_DSN` and `SENTRY_DSN` in your vercel project in order to track issues on the client side, serverless functions and SSR.

## Deploy your web app to Vercel

Click on the button below to deploy the web app to Vercel. This will create a new Vercel project and deploy the web app to it.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsebpalluel%2Fweb3-monorepo&env=NEXT_PUBLIC_SENTRY_DSN,SENTRY_DSN,NEXTAUTH_URL,NEXTAUTH_SECRET,GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID,GITHUB_SECRET,GITHUB_ID,NX_CACHE_DIRECTORY,TOKEN_LIFE_TIME&build-command=pnpm%20nx%20build%20web%20--prod&output-directory=dist%2Fapps%2Fweb%2F.next)

1. Give the name of your project and click on the `Create` button. It will create a copy of the repository on your Github account.

2. Go to your newly created github repository, clone it locally and execute the command `npx nx@latest init` on the root folder to initialize the workspace. Just press enter when this question is asked: `? Which of the following scripts are cacheable? (Produce the same output given the same input, e.g. build, test and lint usually are, serve and start are not)`.
   Select `Yes` for the `Enable distributed caching to make your CI faster`.
   This will update the `nx.json` file with your own `accessToken` and install all the dependencies.

3. It's advised to add the following in your `nx.json`:

```json
"cacheableOperations": [
          "build",
          "affected:build",
          "lint",
          "lint:fix",
          "affected:lint",
          "workspace-lint",
          "format",
          "format:check",
          "format:write",
          "test",
          "affected:test",
          "test-prisma",
          "affected:test-prisma",
          "test-hasura",
          "affected:test-hasura",
          "affected:test",
          "e2e",
          "affected:e2e",
          "build-storybook"
        ],
```

4. Make sure that the `defaultProject` is set to `web` in the `nx.json` file.

5. Update your packages with the command `pnpm update`.

6. You can now push the changes to your remote github repository.

7. Head back to the Vercel project page. You will need to provide the following environment variables on the `Configure Project` card:

```bash
# Get this on the sentry dashboard from your Next.js project in https://sentry.io/settings/${your-account}/projects/${your-project}/keys/
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_DSN=
# Set temporally to an empty string and update with value of your app url
NEXTAUTH_URL=''
# Generate a RSA key pair and set the private key as the value of this env variable (such as in the .env.local file). For more informations, you can refer to the section ### Configure Hasura and Next Auth with same RSA key
NEXTAUTH_SECRET=

# Get those on the google developer console https://console.developers.google.com/ or skip by setting to an empty string
GOOGLE_CLIENT_SECRET=''
GOOGLE_CLIENT_ID=''

# Get those on the github developer console or skip by setting to an empty string
GITHUB_SECRET=''
GITHUB_ID=''
NX_CACHE_DIRECTORY=/tmp/.nx
# Set to how many seconds you want the session to last
TOKEN_LIFE_TIME=2592000
```

3. Click on the `Deploy` button. It will deploy the web app to Vercel.

### Configure your DNS

### Add Hasura integration

https://vercel.com/integrations/hasura

Select your hasura project and your vercel project

- add hasura-vercel-integration image

This will add those env variables to your vercel project with the right values:

```bash
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

## Deploy Nestjs server + Postgres & Redis to Railway.app

Click the button below to deploy the Nestjs server app to Railway.app. This will create a new Railway.app project and deploy the Nestjs Server app to it with Postgres database and a Redis database connected to it. You will need to provide the following environment variables:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/CpqADx?referralCode=WYM_Zc)

```bash
# Set temporally to an empty string and update with value of DATABASE_URL from PostgresSQL database deployed on Railway.app after the creation of the project
PRISMA_DATABASE_URL=''
# Get those on the alchemy dashboard https://dashboard.alchemyapi.io/
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
# Get this on the sentry dashboard from your Express project in https://sentry.io/settings/your-account/projects/
SENTRY_DSN=
NEST_PORT=3000
PORT=3000
NEST_HOST=0.0.0.0
# Used to set CORS and only accept requests from your hasura endpoint. Set temporally to an empty string. You will be able to get this on the hasura dashboard https://hasura.io/
HASURA_PROJECT_ENDPOINT=''
# Dockerfile used to deploy the Nestjs server app to Railway.app
RAILWAY_DOCKERFILE_PATH=./production/Dockerfile.nestjs-server
# Page number to get the crypto prices from the coingecko api for each platform (ethereum, polygon, arbitrum). If you want to get more tokens, you can increase this value but it's advised to set an API token for coingecko.
ETHEREUM_COINGECKO_PAGE_THRESHOLD=2
POLYGON_COINGECKO_PAGE_THRESHOLD=1
ARBITRUM_COINGECKO_PAGE_THRESHOLD=1

```

## Deploy your Hasura instance on Hasura Cloud and setup your databases

1. [Create a new project in Hasura Cloud](https://cloud.hasura.io/projects)
2. Connect it to your repository on the `Git Deploy` tab with the following settings
3. Click on the `Launch console` button to open the Hasura console. Go to the `Data` tab and `Create new Database` tab. Create a new database with the neon service by clicking on the button `Connect Neon Database`. This will create a new Neon database and connect it to your Hasura project.
4. Click on the `Edit` button next to the newly created database, rename it to `default` and update the `Environment Variable` field with `HASURA_GRAPHQL_DATABASE_URL`. Finalize by clicking on the `Update connection` button.
5. Create an other connection to the Postgres database hosted in Railway.app with the name `prisma_nestjs_server` and `PRISMA_DATABASE_URL_HASURA` as an `Environment Variable`. Finalize by clicking on the `Connect Database` button.
6. You should have now have 2 databases connected to your Hasura project. Don't worry about the 'Inconsistent state' warning. It's normal until you haven't fully setup the project. This should go away once all the migrations has been applied on both databases.
