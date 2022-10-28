import { Module } from '@nestjs/common';
import { EthersService } from './ethers.service';
import { EthereumService } from '@server/ethereum';
import { ArbitrumService } from '@server/arbitrum';
import { PolygonService } from '@server/polygon';

export const EthersProviders = [EthereumService, ArbitrumService, PolygonService];

@Module({
  imports: [],
  providers: [EthersService, ...EthersProviders],
  exports: [EthersService],
})
export class EthersModule {}
