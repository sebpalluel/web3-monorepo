# Web monorepo boilerplate

[![CodeFactor](https://www.codefactor.io/repository/github/sebpalluel/web-monorepo-boilerplate/badge)](https://www.codefactor.io/repository/github/sebpalluel/web-monorepo-boilerplate)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web-monorepo-boilerplate&metric=alert_status)](https://sonarcloud.io/dashboard?id=sebpalluel_web-monorepo-boilerplate) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web-monorepo-boilerplate&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=sebpalluel_web-monorepo-boilerplate) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web-monorepo-boilerplate&metric=bugs)](https://sonarcloud.io/dashboard?id=sebpalluel_web-monorepo-boilerplate) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web-monorepo-boilerplate&metric=code_smells)](https://sonarcloud.io/dashboard?id=sebpalluel_web-monorepo-boilerplate) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=sebpalluel_web-monorepo-boilerplate&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=sebpalluel_web-monorepo-boilerplate)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Project structure

- [**Hasura console**](http://localhost:9695/console)

The console is used as a backoffice to handle the graphQL server and to innerlink all the microservices.

- [**React Next app**](http://localhost:3000/)

This is the main web app client used to access the whole array of services.

- [**Mailhog**](http://localhost:8025/)

This is the mail-catcher where all the mail are going in dev environment.

- [**Walt.id IDP KIT**](http://localhost:9080/api/swagger)

This is the toolkit server stack to access all the [DID](https://www.w3.org/TR/did-core/) functionnalities from walt.id: SSI, Wallet and NFT.

You can [check the doc here](https://docs.walt.id/v/idpkit/idpkit/readme) for more information regarding the API.

### What's inside?

This repo uses [PNPM](https://pnpm.io/) as a package manager. It includes the following apps and libs:

#### Apps and Libs

- `apps/web`: a [Next.js](https://nextjs.org) app
- `apps/web-e2e`: Cypress e2e test for the web app
- `hasura`: contain the config / metadata / migrations / seeds for the [Hasura](https://hasura.io/) service
- `libs/gql`: a library containing all the GraphQL queries and mutations and the generated schemas to be used on the web app. It is divided on 3 folders: `user`, `admin` and `anonymous` depending of the role of the user.
- `libs/hasura`: Utilities to interact with hasura.
- `libs/logger`: Isomorphic logger (a small wrapper around console.log)
- `libs/next-auth`: Contain all the configs for [Next-Auth](https://next-auth.js.org/)
- `libs/test-utils`: All the utilities used for test with jest/cypress to interact easily with the db and hasura through graphql
- `libs/ui`: React component library
- `tools`: Set of tools to to be used for DX (Developer Experience) and testing purposes.
- `waltid-idpkit`: Contain the config files, the encryption keys for the DID server and the registered OIDC client.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

#### **Next Auth**

This project use Next-Auth to offer different way of authentication.

You can offer login with OAuth2 providers from Google and Github by providing the corresponding env variables.

Aditionnally, the boilerplate offer a way to authenticate through email + password credentials with the adapter to handle the request with Hasura. You can find this adapter in `libs/hasura/adapter`

#### Waltid-idpkit

This project use the IDP kit in order to offer web3 signin:

TODO: Expose different way of signin method

#### **GraphQL code generator**

The command `pnpm start` will launch the `graphql-codegen`script. All the codegen definitions are written in the file `codegen.yml`.

The generator is divided in two parts, corresponding to the role of `user` and `admin`, targeting the graphql hasura server for those respective roles.

Each one have a grapqhl schema and an ast schema generated and specfic sdk.

**User**

The graphql queries definition are defined in `libs/gql/user/queries`. We use the React-Query module in order to facilitate the querying the data for the user role in the fontend client. The hasura service will read the auth cookie in order to validate the request. We also generate a generic sdk in order to facilitate testing of user query with jest on `libs/test-utils/gql/src/generated/test-user.ts`where we provide a Bearer JWT instead of a cookie because jest is not capable to provide one.

**Admin**

The graphql queries definition are defined in `libs/gql/admin/queries`. We use a generic sdk with a simple fetch query in order to facilitate the querying the data for the admin role. Those queries are made on the server side of the frontend. Hasura will allow the request through the providing of the `X-Hasura-Admin-Secret`.

## Populate missing env variables

### Google OAuth provider

Follow [this tutorial from google](https://support.google.com/cloud/answer/6158849?hl=en) to setup your own OAuth provider

Once retrieved your <mark>client id</mark> and <mark>client secret</mark> assign them in `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` located in the file `.env.local`

### JWT secret keys

In order to secure your JWT authentication provided by [Next Auth](https://next-auth.js.org/) you are going to need to generate your own RSA-256 keys.

<mark>Important !</mark> For testing purpose, public and private keys are provided on this folder `waltid-idpkit/data/OIDC/keystore/keys/c047f4e42cf54b66ad154d8ce51e03ef`. You are going to need to generate your own. For that, please refer to the section [Configure Hasura and Next Auth with same RSA key](#configure-hasura-and-next-auth-with-same-rsa-key). The keys provided to the idpkit container will need to be the same in order for the authentication process to work.

### Configure your own OIDC client on the IDPKIT server

1. Register a client with the IDP Kits CLI or the API exposed:

```shell
make idpkit-register-client
```

2. Update the `IDPKIT_CLIENT_ID` and `IDPKIT_CLIENT_SECRET` environment variables based on the response received from the client
   registration

For more informations to register your own client, [please check this documentation]([Client registration - Docs](https://docs.walt.id/v/idpkit/configuration-and-setup/oidc-manager-configuration/client-registration#register-new-client)).

### NX Cloud access tokens

As refered in the [section about access token in the nx doc,](https://nx.dev/nx-cloud/account/access-tokens) you have different strategies to setup your access to [Nx Cloud](https://nx.app/). In order to beneficiate from local and remote cacheables operations, you can populate use this command to generate an access token allowing <mark>read-write</mark> access:

```shell
pnpx nx g @nrwl/nx-cloud:init
```

After that, you are going to need to [setup your workspace on the nx cloud](https://cloud.nx.app/orgs/workspace-setup) after registering an account.

## How to run the project ?

First you need to install pnpm in your machine.

```shell
npm install -g pnpm
```

Install all the dependencies

```shell
pnpm install
```

Then you can run the project.

```shell
pnpm start
```

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

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

The command to run all the services and containers in this repo is

```shell
pnpm start
```

The command to run all the containers for unit and integration test is

```shell
pnpm docker:test
```

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Cypress](https://www.cypress.io/) test runner for E2E and components test
- [Graphql Code Generator](https://www.the-guild.dev/graphql/codegen/) a generator for the graphql schemas and a client builders with provided queries.

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

## Test

### Jest

Jest is the test-runner used for unit and integration tests.

To run all the jest test on affected code, you can use the command:

```shell
pnpm affected:test
```

The global settings for jest are located in `tools/test`

You can find inside a `docker-compose` and an env file to launch specific services used for the integration test:

- test-db: db for test running on memory to speed up execution.
- hasura-engine: used to interact with the test-db and services, it uses all the metada and migrations from the one we used in dev

`jest.preset.js` is referencing all the needed setup to launch the test. It check that the hasura-console is running and is healthy.

Coverage for all the libs is created in the root of the workspace. In order to maintain code quality, you can uncommit this section with the minimum coverage before the test report a failure on CI:

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

In order to facilitate the integration test, you have access to 3 clients with corresponding users: <u>Alpha Admin</u> / <u>Beta Admin</u> / <u>Seb Google</u>

Those clients located in `test-utils-gql`library offer you GraphQL instances with all the availables queries for an user.

You can check the test on <mark>users.spec.ts</mark> and <mark>adapter.spec.ts</mark> for example usages of thoses utilities.

### Cypress

Cypress is the test runner used for e2e test and component test.

The test for the web app are located in `apps/web-e2e`

Before running the test, be sure that all the services containers are running with

```shell
pnpm docker:services
```

The test command will wait for all the necessary services to be reachable before launching cypress.

To run all the cypress test on affected code, you can use the command:

```shell
pnpm affected:e2e
```

Additionnaly to cypress core functionnalities, we use the popular library [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) in order to target elements of the page as close as the user would do to interact with the UI.

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

You can check the tests on <mark>auth.cy.ts</mark> for example usages of thoses utilities.

## NX

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

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

Libraries are shareable across libraries and applications. They can be imported from `@boilerplate-2/mylib`.

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

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
