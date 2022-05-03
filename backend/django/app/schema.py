import graphene
import graphql_jwt
import api.schema

## Mutation: 
# - token_auth - for Login
# - refresh_token - for Token refresh
# + schema from api.schema.Mutation
class Mutation(api.schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    verify_token = graphql_jwt.Verify.Field()    
    pass

## Query:
# + schema from api.schema.Query
class Query(api.schema.Query, graphene.ObjectType):
    pass

# Create schema
schema = graphene.Schema(query=Query, mutation=Mutation)