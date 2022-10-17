// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  kind: 'Document',
  definitions: [
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          operation: 'query',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Query',
            },
          },
        },
        {
          kind: 'OperationTypeDefinition',
          operation: 'subscription',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Subscription',
            },
          },
        },
      ],
      directives: [],
    },
    {
      kind: 'DirectiveDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive.',
      },
      name: {
        kind: 'Name',
        value: 'entity',
      },
      arguments: [],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'OBJECT',
        },
      ],
    },
    {
      kind: 'DirectiveDefinition',
      description: {
        kind: 'StringValue',
        value: 'Defined a Subgraph ID for an object type',
      },
      name: {
        kind: 'Name',
        value: 'subgraphId',
      },
      arguments: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'OBJECT',
        },
      ],
    },
    {
      kind: 'DirectiveDefinition',
      description: {
        kind: 'StringValue',
        value:
          'creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API.',
      },
      name: {
        kind: 'Name',
        value: 'derivedFrom',
      },
      arguments: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'field',
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: 'Name',
          value: 'FIELD_DEFINITION',
        },
      ],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigDecimal',
      },
      directives: [],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BigInt',
      },
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'BlockChangedFilter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'number_gte',
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Block_height',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hash',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'number',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'number_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Bundle',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Bundle_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Bundle_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'ethPrice',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Burn',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Transaction',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pair',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount0',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount1',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'needsComplete',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Burn_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Transaction_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'needsComplete',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Boolean',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'needsComplete_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Boolean',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'needsComplete_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Boolean',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'needsComplete_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Boolean',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Burn_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'needsComplete',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Bytes',
      },
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'LiquidityPosition',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pair',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'LiquidityPositionSnapshot',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'LiquidityPosition',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'block',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pair',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'LiquidityPositionSnapshot_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'LiquidityPosition_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'block_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'LiquidityPositionSnapshot_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'block',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0PriceUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1PriceUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenTotalSupply',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'LiquidityPosition_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'user_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'LiquidityPosition_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityTokenBalance',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mint',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Transaction',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pair',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount0',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount1',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mint_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Transaction_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mint_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidity',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeTo',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'feeLiquidity',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      description: {
        kind: 'StringValue',
        value: 'Defines the order direction, either ascending or descending',
        block: true,
      },
      name: {
        kind: 'Name',
        value: 'OrderDirection',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'asc',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'desc',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Pair',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Token',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Token',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PairDayData',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Token',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Token',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PairDayData_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PairDayData_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairAddress',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PairHourData',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pair',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PairHourData_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'PairHourData_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourStartUnix',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeToken1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'hourlyTxns',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Pair_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Pair_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserve1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'reserveUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'trackedReserveETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token0Price',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token1Price',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken0',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeToken1',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'volumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtTimestamp',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'createdAtBlockNumber',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityProviderCount',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Query',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapFactory',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'UniswapFactory',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapFactories',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapFactory_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapFactory_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UniswapFactory',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tokens',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Token_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Token_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Token',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairs',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Pair_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Pair_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Pair',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'users',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'LiquidityPosition',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositions',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'LiquidityPosition',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositionSnapshot',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'LiquidityPositionSnapshot',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositionSnapshots',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPositionSnapshot_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPositionSnapshot_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'LiquidityPositionSnapshot',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Transaction',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transactions',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Transaction_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Transaction_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Transaction',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mint',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Mint',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mints',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Mint',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'burn',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Burn',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'burns',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Burn',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'swap',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Swap',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'swaps',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Swap',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bundle',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bundle',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bundles',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bundle_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bundle_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Bundle',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapDayData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'UniswapDayData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapDayDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapDayData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UniswapDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairHourData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'PairHourData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairHourDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairHourData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairHourData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'PairHourData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairDayData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'PairDayData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairDayDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'PairDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tokenDayData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TokenDayData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tokenDayDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TokenDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Access to subgraph metadata',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_meta',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: '_Meta_',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Subscription',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapFactory',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'UniswapFactory',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapFactories',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapFactory_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapFactory_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UniswapFactory',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tokens',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Token_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Token_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Token',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairs',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Pair_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Pair_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Pair',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'user',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'users',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPosition',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'LiquidityPosition',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositions',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'LiquidityPosition',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositionSnapshot',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'LiquidityPositionSnapshot',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositionSnapshots',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPositionSnapshot_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPositionSnapshot_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'LiquidityPositionSnapshot',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Transaction',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transactions',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Transaction_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Transaction_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Transaction',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mint',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Mint',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mints',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Mint',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'burn',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Burn',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'burns',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Burn',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'swap',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Swap',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'swaps',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Swap',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bundle',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bundle',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bundles',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bundle_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bundle_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Bundle',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapDayData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'UniswapDayData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'uniswapDayDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'UniswapDayData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UniswapDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairHourData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'PairHourData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairHourDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairHourData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairHourData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'PairHourData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairDayData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'PairDayData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairDayDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'PairDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tokenDayData',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                  },
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TokenDayData',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tokenDayDatas',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_filter',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              description: {
                kind: 'StringValue',
                value:
                  'Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.',
                block: true,
              },
              name: {
                kind: 'Name',
                value: 'subgraphError',
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: '_SubgraphErrorPolicy_',
                  },
                },
              },
              defaultValue: {
                kind: 'EnumValue',
                value: 'deny',
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TokenDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Access to subgraph metadata',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_meta',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'block',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Block_height',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: '_Meta_',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Swap',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Transaction',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Pair',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bytes',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Swap_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Transaction_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Pair_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bytes',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'to_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Swap_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'transaction',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pair',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'sender',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0In',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1In',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount0Out',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amount1Out',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'to',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'logIndex',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'amountUSD',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Token',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'symbol',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'decimals',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData',
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TokenDayData',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'token',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Token',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'PairDayData_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'PairDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TokenDayData_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'token_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Token_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'PairDayData_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'TokenDayData_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'token',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeToken',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyTxns',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityToken',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'priceUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Token_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_contains',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_contains_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_starts_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_starts_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_ends_with',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'name_not_ends_with_nocase',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'PairDayData_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Token_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'symbol',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'name',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'decimals',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalSupply',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolume',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'tradeVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidity',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'derivedETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidPairs',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Transaction',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mints',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Mint',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'burns',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Burn',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'swaps',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Swap',
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Transaction_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Mint_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Burn_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Swap_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Transaction_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'blockNumber',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'mints',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'burns',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'swaps',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UniswapDayData',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TokenDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UniswapDayData_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'date_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TokenDayData_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UniswapDayData_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'date',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'dailyVolumeUntracked',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'maxStored',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UniswapFactory',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigInt',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'TokenDayData_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'TokenDayData',
                  },
                },
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UniswapFactory_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigInt',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigInt',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_not',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_not_contains',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_not_contains_nocase',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TokenDayData_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UniswapFactory_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'pairCount',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalVolumeETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'untrackedVolumeUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityUSD',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'totalLiquidityETH',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'txCount',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'mostLiquidTokens',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'User',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositions',
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '0',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                },
              },
              defaultValue: {
                kind: 'IntValue',
                value: '100',
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderBy',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition_orderBy',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderDirection',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderDirection',
                },
              },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'where',
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition_filter',
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'LiquidityPosition',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'BigDecimal',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'User_filter',
      },
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'id_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ID',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositions_',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'LiquidityPosition_filter',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_not',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_gt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_lt',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_gte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_lte',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BigDecimal',
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped_not_in',
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BigDecimal',
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Filter for the block changed event.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: '_change_block',
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'BlockChangedFilter',
            },
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'User_orderBy',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'id',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'liquidityPositions',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'usdSwapped',
          },
          directives: [],
        },
      ],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: '_Block_',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'The hash of the block',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'hash',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Bytes',
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'The block number',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'number',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Integer representation of the timestamp stored in blocks for the chain',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'timestamp',
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value: 'The type for the top-level _meta field',
        block: true,
      },
      name: {
        kind: 'Name',
        value: '_Meta_',
      },
      fields: [
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Information about a specific subgraph block. The hash of the block\nwill be null if the _meta field has a block constraint that asks for\na block number. It will be filled if the _meta field has no block constraint\nand therefore asks for the latest  block\n',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'block',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: '_Block_',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'The deployment ID',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'deployment',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
              },
            },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'If `true`, the subgraph encountered indexing errors at some past block',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'hasIndexingErrors',
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
              },
            },
          },
          directives: [],
        },
      ],
      interfaces: [],
      directives: [],
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: '_SubgraphErrorPolicy_',
      },
      values: [
        {
          kind: 'EnumValueDefinition',
          description: {
            kind: 'StringValue',
            value: 'Data will be returned even if the subgraph has indexing errors',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'allow',
          },
          directives: [],
        },
        {
          kind: 'EnumValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'If the subgraph has indexing errors, data will be omitted. The default.',
            block: true,
          },
          name: {
            kind: 'Name',
            value: 'deny',
          },
          directives: [],
        },
      ],
      directives: [],
    },
  ],
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true,
});
