"use client";

import React from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  InMemoryCache as NextSSRInMemoryCache,
  ApolloClient as NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/client-integration-nextjs";

export function makeClient() {
  const uri =
    process.env.ERXES_API_URL ||
    process.env.NEXT_PUBLIC_GRAPHQL_URI ||
    "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql";

  const httpLink = new HttpLink({
    uri,
    credentials: "include", // Include cookies
    headers: {
      // Remove the CORS header - it's not needed here
      "x-app-token": process.env.ERXES_APP_TOKEN || "",
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
