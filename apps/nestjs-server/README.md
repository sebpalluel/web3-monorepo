# Nestjs Server

You can find the interactive graph of the dependencies for the `nestjs-server` in [this link](https://sebpalluel.github.io/web3-monorepo/?focus=nestjs-server&groupByFolder=true&searchDepth=0).

[![name](https://user-images.githubusercontent.com/11297176/199850268-420f37e2-528d-47a0-b87e-0c1e8c9e3fe6.png)](https://sebpalluel.github.io/web3-monorepo/?focus=nestjs-server&groupByFolder=true&searchDepth=0)

## Getting started

Get [your own API key from Alchemy](https://dashboard.alchemy.com/) for Polygon, Arbitrum and Ethereum Mainnet on a `.env` file with the respective keys:

```.env
ALCHEMY_POLYGON_MAINNET_TOKEN=
ALCHEMY_ARBITRUM_MAINNET_TOKEN=
ALCHEMY_ETHEREUM_MAINNET_TOKEN=
```

Make sure to apply the migrations to the prisma db and client once the container is running.

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

## Manually test the api

You can use the following curl commands to test the api.

```shell
curl --location --request GET 'http://localhost:3333/api/balances/eth/0xb21090C8f6bAC1ba614A3F529aAe728eA92B6487'
```

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

Ethereum is a very well established blockchain and has a lot of RPC providers with a good uptime. For example, Infura is a very reliable and well known RPC provider. As Polygon and Arbitrum chains are relatively new, we will have to use a different RPC provider. [QuickNode](https://www.quicknode.com) appear to be the only one with [Alchemy](https://alchemy.com/?r=ba8fc42476de40ad) and [Chainstack](https://chainstack.com) to support the tree chains on mainnet.
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
  Logger.error('Cryptocurrency not found');
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

![Nest's Module Structure](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bb3e0c0-fd7d-4fa1-8cf1-70eb0622bff7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221029T123327Z&X-Amz-Expires=86400&X-Amz-Signature=f9690c33904f51a201415da9522b0e892f2945fedd56ffb0c1e8c5ce0a317193&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

\***\*Nest's Request -> Response Lifecycle\*\***
![Nest's Request -> Response Lifecycle](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a68f104-45fa-40a5-93e1-931fe9f2d098/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221029T123409Z&X-Amz-Expires=86400&X-Amz-Signature=bae1b41d3fbefbe9317bb7e680b78a59f3a7c0ee1e7e5c800b9204919b2d0232&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

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
