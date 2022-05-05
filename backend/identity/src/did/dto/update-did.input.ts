import { CreateDidInput } from './create-did.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDidInput extends PartialType(CreateDidInput) {
  @Field(() => Int)
  id: number;
}
