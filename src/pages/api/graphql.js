import { ApolloServer } from 'apollo-server-micro';
import schema from 'gql/schema';

const apolloServer = new ApolloServer({
  schema,
  context: ctx => ctx,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
