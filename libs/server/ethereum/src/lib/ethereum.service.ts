import { Injectable } from '@nestjs/common';
import { PrismaService } from '@server/prisma';
import { AlchemyService } from '@server/alchemy';
import { Wallet } from '@prisma/client';
import { EIP3770Network, WalletData, TTokenBalance } from '@boilerplate/dlt/types';

@Injectable()
export class EthereumService {
  constructor(public alchemyService: AlchemyService, private prisma: PrismaService) {}
  public async fetchTokens(address: string): Promise<TTokenBalance[]> {
    //TODO handle if throw error here, depending of error auto-heal with retry or use other RPC provider
    return this.alchemyService.fetchEthereumTokens(address);
  }
  public async getWallet(address: string): Promise<Wallet> {
    return this.prisma.wallet.findUnique({
      where: {
        EIP377: {
          address,
          network: EIP3770Network.ETH,
        },
      },
    });
  }
  public async createWallet(address: string): Promise<Wallet> {
    return this.prisma.wallet.create({
      data: {
        address,
        network: EIP3770Network.ETH,
        balanceUsd: 0,
      },
    });
  }
  public async updateWallet(address: string, walletData: WalletData): Promise<Wallet> {
    // TODO put back when pending transactions are handled
    delete walletData.pendingTransactions;
    return this.prisma.wallet.update({
      where: {
        EIP377: {
          address,
          network: EIP3770Network.ETH,
        },
      },
      data: {
        ...walletData,
      },
    });
  }
}
