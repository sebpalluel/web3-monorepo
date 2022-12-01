import { Test } from '@nestjs/testing';
import { ApiService } from './api.service';
import { config } from './api.module';
import { allCryptoFromCoingecko, TEIP377 } from '@dlt/types';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule(config).compile();
    service = module.get(ApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
  describe('Get Cryptocurrencies Data', () => {
    it('should throw an error if the network is not supported', async () => {
      await expect(
        service.getCryptoCurrenciesWithPrice(
          'not a network' as TEIP377,
          JSON.parse(JSON.stringify(allCryptoFromCoingecko))
        )
      ).rejects.toThrow();
    });
  });
});
