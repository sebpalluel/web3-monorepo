import { Test, TestingModule } from '@nestjs/testing';
import { BalancesService } from './balances.service';
import { CACHE_MANAGER } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from '@server/prisma';
import { AlchemyService } from '@server/alchemy';
import { ApiService } from '@server/api';
import { CryptocurrenciesService } from '@server/cryptocurrencies';
import { ConfigService } from '@nestjs/config';
import { WalletService } from '../wallet/wallet.service';
import { WalletProviders } from '../wallet/wallet.module';
import { EIP3770Network } from '@dlt/types';
import { tokensBalanceEth } from '@test-utils/mocks';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
  del: jest.fn(),
};

describe('BalancesService', () => {
  let service: BalancesService;
  let spyAlchemyService: AlchemyService;
  let prismaService: PrismaService;
  let spyFetchEthereumTokens: jest.SpyInstance;
  const address = '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        BalancesService,
        WalletService,
        CryptocurrenciesService,
        ConfigService,
        ApiService,
        PrismaService,
        ...WalletProviders,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get<BalancesService>(BalancesService);
    spyAlchemyService = module.get<AlchemyService>(AlchemyService);
    spyFetchEthereumTokens = jest.spyOn(spyAlchemyService, 'fetchEthereumTokens');
    prismaService = module.get<PrismaService>(PrismaService);
    await prismaService.cleanDb();
  });

  afterEach(() => {
    spyFetchEthereumTokens.mockClear();
    mockCacheManager.set.mockClear();
    mockCacheManager.get.mockClear();
    mockCacheManager.del.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it.skip('should fetch tokens from cache if the cache has the balances in store', async () => {
    mockCacheManager.get.mockReturnValue(tokensBalanceEth);
    const result = await service.fetchTokensFromAddressAndSyncWallet(
      EIP3770Network.ETH,
      address
    );
    expect(result).toEqual(tokensBalanceEth);
    expect(spyFetchEthereumTokens).not.toHaveBeenCalled();
    expect(mockCacheManager.set).not.toHaveBeenCalled();
    expect(mockCacheManager.get).toHaveBeenCalledWith(
      `balances:${EIP3770Network.ETH}:${address}`
    );
  });
});
