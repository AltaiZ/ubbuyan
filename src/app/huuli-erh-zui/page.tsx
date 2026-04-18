import React from "react";
import CmsArticlePage from "@/components/about/CmsArticlePage";
import { findCmsPostByCandidates } from "@/lib/cmsPosts";

const fallback = (
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
            <h2 className="page_title center">Хууль эрх зүй</h2>
          </hgroup>
        </header>
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img alt="Хууль эрх зүй" src="/static/images/icon12.png" />
          </div>
        </div>
        <p className="jy"></p>
        <p>
          <img alt="Juram 1" src="/static/images/Juram-min.jpg" />
        </p>
        <p>
          <img alt="Juram 2" src="/static/images/Juram2-min.jpg" />
        </p>
        <p>
          <img alt="Juram 3" src="/static/images/Juram3-min.jpg" />
        </p>
        <p>
          <img alt="Juram 4" src="/static/images/Juram4-min.jpg" />
        </p>
        <p>
          <img alt="Juram 5" src="/static/images/Juram5-min.jpg" />
        </p>
        <p>
          <img alt="Juram 6" src="/static/images/Juram6-min.jpg" />
        </p>
      </article>
    </section>
  </div>
);

export default async function Page() {
  let post = null;

  try {
    post = await findCmsPostByCandidates([
      "хууль эрх зүй",
      "huuli erh zui",
      "huuli-erh-zui",
      "juram",
    ]);
  } catch (error) {
    console.error("LAW CMS ERROR:", error);
  }

  if (post) {
    return <CmsArticlePage post={post} title="Хууль эрх зүй" />;
  }

  return fallback;
}
