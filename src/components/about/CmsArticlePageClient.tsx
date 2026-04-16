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
};

export default function CmsArticlePageClient({
  candidates,
  title,
  fallback,
}: Props) {
  const searchValue =
    candidates.find((candidate) => /[a-z0-9-]/i.test(candidate)) ||
    candidates[0] ||
    title;

  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: { searchValue },
    fetchPolicy: "no-cache",
  });

  const posts = ((data as any)?.cpPostList?.posts || []) as any[];
  const post = findMatchingCmsPost(posts, candidates);

  if (post) {
    return <CmsArticlePage post={post} title={title} />;
  }

  return <>{fallback}</>;
}
