import { Test } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { coinMarketData } from '@test-utils/mocks';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { PrismaService } from '@server/prisma';
import { ConfigService } from '@nestjs/config';
import { ApiService } from '@server/api';
import { allCryptoFromCoingecko, EIP3770Network } from '@dlt/types';

const mockCacheManager = {
  get: jest.fn(),
  set: jest.fn(),
};

describe('CryptocurrenciesService', () => {
  let service: CryptocurrenciesService;
  let spyApiService: ApiService;
  // let spyApi: CryptocurrenciesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        CryptocurrenciesService,
        PrismaService,
        ConfigService,
        ApiService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get(CryptocurrenciesService);
    spyApiService = module.get(ApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('Cryptocurrencies List', () => {
    it('should fetch the cryptocurrencies from the json on onModuleInit and store the result in the cache cryptocurrency with the right format', async () => {
      await service.setCryptocurrenciesFromJSON();
      const result = mockCacheManager.set.mock.calls[0][1];
      expect(Object.keys(result).length).toEqual(
        JSON.parse(JSON.stringify(allCryptoFromCoingecko)).length
      );
      expect(result.bitcoin.id).toEqual('bitcoin');
    });
    it('getCryptocurrencies should return the cryptocurrencies from the cache', async () => {
      mockCacheManager.get.mockReturnValueOnce(coinMarketData);
      const result = await service.getCryptocurrencies();
      expect(result).toEqual(coinMarketData);
    });
  });

  describe('Cryptocurrencies Data for network', () => {
    it('should get the cache from cryptocurrencies-data for network and return the result', async () => {
      mockCacheManager.get.mockResolvedValue(coinMarketData);
      const result = await service.getCryptocurrenciesData(EIP3770Network.ETH);
      expect(mockCacheManager.get).toHaveBeenCalledWith(
        `cryptocurrencies-data:${EIP3770Network.ETH}`
      );
      expect(result).toEqual(coinMarketData);
    });

    it('fetchCryptocurrenciesData should get currencies from coingecko service', async () => {
      const getCryptoCurrenciesWithPrice = jest
        .spyOn(spyApiService, 'getCryptoCurrenciesWithPrice')
        .mockResolvedValue(coinMarketData);
      const result = await service.fetchCryptocurrenciesData(
        EIP3770Network.POLY,
        JSON.parse(JSON.stringify(allCryptoFromCoingecko))
      );
      expect(result).toBe(coinMarketData);
      expect(getCryptoCurrenciesWithPrice).toHaveBeenCalled();
    });
  });
});
