import React from "react";
import type { CmsPost } from "@/lib/cmsPosts";

type Props = {
  post: CmsPost;
  title: string;
};

export default function ServiceArticlePage({ post, title }: Props) {
  const html = post.content || post.excerpt || "";

  return (
    <div id="content">
      <div className="row eee">
        <section className="container">
          <article className="single_article jy hide-gallery col-md-8 col-md-offset-2">
            <h2 className="sub_title">{post.title || title}</h2>
            <div
              className="service-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </section>
      </div>
    </div>
  );
}
