# Deploy this project to production 🚀

This project is deployed to production using:

- [Vercel](https://vercel.com/dashboard) for the web app
- [Hasura cloud](https://cloud.hasura.io/) for the Hasura GraphQL Server & postgres database with the [Neon service](https://console.neon.tech/)
- [Railway.app](https://railway.app/new/template/CpqADx?referralCode=WYM_Zc) for the Nestjs server + Postgres & Redis

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
   This will update the `nx.json` file with your own `accessToken`.

3. It's advised to add the following in your `nx.json`:

```json
{
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
  ]
}
```

4. Make sure that the `defaultProject` is set to `web` in the `nx.json` file.

5. Update your packages with the command `pnpm update`.

6. You can now push the changes to your remote github repository. If you get an error from husky about conflicting packages, check the logs for a solution.

7. Head back to the Vercel project page. You will need to provide the following environment variables on the `Configure Project` card:

```bash
# Get this on the sentry dashboard from your Next.js project in https://sentry.io/settings/${your-account}/projects/${your-project}/keys/
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_DSN=
# Set temporally to an empty string
NEXTAUTH_URL=''
# Generate a RSA key pair and set the private key as the value of this env variable.
# You can use this command to generate your keys `ssh-keygen -t rsa -P "" -b 4096 -m PEM -f jwtRS256.key`
# Next use this command to extract your public key `ssh-keygen -e -m PEM -f jwtRS256.key > jwtRS256.key.pub`
# You can then copy the content of the jwtRS256.key file and set it as the value of the NEXTAUTH_SECRET env variable
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

8. Click on the `Deploy` button. It should deploy the web app to Vercel successfully and assign you a default domain. You can then go to the dashboard.

<img width="1920" alt="dashboard after creation" src="https://user-images.githubusercontent.com/11297176/208073299-fd38cf26-7e89-47c0-896f-260c981b0048.png">

You should now be able to access your web app at the default domain provided by Vercel, here the default production domain is `web3-monorepo-test.vercel.app`.

## Deploy Nestjs server + Postgres & Redis to Railway.app

Click on the button below to deploy the Nestjs server app to Railway. This will create a new Railway.app project and deploy the Nestjs Server app to it with Postgres database and a Redis database connected to it. You will need to provide the following environment variables:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/CpqADx?referralCode=WYM_Zc)

```bash
# Set temporally to an empty string. It will be updated later with the value from DATABASE_URL of the PostgresSQL database deployed on Railway.app
PRISMA_DATABASE_URL=''
# Get those on the alchemy dashboard https://alchemy.com/?r=ba8fc42476de40ad for the respective networks (ethereum, polygon, arbitrum)
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
# Get this on the sentry dashboard from your Next.js project in https://sentry.io/settings/${your-account}/projects/${your-project}/keys/
SENTRY_DSN=
NEST_PORT=3000
PORT=3000
NEST_HOST=0.0.0.0
# Used to set CORS and only accept requests from your hasura endpoint. Set temporally to a dummy url. You will be able to get this on the hasura dashboard later
HASURA_PROJECT_ENDPOINT='https://dummy.com/'
# Dockerfile used to deploy the Nestjs server app to Railway.app
RAILWAY_DOCKERFILE_PATH=./production/Dockerfile.nestjs-server
# Page number to get the crypto prices from the coingecko api for each platform (ethereum, polygon, arbitrum). If you want to get more tokens, you can increase this value but it's advised to set an API token for the coingecko sdk.
POLYGON_COINGECKO_PAGE_THRESHOLD=1
ARBITRUM_COINGECKO_PAGE_THRESHOLD=1
ETHEREUM_COINGECKO_PAGE_THRESHOLD=2
```

Your project should be deployed and look like this:

<img width="963" alt="Your project should be deployed and look like this" src="https://user-images.githubusercontent.com/11297176/208073699-9e79a98e-5b2b-4d09-a4bb-deb92e1d8989.png">

1. Head over to the settings and click on the cross to delete the `Source Repo` and confirm by clicking on the `Disconnect` button.
2. You can delete the created repository on your Github account.
3. Click on the `Connect Repo` button and select the repository created in the previous step.
4. You can update the `Watch Paths` to:

```bash
apps/nestjs-server/**
libs/server/**
package.json
prisma/**
production/Dockerfile.nestjs-server
```

This will avoid triggering a new deployment when you doesn't update code related to the nestjs-server.

5. Go to the `Variables` tab and update the `PRISMA_DATABASE_URL` with the value of the `DATABASE_URL` environment variable of the Postgres database created in the previous step.
6. This should trigger a new deployment of the Nestjs server app to Railway.app. You can check the logs by clicking on the `View Logs` button of the running deployment. Hopefully you should have a successful deployment in a few minutes 🎉.

## Deploy your Hasura instance on Hasura Cloud and setup your databases

1. [Create a new project in Hasura Cloud](https://cloud.hasura.io/projects)
2. Connect it to your repository on the `Git Deploy` tab with the following settings:
   <img width="908" alt="Connect it to your repository on the 'Git Deploy' tab with the following settings" src="https://user-images.githubusercontent.com/11297176/208073881-01e023f2-aeea-4002-91c6-07622ada4c9a.png">
3. Click on the `Launch console` button to open the Hasura console. Go to the `Data` tab and `Create new Database` tab. Create a new database with the neon service by clicking on the button `Connect Neon Database`. This will create a new Neon database and connect it to your Hasura project.
4. Click on the `Edit` button next to the newly created database, rename it to `default` and update the `Environment Variable` field with `HASURA_GRAPHQL_DATABASE_URL`. Finalize by clicking on the `Update connection` button.
5. Create an other connection to the Postgres database hosted in Railway.app with the name `prisma_nestjs_server` and `PRISMA_DATABASE_URL_HASURA` as an `Environment Variable`. Finalize by clicking on the `Connect Database` button.
6. You should now have 2 databases connected to your Hasura project. Don't worry about the 'Inconsistent state' warning. It's normal until you haven't fully setup the project. This should go away once all the migrations has been applied on both databases and you have correctly set the database URLs.
   <img width="1537" alt="You should have now have 2 databases connected to your Hasura project" src="https://user-images.githubusercontent.com/11297176/208074011-f19830cb-9098-4636-8be1-b903a3eca059.png">

## Finalize the setup

At this point, you should have your web app deployed on Vercel, your Nestjs server app deployed on Railway.app and your Hasura project deployed on Hasura Cloud but you need to connect them together.

### Vercel integrations

1. Install the [Hasura integration](https://vercel.com/integrations/hasura) and give it access to your Vercel project.

2. Click on `Configure`, Select your hasura project and your vercel project

<img width="508" alt="Select your hasura project and your vercel project" src="https://user-images.githubusercontent.com/11297176/208074126-792d860c-684d-4ee6-a61c-38e4a42f65bd.png">

This will add those env variables to your vercel project with the right values:

```bash
HASURA_PROJECT_ENDPOINT
NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT
HASURA_ADMIN_SECRET
```

3. Install the [Sentry integration](https://vercel.com/integrations/sentry) and give it access to your Vercel project.

4. Click on `Configure`, Select your sentry project and your vercel project

<img width="1918" alt=" Select your sentry project and your vercel project" src="https://user-images.githubusercontent.com/11297176/208074150-b39a9eb3-bfb9-4233-8a42-5398e733f7b4.png">

This will add those env variables to your vercel project with the right values:

```bash
VERCEL_GIT_COMMIT_SHA
SENTRY_AUTH_TOKEN
SENTRY_PROJECT
SENTRY_ORG
```

### Configure your DNS

Because we are using Next Auth and there is no secure way to send the authentication cookies from the client to Hasura on a different domain (besides of configuring CORS) it's advised to use the same domain for both the web app and the Hasura project.

The easiest way to do this is to [buy a domain in vercel](https://vercel.com/domains) to point to your project.

Once you have done that you will need to configure the DNS on your domain. In our case we are using `www.web3-monorepo.app` as the domain we bought in vercel.

**Warning ! You will need to adapt the DNS settings and subsequent URLs linking to the services with the domain of your choice**.

[Head over to the configuration page of your domain in the dns dashboard](https://vercel.com/dashboard/domains) and add the following records:

1. Setup the certificates for your domain

```bash
### Those are needed by Hasura to resolve the custom domain
CAA 0 issue "letsencrypt.org"
CAA 0 issue "digicert.com"
```

2. [Go to Settings of your Hasura cloud project](https://cloud.hasura.io/projects) in the `Domains` tab and click on the `New Custom Domain` button.

3. Type the subdomain you want to use for your Hasura project and click on the `Add` button. In our case we are using `hasura.web3-monorepo.app`. Keep the tab open as you will need to copy the `Default Hasura Domain` value as `CNAME` and check if the custom domain worked.

4. Go back to the DNS configuration page of your domain and add the following records:

```bash
### This will create a subdomain for the hasura cloud instance, in our case it's hasura.web3-monorepo.app that we link to the default domain provided by hasura
hasura CNAME web3-monorepo.hasura.app
```

As a result, your Custom domain should be validated after a few minutes on the `Domains` tab of your Hasura Cloud project.

<img width="1203" alt="As a result, your Custom domain should be validated after a few minutes on the `Domains` tab of your Hasura Cloud project" src="https://user-images.githubusercontent.com/11297176/208074394-c8dfc48d-aa06-4b90-b185-678cea2635d1.png">

5. [Go to the Railway dashboard](https://railway.app/dashboard), select your project, next your app and click on the `Settings` tab. Then click on the `Custom Domain` button. Type the subdomain you want to use for your Nestjs server app and click on the `Add` button. In our case we are using `nestjs-server.web3-monorepo.app`. Keep the tab open as you will need to copy the default domain value as `CNAME` and check if the custom domain worked.

6. Go back to the DNS configuration page of your domain and add the following records:

```bash
### This will create a subdomain for the nestjs server instance, in our case it's nestjs-server.web3-monorepo.app that we link to the default domain provided by Railway
nestjs-server CNAME web3-monorepo-nestjs-server-production.up.railway.app
```

The result on Railway should look like this:

<img width="1918" alt="The result on Railway should look like this" src="https://user-images.githubusercontent.com/11297176/208073768-37372b56-18ff-4746-b802-5b2aae4ef5d1.png">

Congrats ! You have now setup your DNS to point to your Hasura and Nestjs server instances as subdomains of your client app running in production.

### Update your env variables on Railway, Hasura and Vercel

1. Go to the `Settings` tab of your Railway app and update the `HASURA_PROJECT_ENDPOINT` env variable with the value corresponding to your hasura endpoint. In our case `https://hasura.web3-monorepo.app`. This will setup CORS on the nestjs-server to allow communication coming only from your hasura cloud server.

2. Go to the `Settings` of your [Hasura cloud project](https://cloud.hasura.io/projects) in the `Env vars` tab and enter/edit the following env variables:

```bash
### This is the CORS policy to accept connection only with the URL of the server app running on Railway and your client app running on Vercel + the Hasura cloud instance
HASURA_GRAPHQL_CORS_DOMAIN=https://www.web3-monorepo.app,https://nestjs-server.web3-monorepo.app,https://cloud.hasura.io

### This is the JWT settings for Hasura to validate the JWT token sent by the client app. You will need to copy the public key from the rsa key pair you have generated in the previous step. Use this command to format correctly the "key" and paste it as a value surrounded with "" : `awk -v ORS='\\n' '1' jwtRS256.key.pub | pbcopy`

HASURA_GRAPHQL_JWT_SECRET={
    "key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlE9g9dr5yaq89gr4lnZ1\nyRb2DKisPhrVmAvVPTcXkFrOzQzJvuIVdnyojTxLOTokqP1tdijb72wPUWQaxuBu\nimIoQAQ2l1z/ovNLgzPQh/c2g8rC3Sq3O4sVgdZSErGGtKviHc++a3V/ZHJ45qJg\nrWposj05q8SHQufP6L6N+xu1wwi8CP9LxJh1gp/RnabPggPMRj09wV6unqcMuK/o\nhL6ycfgeTmVGlcCvULN/tncHw34sGnOBE3kQfghR0KRFGR2PwO4GnIknBebul0W7\n+hrUtlyi2fzP5WUn6n88BLu/2cd99sxOkbG9Gk8TMKb30vOb45ut7CWvt7oFfHow\n7wIDAQAB\n-----END PUBLIC KEY-----\n",
    "header": {
        "name": "__Secure-next-auth.session-token",
        "type": "Cookie"
    },
    "claims_map": {
        "x-hasura-username": {
            "path": "$.name",
            "default": ""
        },
        "x-hasura-client-id": {
            "path": "$.clientId",
            "default": ""
        },
        "x-hasura-role": {
            "path": "$.role",
            "default": ""
        },
        "x-hasura-allowed-roles": [
            "user",
            "anonymous"
        ],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": {
            "path": "$.user.id",
            "default": ""
        }
    },
    "type": "RS256"
}

# This is the URL of the Nestjs server app running on Railway
NEST_API_URL=https://nestjs-server.web3-monorepo.app

# This is the postgresql url of your neon hosted database, you can find it in the neon dashboard or in the env already linked to your Hasura cloud project, NEON_DATABASE_URL
HASURA_GRAPHQL_DATABASE_URL=postgres://...

# This is the postgresql url of your database hosted in railway, you can find it in the railway dashboard in the env variables of your app
PRISMA_DATABASE_URL_HASURA=postgres://...

```

After this, Hasura should deploy with the updated variables and you shouldn't have issues of inconsistencies with metadata. If you do, you can try to reset the metadata by clicking on the `Reload` button in the `Data` tab of your Hasura cloud project console or try to redeploy.

3. Go to the `Settings` tab of your Vercel project and update the following env variables

```bash
# This is the URL of your Hasura cloud graphql api, In our case it's https://hasura.web3-monorepo.app/v1/graphql
# be sure to set it to the subdomain of your client app running in production, otherwise your requests will not contain the session cookie containing the JWT token and you will not be able to get request from Hasura
HASURA_PROJECT_ENDPOINT=
NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT=

# This is the URL of your client app running in production, In our case it's https://www.web3-monorepo.app. Set this variable only for production to avoid issues on other environments. The VERCEL_URL variable is automatically set by Vercel but it's safer to set it manually for production.
NEXTAUTH_URL=

## OAuth providers you can use optionally to login to your app. Once set you will see the login buttons on the sign in page.
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
```

4. Go to the `Deployments` tab of your Vercel project and redeploy your app.

Once done you should be able to access your app in production and login successfully !

You can check if everything is working by going to the `Me` page to receive your profile information from Hasura if you have signed up with Google/Github or with an email + password.

<img width="1800" alt="Screenshot 2022-12-16 at 11 08 44" src="https://user-images.githubusercontent.com/11297176/208075296-8268d199-954c-454b-83a5-8636cf0fdd90.png">

The connection with a wallet should also work but no information is kept in the database.

To be sure the Nestjs server is working correctly, you can go to the `Wallet` page and enter a blockchain wallet address to query the balance. This will also create a websocket subscription to showcase the subscription channel feature of Hasura.

<img width="1920" alt="Screenshot 2022-12-16 at 11 07 46 (2)" src="https://user-images.githubusercontent.com/11297176/208075249-c1fd216a-e70d-4a5c-aa6f-fb834a5d09b1.png">

Congrats 🎉🎉🎉 ! You have now setup your app in production with Hasura cloud, Railway and Vercel.
