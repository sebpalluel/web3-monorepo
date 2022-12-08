import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { EthersService } from '@server/ethers';
import type {
  TEIP377,
  WalletData,
  TCryptocurrencyData,
  TBalanceTokenData,
  TTokenBalance,
} from '@dlt/types';

import { Transaction, Wallet } from '@prisma/client';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const web3 = require('web3');

@Injectable()
export class WalletService {
  constructor(
    private ethersService: EthersService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  public async createWallet(network: TEIP377, address: string): Promise<Wallet | Error> {
    return this.ethersService.createWallet(network, address);
  }
  public async updateWallet(
    network: TEIP377,
    address: string,
    walletData: WalletData
  ): Promise<Wallet | Error> {
    return this.ethersService.updateWallet(network, address, walletData);
  }
  public async getWallet(network: TEIP377, address: string): Promise<Wallet | Error> {
    return this.ethersService.getWallet(network, address);
  }
  /// handle the balance with the data for each token on the wallet + creation/update of the wallet
  public async fetchTokensFromAddressAndSyncWallet(
    network: TEIP377,
    address: string,
    cryptocurrenciesData: TCryptocurrencyData[],
    pendingTransactions?: Transaction[]
  ): Promise<TBalanceTokenData[] | Error | null> {
    await this.syncWalletWithData(
      network,
      address,
      cryptocurrenciesData,
      pendingTransactions
    );
    return this.getBalanceTokensData(network, address);
  }
  // here we get the balance of the wallet updated and store the result on wallet model
  public async syncWalletWithData(
    network: TEIP377,
    address: string,
    cryptocurrenciesData: TCryptocurrencyData[],
    pendingTransactions?: Transaction[]
  ): Promise<Wallet | Error> {
    const tokenBalances = await this.fetchTokensAndUpdateBalanceCache(
      network,
      address,
      cryptocurrenciesData
    );
    if (tokenBalances instanceof Error) throw tokenBalances;
    const wallet = await this.getWallet(network, address);
    if (wallet instanceof Error) throw wallet;
    if (!wallet) await this.createWallet(network, address);
    const totalBalanceInUsd = tokenBalances.reduce((acc, cur) => acc + cur.balanceUsd, 0);
    const walletData: WalletData = {
      balanceUsd: totalBalanceInUsd ? Math.round(totalBalanceInUsd * 100) / 100 : 0, // round to dollar
      pendingTransactions: [],
    };
    return this.updateWallet(network, address, walletData);
  }
  public getBalanceToUSD(
    balance: number,
    decimals: number,
    currentPrice: number
  ): number {
    const bigNumberToDecimals = balance / Math.pow(10, decimals);
    const balanceUsd = currentPrice ? bigNumberToDecimals * currentPrice : 0;
    return balanceUsd ? Math.round(balanceUsd * 100) / 100 : 0; // round to dollar
  }
  // convert the token balance to a balance token data
  private convertToBalanceTokenData(
    tokenBalance: TTokenBalance,
    cryptocurrenciesData: TCryptocurrencyData[]
  ): TBalanceTokenData {
    let cryptocurrency =
      cryptocurrenciesData[tokenBalance.contractAddress.toLocaleLowerCase()];
    // TODO handle if no cryptocurrency found, for now set to Unknown
    // if (!cryptocurrency) throw new Error('Cryptocurrency not found');
    if (!cryptocurrency) {
      // Logger.error('Cryptocurrency not found');
      cryptocurrency = {
        name: 'Unknown',
        symbol: 'Unknown',
        decimals: 18,
        current_price: 0,
        address: tokenBalance.contractAddress,
      };
    }
    // What we get
    // {
    //   decimals: 18,
    //   logo: 'https://static.alchemyapi.io/images/assets/3106.png',
    //   name: 'PKG Token',
    //   symbol: 'PKG',
    //   contractAddress: '0x02f2d4a04e6e01ace88bd2cd632875543b2ef577',
    //   tokenBalance: '0x000000000000000000000000000000000000000000000046791fc84e07d00000',
    //   error: null,
    // }
    // What we want
    // {
    //   "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
    //   "name": "DAI Stablecoin",
    //   "symbol": "DAI",
    //   "decimals": 18,
    //   "balance": "1234990000000000000000",
    //   "balanceUsd": 1234.99
    // }
    // convert the tokenBalance from bytes32 hex to decimals
    // ref https://docs.alchemy.com/docs/how-to-get-all-tokens-owned-by-an-address
    // tokenBalance = no. of tokens (quantity) * Math.pow(10, cryptocurrency.decimals)
    // reverse calculation in getBalanceToUSD
    const balanceBN = new web3.utils.BN(tokenBalance.tokenBalance);
    return {
      address: tokenBalance.contractAddress,
      balance: balanceBN.toString(),
      balanceUsd: this.getBalanceToUSD(
        balanceBN,
        tokenBalance.decimals,
        cryptocurrency.current_price
      ),
      decimals: tokenBalance.decimals,
      name: tokenBalance.name,
      symbol: tokenBalance.symbol,
    } as TBalanceTokenData;
  }
  public async getBalanceTokensData(
    network: TEIP377,
    address: string
  ): Promise<TBalanceTokenData[] | null> {
    const result = await this.cacheManager.get<TBalanceTokenData[] | null>(
      `balances:${network}:${address}`
    );
    return result ? result : null;
  }
  // handle the balance of the wallet,
  public async fetchTokensAndUpdateBalanceCache(
    network: TEIP377,
    address: string,
    cryptocurrenciesData: TCryptocurrencyData[]
  ): Promise<TBalanceTokenData[] | Error> {
    // bypass here because we don't have code to track pending transactions and invalidate the cache in case new transactions arrive
    // + should store and use only the result from ethersService.fetchToken anyway
    // const lastResult = await this.getBalanceTokensData(network, address);
    // if (lastResult) {
    //   return lastResult;
    // }
    const result = await this.ethersService.fetchTokens(network, address);
    if (result instanceof Error) throw result;
    const balanceTokensData = result.map((token) =>
      this.convertToBalanceTokenData(token, cryptocurrenciesData)
    );
    await this.cacheManager.set(`balances:${network}:${address}`, balanceTokensData);
    return balanceTokensData;
  }
}
