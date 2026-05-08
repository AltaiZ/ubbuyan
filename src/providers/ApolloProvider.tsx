'use client';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { setContext } from '@apollo/client/link/context';

const httpLink: any = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token') || '';
  return {
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
      authorization: token ? `Bearer ${token}` : '',
      'x-app-token': process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
    },
  };
});

const httpLinkWithMiddleware = authLink.concat(httpLink);

const client = new ApolloClient({
  ssrMode: typeof window !== 'undefined',
  cache: new InMemoryCache(),
  link: httpLinkWithMiddleware,
});

const Apollo = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
