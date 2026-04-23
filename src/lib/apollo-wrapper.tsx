"use client";

import React from "react";
import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  InMemoryCache as NextSSRInMemoryCache,
  ApolloClient as NextSSRApolloClient,
} from "@apollo/client-integration-nextjs";
import { getErxesGraphqlUri } from "./erxes-config";

export function makeClient() {
  const uri = getErxesGraphqlUri();
  const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || "";

  const httpLink = new HttpLink({
    uri,
    credentials: "include",
    headers: {
      ...(token ? { "x-app-token": token } : {}),
    },
    fetchOptions: { cache: "no-store" },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
