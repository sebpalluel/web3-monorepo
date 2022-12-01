import { Test } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AlchemyService } from '@server/alchemy';
import { EthereumService } from './ethereum.service';
import { PrismaService } from '@server/prisma';
import { tokensBalanceEth } from '@test-utils/mocks';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
};

describe('EthereumService', () => {
  let service: EthereumService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        EthereumService,
        AlchemyService,
        ConfigService,
        PrismaService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get(EthereumService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
  it('should fetchTokens with alchemy fetchEthereumTokens', async () => {
    const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const alchemySpy = jest
      .spyOn(service.alchemyService, 'fetchEthereumTokens')
      .mockResolvedValue(tokensBalanceEth);
    const result = await service.fetchTokens(address);
    expect(alchemySpy).toHaveBeenCalledWith(address);
    expect(result).toBe(tokensBalanceEth);
  });
  it('should createWallet with prisma wallet create', async () => {
    const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const prismaSpy = jest
      .spyOn(prismaService.wallet, 'create')
      .mockResolvedValue({} as any);
    await service.createWallet(address);
    expect(prismaSpy).toHaveBeenCalled();
  });
  it('should getWallet with prisma wallet findUnique', async () => {
    const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const prismaSpy = jest
      .spyOn(prismaService.wallet, 'findUnique')
      .mockResolvedValue({} as any);
    await service.getWallet(address);
    expect(prismaSpy).toHaveBeenCalled();
  });
  it('should updateWallet with prisma wallet update', async () => {
    const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const prismaSpy = jest
      .spyOn(prismaService.wallet, 'update')
      .mockResolvedValue({} as any);
    await service.updateWallet(address, {});
    expect(prismaSpy).toHaveBeenCalled();
  });
});
