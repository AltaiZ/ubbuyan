import React from "react";
import type { CmsPost } from "@/lib/cmsPosts";

type Props = {
  post: CmsPost;
  title: string;
};

export default function CmsArticlePage({ post, title }: Props) {
  const html = post.content || post.excerpt || "";

  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <section className="simple_page container">
        <article className="col-md-8 col-md-offset-2">
          <header className="post">
            <hgroup>
              <h2 className="page_title center">{post.title || title}</h2>
            </hgroup>
          </header>
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img alt={title} src="/static/images/icon12.png" />
            </div>
          </div>
          <div
            className="jy"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </article>
      </section>
    </div>
  );
}
