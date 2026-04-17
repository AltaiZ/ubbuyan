"use client";

import React from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  InMemoryCache as NextSSRInMemoryCache,
  ApolloClient as NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/client-integration-nextjs";
import { getErxesAppToken, getErxesGraphqlUri } from "./erxes-config";

export function makeClient() {
  const uri = getErxesGraphqlUri();
  const token = getErxesAppToken();

  const httpLink = new HttpLink({
    uri,
    credentials: "include", // Include cookies
    headers: {
      ...(token ? { "x-app-token": token } : {}),
    },
    fetchOptions: { cache: "no-store" },
  });

  // For SSR, you typically want to chain the SSRMultipartLink
  const link =
    typeof window === "undefined"
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : httpLink;

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link,
  });
}

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
