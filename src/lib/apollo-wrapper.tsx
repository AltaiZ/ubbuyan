"use client";

import React from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { getErxesAppToken, getErxesGraphqlUri } from "./erxes-config";

export function makeClient() {
  const uri = getErxesGraphqlUri();
  const token = getErxesAppToken();

  const httpLink = new HttpLink({
    uri,
    credentials: "include",
    headers: {
      ...(token ? { "x-app-token": token } : {}),
    },
    fetchOptions: { cache: "no-store" },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(() => makeClient());

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
