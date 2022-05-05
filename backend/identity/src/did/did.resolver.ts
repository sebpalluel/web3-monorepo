import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DidService } from './did.service';
import { Did } from './entities/did.entity';
import { CreateDidInput } from './dto/create-did.input';
import { UpdateDidInput } from './dto/update-did.input';

@Resolver(() => Did)
export class DidResolver {
  constructor(private readonly didService: DidService) {}

  @Mutation(() => Did)
  createDid(@Args('createDidInput') createDidInput: CreateDidInput) {
    return this.didService.create(createDidInput);
  }

  @Query(() => [Did], { name: 'did' })
  findAll() {
    return this.didService.findAll();
  }

  @Query(() => Did, { name: 'did' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.didService.findOne(id);
  }

  @Mutation(() => Did)
  updateDid(@Args('updateDidInput') updateDidInput: UpdateDidInput) {
    return this.didService.update(updateDidInput.id, updateDidInput);
  }

  @Mutation(() => Did)
  removeDid(@Args('id', { type: () => Int }) id: number) {
    return this.didService.remove(id);
  }
}
