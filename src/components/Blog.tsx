"use client";

import React from "react";
import HomeMedeeContent from "./homepage-tab/homemedee-content";
import queries from "@/graphql/cms/queries";
import { useQuery } from "@apollo/client/react";

const ITEMS_PER_PAGE = 20;

export default function Blog({
  initialTab = "news",
  showReadMore = true,
}: {
  initialTab?: string;
  showReadMore?: boolean;
}) {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {
      searchValue: "мэдээ",
    },
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];

  const allowedCategories = new Set([
    "news",
    "arga-hemjee",
    "medlegiin-san",
    "zurhaich-lam-nar",
  ]);

  const filteredPosts = allPosts.filter((post: any) =>
    post?.categories?.some((cat: any) => {
      const value = String(cat?.slug || cat?.name || "").toLowerCase().trim();
      return allowedCategories.has(value);
    })
  );

  const posts = [
    ...filteredPosts,
    ...allPosts.filter(
      (post: any) => !filteredPosts.some((filtered: any) => filtered?._id === post?._id)
    ),
  ];

  const pagePosts = posts.slice(0, ITEMS_PER_PAGE);

  const tabs = [
    { name: "Мэдээ мэдээлэл", id: "news" },
    { name: "Арга хэмжээ", id: "arga-hemjee" },
    { name: "Мэдлэгийн сан", id: "medlegiin-san" },
    { name: "Зурхайч лам нар", id: "zurhaich-lam-nar" },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;

  return (
    <div>
      <div className="container wrapper h_blog">
        <h1>Мэдлэг, мэдээлэл</h1>
        <p className="hidden-xs">
          Сүүлийн үеийн мэдээлэл, мэдлэг, арга хэмжээ зэргийг та эндээс авах
          боломжтой.
        </p>

        <HomeMedeeContent
          tabs={tabs}
          articles={pagePosts}
          initialTab={initialTab}
        />
      </div>

      {showReadMore ? (
        <div className="read_more">
          <a href="/medee-medeelel">
            <img src="/static/images/sum-red.png" alt="read more" />
          </a>
          <p>бүгдийг харах</p>
        </div>
      ) : null}
    </div>
  );
}