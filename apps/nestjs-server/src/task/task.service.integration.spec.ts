import { Test } from '@nestjs/testing';
import { CACHE_MANAGER, Logger } from '@nestjs/common';
import { TaskService } from './task.service';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from '@server/prisma';
import { ApiService } from '@server/api';
import { ConfigService } from '@nestjs/config';
import { coinMarketData } from '@test-utils/mocks';
import { supportedChains } from '@dlt/types';
import { SentryService } from '@ntegral/nestjs-sentry';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
};

describe('TaskService', () => {
  let service: TaskService;
  let cryptocurrenciesService: CryptocurrenciesService;
  let spyLogger: jest.SpyInstance;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        TaskService,
        CryptocurrenciesService,
        PrismaService,
        ApiService,
        ConfigService,
        SentryService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get(TaskService);
    cryptocurrenciesService = module.get(CryptocurrenciesService);
    spyLogger = jest.spyOn(Logger, 'error').mockImplementation();
  });
  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
  describe('Get Cryptocurrencies Data', () => {
    // // check that cryptocurrencyFetchAndStoreCron method use cron decorator
    // it.todo('should have cryptocurrencyFetchAndStoreCron method with cron decorator', () => {
    //   expect(service.cryptocurrencyFetchAndStoreCron).toHaveProperty('cron');
    // }

    // check that the cryptocurrencyFetchAndStoreCron method call cryptoCurrencyService.fetchCryptocurrenciesData and store the result in cache at cryptocurrencies key
    it('should call cryptoCurrencyService.fetchCryptocurrenciesData and store the result in cache at cryptocurrencies data key for each supportedChains with the correct format', async () => {
      const spyCryptoCurrencyService = jest
        .spyOn(cryptocurrenciesService, 'fetchCryptocurrenciesData')
        .mockResolvedValue(coinMarketData);
      const crypto = await cryptocurrenciesService.setCryptocurrenciesFromJSON();
      await mockCacheManager.get.mockReturnValueOnce(crypto);
      await service.fetchCryptocurrenciesDataAndStoreInCache();

      Object.values(supportedChains).forEach((chain, index) => {
        // just check that the key is correct for each chain
        expect(spyCryptoCurrencyService.mock.calls[index][0] === chain.network);
        const call = mockCacheManager.set.mock.calls[index];
        // just check that the key is correct for each chain
        expect(call[0] == `cryptocurrencies-data:${chain.network}`);
      });
    });
    it('should log an error if cryptoCurrencyService.fetchCryptocurrenciesData throw an error', async () => {
      const spyCryptoCurrencyService = jest
        .spyOn(cryptocurrenciesService, 'fetchCryptocurrenciesData')
        .mockRejectedValue(new Error('error'));
      await service.fetchCryptocurrenciesDataAndStoreInCache();
      expect(spyCryptoCurrencyService).toHaveBeenCalled();
      expect(spyLogger).toHaveBeenCalled();
    });
  });
});
