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

export const typeDefs = [baseTypeDefs];
for (const typeDef in features.typeDefs) {
  if (features.typeDefs.hasOwnProperty(typeDef)) {
    typeDefs.push(features.typeDefs[typeDef]);
  }
}
export default typeDefs;
