// lib/client.ts

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { getErxesAppToken, getErxesGraphqlUri } from "./erxes-config";

export const { getClient } = registerApolloClient(() => {
  const token = getErxesAppToken();

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: getErxesGraphqlUri(),
      credentials: "include",
      headers: token ? { "x-app-token": token } : {},
    }),
  });
});
