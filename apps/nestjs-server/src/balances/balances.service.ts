import { Injectable } from '@nestjs/common';
import { WalletService } from '../wallet/wallet.service';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
import type { TEIP377, TBalanceTokenData } from '@dlt/types';

@Injectable()
export class BalancesService {
  constructor(
    private walletService: WalletService,
    private cryptoCurrencyService: CryptocurrenciesService
  ) {}
  public async fetchTokensFromAddressAndSyncWallet(
    network: TEIP377,
    address: string
  ): Promise<TBalanceTokenData[]> {
    const cryptocurrenciesData = await this.cryptoCurrencyService.getCryptocurrenciesData(
      network
    );
    const result = await this.walletService.fetchTokensFromAddressAndSyncWallet(
      network,
      address,
      cryptocurrenciesData
    );
    return result as TBalanceTokenData[];
  }
}
