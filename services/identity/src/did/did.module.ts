import { Module } from '@nestjs/common';
import { DidService } from './did.service';
import { DidResolver } from './did.resolver';

@Module({
  providers: [DidResolver, DidService]
})
export class DidModule {}
