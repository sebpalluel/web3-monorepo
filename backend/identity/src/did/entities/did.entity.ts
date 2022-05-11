import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Did {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
