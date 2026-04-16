import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function getClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri:
        process.env.ERXES_API_URL ||
        process.env.NEXT_PUBLIC_GRAPHQL_URI ||
        "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql",
      headers: {
        "x-app-token":
          process.env.ERXES_APP_TOKEN ||
          process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ||
          "",
      },
      fetch,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
}
