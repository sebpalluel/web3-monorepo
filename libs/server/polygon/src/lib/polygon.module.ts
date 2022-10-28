import { Module } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { AlchemyService } from '@server/alchemy';

@Module({
  controllers: [],
  providers: [PolygonService, AlchemyService],
  exports: [PolygonService],
})
export class PolygonModule {}
