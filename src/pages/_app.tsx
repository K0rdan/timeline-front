import { AppProps } from 'next/app';
//import { UserProvider } from '@auth0/nextjs-auth0';
import { Provider } from 'next-auth/client';
import React from 'react';

export const App = ({ Component, pageProps }: AppProps) => {
  // If you've used `withAuth`, pageProps.user can pre-populate the hook
  // if you haven't used `withAuth`, pageProps.user is undefined so the hook
  // fetches the user from the API routes
  // const { user } = pageProps;

  // return (
  //   <UserProvider user={user}>
  //     <Component {...pageProps} />
  //   </UserProvider>
  // );
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </Provider>
  );
};
export default App;
