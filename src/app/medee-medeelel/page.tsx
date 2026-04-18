"use client";

import React from "react";
import Link from "next/link";
import queries from "@/graphql/cms/queries";
import { useQuery } from "@apollo/client/react";
import { resolveCmsMediaUrl } from "@/lib/cms-media";

export default function MedeeMedeelelPage() {
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

  if (!posts.length) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Пост олдсонгүй
      </div>
    );
  }

  return (
    <div className="container wrapper" style={{ padding: "40px 0" }}>
      <h1 style={{ marginBottom: "30px" }}>Мэдээ мэдээлэл</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollSnapType: "x mandatory",
        }}
      >
        {posts.map((post: any) => (
          <div
            key={post._id}
            style={{
              minWidth: "350px",
              maxWidth: "350px",
              flex: "0 0 auto",
              border: "1px solid #eee",
              padding: "20px",
              borderRadius: "8px",
              background: "#fff",
              scrollSnapAlign: "start",
            }}
          >
            {resolveCmsMediaUrl(post?.thumbnail?.url) ? (
              <img
                src={resolveCmsMediaUrl(post?.thumbnail?.url)}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  marginBottom: "15px",
                  borderRadius: "6px",
                }}
              />
            ) : null}

            <h2 style={{ marginBottom: "10px" }}>{post.title}</h2>

            <p style={{ marginBottom: "15px", color: "#666" }}>
              {post.excerpt || "Товч мэдээлэл байхгүй"}
            </p>

            <Link href={`/medee-medeelel/${post._id}`}>Дэлгэрэнгүй</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
