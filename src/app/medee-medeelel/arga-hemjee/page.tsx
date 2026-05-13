import React from "react";
import { getCmsPosts } from "@/lib/cmsPosts";
import { resolveCmsPostThumbnailUrl } from "@/lib/cms-media";

export const revalidate = 60;

export default async function page() {
  const allPosts = await getCmsPosts();
  const articles = allPosts.filter((post) =>
    post.categories?.some((cat) => cat?.slug === "arga-hemjee")
  );

  return (
    <div id="content" style={{ display: "block" }}>
      <div className="blog_cat container wrapper h_blog">
        <h1>Арга хэмжээ</h1>
        <p>Сүүлийн үеийн мэдээлэл, мэдлэг, арга хэмжээ зэргийг та эндээс авах боломжтой.</p>
        <ul className="nav nav-tabs centered blog_buttons hidden-xs" role="tablist">
          <li role="presentation">
            <a href="/medee-medeelel">Мэдээ мэдээлэл</a>
          </li>
          <li role="presentation" className="active">
            <a href="/medee-medeelel/arga-hemjee">Арга хэмжээ</a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/medlegiin-san">Мэдлэгийн сан</a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/zurhaich-lam-nar">Зурхайч лам нар</a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/tugemel-asuult">Түгээмэл асуулт</a>
          </li>
          <li role="presentation">
            <a href="/huuli-erh-zui">Хууль эрх зүй</a>
          </li>
        </ul>
        <br />
        <div className="tab-content">
          <div role="tabpanel" id="arga_hemjee">
            <div className="row">
              {articles.map((item) => (
                <div className="pc_tab col-md-3 col-sm-6" key={item._id}>
                  <a href={`/medee-medeelel/${item._id}`}>
                    <div
                      className="p_img"
                      style={{
                        background: `url(${resolveCmsPostThumbnailUrl(item) || "/static/images/news.jpg"})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="overlay">
                        <img
                          className="c_arrow"
                          src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png"
                        />
                      </div>
                    </div>
                    <div className="garchig">
                      <h4>{item.title}</h4>
                      <i>{item.excerpt}</i>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
  );
}