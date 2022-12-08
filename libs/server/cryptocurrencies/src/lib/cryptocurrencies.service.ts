import { Injectable, Inject, CACHE_MANAGER, Logger } from '@nestjs/common';
import { ApiService } from '@server/api';
import { PrismaService } from '@server/prisma';
import { Cache } from 'cache-manager';
import { logger } from '@logger';
import {
  TEIP377,
  allCryptoFromCoingecko,
  TCryptocurrency,
  TCryptocurrencyData,
  TCryptocurrencyWithAddress,
} from '@dlt/types';
import { convertArrayOfObjtoObjWithKeys } from '@utils';

export type WalletData = {
  balanceUsd?: number;
  pendingTransactions?: Array<any>;
};

@Injectable()
export class CryptocurrenciesService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private prisma: PrismaService,
    private api: ApiService
  ) {}
  public getCryptocurrenciesData(network: TEIP377): Promise<TCryptocurrencyData[]> {
    return this.cacheManager.get<TCryptocurrencyData[]>(
      `cryptocurrencies-data:${network}`
    );
  }
  public async getCryptocurrencies(): Promise<TCryptocurrency[]> {
    let cryptos = await this.cacheManager.get<TCryptocurrency[]>('cryptocurrencies');
    if (!cryptos) cryptos = await this.setCryptocurrenciesFromJSON();
    return cryptos;
  }
  public async fetchCryptocurrenciesData(
    network: TEIP377,
    cryptocurrencies: TCryptocurrency[]
  ): Promise<TCryptocurrencyWithAddress[] | Error> {
    return this.api.getCryptoCurrenciesWithPrice(network, cryptocurrencies);
  }

  // here we store in cache all the cryptocurrencies from coingecko with their contract addresses
  // to be able to get the data of the token easily we will store it as an object using the id as key and the rest as value
  public async setCryptocurrenciesFromJSON() {
    const toObjMappedWithKey = convertArrayOfObjtoObjWithKeys(
      JSON.parse(JSON.stringify(allCryptoFromCoingecko)),
      'id'
    );
    Logger.log('Setting cryptocurrencies from json into cache');
    await this.cacheManager.set('cryptocurrencies', toObjMappedWithKey);
    return toObjMappedWithKey;
  }
  // store the cryptocurrencies data in cache on application load when module initialized
  // warning ! It may be necessary to call and await setCryptocurrenciesFromJSON in testing in some case when CryptocurrenciesService is not put in providers
  async onModuleInit() {
    await this.setCryptocurrenciesFromJSON();
  }
}
