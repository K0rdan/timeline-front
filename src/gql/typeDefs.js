import gql from 'graphql-tag';
import features from 'gql/features';

const baseTypeDefs = gql`
  interface Node {
    id: ID!
  }
  type Query {
    node(id: ID): Node
  }
`;

export const typeDefs = [baseTypeDefs, ...features.typeDefs];
export default typeDefs;
