"use client";

import React from "react";

import HomeMedeeContent from "./homepage-tab/homemedee-content";
import queries from "@/graphql/cms/queries";
import { useQuery } from "@apollo/client/react";

const ITEMS_PER_PAGE = 4;

export default function Blog() {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["kdYDLrJsKoBx3MwO5K1bA"],
    },
  });

  const posts = (data as any)?.cpPostList?.posts || [];
  const pagePosts = posts.slice(0, ITEMS_PER_PAGE);

  const tabs = [
    { name: "Мэдээ мэдээлэл", id: "nrC0GCqQm0KS6F2xawdmL" },
    { name: "Арга хэмжээ", id: "OBw0dhHO90I_2O2S26PIh" },
    { name: "Мэдлэгийн сан", id: "XCQcgWmMO8VBkiS6llRdQ" },
    { name: "Зурхайч лам нар", id: "lam-nar" },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

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
          <img src="/static/images/sum-red.png" />
        </a>
        <p>бүгдийг харах</p>
      </div>
    </div>
  );
}
