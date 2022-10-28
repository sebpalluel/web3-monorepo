import { Module } from '@nestjs/common';
import { CryptocurrenciesService } from './cryptocurrencies.service';
@Module({
  providers: [CryptocurrenciesService],
  exports: [CryptocurrenciesService],
})
export class CryptocurrenciesModule {}
