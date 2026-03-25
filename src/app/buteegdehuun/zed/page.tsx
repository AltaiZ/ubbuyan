"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";
import { PaginationPart } from "../../../components/pagination";

const ITEMS_PER_PAGE = 16;

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];

  // ✅ ЗӨВХӨН "zed" category авах
  const zedPosts = allPosts.filter((post: any) =>
    post?.categories?.some((cat: any) => {
      const value = String(cat?.slug || cat?.name || "")
        .toLowerCase()
        .trim();

      return value === "zed";
    })
  );

  const reversedArticles = [...zedPosts].reverse();

  const currentPage = parseInt(searchParams?.page || "1", 10) || 1;
  const totalPages = Math.max(
    1,
    Math.ceil(reversedArticles.length / ITEMS_PER_PAGE)
  );

  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = reversedArticles.slice(startIndex, endIndex);

  return (
    <div id="content">
      {/* HERO */}
      <section
        className="row product_bg"
        style={{
          background:
            'linear-gradient( rgba(0,0,0,0.1), rgba(0,0,0,0.6) ), url("/static/images/1_Sbdgyaw.jpg") no-repeat center',
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1 className="product_title">Бүтээгдэхүүн</h1>
        </div>
      </section>

      {/* TABS */}
      <section className="hproducts">
        <div className="row p_tab hidden-xs">
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="col-md-2">
                <a href="/buteegdehuun/">Онцлох</a>
              </li>
              <li className="col-md-2">
                <a href="/buteegdehuun/hairtsag">Хайрцаг</a>
              </li>
              <li className="col-md-2">
                <a href="/buteegdehuun/hoshoo">Хөшөө</a>
              </li>
              <li className="col-md-2">
                <a href="/buteegdehuun/sats-suvarga">Сац суварга</a>
              </li>
              <li className="col-md-2">
                <a href="/buteegdehuun/tsetseg">Хүндэтгэлийн цэцэг</a>
              </li>
              <li className="col-md-2 active">
                <a href="/buteegdehuun/zed">Зэд</a>
              </li>
            </ul>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="container">
          <div className="row">
            {paginatedArticles.length > 0 ? (
              paginatedArticles.map((item: any) => (
                <div
                  key={item._id}
                  className="pc_tab col-md-3 col-sm-6 col-xs-6"
                >
                  <a href={`/buteegdehuun/${item._id}`}>
                    {/* IMAGE */}
                    <div
                      className="p_img"
                      style={{
                        background: item?.image?.url
                          ? `url(${process.env.NEXT_PUBLIC_ERXES_FILE_URL}${item.image.url})`
                          : "url(/static/images/no-image.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="overlay">
                        <img
                          className="c_arrow"
                          src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png"
                        />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3>{item.title}</h3>

                    {/* PRICE */}
                    <div className="price_field">
                      <h5 className="price-name">Үнэ:</h5>
                      <h3 className="price">
                        {item.summary || "0₮"}
                      </h3>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <p>Бүтээгдэхүүн олдсонгүй</p>
            )}
          </div>

          {/* PAGINATION */}
          <PaginationPart
            total={reversedArticles.length}
            perPage={ITEMS_PER_PAGE}
          />
        </div>
      </section>
    </div>
  );
}