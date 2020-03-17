import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from 'gql/typedefs';
import { resolvers } from 'gql/resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
