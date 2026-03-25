"use client";

import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const [activeImage, setActiveImage] = useState(0);

  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];

  const post = useMemo(() => {
    return allPosts.find((item: any) => item?._id === params.id);
  }, [allPosts, params.id]);

  const images = useMemo(() => {
    if (!post) return [];

    const list: string[] = [];

    if (post?.thumbnail?.url) {
      list.push(post.thumbnail.url);
    }

    if (Array.isArray(post?.images)) {
      post.images.forEach((img: any) => {
        if (img?.url) list.push(img.url);
      });
    }

    return [...new Set(list)];
  }, [post]);

  const activeImageUrl =
    images[activeImage] || post?.thumbnail?.url || "/static/images/no-image.png";

  if (loading) {
    return <div className="container" style={{ padding: "40px 0" }}>Уншиж байна...</div>;
  }

  if (error) {
    return (
      <div className="container" style={{ padding: "40px 0" }}>
        Алдаа гарлаа: {error.message}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container" style={{ padding: "40px 0" }}>
        Бүтээгдэхүүн олдсонгүй
      </div>
    );
  }

  return (
    <div id="content">
      <div className="container" style={{ paddingTop: "30px", paddingBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div
              style={{
                width: "100%",
                minHeight: "520px",
                backgroundImage:
                  activeImageUrl !== "/static/images/no-image.png"
                    ? `url(https://khankhujirt.app.erxes.io/api/read-file?key=${activeImageUrl})`
                    : `url(${activeImageUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#f3f3f3",
              }}
            />

            {images.length > 0 && (
              <div className="row" style={{ marginTop: "12px" }}>
                {images.map((img: string, index: number) => (
                  <div
                    key={`${img}-${index}`}
                    className="col-md-3 col-sm-3 col-xs-3"
                    style={{ paddingRight: "6px", paddingLeft: "6px" }}
                  >
                    <div
                      onClick={() => setActiveImage(index)}
                      style={{
                        cursor: "pointer",
                        border: activeImage === index ? "2px solid #d6a06b" : "1px solid #ddd",
                        borderRadius: "4px",
                        height: "150px",
                        backgroundImage: `url(https://khankhujirt.app.erxes.io/api/read-file?key=${img})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-md-4 col-sm-12">
            <h1 style={{ fontSize: "28px", marginTop: "20px", marginBottom: "20px" }}>
              {post.title}
            </h1>

            <div style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee", padding: "25px 0" }}>
              <h4 style={{ marginBottom: "12px" }}>Үнэ:</h4>
              <div style={{ fontSize: "24px", fontWeight: 500 }}>
                {post.summary ? post.summary : "0₮"}
              </div>
            </div>

            {post.content && (
              <div style={{ marginTop: "25px" }}>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}