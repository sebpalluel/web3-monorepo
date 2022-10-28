<p align="center"><img src="https://user-images.githubusercontent.com/11297176/195363494-6cc53b41-958d-4493-88b3-2cbfc65a2594.png" width="50%"></p>

[![CodeFactor](https://www.codefactor.io/repository/github/sebpalluel/web3-monorepo/badge)](https://www.codefactor.io/repository/github/sebpalluel/web3-monorepo)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=alert_status)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=bugs)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=code_smells)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

---

> All you need to start your web3 service, 🔋 included

## Quick install

1. First you need to install pnpm in your machine `npm install -g pnpm`
2. Install all the dependencies `pnpm install`
3. Create a .env

   **[Refer to this section to set your .env with the needed API keys](#env-mandatory)**

4. Then you can run the project `pnpm start`

5. Make sure to apply the migrations to the prisma db and client once the container is running `pnpm prisma:migrate`

## Project structure

**View in [NX Graph](https://sebpalluel.github.io/web3-monorepo/?groupByFolder=true&select=all)**

[![name](https://user-images.githubusercontent.com/11297176/198037536-5aaea3b3-4da5-45cf-b5b4-9b1f72f170d3.png)](https://sebpalluel.github.io/web3-monorepo/?groupByFolder=true&select=all)

### Access to the services and app URLs

- [**Hasura console**](http://localhost:9695/console)

The console is used as a backoffice to handle the graphQL server and to innerlink all the microservices.

- [**React Next app**](http://localhost:3000/)

This is the main web app client used to access the whole array of services.

- **Prisma Studio**: `pnpm prisma studio`

The prisma studio is used to offer an admin interface to the database used by the Nestjs Server app.

- [**Mailhog**](http://localhost:8025/)

This is the mail-catcher where all the mail are going in dev environment.

- [**Walt.id IDP KIT**](http://localhost:9080/api/swagger)

This is the toolkit server stack to access all the [DID](https://www.w3.org/TR/did-core/) functionalities from walt.id: SSI, Wallet and NFT.

You can [check the doc here](https://docs.walt.id/v/idpkit/idpkit/readme) for more information regarding the API.

- [**Keycloak IAM server**](http://localhost:8100/auth/)

[Keycloak Identity and Access Management server](https://www.keycloak.org) is used as a provider for Next Auth. The IDP Kit from walt.id is used through the OpenID Connect protocol.
The login to access the [**administration console**](http://localhost:8100/auth/admin/master/console/#/master) is `admin@boilerplate.com / password`

### Apps and Libs

- `apps/web`: a [Next.js](https://nextjs.org) app
- `apps/web-e2e`: Cypress e2e test for the web app
- `apps/storybook-main`: Main Storybook for the whole project (ui/web)
- `apps/nestjs-server`: a [Nest.js](https://nestjs.com) server app used to extend Hasura functionalities
- `hasura`: contain the config / metadata / migrations / seeds for the [Hasura](https://hasura.io/) service
- `prisma`: Prisma database schema and migrations
- `tools`: Set of tools to to be used for DX (Developer Experience) and testing purposes.
- `waltid-idpkit`: Contain the config files, the encryption keys for the DID server and the registered OIDC client.
- `keycloak`: Contain all the realm settings loaded by the keycloak container
- `libs/dlt/types`: contain the typescript types/interfaces related to the DLT (Blockchain) used in the project
- `libs/gql/[user, admin]`: a library containing all the GraphQL queries and mutations and the generated schemas to be used on the web app. It is divided on 3 folders: `user`, `admin` and `anonymous` depending of the role of the user.
- `libs/gql/thegraph`: a library that use [The Graph](https://thegraph.com/en/) protocol in order to query data directly from smart contract on the blockchain.
- `libs/hasura-adapter`: Next-auth adapter for the Hasura service.
- `libs/hasura-fetcher`: Fetcher functions to query the Hasura service.
- `libs/hasura-utils`: Utilities to interact with Hasura.
- `libs/logger`: Isomorphic logger (a small wrapper around console.log)
- `libs/next-auth`: Contain all the configs for [Next-Auth](https://next-auth.js.org/)
- `libs/test-utils-db`: All the utilities relating the handling of db operation on the context of testing, for ex: seeding/deleting.
- `libs/test-utils-functions`: All the utilities functions common to every test runner.
- `libs/test-utils-gql`: Offer an sdk and different test user clients to be used on test in order to interact with the hasura service.
- `libs/ui-components`: React reusable components library
- `libs/ui-shared`: Functions and assets shared in the context of the UI library
- `libs/ui-theme`: Contains all the specification for the global style and components style
- `libs/workspace`: Contain all the generators and tooling dedicated to maintaining the NX workspace.
- `libs/server/api`: API service to query the external services (ex: CoinGecko api)
- `libs/server/alchemy`: Low level service to interact with the Alchemy RPC provider
- `libs/server/arbitrum`: Service to interact with the Arbitrum RPC provider
- `libs/server/ethereum`: Service to interact with the Ethereum RPC provider
- `libs/server/polygon`: Service to interact with the Polygon RPC provider
- `libs/server/ethers`: High level service to interact with EVM compatible blockchains
- `libs/server/common`: Common functions used in the context of the server
- `libs/server/cryptocurrencies`: High level service to get data related to cryptocurrencies: price, market cap, etc.
- `libs/server/prisma`: Low level service to interact with the prisma database
- `libs/server/task`: High level service for task scheduling, cron jobs, etc.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

# The Stack

## Docker

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/198038805-76a9dc37-538e-41f5-93c5-0e372d43ae9a.png" width="15%"></p>

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```shell
pnpm prisma:dev:deploy
```

In order to run all the tests, you can run the following command. (**You should stop the nestjs server before the tests because it's bound to the same port**)

```shell
pnpm all:test
```

If you want to run the tests for a specific app, you can run the following command:

```shell
npx nx test nestjs-server
```

To run the test on a specific library, you can run the following command:

```shell
npx nx run alchemy:test
```

If you want to run only the NestJS server, you can use the following command.

```shell
npx nx serve nestjs-server
```

## Next.js

The web app is using [next.js meta-framework](https://nextjs.org/) v13 in order to leverage serverless api functions and react hybrid SSR/SSG/PWA capabilities. The web app is using the [next-auth](https://next-auth.js.org/) library to handle the authentication and the authorization and the ChakraUI components library.

##  Hasura

The [Hasura service](https://hasura.io/) is used as a GraphQL API gateway to the Postgres database and for introspection into the prisma database. It is also used to handle the authentication and authorization of the users through a Next-Auth adapter.

It act as the single endpoint for the web app to query the database and the external services like the Nestjs Server app in a federated way.

## Prisma ORM

The [Prisma ORM](https://www.prisma.io/) is used in the context of the Nest.js Server app to interact with the prisma Postgres database. It is used to generate the database schema and the migrations and offer an admin with [Prisma Studio](https://www.prisma.io/studio).

## Nest.js

The [Nest.js](https://nestjs.com/) framework is used to extend the Hasura functionalities. It serves as a complementary layer to Hasura to handle the business logic of the application and to interact with the external services like the blockchain and the crypto APIs. Currently it serves as a service to handle the retrieval of the user's wallet balance of ERC20 tokens on the Ethereum/Polygon/Arbitrum blockchains. More info in the [Nest.js Server app README](./apps/nestjs-server/README.md).

## Storybook

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/198039106-fa335322-4416-4f3f-967c-f6c663963ab2.png" width="35%"></p>

You can [**find the Storybook for this project here**](https://63511cd2e1271125e3654edf-szwfakvhbw.chromatic.com/)
Stories are defined on the `libs/ui/components`. We use [interaction testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing) with the storybook version of jest and testing library in order to provide dynamic demonstration of the usage of individual components along with testing.
Aditionnaly, the service [chromatic](https://www.chromatic.com) is launched on the CI in order to spot and approve/decline UI changes.

To create a new component, you can use the custom nx generator provided on this project `@boilerplate/workspace - component` provided from the `libs/workspace`. It will create the boilerplate code for the react component, the stories file and the jest spec file.

## Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Husky](https://github.com/typicode/husky) Git hook library used to execute ESLint and Prettier on staged files before a commit.
- [Cypress](https://www.cypress.io/) test runner for E2E and components test
- [Graphql Code Generator](https://www.the-guild.dev/graphql/codegen/) a generator for the graphql schemas and a client builders with provided queries.
- [The Graph: Graph Client](https://github.com/graphprotocol/graph-client) a library to easily query the data from smart contract on supported blockchain such as Ethereum.

## Libraries

### Next Auth

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224807-718c7649-b946-423e-9449-92ef244a6816.png" width="15%"></p>

This project use Next-Auth to offer different way of authentication.

You can offer login with OAuth2 providers from Google and Github by providing the corresponding env variables.

Additionally, the boilerplate offer a way to authenticate through email + password credentials with the adapter to handle the request with Hasura. You can find this adapter in `libs/hasura/adapter`

### Waltid-idpkit

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224973-525515ff-73f4-4d9d-925d-ba3090ee8974.png" width="15%"></p>

**This project use the IDP kit in order to offer web3 sign in with your DID.**

<br/>

<details>
<summary> <b>In order to test it, you will need to follow this steps:</b> </summary>

1. Access the [sign in page](http://localhost:3000/auth/signin) and click on the `Walt.id IDPKit` button
2. Login a new account on the walt.id web wallet by entering any credentials or by connecting your wallet
3. You will be presented with a page to ask you to get the needed crendentials to be able to connect to the service. Click on the 'Fetch credential from issuer' button.
   <img width="100%" alt="Screenshot 2022-10-12 at 16 16 28" src="https://user-images.githubusercontent.com/11297176/195373255-f99bdf2b-58cc-4456-821e-4d19903bab13.png">
4. Put any credentials to go through the fake login page of the 'Demo Issuer Portal'
   <img width="100%" alt="Screenshot 20221004 at 19 00 19" src="https://user-images.githubusercontent.com/11297176/195373255-f99bdf2b-58cc-4456-821e-4d19903bab13.png">
5. Confirm the claim of the Verifiable ID document.
   <img width="100%" alt="Screenshot 2022-10-12 at 16 16 49" src="https://user-images.githubusercontent.com/11297176/195373642-450081d1-1c77-4123-84e6-d118ec023ef1.png">
6. Accept the 'Received Credentials'
   <img width="100%" alt="Screenshot 2022-10-04 at 19 01 53" src="https://user-images.githubusercontent.com/11297176/193881578-29980b8f-6718-4ebc-8697-bd437a7e2d13.png">
7. Accept the 'Connection request' of 'Verifiable ID document'
   <img width="100%" alt="Screenshot 2022-10-12 at 16 17 45" src="https://user-images.githubusercontent.com/11297176/195374612-026bc3ce-d9fd-4cf3-9bf4-e52d792989fc.png">
8. The user is logged in effectively and created on the DB through Hasura (Next Auth do it automatically for a new account)
   <img width="100%" alt="Screenshot 2022-10-12 at 16 35 23" src="https://user-images.githubusercontent.com/11297176/195374649-7b13bab2-bdb1-4a74-aec5-ff6a14061682.png">

</details>

<br/>

The idpkit is configured to use the [Demo Issuer Portal](https://issuer.walt.id/login) in order to get the credentials. This is a fake portal that will give you the credentials you need to go through the process.

This implementation of the IDP kit is by no mean production ready and is only here to show you how to use it. You will need to implement your own issuer portal and configure the IDP kit to use it.

An other use case of the IDP kit is to use it with the [NFT Kit](https://docs.walt.id/v/idpkit/concepts/identity-provision-via-nfts) in order to sign in with an NFT. You can find the implementation of this use case in the tutorial [Login with NFTs | Next.js](https://docs.walt.id/v/idpkit/tutorials/login-with-nfts-or-next.js)

### Keycloak

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224605-402a6adc-c25e-4ca9-a88c-42b3269e7273.png" width="30%"></p>

We use Keycloak as the main provider to authenticate with credentials or federated sign in with google. The IDP kit server is linked through with OpenID Connect protocol. Keycloak is then used as a provider by Next Auth to handle all the authentication process on the web application.

**For any operation you do regarding the settings of keycloak, don't forget to export, rename the file to `master-realm.json` and replace the existing file in the `keycloak` folder.** Otherwise your settings will not be persisted if you reset your containers or on the CI env.
**Also, for each exports, your secret will be erased from the config file**
`"secret": "**********"`, `"clientSecret": "**********"`.
You will have to set the secrets with the one you saved but make sure to not do that on production environment.

For convenience purpose everything is set correctly on `master-realm.json` in order to use Keycloak directly with your app.

You will need to follow this steps to provide Keycloak with your own environment.

1. Create a new Client with confidential Access Type

- Go to the [Clients section](http://localhost:8100/auth/admin/master/console/#/master/clients) and add a new client.
- Choose a client id, for instance `myApp`.
- Select the Client Authentication option on the next page
- On the settings page, set the Home URL, Valid redirect URIs, Web origins according to your app URL. In our case that would be `http://localhost:3000/*`
- Click on the Credentials tab to reveal and copy the client secret.

You now have the id and secret of the client to populate in `KEYCLOAK_ID` and `KEYCLOAK_SECRET`

2. Add IDPKit to Keycloak as a OpenID Connect provider

Check [this tutorial](https://docs.walt.id/v/idpkit/concepts/iam-keycloak-integration) for more information of how to register your own instance of IDP kit on the realm.
To register your client as described in the tutorial you can use the following command:

```shell
curl --location --request GET 'http://localhost:3333/api/balances/eth/0xb21090C8f6bAC1ba614A3F529aAe728eA92B6487'
```

Be sure to copy the id and secret from the output in order to register it on keycloak.
As you are running both keycloak and idpkit from docker, the resulting address in `Discovery endpoint` should be `http://idpkit:9080/api/oidc/.well-known/openid-configuration`

### GraphQL code generator

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196225336-16072309-c798-4263-85ed-b5332509dc99.jpeg" width="20%"></p>

The command `pnpm graphql-codegen` will launch the `graphql-codegen`script. All the codegen definitions are written in the file `codegen.yml`.

The generator is divided in two parts, corresponding to the role of `user` and `admin`, targeting the graphql hasura server for those respective roles.

Each one have a grapqhl schema and an ast schema generated and specfic sdk.

**User**

The graphql queries definition are defined in `libs/gql/user/queries`. We use the React-Query module in order to facilitate the querying the data for the user role in the fontend client. The hasura service will read the auth cookie in order to validate the request. We also generate a generic sdk in order to facilitate testing of user query with jest on `libs/test-utils/gql/src/generated/test-user.ts`where we provide a Bearer JWT instead of a cookie because jest is not capable to provide one.

**Admin**

The graphql queries definition are defined in `libs/gql/admin/queries`. We use a generic sdk with a simple fetch query in order to facilitate the querying the data for the admin role. Those queries are made on the server side of the frontend. Hasura will allow the request through the providing of the `X-Hasura-Admin-Secret`.

### The Graph: Graph Client

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224114-2521564d-6da6-4ee0-b2d6-e09655477913.png" width="20%"></p>

The [Graph Client library](https://github.com/graphprotocol/graph-client) is used in order to interact easily with any smart contract on blockchain supported by [The Graph protocol](https://thegraph.com/en/).

The library located in `libs/gql/thegraph` integrate the client and the toolset from The Graph in order to generate the graphql code to be used by the web app to fetch live data from desired smart contracts.

The query are defined in `libs/gql/thegraph/queries` and the smart contract sources are defined in `libs/gql/thegraph/src/.graphclientrc.yml`. When updating queries or smart contract sources, be sure to launch the command `pnpm thegraph-build` in order to generate the new version of the generated files located in `libs/gql/thegraph/.graphclient`.

You can find an example of live query of smart contract on the [Blockchain page](http://localhost:3000/blockchain).

## Test

### Jest

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196227843-0616474f-f801-49ad-bf87-b0f27baac0f2.png" width="25%"></p>

Jest is the test-runner used for unit and integration tests.

To run all the jest test on affected code, you can use the command:

```shell
curl --location --request GET 'http://localhost:3333/api/balances/arb/0x9a8eC29B75Bc10d68D97Dce73fD3Bbec43752870'
```

```shell
curl --location --request GET 'http://localhost:3333/api/balances/poly/0x3c89fC868803A2478C2E875A97299F240b0290C4'
```

You should receive an `Error 400` if the address is not valid or if you enter an invalid chain name.

```shell
curl --location --request GET 'http://localhost:3333/api/balances/poly/0xWasaWasaWasaWassup'
```

**To proceed, simply copy the value of the cookie `next-auth.session-token` once you login and paste the value for each users**

The corresponding logins are:

- alpha_admin@test.io / Qwerty12345#
- beta_admin@test.io / Qwerty12345#
- sebpalluel@gmail.com **(change it with your own google account globally in the workspace)**

You can check the tests on <mark>auth.cy.ts</mark> for example usages of thoses utilities.

## NX

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="20%"></p>

🔎 **Smart, Fast and Extensible Build System**

### Categories of libraries

In a workspace, libraries are typically divided into four different types:

#### Feature

Libraries that implement “smart” UI (e.g. is effectful, is connected to data sources, handles routing, etc.) for specific business use cases.

#### UI

Libraries that contain only presentational components. That is, compo- nents that render purely from their props, and calls function handlers when interaction occurs.

#### Data-access

Libraries that contain the means for interacting with external data services; external services are typically backend services.

#### Utility

Libraries that contain common utilities that are shared by many projects.

### Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
- `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
- `npm install --save-dev @nrwl/web`
- [Node](https://nodejs.org)
- `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@boilerplate/mylib`.

### Development server

Run `nx serve web` for a dev server. Navigate to <http://localhost:3000/>. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p align="center"><img width="35%" src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## Configure the project with your own `.env` (mandatory)

<a name="env-mandatory" />

**In order to run the project, you need to configure the following environment variables in you `.env`:**

### Alchemy

The Nestjs App uses [Alchemy](https://alchemyapi.io/) as an RPC provider for the Ethereum, Polygon and Arbitrum blockchains. You need to create an account and get an API key for thoses:

```.env
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
```

### Provide the .env file to the github action CI job

The CI pipeline on github action will fail if you don't provide the Alchemy api keys as it's needed for the Nestjs Server app.

In order to do that, you need to:

1. Go to the github repository `Settings`
2. Go to the `Environments` section
3. Create a new environment called `staging` (or any other name corresponding to the environment you want to deploy)
4. Create a new `Environment secrets` with the key `ENV_FILE` and the value of the content of your `.env` file in the base64 format (you can use this command `base64 -i .env` to get the base64 value of your `.env` file)

## Configure the project with your own `.env` (optional)

**The following variables are optional, they are already set for you in the `.env.local` but you need to set them in your private `.env` if you want to use any of the related feature with you own project:**

### Google OAuth provider

Follow [this tutorial from google](https://support.google.com/cloud/answer/6158849?hl=en) to setup your own OAuth provider

Once you have retrieved your <mark>client id</mark> and <mark>client secret</mark> assign them in `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` located in the file `.env.local`

### JWT secret keys

In order to secure your JWT authentication provided by [Next Auth](https://next-auth.js.org/) you are going to need to generate your own RSA-256 keys.

<mark>Important !</mark> For testing purpose, public and private keys are provided on this folder `waltid-idpkit/data/OIDC/keystore/keys/c047f4e42cf54b66ad154d8ce51e03ef`. You are going to need to generate your own. For that, please refer to the section [Configure Hasura and Next Auth with same RSA key](#configure-hasura-and-next-auth-with-same-rsa-key). The keys provided to the idpkit container will need to be the same in order for the authentication process to work.

### Configure the OIDC client on the IDPKIT server

1. Register a client with the IDP Kits CLI or the API exposed:

```shell
curl --location --request GET 'http://localhost:3333/api/balances/bitconnect/0xb21090C8f6bAC1ba614A3F529aAe728eA92B6487'
```

To be noted, a cron job is running every 5 minutes to update the cryptocurrencies market value from the coingecko api. You should see a log `Cryptocurrencies data fetched and stored in cache` that show it's working effectively. This data is stored in the cache and should be reflected on the balanceUsd fields of the response.

The different optimization should make the second call to the same route near instant. The first call will take a bit longer because it's fetching the data for each missing token metadata from the alchemy rpc provider. This is visible in the logs `Fetched ${newTokensData.length} token data for ${network} and stored it in cache`.

For each call to a different address, a wallet will be created into the prisma database storing the address and the tokens total balances in usd.

Here is the command to check the wallets created in the database.

```shell
npx prisma studio
```

For existing wallet, the balance will be updated according to the new market value fetched from the coingecko api.

The coingecko api might be free but it has a limit of request per minute. If you reach this limit, you will see an error in the logs `Error: Request failed with status code 429` or `Error: HTTP Request timeout after 30000` and the cron job will stop working. You can change the cron job interval in the `apps/nestjs-server/src/task/task.service.ts` file and the number of pages fetched for each platforms in the .env.local file.

```sh
## real limit is 50
ETHEREUM_COINGECKO_PAGE_THRESHOLD=2
## real limit is 20
POLYGON_COINGECKO_PAGE_THRESHOLD=1
## real limit is 4
ARBITRUM_COINGECKO_PAGE_THRESHOLD=1
```

## Challenges

### Unique identifier for each cryptocurrencies

With the emergence of L2 (Optimism, Arbitrum, Polygon), forks (like Ethereum Classic) and other EVM compatible DLT it's becoming more and more difficult to identify a cryptocurrency solely by its name or symbol. It's also possible to have multiple tokens with the same symbol on different DLT (like USDT as OMNI, ERC20, TRC20 token) or multiple tokens with the same name (like Wrapped Bitcoin).

This article is developing on this issue and it draw as a conclusion that we need a global, cross-chain standard that is yet to be adopted: <https://philippsandner.medium.com/unique-referencing-and-identification-in-the-token-universe-cross-chain-worldwide-and-85f7741c92d5>
The name of this standard is: The Uniform Token Locator (UTL) - A Concept to Identify Tokens Uniquely, Cross-Chain, Worldwide, and Fork-Resilient —

This project will focus on the Ethereum Ecosystem and will use the EIP-3770 standard to identify each token from their respective EVM-based Chains: <https://eips.ethereum.org/EIPS/eip-3770>. To be noted, the EIP-3770 standard is a draft and is not yet adopted by the Ethereum community.

### Token price

The price of a token is a very important information for a user. It's also a very volatile information. The price of a token can change in a matter of seconds. It's also possible to have multiple sources of price for a token. For example, the price of a token can be provided by a centralized exchange (like Binance), a decentralized exchange (like Uniswap) or a price oracle (like Chainlink).

In our case, we will use the price of a token provided by the [Coingecko API](https://www.coingecko.com/en/api/documentation) that is centralized but used broadly into the DLT ecosystem for it's reliability. The Coingecko API is also free to use and doesn't require any authentication.

The API route used in our case is `https://api.coingecko.com/api/v3/coins/market` with the following parameters: `vs_currency=usd&order=market_cap_desc&per_page=250`. This route will return the top 250 tokens by market cap in USD. Additionally we are using as dynamic parameters the `page` and `category` parameters. The `page` parameter will be used to paginate the results and the `category` parameter will be used to get the token specific to each supported chains. So in our case we will have 3 categories: `ethereum-ecosystem`, `polygon-ecosystem` and `arbitrum-ecosystem`.

```ts
const res = this.coinGeckoSdk.coinMarkets({
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: 250,
  page,
  category: chain.coingecko.category,
});
```

In order to optimize the fetch from Coingecko, we will limit the number of pages fetched for each chains. This trade off will allow us to have a good coverage of the most popular tokens on each chains and will avoid storing a lot of dead tokens. For example, the Ethereum ecosystem has more than 2500 tokens and we will only fetch the top 500 tokens by market cap. We will limit the number of the token fetched for the Polygon ecosystem and Arbitrum to 250.

Those parameters can be changed in the `.env.local` file.

The Coingecko API doesn't provide a way to get at the same time the coin `contract_address` and the market data. The API call to get all the coins with their `contract_address` is very slow and will sometime make more than 20 seconds to complete. I've decided to download the json of the list to avoid doing this call every time the server boot up. The list is downloaded from the following route: `https://api.coingecko.com/api/v3/coins/list`. The path for the json file is `libs/dlt/types/src/lib/allCryptoFromCoingecko.json`. This file can be updated later if new coins need to be supported.

In order to avoid configuring redis for the cache, we are using the `memory` cache strategy. This strategy is not recommended for production but is good enough for this project. We are using the [`CacheModule` from NestJS](https://docs.nestjs.com/techniques/caching#in-memory-cache) to store the token data set.

As we want to have an updated price regularly, we will use the [task scheduler from NestJS](https://docs.nestjs.com/techniques/task-scheduling) to update the token list every minutes. This task named `fetchCryptocurrenciesDataAndStoreInCache` will be executed in the `nestjs-server` app with the `@server/task` service. Currently, the task is executed every 5 minutes but can be changed in the `apps/nestjs-server/src/task/task.service.ts` file.

### Token balance for an address

In order to get the balance of a token for a specific address, we will use RPC providers. The RPC providers will be configured in the `.env.local` file. The RPC providers will be used by the `@server/ethers` service.

An other solution could have been to deploy our own full node with Geth for Ethereum Mainnet, ArbOS for Arbitrum and Bor for Polygon but it's a tedious task and would require deploying an expensive VPC.

Ethereum is a very well established blockchain and has a lot of RPC providers with a good uptime. For example, Infura is a very reliable and well known RPC provider. As Polygon and Arbitrum chains are relatively new, we will have to use a different RPC provider. [QuickNode](https://www.quicknode.com) appear to be the only one with [Alchemy](https://www.alchemy.com) and [Chainstack](https://chainstack.com) to support the tree chains on mainnet.
Because I'm (reasonably) lazy 😚 I'm going to use [the built in solution from Alchemy to retrieve the balances for the three platforms](https://docs.alchemy.com/reference/alchemy-gettokenbalances) `alchemy_getTokenBalances`.
The landscape of DLT is moving fast so I think it's clever to rely on a SaaS provider to avoid having to maintain our own infrastructure.
Nevertheless I'm going to use the ['Branch By Abstraction' architecture](https://martinfowler.com/bliki/BranchByAbstraction.html) to facilitate the transition to an other API if Alchemy is not doing the job anymore. With this architecture, it's also possible for the server to 'auto-heal' in case the API is down and switch to an other one, offering more resilience for this critical feature.
Nest is natively build around this concept of abstraction so we will leverage it to implement this feature.

**Disclaimer, I was not able to use the `@server/wallet` library because of an [unresolved NX issue with buildable libraries](#nx-issue-build)**
![graph-5](https://user-images.githubusercontent.com/11297176/199849869-3545a30e-91bb-45a9-87df-8b642e510847.png)

<!-- TODO add screenshot + link to the nx graph to show the dependency graph with wallet/ethers/alchemy (explain onion architecture advantage even if it seems a lot of boilerplate code at first) -->
<!-- The Alchemy SDK is a wrapper around the ethers.js library -->
<!-- http://127.0.0.1:4211/?groupByFolder=true&traceStart=nestjs-server&traceEnd=alchemy&traceAlgorithm=all -->
<!-- TODO create a service Coingecko to follow the same principle as alchemy linked to the crypto-currencies service, maybe add a coingecko ping to check if the api is up and offer a fallback yet to be implemented, for ex coinmarketcap (simulate this in test) -->

Following the onion architecture principle, we will create a `@server/wallet` service that will be the entry point for the wallet feature. The `@server/wallet` service will use the `@server/ethers` service to interact with the ethereum blockchains.
The `@server/ethers` service will use the services corresponding to the three chains we support on the ethereum ecosystem: `@server/ethereum`, `@server/polygon` and `@server/arbitrum`.
Those three services will use as the last layer of abstraction the `@server/alchemy` service to interact with the blockchain through the provided `alchemy-sdk`.

Also, following the ['Practical test pyramid'](https://martinfowler.com/articles/practical-test-pyramid.html) we are going to focus on the integration tests for the wallet feature. For the other modules we are going to do integration and unit testing with test doubles (mocks) as we want to avoid calling the Alchemy SDK for real and test what's already been tested in wallet. The granularity of the test should be finer as we go deeper so the main focus is on the alchemy service. This will be particularly useful if we want to switch or add another API provider without causing regression.

### Optimizing balances route while getting an updated balance

As we are relying on DLTs and RPC providers, the response time of the balances route can be slow. In order to improve the user experience, we are going to use the [NestJS cache module](https://docs.nestjs.com/techniques/caching) to cache the response of the balances route. This approach rather than storing the balances in a database will allow us to have a fast response time and a low cost infrastructure. The other advantage is to rely more on the DLT as the ultimate source of truth, henceforth making our service more decentralized in nature.

### Store some wallet info in the database

As we are using the cache to store the balances, we are going to store the wallet info in the database. This will allow us to have a more reliable and persistent storage of the wallet info. The wallet info will be stored in the `wallet` table. The data we want to store are the address and the totalBalance of the portfolio. We also want to store the last time the balance was updated. This will allow us to know if the cache is up to date or not. Lastly an interesting data would be the pending transactions. This will allow us to display a notification to the user if there is a pending transaction and could be also useful for debugging, for instance when there is not enough Gas attached to a transaction.
We could store other data metrics like the total number of transactions, the total number of tokens, the total number of tokens with a non-zero balance, etc. but we will not do it for now.

### Handle the calculation of the token balance with decimals

The ERC20 standard on Ethereum define the number of decimals for a token. This is a number between 0 and 18 that represent the number of decimal places in the token. For instance, the [DAI token](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f) has 18 decimals. The [USDC token](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) has 6 decimals. This means that the balance of a DAI token is the number of DAI tokens in the wallet multiplied by 10^18.
In order to display the balance of the token in the right unit, we are going to use the `decimals` property of the token. This property is not available on [CoinGecko](https://www.coingecko.com) but with the Alchemy SDK so we unfortunately need to fetch the token info for each token held in the wallet:

```ts
function fetchTokensMetadata(
  sdk: Alchemy,
  tokenAddresses: string[]
): Promise<TTokenData[]> {
  const promises: Promise<TTokenData>[] = tokenAddresses.map((tokenAddress) =>
    sdk.core.getTokenMetadata(tokenAddress).then((res) => {
      const tokenData: TTokenData = {
        ...res,
        contractAddress: tokenAddress,
      };
      return tokenData;
    })
  );
  return Promise.all(promises);
  // return result as TTokenData[];
}
```

This call is very heavy so we are going to cache the result. This will allow us to avoid calling the Alchemy API each time. The fetch will be done only if a token is not found in the cache. In that case we will fetch all the missing tokens info and update the cache.
That way the server should be very fast to respond to the client once this period of initialization has been done. For more info, you can check the function `fetchTokensMetadataAndUpdateTokenCache`

Now that we have the decimals for each tokens, we are going to use this information to calculate the balance of the token in the right unit. This process is done in the `calculateTokenBalance` function.

The format we get for the token balance from the Alchemy API is a number in the hexadecimal bytes32 format. We are going to use the `ethers` library to convert this number to a decimal number. Then we are going to divide this number by 10^decimals to get the balance in the right unit, you can find this operation in the function `convertToBalanceTokenData`.

## Possible improvements

### Add a new currency to the portfolio

We have chosen to limit the fetch on coingecko to the tokens with the most value. Some tokens like [this one](https://etherscan.io/token/0x515669d308f887fd83a471c7764f5d084886d34d?a=0xb21090c8f6bac1ba614a3f529aae728ea92b6487) that is hold in [this wallet](https://etherscan.io/address/0xb21090c8f6bac1ba614a3f529aae728ea92b6487) don't have any value. As such it will be displayed as `Unknown`.

```ts
if (!cryptocurrency) {
  logger.error('Cryptocurrency not found');
  cryptocurrency = {
    name: 'Unknown',
    symbol: 'Unknown',
    decimals: 18,
    current_price: 0,
    address: tokenBalance.contractAddress,
  };
}
```

We could add a new feature to add a new token to the list of token fetched.
This feature could be available in the `Settings` page. The user could be able to add a new token by entering the address of the token.
The `@server/ethers` service would be responsible to check if the address is a valid ERC20 token address.
Otherwise, we could simply pay for the coingecko api to not be limited by the number of coin fetched.

### Track the pending transactions and offer a websocket route for the client to subscribe to

Alchemy provide a [Subscription API](https://docs.alchemy.com/reference/subscription-api) through websocket to keep in sync the wallet balance with new transactions. To be noted: This feature is currently not available for Arbitrum. We could use this feature to update the wallet data in real time. This would allow us to display the updated balance without having to refresh the page.

### Track the current price of the tokens

An other websocket could be used to track the current price of the tokens. This would allow us to display the current price of the tokens in the portfolio. This would also allow us to display the current price of the tokens in a `Token` page. It would simply stream the data received from the coingecko api in the cron job schedule in the task manager.

### Implement an alternative to the coingecko api

The coinmarketcap api could be leveraged to get the current price of the tokens as an alternative to the coingecko api. It would be particularly useful for an `auto-heal` of the server in case the coingecko api is down or rate limited.

### Implement an alternative to the alchemy api

There is many options for rpc providers. We could implement an alternative to the alchemy api. This would also be useful for an `auto-heal` of the server in case the alchemy api is down.

### Use testnet instead of mainnet for the development

It would be wise to use the testnet networks, Polygon Mumbai, Arbitrum Goerli and Ethereum Goerli in local development to be able to test and implement more of the wallet features with faucets. An other option would be to use the [Hardhat Network](https://hardhat.org/hardhat-network/) to simulate the DLT.

### Link the nest-js server to the hasura graphql api

The nest-js server could be linked to the hasura graphql api. This would allow the client to fetch the data from the graphql api instead of the nest-js server. This would also allow the client to subscribe to the websocket with ease thanks to the streaming subscription feature native to hasura. This could be done swiftly by adding the the prisma database and by tracking the wallet table in hasura. Hasura could also be used to provide user credentials to the nestjs-server through the JWT claims. An other advantage would be to implement a rate limit on hasura to avoid the server to be overloaded by the client.

## How to

### Generate a new nest library with nx

1. run nx generator:

```zsh
nx generate @nrwl/nest:library my-lib --controller --service --directory=server --importPath=@server/my-lib --buildable
```

For more options see: <https://nx.dev/packages/nest/generators/library>

2. Change the generated files from `server-my-lib.*` to `my-lib.*`

```zsh
find . -name "server-my-lib.*" -exec rename "s/server-my-lib/my-lib/g" * {} ";"
```

3. In your IDE, search and replace all the occurrences of `server-my-lib` with `my-lib` and `ServerMyLib` with `MyLib` with the right matching case.

4. You can then import the controller and service in `apps/nestjs-server/src/app/app.module.ts`

## General Links

### DLT

- Awesome list of RPC providers: <https://github.com/arddluma/awesome-list-rpc-nodes-providers>

- <https://docs.alchemy.com/docs/how-to-get-all-tokens-owned-by-an-address> Get all token owned for an address on Alchemy
- <https://www.quicknode.com/guides/web3-sdks/how-to-build-an-erc20-token-balance-app-with-quicknode-token-api> Get all token owned for an address on Alchemy
- <https://chainstack.com/ultimate-guide-erc20-token-balance/> Get all erc20 token
- <https://chainstack.com/the-ultimate-guide-to-getting-multiple-token-balances-on-ethereum/> Get all erc20 token with GraphQL examples
- <https://github.com/chainstack/token-balance-ultimate> CLI to fetch all token balance
- https://www.coingecko.com/learn/3-steps-to-power-your-ethereum-app-with-token-price-data-using-an-api Get all crypto price and contract address from coingecko

### Prisma

- <https://www.prisma.io/blog/full-stack-typesafety-with-angular-nest-nx-and-prisma-CcMK7fbQfTWc> Prisma blog post about the integration of Nest + Prisma in a NX monorepo

### NestJS

- Basic of making a REST api with NestJS and E2E Testing <https://www.youtube.com/watch?v=GHTA143_b-s> <https://docs.nestjs.com/fundamentals/testing#end-to-end-testing>

- Basic of Integration Testing with NestJS <https://www.youtube.com/watch?v=J5As5D_Ht_w> <https://docs.nestjs.com/fundamentals/testing#integration-testing>

- How to use Axios in NestJS <https://www.codewithvlad.com/blog/how-to-use-axios-in-nestjs>

- How to use cache in NestJS with Redis <https://www.tomray.dev/nestjs-caching-redis>

- E2E project with clean architecture and optimized for parallel testing thanks to `uvu` <https://github.com/jmcdo29/nest-e2e-sample>

- Build a Fullstack App with NestJS, Hasura and GraphQL <https://hasura.io/blog/build-fullstack-apps-nestjs-hasura-graphql-api/>

\***\*Nest's Module Structure\*\***

![Nest's Module Structure](https://user-images.githubusercontent.com/11297176/204095828-e09ae756-9aac-453f-a53e-0b5720c75afd.png)

\***\*Nest's Request -> Response Lifecycle\*\***

![Nest's Request -> Response Lifecycle](https://user-images.githubusercontent.com/11297176/204095864-b7fc9f18-9ca2-42f1-bbe3-147957ecf3ee.png)

- Clean Node.js Architecture <https://betterprogramming.pub/clean-node-js-architecture-with-nestjs-and-typescript-34b9398d790f>

### Handling value conversion with precision

- Money operations with Node.js and PostgreSQL general best practices and tradeoffs <https://medium.com/geekculture/money-operations-with-node-js-and-postgresql-91d1f06ff263>
- Money operations with Node.js and PostgreSQL benchmark <https://blog.xendit.engineer/benchmarking-pg-numeric-integer-9c593d7af67e>
- Example of conversion in Alchemy doc: https://docs.alchemy.com/docs/how-to-get-all-tokens-owned-by-an-address

### GraphQL

- GraphQL subscriptions with streaming API on Hasura https://hasura.io/blog/instant-streaming-api-built-in-authorization-new-existing-postgres/
- Graphql and React Query for query/mutation/subscription on client side https://hasura.io/blog/getting-started-with-react-query-and-graphql/

## Troubleshooting

<a name="nx-issue-build" />Nx seems to have an internal issue sometimes when trying to build nested libraries: <https://github.com/nrwl/nx/issues/11583>
I was not able to find a workaround for this issue, so I had to move the `@server/wallet` code on the `nestjs-server` app.
