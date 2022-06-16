import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDidInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
