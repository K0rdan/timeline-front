import gql from 'graphql-tag';

// Types
const User = gql`
  type User {
    name: String!
  }
`;

// Queries
export const UserQuery = gql`
  extend type Query {
    user: User
  }
`;

// TypeDefs
export const typeDefs = [UserQuery, User];

// Resolvers
export const resolvers = {
  Query: {
    user: (_, args, ctx) => ({
      name: 'USER TEST',
    }),
  },
  User: {
    __resolveType(user, ctx, info) {
      return null;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
