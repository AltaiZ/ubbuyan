import React from "react";
import { getCmsPosts } from "@/lib/cmsPosts";
import { resolveCmsPostThumbnailUrl } from "@/lib/cms-media";

export const revalidate = 60;

export default async function page() {
  const allPosts = await getCmsPosts();
  const articles = allPosts.filter((post) =>
    post.categories?.some((cat) => cat?.slug === "medlegiin-san")
  );

  return (
    <div id="content" style={{ display: "block" }}>
      <div className="blog_cat container wrapper h_blog">
        <h1>Мэдлэгийн сан</h1>
        <div className="row">
          {articles.map((item) => (
            <div className="pc_tab col-md-3 col-sm-6" key={item._id}>
              <a href={`/medleg-medeelel/${item._id}`}>
                <div
                  className="p_img"
                  style={{
                    background: `url(${resolveCmsPostThumbnailUrl(item) || "/static/images/news.jpg"})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img className="c_arrow" src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png" />
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
      </div>
    </div>
  );
}
