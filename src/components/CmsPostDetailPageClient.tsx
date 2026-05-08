"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";
import { normalizeCmsHtml } from "@/lib/cmsMedia";
import {
  getCmsPostThumbnailCandidates,
  resolveCmsPostThumbnailUrl,
} from "@/lib/cms-media";

type SectionKey = "news" | "event" | "knowledge" | null;

type Props = {
  id: string;
  detailHrefBase?: string;
};

export default function CmsPostDetailPageClient({
  id,
  detailHrefBase = "/medee-medeelel",
}: Props) {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];
  const post = allPosts.find((item: any) => item?._id === id);
  const shouldSearchById = Boolean(id) && !loading && !post;

  const {
    data: searchedData,
    loading: searchedLoading,
    error: searchedError,
  } = useQuery(queries.cmsPostList, {
    variables: { searchValue: id },
    fetchPolicy: "no-cache",
    skip: !shouldSearchById,
  });

  const searchedPosts = (searchedData as any)?.cpPostList?.posts || [];
  const searchedPost = searchedPosts.find((item: any) => item?._id === id);
  const activePost = post || searchedPost;
  const activeThumbnailUrl = resolveCmsPostThumbnailUrl(activePost);

  const getCategoryNames = (item: any): string[] =>
    item?.categories?.map((cat: any) => String(cat?.name || "").toLowerCase().trim()) || [];

  const isProductCategory = (names: string[]) =>
    names.some((name) =>
      ["product", "products", "бүтээгдэхүүн"].some((word) => name.includes(word))
    );

  const detectSection = (names: string[]): SectionKey => {
    const joined = names.join(" | ");

    if (
      joined.includes("news") ||
      joined.includes("мэдээ мэдээлэл") ||
      joined.includes("мэдээ")
    ) {
      return "news";
    }

    if (
      joined.includes("арга хэмжээ") ||
      joined.includes("event") ||
      joined.includes("events")
    ) {
      return "event";
    }

    if (
      joined.includes("мэдлэгийн сан") ||
      joined.includes("knowledge") ||
      joined.includes("knowledge base")
    ) {
      return "knowledge";
    }

    return null;
  };

  const getTargetSections = (currentSection: SectionKey): SectionKey[] => {
    if (currentSection === "news") return ["event", "knowledge"];
    if (currentSection === "event") return ["news", "knowledge"];
    if (currentSection === "knowledge") return ["news", "event"];
    return ["news", "event", "knowledge"];
  };

  const currentCategoryNames = activePost ? getCategoryNames(activePost) : [];
  const currentSection = detectSection(currentCategoryNames);
  const targetSections = getTargetSections(currentSection);

  const otherPosts = allPosts
    .filter((item: any) => {
      if (item?._id === id) return false;

      const itemCategoryNames = getCategoryNames(item);
      if (isProductCategory(itemCategoryNames)) return false;

      const itemSection = detectSection(itemCategoryNames);
      return itemSection !== null && targetSections.includes(itemSection);
    })
    .slice(0, 10);

  if (loading || (shouldSearchById && searchedLoading)) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Уншиж байна...
      </div>
    );
  }

  if (error || searchedError) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Алдаа гарлаа: {(error || searchedError)?.message}
      </div>
    );
  }

  if (!activePost) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Мэдээлэл олдсонгүй
      </div>
    );
  }

  return (
    <div className="container wrapper" style={{ padding: "40px 0" }}>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h1
            style={{
              fontSize: "54px",
              lineHeight: "1.15",
              fontWeight: 500,
              marginBottom: "20px",
              color: "#111",
            }}
          >
            {activePost.title}
          </h1>

          <div
            style={{
              color: "#666",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Published:{" "}
            {activePost?.createdAt
              ? new Date(activePost.createdAt).toLocaleDateString("mn-MN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </div>

          <div style={{ marginBottom: "25px", color: "#999" }}>Share:</div>

          {activeThumbnailUrl ? (
            <div style={{ marginBottom: "30px" }}>
              <img
                src={activeThumbnailUrl}
                alt={activePost.title}
                data-fallbacks={JSON.stringify(
                  getCmsPostThumbnailCandidates(activePost).slice(1)
                )}
                onError={(event) => {
                  const target = event.currentTarget;
                  const raw = target.getAttribute("data-fallbacks") || "[]";
                  const fallbackList = JSON.parse(raw) as string[];
                  const next = fallbackList.shift();

                  if (!next) {
                    return;
                  }

                  target.setAttribute(
                    "data-fallbacks",
                    JSON.stringify(fallbackList)
                  );
                  target.src = next;
                }}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          ) : null}

          {activePost?.excerpt ? (
            <p
              style={{
                marginBottom: "20px",
                color: "#666",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              {activePost.excerpt}
            </p>
          ) : null}

          <div
            style={{
              fontSize: "18px",
              lineHeight: "2",
              color: "#333",
            }}
            dangerouslySetInnerHTML={{
              __html: normalizeCmsHtml(activePost.content || ""),
            }}
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <h3
            style={{
              fontSize: "28px",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Бусад мэдээ
          </h3>

          <div>
            {otherPosts.map((item: any) => {
              const thumbnailCandidates = getCmsPostThumbnailCandidates(item);
              const thumbnailUrl = thumbnailCandidates[0];

              return (
                <Link
                  key={item._id}
                  href={`${detailHrefBase}/${item._id}`}
                  style={{
                    display: "flex",
                    gap: "14px",
                    marginBottom: "14px",
                    textDecoration: "none",
                    color: "#222",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "120px",
                      minWidth: "120px",
                      height: "78px",
                      background: "#eee",
                      overflow: "hidden",
                    }}
                  >
                    {thumbnailUrl ? (
                      <img
                        src={thumbnailUrl}
                        alt={item.title}
                        data-fallbacks={JSON.stringify(
                          thumbnailCandidates.slice(1)
                        )}
                        onError={(event) => {
                          const target = event.currentTarget;
                          const raw =
                            target.getAttribute("data-fallbacks") || "[]";
                          const fallbackList = JSON.parse(raw) as string[];
                          const next = fallbackList.shift();

                          if (!next) {
                            return;
                          }

                          target.setAttribute(
                            "data-fallbacks",
                            JSON.stringify(fallbackList)
                          );
                          target.src = next;
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : null}
                  </div>

                  <div
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.35",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
