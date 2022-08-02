# Governance

## How to run the project ?

First you need to install pnpm in your machine.

```sh
npm install -g pnpm
```

Then you can run the project.

```sh
pnpm start
```

## Project structure

- [**Hasura console**](http://localhost:9695/console)
  The console is used as a backoffice to handle the graphQL server and to innerlink all the microservices.
- [**React Next app**](http://localhost:3000/)
  This is the main web app client used to access the whole array of services.
- [**React Next app**](http://localhost:3000/)
  This is the main web app client used to access the whole array of services.

## Doc

- [**Notion**](https://www.notion.so/governance-assembly)

<!-- TODO: Correct the following app structure -->

## What's inside?

This repo uses [PNPM](https://pnpm.io/) as a package manager. It includes the following apps and libs:

### Apps and Libs

- `web`: a [Next.js](https://nextjs.org) app
<!-- - `api`: an [Express](https://expressjs.com/) server -->
- `ui`: ui: a React component library
- `gql`: gql: a library containing all the GraphQL queries and mutations and the generated schemas to be used on the web app. It is divided on 3 folders: `user`, `admin` and `anonymous` depending of the role of the user.
- `logger`: Isomorphic logger (a small wrapper around console.log)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```sh
pnpm docker:build
```

To shutdown all running containers:

```sh
pnpm docker:stop
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

<!--  -->

<!-- TODO: Correct the following doc with only the tools used -->

# NX

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Categories of libraries

In a workspace, libraries are typically divided into four different types:

### Feature

Libraries that implement “smart” UI (e.g. is effectful, is connected to data sources, handles routing, etc.) for specific business use cases.

### UI

Libraries that contain only presentational components. That is, compo- nents that render purely from their props, and calls function handlers when interaction occurs.

### Data-access

Libraries that contain the means for interacting with external data services; external services are typically backend services.

### Utility

Libraries that contain common utilities that are shared by many projects.

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@governance-2/mylib`.

## Development server

Run `nx serve web` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

<!--  -->
