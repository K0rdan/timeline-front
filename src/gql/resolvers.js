import { merge } from 'lodash';
import { features } from 'gql/features';

const baseResolvers = {
  Query: {
    node(parent, { id }, ctx, info) {
      console.log('GQL / Resolvers / node / ctx', ctx);
      return null;
    },
  },
  Node: {
    __resolveType(obj, ctx, info) {
      return obj.__typename;
    },
  },
};

export const resolvers = merge(baseResolvers, features.resolvers);
export default resolvers;
