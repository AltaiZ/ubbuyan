"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import cmsQueries from "@/graphql/cms/queries";
import { findMatchingCmsPost } from "@/lib/cmsPosts";
import ServiceArticlePage from "./ServiceArticlePage";

type Props = {
  candidates: string[];
  title: string;
  fallback: React.ReactNode;
};

export default function ServiceArticlePageClient({
  candidates,
  title,
  fallback,
}: Props) {
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const posts = ((data as any)?.cpPostList?.posts || []) as any[];
  const post = findMatchingCmsPost(posts, candidates);

  if (post) {
    return <ServiceArticlePage post={post} title={title} />;
  }

  return <>{fallback}</>;
}
