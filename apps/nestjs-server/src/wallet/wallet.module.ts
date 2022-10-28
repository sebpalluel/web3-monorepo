import { Module } from '@nestjs/common';
import { EthersService, EthersProviders } from '@server/ethers';
import { AlchemyService } from '@server/alchemy';

import { WalletService } from './wallet.service';

export const WalletProviders = [...EthersProviders, EthersService, AlchemyService];

@Module({
  imports: [],
  providers: [WalletService, ...WalletProviders],
  exports: [WalletService],
})
export class WalletModule {}
