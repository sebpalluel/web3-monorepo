import { Injectable, Inject, CACHE_MANAGER, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Network, Alchemy, TokenBalance } from 'alchemy-sdk';
import { TTokenData, TEIP377, TTokenBalance, EIP3770Network } from '@dlt/types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AlchemyService {
  public ethSdk: Alchemy;
  public polygonSdk: Alchemy;
  public arbitrumSdk: Alchemy;

  constructor(
    private config: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {
    const ALCHEMY_ETHEREUM_MAINNET_TOKEN = this.config.get(
      'ALCHEMY_ETHEREUM_MAINNET_TOKEN'
    );
    if (!ALCHEMY_ETHEREUM_MAINNET_TOKEN) {
      throw new Error(
        'Alchemy Ethereum mainnet token not found, please set ALCHEMY_ETHEREUM_MAINNET_TOKEN in your env'
      );
    }
    const ALCHEMY_POLYGON_MAINNET_TOKEN = this.config.get(
      'ALCHEMY_POLYGON_MAINNET_TOKEN'
    );
    if (!ALCHEMY_POLYGON_MAINNET_TOKEN) {
      throw new Error(
        'Alchemy Polygon mainnet token not found, please set ALCHEMY_POLYGON_MAINNET_TOKEN in your env'
      );
    }
    const ALCHEMY_ARBITRUM_MAINNET_TOKEN = this.config.get(
      'ALCHEMY_ARBITRUM_MAINNET_TOKEN'
    );
    if (!ALCHEMY_ARBITRUM_MAINNET_TOKEN) {
      throw new Error(
        'Alchemy Arbitrum mainnet token not found, please set ALCHEMY_ARBITRUM_MAINNET_TOKEN in your env'
      );
    }
    this.ethSdk = new Alchemy({
      apiKey: ALCHEMY_ETHEREUM_MAINNET_TOKEN,
      network: Network.ETH_MAINNET,
    });
    this.polygonSdk = new Alchemy({
      apiKey: ALCHEMY_POLYGON_MAINNET_TOKEN,
      network: Network.MATIC_MAINNET,
    });
    this.arbitrumSdk = new Alchemy({
      apiKey: ALCHEMY_ARBITRUM_MAINNET_TOKEN,
      network: Network.ARB_MAINNET,
    });
  }
  public async getTokensData(network: TEIP377): Promise<TTokenData[] | null> {
    const result = this.cacheManager.get<TTokenData[]>(`token-data:${network}`);
    return result ? result : null;
  }
  public async setTokensData(network: TEIP377, tokensData: TTokenData[]): Promise<void> {
    await this.cacheManager.set(`token-data:${network}`, tokensData);
  }
  public async fetchTokensMetadataAndUpdateTokenCache(
    network: TEIP377,
    sdk: Alchemy,
    tokenAddresses: string[]
  ): Promise<TTokenData[]> {
    const lastTokensData = await this.getTokensData(network);
    let fetchedTokenData: TTokenData[] = [];
    let newTokensData: TTokenData[] = [];

    // if no token data in cache, or some already in cache is missing for balance data, fetch needed tokens metadata
    let tokensToFetch: string[] = [];
    if (!lastTokensData?.length) tokensToFetch = tokenAddresses;
    else {
      tokensToFetch = tokenAddresses?.filter(
        (contractAddress) =>
          !lastTokensData.some((token) => token.contractAddress === contractAddress)
      );
    }
    // here mean all or some tokens data need to be fetched and cached for next time
    if (tokensToFetch.length) {
      fetchedTokenData = await this.fetchTokensMetadata(sdk, tokensToFetch);
    }
    // if token data has been fetched, merge with lastTokensData and store into cache to avoid fetch next time
    // for the first call to the network, lastTokensData will be null, so we just return fetchedTokenData
    if (fetchedTokenData?.length) {
      newTokensData = lastTokensData
        ? [...lastTokensData, ...fetchedTokenData]
        : fetchedTokenData;
      await this.setTokensData(network, newTokensData);
      Logger.log(
        `Fetched ${newTokensData.length} token data for ${network} and stored it in cache`
      );
    }
    // otherwise just return lastTokensData
    else newTokensData = lastTokensData;
    return newTokensData;
  }

  // bach of promises with token data and it's tokenAddress
  public async fetchTokensMetadata(
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
  // get token balance with token metadata
  public async getBalanceWithTokensMetadata(
    network: TEIP377,
    sdk: Alchemy,
    tokenBalances: TokenBalance[]
  ): Promise<TTokenBalance[]> {
    const tokenWithBalanceNonNull = tokenBalances.filter(
      (token) =>
        token.tokenBalance !==
        '0x0000000000000000000000000000000000000000000000000000000000000000'
    );
    const tokenAddresses: string[] = tokenWithBalanceNonNull.map(
      (token) => token.contractAddress
    );
    const tokensMetadata = await this.fetchTokensMetadataAndUpdateTokenCache(
      network,
      sdk,
      tokenAddresses
    );
    return tokenWithBalanceNonNull.map((tokenBalance) => {
      const tokenData: TTokenData = tokensMetadata.find(
        (token) => token.contractAddress === tokenBalance.contractAddress
      );
      // need to set error = null here because alchemy SDK returning that but should have error:string | null
      // tokenBalances: [
      //   {
      //     contractAddress: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      //     tokenBalance: '0x000000000000000000000000000000000000000000000000000000012a05f200'
      //   }
      // ]
      // TODO remove error: null when alchemy SDK is fixed to eventually have error
      const res: TTokenBalance = {
        ...tokenData,
        ...tokenBalance,
        error: null,
      };
      return res;
    });
  }
  public async fetchEthereumTokens(address: string): Promise<TTokenBalance[]> {
    const result = await this.ethSdk.core.getTokenBalances(address);
    return this.getBalanceWithTokensMetadata(
      EIP3770Network.ETH,
      this.ethSdk,
      result.tokenBalances
    );
  }
  public async fetchPolygonTokens(address: string): Promise<TTokenBalance[]> {
    const result = await this.polygonSdk.core.getTokenBalances(address);
    return this.getBalanceWithTokensMetadata(
      EIP3770Network.POLY,
      this.polygonSdk,
      result.tokenBalances as TokenBalance[]
    );
  }
  public async fetchArbitrumTokens(address: string): Promise<TTokenBalance[]> {
    const result = await this.arbitrumSdk.core.getTokenBalances(address);
    return this.getBalanceWithTokensMetadata(
      EIP3770Network.ARB,
      this.arbitrumSdk,
      result.tokenBalances
    );
  }
}
