import { Module } from '@nestjs/common';
import { EthereumService } from './ethereum.service';
import { AlchemyService } from '@server/alchemy';

@Module({
  controllers: [],
  providers: [EthereumService, AlchemyService],
  exports: [EthereumService],
})
export class EthereumModule {}
