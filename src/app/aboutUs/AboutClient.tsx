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

  return (
    <div id="content" style={{ display: "block" }}>
      <div>
        <img
          alt="background_about"
          src="/static/images/-2468521239344344000_1800_x_1012.jpg"
        />
      </div>

      <section className="hidden-xs about">
        <div className="np np1">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 aboutvideo">
              <iframe
                allowFullScreen
                frameBorder="0"
                height="315"
                src="https://www.youtube.com/embed/ntpEog0lzww"
                width="100%"
              ></iframe>
            </div>

            <div className="col-md-5 col-md-offset-1 abouttext">
              <h5 className="sub_title">
                {currentPost?.title || "БИДНИЙ ТУХАЙ"}
              </h5>

              {!show && (
                <div
                  className="aboutShow"
                  style={{ height: "136px", overflow: "hidden" }}
                  dangerouslySetInnerHTML={htmlOrFallback(
                    currentPost?.content,
                    fallback
                  )}
                />
              )}

              {show && (
                <div
                  className="aboutShow"
                  dangerouslySetInnerHTML={htmlOrFallback(
                    currentPost?.content,
                    fallback
                  )}
                />
              )}

              {!show && (
                <button
                  className="button triggerShow"
                  onClick={() => setShow(true)}
                >
                  Дэлгэрэнгүй
                </button>
              )}

              {show && (
                <button
                  className="button triggerHide"
                  onClick={() => setShow(false)}
                >
                  Хураах
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden-lg about">
        <div className="np np1">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 aboutvideo">
              <iframe
                allowFullScreen
                frameBorder="0"
                height="315"
                src="https://www.youtube.com/embed/ntpEog0lzww"
                width="100%"
              ></iframe>
            </div>

            <div className="col-md-5 col-md-offset-1 abouttext">
              <h5 className="sub_title">
                {currentPost?.title || "БИДНИЙ ТУХАЙ"}
              </h5>

              {!show && (
                <div
                  className="aboutShow"
                  style={{ height: "136px", overflow: "hidden" }}
                  dangerouslySetInnerHTML={htmlOrFallback(
                    currentPost?.content,
                    fallback
                  )}
                />
              )}

              {show && (
                <div
                  className="aboutShow"
                  dangerouslySetInnerHTML={htmlOrFallback(
                    currentPost?.content,
                    fallback
                  )}
                />
              )}

              {!show && (
                <button
                  className="button triggerShow"
                  onClick={() => setShow(true)}
                >
                  Дэлгэрэнгүй
                </button>
              )}

              {show && (
                <button
                  className="button triggerHide"
                  onClick={() => setShow(false)}
                >
                  Хураах
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
