import { Injectable } from '@nestjs/common';
import { TEIP377, EIP3770Network, WalletData, TTokenBalance } from '@dlt/types';
import { EthereumService } from '@server/ethereum';
import { PolygonService } from '@server/polygon';
import { ArbitrumService } from '@server/arbitrum';
import { Wallet } from '@prisma/client';
import { isAddress } from 'ethers/lib/utils';

@Injectable()
export class EthersService {
  constructor(
    public ethereumService: EthereumService,
    public polygonService: PolygonService,
    public arbitrumService: ArbitrumService
  ) {}
  public async fetchTokens(
    network: TEIP377,
    address: string
  ): Promise<TTokenBalance[] | Error> {
    if (!isAddress(address)) return new Error('Address is not valid');
    switch (network) {
      case EIP3770Network.ETH:
        return this.ethereumService.fetchTokens(address);
      case EIP3770Network.POLY:
        return this.polygonService.fetchTokens(address);
      case EIP3770Network.ARB:
        return this.arbitrumService.fetchTokens(address);
      default:
        return new Error('Network not supported');
    }
  }
  public async createWallet(network: TEIP377, address: string): Promise<Wallet | Error> {
    switch (network) {
      case EIP3770Network.ETH:
        return this.ethereumService.createWallet(address);
      case EIP3770Network.POLY:
        return this.polygonService.createWallet(address);
      case EIP3770Network.ARB:
        return this.arbitrumService.createWallet(address);
      default:
        return new Error('Network not supported');
    }
  }
  public async updateWallet(
    network: TEIP377,
    address: string,
    walletData: WalletData
  ): Promise<Wallet | Error> {
    switch (network) {
      case EIP3770Network.ETH:
        return this.ethereumService.updateWallet(address, walletData);
      case EIP3770Network.POLY:
        return this.polygonService.updateWallet(address, walletData);
      case EIP3770Network.ARB:
        return this.arbitrumService.updateWallet(address, walletData);
      default:
        return new Error('Network not supported');
    }
  }
  public async getWallet(network: TEIP377, address: string): Promise<Wallet | Error> {
    switch (network) {
      case EIP3770Network.ETH:
        return this.ethereumService.getWallet(address);
      case EIP3770Network.POLY:
        return this.polygonService.getWallet(address);
      case EIP3770Network.ARB:
        return this.arbitrumService.getWallet(address);
      default:
        return new Error('Network not supported');
    }
  }
}
