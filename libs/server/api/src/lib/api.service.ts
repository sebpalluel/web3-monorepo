import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import {
  supportedChains,
  TEIP377,
  TCryptocurrency,
  TCryptocurrencyWithAddress,
} from '@dlt/types';
import { CoinGeckoClient, CoinMarket } from 'coingecko-api-v3';

@Injectable()
export class ApiService {
  public coinGeckoSdk: CoinGeckoClient;
  constructor(private http: HttpService, private config: ConfigService) {
    this.coinGeckoSdk = new CoinGeckoClient({
      autoRetry: true,
    });
  }
  private getCryptoCurrenciesForChain(chain): Promise<CoinMarket[] | Error>[] {
    // get all pages from threshold
    const pagesRange = Array.from(
      Array(parseInt(chain.coingecko.pageThreshold) + 1).keys()
    );
    pagesRange.shift();
    return pagesRange.map((page) => {
      return this.coinGeckoSdk.coinMarket({
        vs_currency: 'usd',
        ids: '',
        order: 'market_cap_desc',
        per_page: 250,
        page: page,
        category: chain.coingecko.category,
        sparkline: false,
      });
      /* TODO set back to this when coingecko-api-v3 is fixed, cc https://github.com/samuraitruong/coingecko-api-v3/issues/23
      will need to update the coingecko-api-v3 package "coingecko-api-v3": "0.0.13" */

      // const res = this.coinGeckoSdk.coinMarkets({
      //   vs_currency: 'usd',
      //   order: 'market_cap_desc',
      //   per_page: 250,
      //   page,
      //   category: chain.coingecko.category,
      // });
    });
  }
  async getCryptoCurrenciesWithPrice(
    network: TEIP377,
    cryptocurrencies: TCryptocurrency[]
  ): Promise<TCryptocurrencyWithAddress[] | Error> {
    const chain = supportedChains[network];
    if (!chain) throw new Error('Network not supported');
    const promises = this.getCryptoCurrenciesForChain(chain);
    const results = await Promise.all(promises);
    // return results from all promises (the different pages) in one array with contractAddress
    return results
      .flat()
      .map((crypto: CoinMarket) => {
        const contractAddress =
          cryptocurrencies[crypto.id]?.platforms?.[chain.coingecko.platform];
        if (!contractAddress) return null;
        return {
          contractAddress,
          ...crypto,
        };
      })
      .filter((coin) => coin !== null);
  }
}
