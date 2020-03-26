// import { makeExecutableSchema } from 'graphql-tools';
// import { typeDefs } from 'gql/typedefs';
// import { resolvers } from 'gql/resolvers';

// export const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

import { schemaComposer } from 'graphql-compose';
import 'models/user';

export const schema = schemaComposer.buildSchema();
export default schema;
