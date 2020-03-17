import {
  typeDefs as UserTypeDefs,
  resolvers as UserResolvers,
} from 'gql/features/User';

export const features = {
  typeDefs: UserTypeDefs,
  resolvers: {
    ...UserResolvers,
  },
};

export default features;
