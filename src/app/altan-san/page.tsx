import React from "react";
import CmsArticlePageClient from "@/components/about/CmsArticlePageClient";

export default function Page() {
  const fallback = (
    <div id="content" style={{ display: "block" }}>
      <section className="simple_page container">
        <article className="col-md-8 col-md-offset-2">
          <header className="post">
            <hgroup>
              <h2 className="page_title center">Ард түмний алтан сан</h2>
            </hgroup>
          </header>
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img alt="Ард түмний алтан сан" src="/static/images/icon12.png" />
            </div>
          </div>
          <p className="jy">Мэдээлэл удахгүй нэмэгдэнэ.</p>
        </article>
      </section>
    </div>
  );

  return (
    <CmsArticlePageClient
      candidates={["ард түмний алтан сан", "altan san", "altan-san"]}
      title="Ард түмний алтан сан"
      fallback={fallback}
    />
  );
}
