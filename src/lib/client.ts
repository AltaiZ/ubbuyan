import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getErxesAppToken, getErxesGraphqlUri } from "./erxes-config";

export function getClient() {
  const token = getErxesAppToken();

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: getErxesGraphqlUri(),
      credentials: "include",
      headers: token ? { "x-app-token": token } : {},
    }),
  });
}
