import { Test, TestingModule } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AlchemyService } from '@server/alchemy';
import { EIP3770Network } from '@dlt/types';
import { tokensBalanceEth } from '@test-utils/mocks';
import { PrismaService } from '@server/prisma';
import { ApiService } from '@server/api';
import { ConfigService } from '@nestjs/config';

import { WalletService } from './wallet.service';
import { WalletProviders } from './wallet.module';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
};

describe('WalletService', () => {
  let service: WalletService;
  let spyAlchemyService: AlchemyService;
  let spyFetchEthereumTokens: jest.SpyInstance;
  let prismaService: PrismaService;
  const address = '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        WalletService,
        ...WalletProviders,
        PrismaService,
        ApiService,
        ConfigService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get<WalletService>(WalletService);
    prismaService = module.get<PrismaService>(PrismaService);
    spyAlchemyService = module.get<AlchemyService>(AlchemyService);
    spyFetchEthereumTokens = jest
      .spyOn(spyAlchemyService, 'fetchEthereumTokens')
      .mockResolvedValue(tokensBalanceEth);
    // ✅ Best Practice: Clean-up resources after each run
    await prismaService.cleanDb();
  });
  afterEach(async () => {
    spyFetchEthereumTokens.mockClear();
    mockCacheManager.set.mockClear();
    mockCacheManager.get.mockClear();
  });

  describe('Wallet model', () => {
    describe('Wallet creation', () => {
      it('should create a wallet', async () => {
        const result = await service.createWallet(EIP3770Network.ETH, address);
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('network', EIP3770Network.ETH);
        expect(result).toHaveProperty('address', address);
        const wallets = await prismaService.wallet.findMany();
        expect(wallets).toHaveLength(1);
        expect(wallets[0]).toHaveProperty('id');
        expect(wallets[0]).toHaveProperty('network', EIP3770Network.ETH);
        expect(wallets[0]).toHaveProperty('address', address);
      });
      it('should throw on duplicate wallet', async () => {
        await service.createWallet(EIP3770Network.ETH, address);
        await expect(service.createWallet(EIP3770Network.ETH, address)).rejects.toThrow();
      });
    });
    describe('Wallet find', () => {
      it('should find a wallet', async () => {
        await service.createWallet(EIP3770Network.ETH, address);
        const result = await service.getWallet(EIP3770Network.ETH, address);
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('network', EIP3770Network.ETH);
        expect(result).toHaveProperty('address', address);
      });
      it('should return null on non existing wallet', async () => {
        const result = await service.getWallet(EIP3770Network.ETH, address);
        expect(result).toBeNull();
      });
    });
    describe('Wallet update', () => {
      it('should update a wallet', async () => {
        await service.createWallet(EIP3770Network.ETH, address);
        const result = await service.updateWallet(EIP3770Network.ETH, address, {
          name: 'test',
        });
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('network', EIP3770Network.ETH);
        expect(result).toHaveProperty('address', address);
        expect(result).toHaveProperty('name', 'test');
      });
      it('should throw on non existing wallet', async () => {
        await expect(
          service.updateWallet(EIP3770Network.ETH, address, {
            name: 'test',
          })
        ).rejects.toThrow();
      });
    });
  });
  describe('Balances for address', () => {
    it('getBalanceToUSD return the balance in USD', async () => {
      const result = await service.getBalanceToUSD(5974658722, 6, 0.9991439);
      expect(result).toEqual(5969.54);
    });
  });
});
