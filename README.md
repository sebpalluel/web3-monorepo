# project

## General links
- https://skerritt.blog/make-popular-open-source-projects/
- https://cloud.google.com/blog/topics/developers-practitioners/microservices-architecture-google-cloud
- tool to manage voting snapshot.org
- web3 issues and state of the art https://www.psl.com/feed-posts/web3-engineer-take
- gRPC framework https://grpc.io/
- gRPC and GraphQL for micro-service architecture https://medium.com/@svengau/when-graphql-meets-grpc-3e9729d32e05

## Architecture
- https://martinfowler.com/bliki/BranchByAbstraction.html
- Frontend architecture: https://webdevexplorer.substack.com/p/-8-vue-clean-architecture-how-to?token=eyJ1c2VyX2lkIjo0NTgzMDg5NCwicG9zdF9pZCI6NDQ2NzM5NjIsIl8iOiJHb2V1ZyIsImlhdCI6MTYzODE4MjA0OCwiZXhwIjoxNjM4MTg1NjQ4LCJpc3MiOiJwdWItNDYzMzgxIiwic3ViIjoicG9zdC1yZWFjdGlvbiJ9.Nvgm87x5h4L9cVoSGrxmLKmy49J8_tXWCv3uGBfyI6k
- Building resilient frontend: https://www.youtube.com/watch?v=TqfbAXCCVwE

## Hasura
- Hasura to speed up API dev https://github.com/hasura/graphql-engine
- Project that work with Django and Hasura: https://www.freecodecamp.org/news/how-to-get-instant-graphql-apis-on-your-existing-django-application-c8fcfdb945aa/
- Remote joins https://hasura.io/blog/remote-joins-a-graphql-api-to-join-database-and-other-data-sources/
- Auth with django graphene + hasura to handle others query https://hasura.io/blog/how-to-setup-authentication-with-django-graphene-and-hasura-graphql/
- Full project starter with Hasura + Django https://giters.com/spezi/hasura-django-starter

## Developer portal
- https://medium.com/memory-leak/developer-portals-a-primer-3d189d061e9a
### Backstage
- https://blog.logrocket.com/better-developer-portals-spotify-backstage/
- https://backstage.io/
- https://developer.spotify.com/
### Backstage wrappers
- https://www.cortex.io/
- https://www.opslevel.com/
- https://roadie.io/
- https://www.moment.dev/
- https://clutch.sh/
### Other
- https://vuepress.vuejs.org/ (simple static site generator)
- https://github.com/Redocly/redoc (auto REST api doc)



## GraphQL
- Autogenerate code to support graphql model from any platform https://www.graphql-code-generator.com/
- https://realpython.com/python-django-blog/
- GraphiQL tool for documentation + use in IDE for autocompletion https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/
- GraphQL API for blockchains https://thegraph.com/en/

## REST
- https://swizec.com/blog/how-react-query-gives-you-almost-everything-you-thought-you-needed-graphql-for/?ck_subscriber_id=1409041612&utm_source=convertkit&utm_medium=email&utm_campaign=Better+tooling+won%27t+fix+your+API%20-%207103475
- https://github.com/DamianOsipiuk/vue-query
- https://swizec.com/blog/rest-api-best-practice-in-a-graphql-world/?ck_subscriber_id=1409041612&utm_source=convertkit&utm_medium=email&utm_campaign=Better+tooling+won%27t+fix+your+API%20-%207103475

## Governance
- https://github.com/compound-finance/compound-protocol/tree/master/contracts/Governance
as seen in https://medium.com/quantum-economics/7-highlights-from-a-deep-dive-in-to-decentralization-webinar-featuring-braintrust-held-9-25-21-802eef35149f
- https://github.com/iota-community/Community-Governance
- Resources about Governance: https://drive.google.com/drive/folders/1hCyYobDhQlLrTvOROuY0woy7sAq-qL7x
- smart contract api for Governance https://docs.openzeppelin.com/contracts/4.x/api/governance

## Assembly
- notion https://assemblytouchpoint.notion.site/assemblytouchpoint/Welcome-to-Touchpoint-3551f63c45cf492bb1b0bd6b1161b921
- wiki https://wiki.assembly.sc/

## Tokenization
- https://blog.iota.org/iota-tokenization-framework-specifications/
- https://www.youtube.com/watch?v=dXgqslmgzec

## DID
- https://www.w3.org/TR/did-core/
- https://github.com/iotaledger/identity.rs
- https://wiki.iota.org/identity.rs/introduction
- https://blog.iota.org/iota-identity-beta-release/
- https://github.com/iota-community/X-Team_IOTA_Identity
- https://developer.zebra.com/blog/introducing-zebra-iota-edge-sdk
- https://wiki.iota.org/zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial


## e-signature (eIDAS)
- https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eSignature+-+Get+started
- Digital Signature Service - DSS https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/Digital+Signature+Service+-++DSS


Roles gestion with `DID Communications messages` a DID take ownership of an other DID (admin) or part of it (ex lawyer for company)

## backend
- https://docs.djangoproject.com/en/3.2/releases/4.0/
### data response
- TIGER API architecture (bad idea because GraphQL... but we could use the standardized return): https://javascript.plainenglish.io/rest-is-dying-get-rid-of-it-d43e6ef80cbe
```
{
    error   : true,  // false for no error
    data     : { ... }, // GraphQL result
    messages : ['An array of one or more messages, if any.'],
    errors    : [ array of form errors, if any ]
}
```
Could be used as model of response for error and message display handling with graphQL or REST routes

## frontend
### storybook
- testing workflow in storybook https://storybook.js.org/blog/ui-testing-playbook/
- use CSF (Component Story Format) v3 https://storybook.js.org/blog/component-story-format-3-0/
- package to reuse storybook stories with jest https://storybook.js.org/addons/@storybook/testing-vue3
- use [`msw` module](https://mswjs.io/docs/getting-started/mocks/graphql-api) to mock api calls in storybook and e2e tests. See example here https://storybook.js.org/blog/interactive-stories-beta/
- use `chromatic` to publish the lib storybook + streamline testing UI https://www.chromatic.com/docs/setup
- storybook recommended structuring https://storybook.js.org/blog/structuring-your-storybook/

### Tauri
Framework used to package web app on native binary for Mac/Windows/Linux & Android/iOS (soon)
- https://tauri.studio/
### Linting
- https://jdmendozar.medium.com/how-to-setup-vue-3-with-vite-tailwind-and-eslint-prettier-b55644005c76
- https://miyauchi.dev/posts/vite-vue3-typescript/

