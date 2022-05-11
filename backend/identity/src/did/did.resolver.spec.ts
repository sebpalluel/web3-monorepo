import { Test, TestingModule } from '@nestjs/testing';
import { DidResolver } from './did.resolver';
import { DidService } from './did.service';

describe('DidResolver', () => {
  let resolver: DidResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DidResolver, DidService],
    }).compile();

    resolver = module.get<DidResolver>(DidResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
