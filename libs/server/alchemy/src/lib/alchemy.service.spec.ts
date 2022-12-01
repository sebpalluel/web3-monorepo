import { Test } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/common';
import { AlchemyService } from './alchemy.service';
import { Network, TokenBalance } from 'alchemy-sdk';
import { ConfigService } from '@nestjs/config';
import {
  tokenDataEth,
  tokensBalanceEth,
  tokenBalanceAlchemyEth,
} from '@test-utils/mocks';
import { TTokenBalance, EIP3770Network } from '@dlt/types';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
};
describe('AlchemyService', () => {
  let service: AlchemyService;
  let config: ConfigService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AlchemyService,
        ConfigService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get(AlchemyService);
    config = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('Alchemy Ethereum', () => {
    it('should have an ethSdk with the right config', () => {
      expect(service.ethSdk).toBeDefined();
      expect(service.ethSdk.config.network).toEqual(Network.ETH_MAINNET);
      expect(service.ethSdk.config.apiKey).toEqual(
        config.get('ALCHEMY_ETHEREUM_MAINNET_TOKEN')
      );
    });

    it('should fetchEthereumTokens with correct address', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const ethSdkSpy = jest
        .spyOn(service.ethSdk.core, 'getTokenBalances')
        .mockResolvedValue({ address, tokenBalances: tokensBalanceEth });
      jest
        .spyOn(service, 'getBalanceWithTokensMetadata')
        .mockResolvedValue([] as TTokenBalance[]);
      const result = await service.fetchEthereumTokens(address);
      expect(ethSdkSpy).toHaveBeenCalledWith(address);
    });
    it('should getBalanceWithTokensMetadata with correct args', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      jest
        .spyOn(service.ethSdk.core, 'getTokenBalances')
        .mockResolvedValue({ address, tokenBalances: tokensBalanceEth });
      const getBalanceWithTokensMetadataSpy = jest
        .spyOn(service, 'getBalanceWithTokensMetadata')
        .mockResolvedValue([] as TTokenBalance[]);
      await service.fetchEthereumTokens(address);
      //  should have been called with EIP3770Network.ETH, ethSdk and tokenAddresses
      expect(getBalanceWithTokensMetadataSpy).toHaveBeenCalledWith(
        EIP3770Network.ETH,
        service.ethSdk,
        tokensBalanceEth
      );
    });
    it('fetchTokensMetadataAndUpdateTokenCache should get fetched token value if none in cache', async () => {
      const tokenAddresses = tokensBalanceEth.map((token) => token.contractAddress);
      jest.spyOn(service, 'getTokensData').mockResolvedValueOnce([]);
      jest.spyOn(service, 'fetchTokensMetadata').mockResolvedValue(tokenDataEth);
      const res = await service.fetchTokensMetadataAndUpdateTokenCache(
        EIP3770Network.ETH,
        service.ethSdk,
        tokenAddresses
      );
      expect(mockCacheManager.set).toHaveBeenCalledWith(
        `token-data:${EIP3770Network.ETH}`,
        tokenDataEth
      );
      expect(res).toEqual(tokenDataEth);
    });
    it("fetchTokensMetadataAndUpdateTokenCache dont't call fetchTokensMetadata if already available in cache", async () => {
      const tokenAddresses = tokensBalanceEth.map((token) => token.contractAddress);
      mockCacheManager.set.mockClear();
      jest.spyOn(service, 'getTokensData').mockResolvedValueOnce(tokenDataEth);
      jest.spyOn(service, 'fetchTokensMetadata').mockResolvedValue(tokenDataEth);
      const res = await service.fetchTokensMetadataAndUpdateTokenCache(
        EIP3770Network.ETH,
        service.ethSdk,
        tokenAddresses
      );
      expect(mockCacheManager.set).not.toHaveBeenCalled();
      expect(res).toEqual(tokenDataEth);
    });

    it('fetchTokensMetadataAndUpdateTokenCache call fetchTokensMetadata only for tokens data that are missing in cache', async () => {
      const tokenAddresses = tokensBalanceEth.map((token) => token.contractAddress);
      mockCacheManager.set.mockClear();
      const allTokensData = JSON.parse(JSON.stringify(tokenDataEth));
      const missingTokenData = tokenDataEth.splice(5, 9);
      jest.spyOn(service, 'getTokensData').mockResolvedValueOnce(tokenDataEth);
      const spyFetchTokensMetadata = jest.spyOn(service, 'fetchTokensMetadata');
      spyFetchTokensMetadata.mockResolvedValueOnce(missingTokenData);
      const res = await service.fetchTokensMetadataAndUpdateTokenCache(
        EIP3770Network.ETH,
        service.ethSdk,
        tokenAddresses
      );
      expect(spyFetchTokensMetadata).toHaveBeenCalledWith(
        service.ethSdk,
        missingTokenData.map((token) => token.contractAddress)
      );
      expect(mockCacheManager.set).toHaveBeenCalled();
      expect(res.length).toEqual(allTokensData.length);
    });

    it('should return correct data with fetchTokensMetadataAndUpdateTokenCache', async () => {
      jest.spyOn(service, 'fetchTokensMetadata').mockResolvedValue(tokenDataEth);
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      jest
        .spyOn(service.ethSdk.core, 'getTokenBalances')
        .mockResolvedValue({ address, tokenBalances: tokenBalanceAlchemyEth });
      const result = await service.fetchEthereumTokens(address);
      //original item has 65 tokens but some have 0 balance, check that it's well filtered
      expect(result.length).toEqual(55);
    });
  });
  describe('Alchemy Polygon', () => {
    it('should have a polygonSdk with the right config', () => {
      expect(service.polygonSdk).toBeDefined();
      expect(service.polygonSdk.config.network).toEqual(Network.MATIC_MAINNET);
      expect(service.polygonSdk.config.apiKey).toEqual(
        config.get('ALCHEMY_POLYGON_MAINNET_TOKEN')
      );
    });
  });
  describe('Alchemy Arbitrum', () => {
    it('should have an arbitrumSdk with the right config', () => {
      expect(service.arbitrumSdk).toBeDefined();
      expect(service.arbitrumSdk.config.network).toEqual(Network.ARB_MAINNET);
      expect(service.arbitrumSdk.config.apiKey).toEqual(
        config.get('ALCHEMY_ARBITRUM_MAINNET_TOKEN')
      );
    });
  });
});
