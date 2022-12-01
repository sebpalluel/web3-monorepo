import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/common';
import { EthersService } from './ethers.service';
import { EthersProviders } from './ethers.module';
import { AlchemyService } from '@server/alchemy';
import { EIP3770Network } from '@dlt/types';
import { tokensBalancePoly, tokensBalanceEth, tokensBalanceArb } from '@test-utils/mocks';
import { PrismaService } from '@server/prisma';
import { Wallet } from '@prisma/client';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
};

describe('EthersService', () => {
  let service: EthersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ...EthersProviders,
        EthersService,
        AlchemyService,
        ConfigService,
        PrismaService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get(EthersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
  describe('fetchTokens', () => {
    it('should fetchTokens with alchemy fetchEthereumTokens when network is eth', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const alchemySpy = jest
        .spyOn(service.ethereumService.alchemyService, 'fetchEthereumTokens')
        .mockResolvedValue(tokensBalanceEth);
      const result = await service.fetchTokens(EIP3770Network.ETH, address);
      expect(alchemySpy).toHaveBeenCalledWith(address);
      expect(result).toBe(tokensBalanceEth);
    });
    it('should fetchTokens with alchemy fetchPolygonTokens when network is poly', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const alchemySpy = jest
        .spyOn(service.polygonService.alchemyService, 'fetchPolygonTokens')
        .mockResolvedValue(tokensBalancePoly);
      const result = await service.fetchTokens(EIP3770Network.POLY, address);
      expect(alchemySpy).toHaveBeenCalledWith(address);
      expect(result).toBe(tokensBalancePoly);
    });
    it('should fetchTokens with alchemy fetchArbitrumTokens when network is arb', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const alchemySpy = jest
        .spyOn(service.arbitrumService.alchemyService, 'fetchArbitrumTokens')
        .mockResolvedValue(tokensBalanceArb);
      const result = await service.fetchTokens(EIP3770Network.ARB, address);
      expect(alchemySpy).toHaveBeenCalledWith(address);
      expect(result).toBe(tokensBalanceArb);
    });
    it('should throw an error when network not supported', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const alchemySpy = jest
        .spyOn(service.ethereumService.alchemyService, 'fetchEthereumTokens')
        .mockResolvedValue(tokensBalanceEth);
      const result = await service.fetchTokens('not a network' as any, address);
      expect(alchemySpy).not.toHaveBeenCalled();
      expect(result).toBeInstanceOf(Error);
    });
  });
  describe('createWallet', () => {
    it('should createWallet with ethereumService when network is eth', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const createWalletSpy = jest
        .spyOn(service.ethereumService, 'createWallet')
        .mockResolvedValue({} as Wallet);
      await service.createWallet(EIP3770Network.ETH, address);
      expect(createWalletSpy).toHaveBeenCalledWith(address);
    });
    it('should createWallet with polygonService when network is poly', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const createWalletSpy = jest
        .spyOn(service.polygonService, 'createWallet')
        .mockResolvedValue({} as Wallet);
      await service.createWallet(EIP3770Network.POLY, address);
      expect(createWalletSpy).toHaveBeenCalledWith(address);
    });
    it('should createWallet with arbitrumService when network is arb', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const createWalletSpy = jest
        .spyOn(service.arbitrumService, 'createWallet')
        .mockResolvedValue({} as Wallet);
      await service.createWallet(EIP3770Network.ARB, address);
      expect(createWalletSpy).toHaveBeenCalledWith(address);
    });
    it('should throw an error when network not supported', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const createWalletSpy = jest
        .spyOn(service.ethereumService, 'createWallet')
        .mockResolvedValue({} as Wallet);
      const result = await service.createWallet('not a network' as any, address);
      expect(createWalletSpy).not.toHaveBeenCalled();
      expect(result).toBeInstanceOf(Error);
    });
  });
  describe('getWallet', () => {
    it('should getWallet with ethereumService when network is eth', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const getWalletSpy = jest
        .spyOn(service.ethereumService, 'getWallet')
        .mockResolvedValue({} as Wallet);
      await service.getWallet(EIP3770Network.ETH, address);
      expect(getWalletSpy).toHaveBeenCalledWith(address);
    });
    it('should getWallet with polygonService when network is poly', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const getWalletSpy = jest
        .spyOn(service.polygonService, 'getWallet')
        .mockResolvedValue({} as Wallet);
      await service.getWallet(EIP3770Network.POLY, address);
      expect(getWalletSpy).toHaveBeenCalledWith(address);
    });
    it('should getWallet with arbitrumService when network is arb', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const getWalletSpy = jest
        .spyOn(service.arbitrumService, 'getWallet')
        .mockResolvedValue({} as Wallet);
      await service.getWallet(EIP3770Network.ARB, address);
      expect(getWalletSpy).toHaveBeenCalledWith(address);
    });
    it('should throw an error when network not supported', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const getWalletSpy = jest
        .spyOn(service.ethereumService, 'getWallet')
        .mockResolvedValue({} as Wallet);
      const result = await service.getWallet('not a network' as any, address);
      expect(getWalletSpy).not.toHaveBeenCalled();
      expect(result).toBeInstanceOf(Error);
    });
  });
  describe('updateWallet', () => {
    it('should updateWallet with ethereumService when network is eth', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const updateWalletSpy = jest
        .spyOn(service.ethereumService, 'updateWallet')
        .mockResolvedValue({} as Wallet);
      await service.updateWallet(EIP3770Network.ETH, address, {});
      expect(updateWalletSpy).toHaveBeenCalledWith(address, {});
    });
    it('should updateWallet with polygonService when network is poly', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const updateWalletSpy = jest
        .spyOn(service.polygonService, 'updateWallet')
        .mockResolvedValue({} as Wallet);
      await service.updateWallet(EIP3770Network.POLY, address, {});
      expect(updateWalletSpy).toHaveBeenCalledWith(address, {});
    });
    it('should updateWallet with arbitrumService when network is arb', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const updateWalletSpy = jest
        .spyOn(service.arbitrumService, 'updateWallet')
        .mockResolvedValue({} as Wallet);
      await service.updateWallet(EIP3770Network.ARB, address, {});
      expect(updateWalletSpy).toHaveBeenCalledWith(address, {});
    });
    it('should throw an error when network not supported', async () => {
      const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
      const updateWalletSpy = jest
        .spyOn(service.ethereumService, 'updateWallet')
        .mockResolvedValue({} as Wallet);
      const result = await service.updateWallet('not a network' as any, address, {});
      expect(updateWalletSpy).not.toHaveBeenCalled();
      expect(result).toBeInstanceOf(Error);
    });
  });
});
