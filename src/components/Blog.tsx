"use client";

import React from "react";
import HomeMedeeContent from "./homepage-tab/homemedee-content";
import queries from "@/graphql/cms/queries";
import { useQuery } from "@apollo/client/react";

const ITEMS_PER_PAGE = 4;

export default function Blog() {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];

  const posts = allPosts.filter((post: any) =>
    post?.categories?.some(
      (cat: any) => cat?.name?.toLowerCase()?.trim() === "news"
    )
  );

  const pagePosts = posts.slice(0, ITEMS_PER_PAGE);

  const tabs = [
    { name: "Мэдээ мэдээлэл", id: "news" },
    { name: "Арга хэмжээ", id: "event" },
    { name: "Мэдлэгийн сан", id: "knowledge" },
    { name: "Зурхайч лам нар", id: "lam-nar" },
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

        <HomeMedeeContent tabs={tabs} articles={pagePosts} />
      </div>

      <div className="read_more">
        <a href="/medee-medeelel">
          <img src="/static/images/sum-red.png" alt="read more" />
        </a>
        <p>бүгдийг харах</p>
      </div>
    </div>
  );
}