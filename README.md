# Governance

## How to run the project ?

Run all the docker container and deploy the proxy console for hasura

```zsh
make
```

All the config for local development is available in the `local` folder

## Project structure

- [**Hasura console**](http://localhost:9695/console)
  The console is used as a backoffice to handle the graphQL server and to innerlink all the microservices.
- [**Vue client**](http://localhost:3000/)
  This is the main web app client used to access the whole array of services.
- [**Django admin**](http://localhost:8000/admin/)
  The admin backoffice is used to manage the different accounts

## Clean the project

```zsh
make clean
```

## Doc

- [**Notion**](https://www.notion.so/governance-assembly)

<!-- TODO: Correct the following app structure -->

## What's inside?

This repo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app
- `api`: an [Express](https://expressjs.com/) server
- `ui`: ui: a React component library
- `eslint-config-custom`: `eslint` configurations for client side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `eslint-config-custom-server`: `eslint` configurations for server side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `scripts`: Jest configurations
- `logger`: Isomorphic logger (a small wrapper around console.log)
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create app_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build --parallel

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

<!--  -->
