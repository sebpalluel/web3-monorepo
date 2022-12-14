import { Injectable, Inject, CACHE_MANAGER, Logger } from '@nestjs/common';
import { Cron } from '../commons/cron/cron.decorator';
import { CronExpression } from '@nestjs/schedule';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
import {
  supportedChains,
  TEIP377,
  TCryptocurrency,
  TCryptocurrencyData,
} from '@dlt/types';
import { convertArrayOfObjtoObjWithKeys } from '@utils';
import { Cache } from 'cache-manager';

@Injectable()
export class TaskService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly cryptoCurrencyService: CryptocurrenciesService
  ) {}
  // // // Used only to create mock files to avoid hitting the API limit on coingecko
  // private async storeCrypotocurrenciesDataInJSON(cryptocurrencies: TCryptocurrency[]) {
  //   const network = EIP3770Network.ARB;
  //   const res = await this.cryptoCurrencyService.fetchCryptocurrenciesData(
  //     network,
  //     cryptocurrencies
  //   );
  //   fs.writeFile(`test-${network}-market-data.json`, JSON.stringify(res), function (err) {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });
  // }

  // fetch updated cryptocurrency data every minutes and store it in cache
  private async cryptocurrencyFetchAndStoreCron(
    network: TEIP377,
    cryptocurrencies: TCryptocurrency[]
  ): Promise<TCryptocurrencyData[] | Error> {
    const result = await this.cryptoCurrencyService.fetchCryptocurrenciesData(
      network,
      cryptocurrencies
    );
    if (result instanceof Error) {
      throw result;
    }
    Logger.log(`Fetched ${network} market data with ${result?.length} tokens}`);
    const obj: TCryptocurrencyData[] = convertArrayOfObjtoObjWithKeys(
      result,
      'contractAddress'
    );
    await this.cacheManager.set(`cryptocurrencies-data:${network}`, obj);
    return obj;
  }
  // fetch updated cryptocurrency data for every supported platform every 5 minutes and store it in cache
  // TODO change in case of prod ? every 30 seconds ? And bypass when testing with Jest ?
  // @Cron(CronExpression.EVERY_5_MINUTES)
  @Cron(CronExpression.EVERY_5_MINUTES)
  public async fetchCryptocurrenciesDataAndStoreInCache() {
    try {
      const cryptocurrencies = await this.cryptoCurrencyService.getCryptocurrencies();
      // // uncomment here if you want to create mock files for cryptocurrencies data to be used in tests to avoid hitting the API limit on coingecko
      // await this.storeCrypotocurrenciesDataInJSON(cryptocurrencies);
      const promises = Object.values(supportedChains).map((chain) =>
        this.cryptocurrencyFetchAndStoreCron(chain.network, cryptocurrencies)
      );
      await Promise.all(promises);
      Logger.log('Cryptocurrencies data fetched and stored in cache');
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
  // Force the cron to run at server start and for Jest tests
  async onModuleInit() {
    await this.fetchCryptocurrenciesDataAndStoreInCache();
    Logger.log('TaskService initialized');
  }
}
