import { getKbArticleDetail, getKbArticlesByCode } from "@/lib/kb";
import React from "react";
import { resolveCmsMediaUrl } from "@/lib/cms-media";

export default async function pag({ params }: any) {
  const { article } = await getKbArticleDetail({
    variables: {
      id: params.id,
    },
  });
  const { articles } = await getKbArticlesByCode("medleg-medeelel");
  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <article className="single_article col-md-9">
          <div dangerouslySetInnerHTML={{ __html: article?.content || "" }} />
        </article>
        <div className="col-md-3 side_article">
          <h3>Бусад мэдээ</h3>
          {[...articles].reverse().map((item) => (
            <div className="r_news" key={item._id}>
              <a href={`/medee-medeelel/${item._id}`}>
                <div className="col-md-4 np r_img">
                  <img
                    src={resolveCmsMediaUrl(item?.image?.url)}
                    alt={item.title || ""}
                  />
                </div>
                <div className="col-md-8 r_text">
                  <h5>{item.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
