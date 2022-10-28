import { Test } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PrismaService, ConfigService],
    }).compile();

    service = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
  it('should have cleanDb method', () => {
    expect(service.cleanDb).toBeTruthy();
  });
  it('should not throw error with cleanDb method', () => {
    expect(() => service.cleanDb()).not.toThrow();
  });
});
