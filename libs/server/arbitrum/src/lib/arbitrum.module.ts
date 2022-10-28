import { Module } from '@nestjs/common';
import { ArbitrumService } from './arbitrum.service';
import { AlchemyService } from '@server/alchemy';

@Module({
  controllers: [],
  providers: [ArbitrumService, AlchemyService],
  exports: [ArbitrumService],
})
export class ArbitrumModule {}
