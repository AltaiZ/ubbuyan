"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";
import { PaginationPart } from "../../../components/pagination";

const ITEMS_PER_PAGE = 16;
const FILE_BASE_URL = "https://khankhujirt.app.erxes.io/api/read-file?key=";

type SearchParams = {
  page?: string;
};

type TabItem = {
  href: string;
  label: string;
  icon?: string;
  active?: boolean;
};

type CategoryPageProps = {
  searchParams: SearchParams;
  categorySlugs: string[];
  activeHref: string;
  titleCandidates?: string[];
  searchValue?: string;
};

function normalizeCategoryValue(value?: string | null) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ");
}

const tabs: TabItem[] = [
  {
    href: "/buteegdehuun/",
    label: "Онцлох",
    icon: "/static/images/tab1.png",
  },
  {
    href: "/buteegdehuun/hairtsag",
    label: "Хайрцаг",
    icon: "/static/images/tab2.png",
  },
  {
    href: "/buteegdehuun/hoshoo",
    label: "Хөшөө",
    icon: "/static/images/tab3.png",
  },
  {
    href: "/buteegdehuun/sats-suvarga",
    label: "Сац суварга",
    icon: "/static/images/tab4.png",
  },
  {
    href: "/buteegdehuun/tsetseg",
    label: "Хүндэтгэлийн цэцэг",
    icon: "/static/images/tab5.png",
  },
  {
    href: "/buteegdehuun/zed",
    label: "Зэд",
    icon: "/static/sites/ulaanbaatarbuyannew/default/images/icons/tab6.png",
  },
];

function renderDesktopTabs(activeHref: string) {
  return (
    <div className="row p_tab hidden-xs">
      <div className="container">
        <ul className="nav nav-tabs" role="tablist">
          {tabs.map((tab) => (
            <li
              key={tab.href}
              className={`col-md-2${tab.href === activeHref ? " active" : ""}`}
            >
              <a href={tab.href}>
                {tab.icon ? <img src={tab.icon} width="25" height="25" /> : null}
                {tab.label}
              </a>
              <div className="arrow-down" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function renderMobileTabs() {
  return (
    <div className="mobilehproducts">
      <ul className="nav nav-tabs blog_buttons mobile-tab visible-xs" role="tablist">
        <div className="owl-carousel owl-theme owl-loaded owl-drag" id="product-icon">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
              }}
            >
              {tabs.map((tab) => (
                <div className="owl-item" key={tab.href}>
                  <li>
                    <div className="item">
                      <a className="product-name" href={tab.href}>
                        {tab.icon ? (
                          <img src={tab.icon} width="25" height="25" />
                        ) : null}
                        <span>{tab.label}</span>
                      </a>
                    </div>
                  </li>
                </div>
              ))}
            </div>
          </div>

          <div className="owl-nav disabled">
            <div className="owl-prev">
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-angle-left fa-w-8 fa-4x"
                data-icon="angle-left"
                data-prefix="fa"
                role="img"
                viewBox="0 0 256 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="owl-next">
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-angle-right fa-w-8 fa-4x"
                data-icon="angle-right"
                data-prefix="fa"
                role="img"
                viewBox="0 0 256 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <div className="owl-dots disabled" />
        </div>
      </ul>
    </div>
  );
}

export default function CategoryPage({
  searchParams,
  categorySlugs,
  activeHref,
  titleCandidates = [],
  searchValue,
}: CategoryPageProps) {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: searchValue ? { searchValue } : {},
    fetchPolicy: "no-cache",
  });

  const normalizedSlugs = categorySlugs.map(normalizeCategoryValue);
  const normalizedTitles = titleCandidates.map(normalizeCategoryValue);
  const allPosts = (data as any)?.cpPostList?.posts || [];

  const filteredPosts = allPosts.filter((post: any) =>
    [
      normalizeCategoryValue(post?.title || ""),
      ...((post?.categories || []).map((cat: any) =>
        normalizeCategoryValue(cat?.slug || cat?.name || ""),
      ) || []),
    ].some((value) => {
      const compactValue = value.replace(/\s+/g, "");

      return [...normalizedSlugs, ...normalizedTitles].some((slug) => {
        const compactSlug = slug.replace(/\s+/g, "");

        return (
          value === slug ||
          value.includes(slug) ||
          slug.includes(value) ||
          compactValue === compactSlug
        );
      });
    }),
  );

  const reversedArticles = [...filteredPosts].reverse();
  const currentPage = parseInt(searchParams?.page || "1", 10) || 1;
  const totalPages = Math.max(
    1,
    Math.ceil(reversedArticles.length / ITEMS_PER_PAGE),
  );
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = reversedArticles.slice(startIndex, endIndex);

  return (
    <div id="content">
      <section
        className="row product_bg"
        style={{
          background:
            'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6) ), url("/static/images/1_Sbdgyaw.jpg") no-repeat center',
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1 className="product_title">Бүтээгдэхүүн</h1>
        </div>
      </section>

      <section className="hproducts">
        {renderDesktopTabs(activeHref)}
        {renderMobileTabs()}

        <div className="container">
          {loading && <div style={{ padding: "20px 0" }}>Уншиж байна...</div>}

          {error && (
            <div style={{ padding: "20px 0" }}>
              Алдаа гарлаа: {error.message}
            </div>
          )}

          {!loading && !error && (
            <div className="row">
              {paginatedArticles.map((item: any) => (
                <div
                  key={item._id}
                  className="pc_tab col-md-3 col-sm-6 col-xs-6"
                >
                  <a href={`/buteegdehuun/${item?._id}`}>
                    <div
                      className="p_img"
                      style={{
                        background: item?.image?.url
                          ? `url(${FILE_BASE_URL}${item.image.url})`
                          : "url(/static/images/no-image.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="overlay">
                        <img
                          className="c_arrow"
                          src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png"
                          alt="arrow"
                        />
                      </div>
                    </div>

                    <h3>{item.title}</h3>

                    <div className="price_field">
                      <h5 className="price-name">Үнэ:</h5>
                      <h3 className="price">
                        {item.summary ? item.summary : "0₮"}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}

              {paginatedArticles.length === 0 && (
                <div style={{ padding: "20px 0" }}>Бүтээгдэхүүн олдсонгүй</div>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="container mt-[-60px]">
        <div className="pagination">
          <PaginationPart
            currentPage={safeCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}
