"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";
import { gql } from "@apollo/client";
import { normalizeCmsHtml } from "@/lib/cmsMedia";
import {
  getCmsPostThumbnailCandidates,
  resolveCmsPostThumbnailUrl,
} from "@/lib/cms-media";

const KB_ARTICLES = gql`
  query knowledgeBaseArticles {
    knowledgeBaseArticles {
      _id
      title
      summary
      content
      image {
        url
      }
    }
  }
`;

type Props = {
  id: string;
  detailHrefBase?: string;
};

export default function CmsPostDetailPageClient({
  id,
  detailHrefBase = "/medee-medeelel",
}: Props) {
  const { data: listData, loading: listLoading, error: listError } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const { data: searchData, loading: searchLoading } = useQuery(queries.cmsPostList, {
    variables: { searchValue: id },
    fetchPolicy: "no-cache",
    skip: !id,
  });

  const { data: kbData, loading: kbLoading } = useQuery(KB_ARTICLES, {
    fetchPolicy: "no-cache",
  });

  const allPosts = (listData as any)?.cpPostList?.posts || [];
  const searchedPosts = (searchData as any)?.cpPostList?.posts || [];
  const kbArticles = (kbData as any)?.knowledgeBaseArticles || [];
  const kbArticle = kbArticles.find((a: any) => a._id === id);

  const cmsPost =
    allPosts.find((item: any) => item?._id === id) ||
    searchedPosts.find((item: any) => item?._id === id);

  const activePost = cmsPost || (kbArticle ? {
    _id: kbArticle._id,
    title: kbArticle.title,
    excerpt: kbArticle.summary,
    content: kbArticle.content,
    thumbnail: kbArticle.image,
    createdAt: null,
  } : null);

  const activeThumbnailUrl = cmsPost
    ? resolveCmsPostThumbnailUrl(cmsPost)
    : kbArticle?.image?.url || null;

  const otherPosts = allPosts
    .filter((item: any) => item?._id !== id)
    .slice(0, 10);

  if (listLoading || searchLoading || kbLoading) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Уншиж байна...
      </div>
    );
  }

  if (listError) {
    return (
      <div className="container wrapper" style={{ padding: "40px 0" }}>
        Алдаа гарлаа: {listError.message}
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

          {activePost.createdAt && (
            <div style={{ color: "#666", fontSize: "16px", marginBottom: "20px" }}>
              {new Date(activePost.createdAt).toLocaleDateString("mn-MN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          )}

          {activeThumbnailUrl ? (
            <div style={{ marginBottom: "30px" }}>
              <img
                src={activeThumbnailUrl}
                alt={activePost.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ) : null}

          {activePost.excerpt ? (
            <p style={{ marginBottom: "20px", color: "#666", fontSize: "18px", lineHeight: "1.8" }}>
              {activePost.excerpt}
            </p>
          ) : null}

          <div
            style={{ fontSize: "18px", lineHeight: "2", color: "#333" }}
            dangerouslySetInnerHTML={{
              __html: normalizeCmsHtml(activePost.content || ""),
            }}
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <h3 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
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
                  <div style={{ width: "120px", minWidth: "120px", height: "78px", background: "#eee", overflow: "hidden" }}>
                    {thumbnailUrl ? (
                      <img
                        src={thumbnailUrl}
                        alt={item.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : null}
                  </div>
                  <div style={{ fontSize: "15px", lineHeight: "1.35", color: "#333" }}>
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