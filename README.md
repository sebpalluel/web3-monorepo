<p align="center"><img src="https://user-images.githubusercontent.com/11297176/195363494-6cc53b41-958d-4493-88b3-2cbfc65a2594.png" width="50%"></p>

[![CodeFactor](https://www.codefactor.io/repository/github/sebpalluel/web3-monorepo/badge)](https://www.codefactor.io/repository/github/sebpalluel/web3-monorepo)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=alert_status)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=bugs)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=code_smells)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web3-monorepo&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=sebpalluel_web3-monorepo) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

---

> **All you need to start your web3 service, 🔋 included.**

> **This project has been deployed using [Vercel](https://vercel.com/), [Hasura Cloud](https://hasura.io/cloud/) and [Railway.app](https://railway.app/). You can check it out [here](https://www.web3-monorepo.app/). For more information about the deployment process, check the [deployment section](./production/README.md) 🚀.**

## Quick install

1. First you need to install pnpm in your machine `npm install -g pnpm`
2. Install all the dependencies `pnpm install`
3. Create a .env

   **[Refer to this section to set your .env with the needed API keys](#env-mandatory)**

4. Then you can run the project `pnpm start`

5. Make sure to apply the migrations to the prisma db and client once the container is running `pnpm prisma:migrate`

## Project structure

**View in [NX Graph](https://sebpalluel.github.io/web3-monorepo/?groupByFolder=true&select=all)**

[![name](https://user-images.githubusercontent.com/11297176/207392383-8f817b50-d646-4586-870e-d6bf53481577.png)](https://sebpalluel.github.io/web3-monorepo/?groupByFolder=true&select=all)

### Access to the services and app URLs locally

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

### Apps and Libs

- `apps/web`: a [Next.js](https://nextjs.org) app
- `apps/web-e2e`: Cypress e2e test for the web app
- `apps/storybook-main`: Main Storybook for the whole project (ui/web)
- `apps/nestjs-server`: a [Nest.js](https://nestjs.com) server app used to extend Hasura functionalities
- `hasura`: contain the config / metadata / migrations / seeds for the [Hasura](https://hasura.io/) service
- `prisma`: Prisma database schema and migrations
- `tools`: Set of tools to to be used for DX (Developer Experience) and testing purposes.
- `waltid-idpkit`: Contain the config files, the encryption keys for the DID server and the registered OIDC client.
- `libs/logger`: Isomorphic logger (a small wrapper around console.log)
- `libs/utils`: Common utils functions and types for the whole project
- `libs/workspace`: Contain all the generators and tooling dedicated to maintaining the NX workspace.
- `libs/dlt/types`: contain the typescript types/interfaces related to the DLT (Blockchain) used in the project
- `libs/client/gql/[user, admin]`: a library containing all the GraphQL queries and mutations and the generated schemas to be used on the web app. It is divided on 3 folders: `user`, `admin` and `anonymous` depending of the role of the user.
- `libs/client/gql/thegraph`: a library that use [The Graph](https://thegraph.com/en/) protocol in order to query data directly from smart contract on the blockchain.
- `libs/client/hasura/adapter`: Next-auth adapter for the Hasura service.
- `libs/client/hasura/fetcher`: Fetcher functions to query the Hasura service.
- `libs/client/hasura/utils`: Utilities to interact with Hasura.
- `libs/client/did/provider`: Next-auth OpenID Client provider for the walt.id idpkit
- `libs/client/siwe/provider`: Next-auth OpenID Client provider for the rainwbow kit.
- `libs/client/next-auth/options`: Contain all the configs for [Next-Auth](https://next-auth.js.org/)
- `libs/client/next-auth/common`: Common functions used in the context of Next-Auth
- `libs/client/ui/components`: React reusable components library
- `libs/client/ui/shared`: Functions and assets shared in the context of the UI library
- `libs/client/ui/theme`: Contains all the specification for the global style and components style
- `libs/test-utils/db`: All the utilities relating the handling of db operation on the context of testing, for ex: seeding/deleting.
- `libs/test-utils/functions`: All the utilities functions common to every test runner.
- `libs/test-utils/gql`: Offer an sdk and different test user clients to be used on test in order to interact with the hasura service.
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

This repo is configured to be built with Docker, and Docker compose.

To build all apps in this repo:

```shell
pnpm docker:build
```

To shutdown all running containers:

```shell
pnpm docker:stop
```

To launch all the services containers:

```shell
pnpm docker:services
```

The command to run all the services in this repo is

```shell
pnpm docker:services
```

The command to run all the containers for unit and integration test is

```shell
pnpm docker:test
```

## Next.js

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/204857747-9717a55e-7edc-45cb-8970-a18aee3857f3.png" width="25%"></p>

The web app is using [next.js meta-framework](https://nextjs.org/) v13 in order to leverage serverless api functions and react hybrid SSR/SSG/PWA capabilities. The web app is using the [next-auth](https://next-auth.js.org/) library to handle the authentication and the authorization and the ChakraUI components library.

##  Hasura

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/204858221-400660c3-74b9-40d5-8780-f47b52852fd3.png" width="25%"></p>

The [Hasura service](https://hasura.io/) is used as a GraphQL API gateway to the Postgres database and for introspection into the prisma database. It is also used to handle the authentication and authorization of the users through a Next-Auth adapter.

It act as the single endpoint for the web app to query the database and the external services like the Nestjs Server app in a federated way.

## Prisma ORM

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/204858587-fddcad8e-eb9b-40d7-a692-cb91f3a689fc.png" width="35%"></p>

The [Prisma ORM](https://www.prisma.io/) is used in the context of the Nest.js Server app to interact with the prisma Postgres database. It is used to generate the database schema and the migrations and offer an admin with [Prisma Studio](https://www.prisma.io/studio).

## Nest.js

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/204859634-4614e8e2-2759-482f-b5b0-84f7591b1b4e.png" width="15%"></p>

The [Nest.js](https://nestjs.com/) framework is used to extend the Hasura functionalities. It serves as a complementary layer to Hasura to handle the business logic of the application and to interact with the external services like the blockchain and the crypto APIs. Currently it serves as a service to handle the retrieval of the user's wallet balance of ERC20 tokens on the Ethereum/Polygon/Arbitrum blockchains. More info in the [Nest.js Server app README](./apps/nestjs-server/README.md).

## Storybook

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/198039106-fa335322-4416-4f3f-967c-f6c663963ab2.png" width="35%"></p>

You can [**find the Storybook for this project here**](https://63511cd2e1271125e3654edf-szwfakvhbw.chromatic.com/)
Stories are defined on the `libs/ui/components`. We use [interaction testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing) with the storybook version of jest and testing library in order to provide dynamic demonstration of the usage of individual components along with testing.
Aditionnaly, the service [chromatic](https://www.chromatic.com) is launched on the CI in order to spot and approve/decline UI changes.

To create a new component, you can use the custom nx generator provided on this project `@workspace - component` provided from the `libs/workspace`. It will create the boilerplate code for the react component, the stories file and the jest spec file.

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

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224807-718c7649-b946-423e-9449-92ef244a6816.png" width="10%"></p>

This project use [Next-Auth](https://next-auth.js.org) to offer different way of authentication.

The user can sign in with a web3 wallet (Metamask, WalletConnect, etc) and the SIWE adapter will handle the request with Hasura.

You can offer login with OAuth2 providers from Google and Github by providing the corresponding env variables for users that want to connect with a web2 provider. As a fallback, it's also possible to connect with an email and password.

Additionally, this project offer a way to authenticate through a [DID](https://www.w3.org/TR/did-core/) thanks to the [Walt.id IDP Kit](https://walt.id/idp-kit).

You can find the different providers used by next-auth in `libs/client/next-auth/options`

Hasura is used as an adapter to next-auth in order to persist in a database the user's provided information such as their `id`. The adapter is located in `libs/client/hasura/adapter`.

### Rainbowkit

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/207391905-d88c264c-38ac-48fe-8ac9-2052b729fad8.png" width="10%"></p>

This project use [Rainbowkit](https://www.rainbowkit.com/) to offer a set of components and hooks to easily build a web3 application.
Following the specs of SIWE (Sign In With Ethereum), it offers a way to authenticate in next-auth through the signature of a message with a given wallet.

### Waltid-idpkit

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224973-525515ff-73f4-4d9d-925d-ba3090ee8974.png" width="10%"></p>

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

### GraphQL code generator

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196225336-16072309-c798-4263-85ed-b5332509dc99.jpeg" width="15%"></p>

The command `pnpm graphql-codegen` will launch the `graphql-codegen` script. All the codegen definitions are written in the file `codegen.yml`. You should run this command each time you modify a graphql query or update something on the hasura console to have the updated generated sdk and utilities functions.

The generator is divided in two parts, corresponding to the role of `user` and `admin`, targeting the graphql hasura server for those respective roles.

Each one have a grapqhl schema and an ast schema generated and specfic sdk.

**User**

The graphql queries definition are defined in `libs/client/gql/user/queries`. We use the React-Query module in order to facilitate the querying the data for the user role in the fontend client. The hasura service will read the auth cookie in order to validate the request. We also generate a generic sdk in order to facilitate testing of user query with jest on `libs/test-utils/gql/src/generated/test-user.ts`where we provide a Bearer JWT instead of a cookie because jest is not capable to provide one.

**Admin**

The graphql queries definition are defined in `libs/client/gql/admin/queries`. We use a generic sdk with a simple fetch query in order to facilitate the querying the data for the admin role. Those queries are made on the server side of the frontend. Hasura will allow the request through the providing of the `X-Hasura-Admin-Secret`.

### The Graph: Graph Client

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196224114-2521564d-6da6-4ee0-b2d6-e09655477913.png" width="15%"></p>

The [Graph Client library](https://github.com/graphprotocol/graph-client) is used in order to interact easily with any smart contract on blockchain supported by [The Graph protocol](https://thegraph.com/en/).

The library located in `libs/client/gql/thegraph` integrate the client and the toolset from The Graph in order to generate the graphql code to be used by the web app to fetch live data from desired smart contracts.

The query are defined in `libs/client/gql/thegraph/queries` and the smart contract sources are defined in `libs/client/gql/thegraph/src/.graphclientrc.yml`. When updating queries or smart contract sources, be sure to launch the command `pnpm thegraph-build` in order to generate the new version of the generated files located in `libs/client/gql/thegraph/.graphclient`.

You can find an example of live query of smart contract on the [Blockchain page](http://localhost:3000/blockchain).

## Test

### Jest

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196227843-0616474f-f801-49ad-bf87-b0f27baac0f2.png" width="20%"></p>

Jest is the test runner used for unit and integration tests. To run all the Jest tests on affected code, you can use the command:

```shell
pnpm affected:test
```

The global settings for Jest are located in tools/test. This directory contains a docker-compose file and an env file to launch specific services used for the integration tests:

- `test-db`: a database for testing running in memory to speed up execution.
- `hasura-engine`: used to interact with the test-db and services, it uses all the metadata and migrations from the one we used in dev.
- `jest.preset.js` is referencing all the needed setup to launch the tests. It checks that the hasura-console is running and is healthy.

Coverage for all the libraries is created in the root of the workspace. In order to maintain code quality, you can uncomment this section with the minimum coverage before the test reports a failure on CI:Coverage for all the libs is created in the root of the workspace. In order to maintain code quality, you can uncommit this section with the minimum coverage before the test report a failure on CI:

```js
{
  // global: {
  // branches: 80,
  // functions: 80,
  // lines: 80,
  // statements: 80,
  // },
}
```

To facilitate integration testing, you have access to 3 clients with corresponding users: `Alpha Admin`, `Beta Admin`, and `Seb Google`. These clients, located in the `test-utils-gql` library, offer GraphQL instances with all the available queries for a user.

You can check the tests in `users.spec.ts` and `adapter.spec.ts` for examples of these utilities in use.

### Cypress

<p align="center"><img src="https://user-images.githubusercontent.com/11297176/196226285-40932c18-00e4-4bf4-b8cf-b2af9cda6d0e.png" width="40%"></p>

Cypress is the test runner used for e2e and component tests. The tests for the web app are located in `apps/web-e2e`.

Before running the tests, be sure that all the service containers are running with:

```shell
pnpm docker:services
```

The test command will wait for all the necessary services to be reachable before launching Cypress.

To run all the Cypress tests on affected code, you can use the command:

```shell
pnpm affected:e2e
```

In addition to Cypress's core functionality, we use the popular library [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) to target elements of the page in a way that simulates how a user would interact with the UI.

In order to speed up the e2e test, we provide the users: <u>Alpha Admin</u> / <u>Beta Admin</u> / <u>Seb Google</u> whose account can be accessed directly with the `login` command located in `apps/web-e2e/commands.ts`.

We provide the session object used by `Next-Auth` and inject a correct authentication cookie for each one of them.

With a new RSA private/public key, you will need to changes the values here:

```js
const sessions = {
  alpha_admin:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbkV4cGlyZXMiOm51bGwsInVzZXIiOnsiZW1haWwiOiJhbHBoYV9hZG1pbkB0ZXN0LmlvIiwiZW1haWxWZXJpZmllZCI6bnVsbCwiaWQiOiI0YzJhYTAzYTdkY2IwNmFiN2FjMmJhMDc4M2QyZTQ2NmE1MjVlMWU1Nzk0YTQyYjJhMGZhOWY2MWZhN2EyOTY1IiwiaW1hZ2UiOm51bGwsIm5hbWUiOiJBbHBoYSBBZG1pbiJ9LCJwcm92aWRlciI6ImNyZWRlbnRpYWxzIiwicHJvdmlkZXJUeXBlIjoiY3JlZGVudGlhbHMiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2MjA0NjMzMn0.AS0usjntlpL4RGeDQfAnDbv8YtFseQYo7TmlyeAFXcdeiB3vN6cIq-1o7Y0Qfp8qFKDdaFL-L1C76H4MQiI2tngxk2No7quCUkBPOSq9S6b_a5xUQ5LcpJyQ8QDTdnYJzfhqCXZ6pSuKyFa8B4YkSNC6HsIT3LmlwRl3TFrp6fG8iCUpWasTzhPrryJDh072PTBmfmw4qN6z0vcSId1ez1ihWRpRYAt0q_BkGdYM8d15534oKXxMRoY8Q-OGLGa515LZAefIoRxATF2_Huk6cq-15YGGsuSvcOzFw6Ef0P9v3U0SR4yge2z7jx_9t5QUgx9E1zOF627n4UptisE3Bg',

  beta_admin:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbkV4cGlyZXMiOm51bGwsInVzZXIiOnsiZW1haWwiOiJiZXRhX2FkbWluQHRlc3QuaW8iLCJlbWFpbFZlcmlmaWVkIjpudWxsLCJpZCI6IjFkNmRlYWQ0ZTY5OGRkZmQ0YTkyY2QxOWFmZDA3NTYxMWZlYWVkZmQxNDllZGQ3NDYyYjgwZjcxOGUzYjIxODMiLCJpbWFnZSI6bnVsbCwibmFtZSI6IkJldGEgQWRtaW4ifSwicHJvdmlkZXIiOiJjcmVkZW50aWFscyIsInByb3ZpZGVyVHlwZSI6ImNyZWRlbnRpYWxzIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjIwNDcwMTZ9.EW_NweTJPZtGYe1KTlWRwaPiPezdC7fp5qjyfe_V2Y9X2s_ZlbzRA1FVY29ckaiciATxqRb1kgn4xzBCncYhUhQ6P-m7pyewNcTeFEMpT2pvCC_8Mc6PS6A8Ef-9P9eRpBTSQuLTGVilf8DDOYC6bEeURplkMeLIvSjl5oRAvsO-AJaPDtZ146parjLS8b5esivgWrztU5sNIPQsw6gTe60PecXjZHqFNIa7z74IgYoB19BrIXR4IapKoGxzUpno2mJi8OzzRaYTXXW-xdnYgv5gwMYeKJJ0XsVKNhsV6NLJDrKH7IFlRwys1VS9mdyY7XnzOhklba43d2ftGfMOfg',

  seb_google:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6InlhMjkuQTBBVkE5eTFzeHBuc1pMZHA2RUxUSlZiMnZkWUpUUzZIZnRTa1FhcXM3RlZGZHpYRG1nbnJqdFhnVEJwUFdybUZDVGgzd0NjWm5EcnJCbUQ1cVlpdGlrcFg0QWMzbWRLU1p1ZUxLY0FtS0R2bi14dnFaZl95bm52QzBaYXF6NG9WZklpU2lqVldZMEFPSHdxeXY1T0FXc3lwM3RwY1ZhQ2dZS0FUQVNBVEFTRlFFNjVkcjhHVERTLWhLN3V2N0h1NE9sd3JUWVVRMDE2MyIsImFjY2Vzc1Rva2VuRXhwaXJlcyI6MzMyMTg0NzM1NDA0NCwicmVmcmVzaFRva2VuIjoiMS8vMDNqb09Xc0ZXMkdMTUNnWUlBUkFBR0FNU053Ri1MOUlydXZwWjBTYjllU3Z5b1dBQUNrZUxBNFhYSW55TG5LbFAtMnNIYjN0TW9CM3pITnYtQ01TN25xd0g2U2xtT0x2QjJtbyIsInVzZXIiOnsiZW1haWwiOiJzZWJwYWxsdWVsQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOm51bGwsImlkIjoiMjBjMGJjOTFlMTI1NDQ0NWQ0NTlmYzZhYzk3MjA2ZjZiYjkyMjNlNzFjNzY0YzQ5YTc3OGY4Yjg0ZDNmYzU3ZiIsImltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y3B1VmlQeFYxQWhpSG1tMUNhbG1CeUduSEFKZW1SSDZNb0NhZVBNRWYwPXM5Ni1jIiwibmFtZSI6IlPDqWJhc3RpZW4gUGFsbHVlbCJ9LCJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Im9hdXRoIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjA5MjE4Nzh9.bQba06n_LYuMaVt2ZMyPx1CtoDQeozsuImZQD4V4elU',
};
```

**To proceed, simply copy the value of the cookie `next-auth.session-token` once you login and paste the value for each users**

The corresponding logins are:

- alpha_admin@test.io / Qwerty12345#
- beta_admin@test.io / Qwerty12345#
- sebpalluel@gmail.com **(change it with your own google account globally in the workspace)**

You can check the tests on `auth.cy.ts` for example usages of thoses utilities.

## NX

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="15%"></p>

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

Libraries are shareable across libraries and applications. They can be imported from `@workspace/mylib`.

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

The Nestjs and Nextjs Apps uses [Alchemy](https://alchemy.com/?r=ba8fc42476de40ad) as an RPC provider for the Ethereum, Polygon and Arbitrum blockchains. You need to create an account and [get an API key for those on the alchemy dashboard](https://dashboard.alchemyapi.io/?r=ba8fc42476de40ad):

```bash
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
# Warning ! Those api keys are going to get leaked in the client side code so it's advised to set ALLOWLIST DOMAIN in the alchemy dashboard to your apex domain (in our case www.web3-monorepo.app) in order to avoid someone hijacking your api keys. By default a public rpc network is used for the client side code so you don't need to set those api keys if you don't want to.
# NEXT_APP_ALCHEMY_ETHEREUM_MAINNET_TOKEN=
# NEXT_APP_ALCHEMY_POLYGON_MAINNET_TOKEN=
# NEXT_APP_ALCHEMY_ARBITRUM_MAINNET_TOKEN=
```

### Provide the .env file to the github action CI job

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

### Github OAuth provider

Follow [this tutorial from github](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to setup your own OAuth provider.

Once you have retrieved your <mark>client id</mark> and <mark>client secret</mark> assign them in `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` located in the file `.env.local`

### JWT secret keys

In order to secure your JWT authentication provided by [Next Auth](https://next-auth.js.org/) you are going to need to generate your own RSA-256 keys.

<mark>Important !</mark> For testing purpose, public and private keys are provided on this folder `waltid-idpkit/data/OIDC/keystore/keys/c047f4e42cf54b66ad154d8ce51e03ef`. You are going to need to generate your own. For that, please refer to the section [Configure Hasura and Next Auth with same RSA key](#configure-hasura-and-next-auth-with-same-rsa-key). The keys provided to the idpkit container will need to be the same in order for the authentication process to work.

### Configure the OIDC client on the IDPKIT server

1. Register a client with the IDP Kits CLI or the API exposed:

```shell
make idpkit-register-client -n "MyApp" --all-redirect-uris
```

2. Update the `IDPKIT_CLIENT_ID` and `IDPKIT_CLIENT_SECRET` environment variables based on the response received from the client
   registration

For more informations to register your own client, [please check this documentation]([Client registration - Docs](https://docs.walt.id/v/idpkit/configuration-and-setup/oidc-manager-configuration/client-registration#register-new-client)).

### NX Cloud access tokens

As refered in the [section about access token in the nx doc,](https://nx.dev/nx-cloud/account/access-tokens) you have different strategies to setup your access to [Nx Cloud](https://nx.app/). In order to beneficiate from local and remote cacheables operations, you can use this command to generate an access token allowing <mark>read-write</mark> access:

```shell
pnpx nx g @nrwl/nx-cloud:init
```

After that, you are going to need to [setup your workspace on the nx cloud](https://cloud.nx.app/orgs/workspace-setup) after registering an account.

### Configure Hasura and Next Auth with same RSA key

You need to configure hasura and next auth to have the same asymmetric key. One is provided by default but you can generate your own RSA 256 key using those commands:

```shell
# Don't add passphrase

ssh-keygen -t rsa -P "" -b 4096 -m PEM -f jwtRS256.key

ssh-keygen -e -m PEM -f jwtRS256.key > jwtRS256.key.pub
```

<https://hasura.io/blog/next-js-jwt-authentication-with-next-auth-and-integration-with-hasura/>

- Copy the public key in a single line format:

```shell
awk -v ORS='\\n' '1' jwtRS256.key.pub | pbcopy
```

- Now paste this value in your clipboard to `HASURA_GRAPHQL_JWT_SECRET` env in the format

```shell
{ "type": "RS256", "key": "<insert-your-public-key-here>"}
```

- Transform private key into a single line to copy to your clipboard to `NEXTAUTH_SECRET` env

```shell
awk -v ORS='\\n' '1' jwtRS256.key | pbcopy
```

Don't forget to add double quotes "" arround so that `\n` are interpreted correctly

## Troubleshoot

In case you need your own image instead of `sebpalluel/hasura_cli_with_socat_and_curl` you can do the following command to publish it in docker hub.

Be sure to have activated the buildx module first by following [this article](https://cloudolife.com/2022/03/05/Infrastructure-as-Code-IaC/Container/Docker/Docker-buildx-support-multiple-architectures-images/)

```shell
cd hasura && docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t <username>/<image>:latest --push .
```

## Credits

This project is based on the [nextstarter-chakra](https://github.com/sozonome/nextarter-chakra) template
