"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";

type SectionKey = "news" | "event" | "knowledge" | null;

export default function Page() {
  const params = useParams();
  const id = params?.id as string;

  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];
  const post = allPosts.find((item: any) => item?._id === id);

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

  const currentCategoryNames = post ? getCategoryNames(post) : [];
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

  if (loading) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Уншиж байна...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Алдаа гарлаа: {error.message}
      </div>
    );
  }

  if (!post) {
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
            {post.title}
          </h1>

          <div
            style={{
              color: "#666",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          >
            Published:{" "}
            {post?.createdAt
              ? new Date(post.createdAt).toLocaleDateString("mn-MN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </div>

          <div style={{ marginBottom: "25px", color: "#999" }}>Share:</div>

          {post?.thumbnail?.url ? (
            <div style={{ marginBottom: "30px" }}>
              <img
                src={post.thumbnail.url}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          ) : null}

          {post?.excerpt ? (
            <p
              style={{
                marginBottom: "20px",
                color: "#666",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              {post.excerpt}
            </p>
          ) : null}

          <div
            style={{
              fontSize: "18px",
              lineHeight: "2",
              color: "#333",
            }}
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
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
            {otherPosts.map((item: any) => (
              <Link
                key={item._id}
                href={`/medee-medeelel/${item._id}`}
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
                  {item?.thumbnail?.url ? (
                    <img
                      src={item.thumbnail.url}
                      alt={item.title}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}