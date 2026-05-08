import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getErxesGraphqlUri } from '@/lib/erxes-config';

export function getClient() {
  const httpLink = new HttpLink({
    uri: getErxesGraphqlUri(),
  });

  const authLink = setContext((_, { headers }) => {
    const cookie = `pos-config-token=${process.env.NEXT_PUBLIC_POS_TOKEN}`;
    return {
      headers: {
        ...headers,
        cookie,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
