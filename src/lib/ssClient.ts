import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getErxesAppToken, getErxesGraphqlUri } from "./erxes-config";

export function getClient() {
  const token = getErxesAppToken();

  return new ApolloClient({
    link: new HttpLink({
      uri: getErxesGraphqlUri(),
      headers: token ? { "x-app-token": token } : {},
      fetch,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
}
