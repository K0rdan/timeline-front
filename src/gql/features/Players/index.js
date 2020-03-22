import gql from 'graphql-tag';

// Types
const Player = gql`
  type Player {
    id: ID!
    name: String!
  }
`;

// Queries
export const PlayersQuery = gql`
  extend type Query {
    players: [Player]
  }
`;

// TypeDefs
export const typeDefs = [PlayersQuery, Player];

// Resolvers
export const resolvers = {
  Query: {
    players: (_, args, ctx) => [
      {
        id: 1,
        name: 'Player1',
      },
      {
        id: 2,
        name: 'Player2',
      },
    ],
  },
  Player: {
    __resolveType(player, ctx, info) {
      console.log('GQL / Players / player', player);
      return null;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
