import { merge } from 'lodash';
import {
  typeDefs as PlayersTypeDefs,
  resolvers as PlayersResolvers,
} from 'gql/features/Players';
import {
  typeDefs as UserTypeDefs,
  resolvers as UserResolvers,
} from 'gql/features/User';

export const features = {
  typeDefs: [...PlayersTypeDefs, ...UserTypeDefs],
  resolvers: merge(PlayersResolvers, UserResolvers),
};

export default features;
