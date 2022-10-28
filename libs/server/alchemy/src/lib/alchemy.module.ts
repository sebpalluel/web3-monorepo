import { Module } from '@nestjs/common';
import { AlchemyService } from './alchemy.service';

@Module({
  providers: [AlchemyService],
  exports: [AlchemyService],
})
export class AlchemyModule {}
