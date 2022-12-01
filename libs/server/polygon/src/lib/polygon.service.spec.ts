import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/common';
import { AlchemyService } from '@server/alchemy';
import { tokensBalancePoly } from '@test-utils/mocks';
import { PolygonService } from './polygon.service';
import { PrismaService } from '@server/prisma';

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
};

describe('PolygonService', () => {
  let service: PolygonService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PolygonService,
        AlchemyService,
        ConfigService,
        PrismaService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = module.get(PolygonService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
  it('should fetchTokens with alchemy fetchPolygonTokens', async () => {
    const address = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const alchemySpy = jest
      .spyOn(service.alchemyService, 'fetchPolygonTokens')
      .mockResolvedValue(tokensBalancePoly);
    const result = await service.fetchTokens(address);
    expect(alchemySpy).toHaveBeenCalledWith(address);
    expect(result).toBe(tokensBalancePoly);
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
