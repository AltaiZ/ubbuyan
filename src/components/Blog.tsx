import { getKbArticlesByCode, kbTopicDetail } from "@/lib/kb";
import React, { useState } from "react";
import HomepageTab from "./homepage-tab/homemedee-tab";
import { useQuery } from "@apollo/client";
import queries from "@/graphql/queries";
import { log } from "console";
import HomeMedeeTabs from "./homepage-tab/homemedee-content";
import HomeMedeeContent from "./homepage-tab/homemedee-content";

export const revalidate = 1;
const ITEMS_PER_PAGE = 4;

export default async function Blog() {
  const { topic } = await kbTopicDetail({
    variables: {
      _id: "6FNIwcb39FRfoeYiP4FcI",
    },
  });

  const articles = topic?.categories?.flatMap((item) => item.articles);

  const PageArticles = articles.slice(ITEMS_PER_PAGE);

  const tabs = [
    { name: "Мэдээ мэдээлэл", id: "nrC0GCqQm0KS6F2xawdmL" },
    { name: "Арга хэмжээ", id: "OBw0dhHO90I_2O2S26PIh" },
    { name: "Мэдлэгийн сан", id: "XCQcgWmMO8VBkiS6llRdQ" },
    { name: "Зурхайч лам нар", id: "lam-nar" },
  ];

  return (
    <div>
      <div className="container wrapper h_blog">
        <h1>Мэдлэг, мэдээлэл</h1>
        <p className="hidden-xs">
          Сүүлийн үеийн мэдээлэл, мэдлэг, арга хэмжээ зэргийг та эндээс авах
          боломжтой.
        </p>
        <HomeMedeeContent tabs={tabs} articles={PageArticles} />
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
