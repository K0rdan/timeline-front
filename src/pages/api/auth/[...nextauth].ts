import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const {
  // NODE_ENV,
  DEBUG,
  GOOGLE_ID,
  GOOGLE_SECRET,
  // DB_HOST,
  // DB_PORT,
  // DB_USER,
  // DB_PASSWORD,
  SECRET,
  JWT_SECRET,
} = process.env;

export default NextAuth({
  providers: [
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    Providers.Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
  // database: {
  //   type: 'postgres',
  //   host: DB_HOST,
  //   port: DB_PORT,
  //   username: DB_USER,
  //   password: DB_PASSWORD,
  //   database: 'timeline',
  //   synchronize: NODE_ENV === 'development',
  // },
  secret: SECRET,
  session: {
    jwt: true,
  },
  jwt: {
    secret: JWT_SECRET,
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
      console.log('[next-auth][signIn]', message);
    },
    async signOut(message) {
      /* on signout */
      console.log('[next-auth][signOut]', message);
    },
    async createUser(message) {
      /* user created */
      console.log('[next-auth][createUser]', message);
    },
    async linkAccount(message) {
      /* account linked to a user */
      console.log('[next-auth][linkAccount]', message);
    },
    async session(message) {
      /* session is active */
      console.log('[next-auth][session]', message);
    },
    async error(message) {
      /* error in authentication flow */
      console.log('[next-auth][error]', message);
    },
  },
  debug: DEBUG,
});
