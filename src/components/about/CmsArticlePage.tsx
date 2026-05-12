import React from "react";
import type { CmsPost } from "@/lib/cmsPosts";
import { normalizeCmsHtml } from "@/lib/cmsMedia";

type Props = {
  post: CmsPost;
  title: string;
};

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

export default function CmsArticlePage({ post, title }: Props) {
  const html = post.content || post.excerpt || "";
  const embedUrl = getYoutubeEmbedUrl(post.videoUrl);

  return (
    <div id="content" style={{ display: "block" }}>
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
              __html: normalizeCmsHtml(html),
            }}
          />
          {embedUrl && (
            <div style={{ marginTop: "24px" }}>
              <iframe
                allowFullScreen
                frameBorder="0"
                height="315"
                src={embedUrl}
                width="100%"
                style={{ maxWidth: "500px" }}
              />
            </div>
          )}
        </article>
      </section>
    </div>
  );
}