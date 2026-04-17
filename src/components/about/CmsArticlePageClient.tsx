"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import cmsQueries from "@/graphql/cms/queries";
import CmsArticlePage from "./CmsArticlePage";
import { findMatchingCmsPost } from "@/lib/cmsPosts";

type Props = {
  candidates: string[];
  title: string;
  fallback: React.ReactNode;
  searchValue?: string;
};

export default function CmsArticlePageClient({
  candidates,
  title,
  fallback,
  searchValue,
}: Props) {
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: searchValue ? { searchValue } : {},
    fetchPolicy: "no-cache",
  });

  const posts = ((data as any)?.cpPostList?.posts || []) as any[];
  const post = findMatchingCmsPost(posts, candidates);

  if (post) {
    return <CmsArticlePage post={post} title={title} />;
  }

  return <>{fallback}</>;
}
