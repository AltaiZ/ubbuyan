"use client";

import React, { useState } from "react";
import type { CmsPost } from "@/lib/cmsPosts";
import { findMatchingCmsPost } from "@/lib/cmsPosts";
import cmsQueries from "@/graphql/cms/queries";
import { useQuery } from "@apollo/client/react";
import { normalizeCmsHtml } from "@/lib/cmsMedia";

type Props = {
  post?: CmsPost | null;
};

function htmlOrFallback(content?: string | null, fallback?: string) {
  return {
    __html: normalizeCmsHtml(
      content && content.trim() ? content : fallback || ""
    ),
  };
}

function getYoutubeEmbedUrl(url?: string | null) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    let videoId = null;
    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    } else {
      videoId = parsed.searchParams.get("v");
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export default function AboutClient({ post }: Props) {
  const [show, setShow] = useState(false);
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });
  const livePost = findMatchingCmsPost(
    ((data as any)?.cpPostList?.posts || []) as CmsPost[],
    ["бидний тухай", "bidnii tuhai", "tuhai"]
  );
  const currentPost = livePost || post;
  const fallback = `<p>Бидний тухай мэдээлэл удахгүй нэмэгдэнэ.</p>`;
  const embedUrl = getYoutubeEmbedUrl(currentPost?.videoUrl);

  return (
    <div id="content" style={{ display: "block" }}>
      <div>
        <img
          alt="background_about"
          src="/static/images/-2468521239344344000_1800_x_1012.jpg"
        />
      </div>

      <section className="about">
        <div className="np np1">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 aboutvideo">
              {embedUrl ? (
                <iframe
                  allowFullScreen
                  frameBorder="0"
                  height="315"
                  src={embedUrl}
                  width="100%"
                />
              ) : (
                <iframe
                  allowFullScreen
                  frameBorder="0"
                  height="315"
                  src="https://www.youtube.com/embed/ntpEog0lzww"
                  width="100%"
                />
              )}
            </div>

            <div className="col-md-5 col-md-offset-1 abouttext">
              <h5 className="sub_title">
                {currentPost?.title || "БИДНИЙ ТУХАЙ"}
              </h5>

              <div
                className="aboutShow"
                style={!show ? { height: "136px", overflow: "hidden" } : {}}
                dangerouslySetInnerHTML={htmlOrFallback(
                  currentPost?.content,
                  fallback
                )}
              />

              <button
                className={`button ${show ? "triggerHide" : "triggerShow"}`}
                onClick={() => setShow(!show)}
              >
                {show ? "Хураах" : "Дэлгэрэнгүй"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}