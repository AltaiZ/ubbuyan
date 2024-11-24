import { getKbArticlesByCode } from "@/lib/kb";
import React from "react";

export const revalidate = 1;
const ITEMS_PER_PAGE = 9;

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { articles } = await getKbArticlesByCode("medleg-medeelel");
  // console.log(articles);
  const reversedArticles = [...articles].reverse();
  const currentPage = parseInt(searchParams.page as string) || 1;
  const totalPages = Math.ceil(reversedArticles.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = reversedArticles.slice(startIndex, endIndex);

  return (
    <div id="content" style={{ display: "block" }}>
      <div className="blog_cat container wrapper h_blog">
        <h1>Мэдлэг, мэдээлэл</h1>
        <p>
          Сүүлийн үеийн мэдээлэл, мэдлэг, арга хэмжээ зэргийг та эндээс авах
          боломжтой.
        </p>
        <ul
          className="nav nav-tabs centered blog_buttons hidden-xs"
          role="tablist"
        >
          <li role="presentation" className="active">
            <a
              href="#medee_medeelel"
              aria-controls="medee_medeelel"
              role="tab"
              data-toggle="tab"
            >
              Мэдээ мэдээлэл
            </a>
          </li>
          <li role="presentation">
            <a
              href="/medee-medeelel/arag-hemjee"
              aria-controls="arga_hemjee"
              role="tab"
              data-toggle="tab"
            >
              Арга хэмжээ
            </a>
          </li>
          <li role="presentation">
            <a
              href="/medee-medeelel/medlegiin-san"
              aria-controls="medlegiin_san"
              role="tab"
              data-toggle="tab"
            >
              Мэдлэгийн сан
            </a>
          </li>
          <li role="presentation">
            <a
              href="/medee-medeelel/zurhaich-lam-nar"
              aria-controls="zurhaich_lam"
              role="tab"
              data-toggle="tab"
            >
              Зурхайч лам нар
            </a>
          </li>
          <li role="presentation">
            <a href="/medee-medeelel/tugemel-asuult">Түгээмээл асуулт</a>
          </li>
          <li role="presentation">
            <a href="/huuli-erh-zui">Хууль эрх зүй</a>
          </li>
        </ul>

        <br />
        <div className="tab-content">
          <div
            role="tabpanel"
            className="sub_tab fade tab-pane in active"
            id="medee_medeelel"
          >
            {paginatedArticles.map((item) => (
              <div className=" pc_tab col-md-3 col-sm-6" key={item._id}>
                <a href={`/medee-medeelel/${item._id}`}>
                  <div
                    className="p_img"
                    style={{
                      background: `url(https://ulaanbaatarbuyan.app.erxes.io/api/read-file?key=${item?.image?.url}) no-repeat center`,
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
                    <i>{item.summary}</i>
                  </div>
                </a>
              </div>
            ))}

            <div className="clearfix" />
          </div>
          <nav>
            <ul className="pagination">
              <li className="disabled">
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <span>1</span>
                </a>
              </li>
              <li>
                <a href="?page=2&_=1732004261228">2</a>
              </li>
              <li>
                <a href="?page=3&_=1732004261228">3</a>
              </li>
              <li>
                <a href="?page=4&_=1732004261228">4</a>
              </li>
              <li>
                <a href="?page=5&_=1732004261228">5</a>
              </li>
              <li>
                <a href="?page=6&_=1732004261228">6</a>
              </li>
              <li>
                <a href="?page=7&_=1732004261228">7</a>
              </li>
              <li>
                <a href="?page=8&_=1732004261228">8</a>
              </li>
              <li>
                <a href="?page=9&_=1732004261228">9</a>
              </li>
              <li>
                <a href="?page=2&_=1732004261228" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="map_new" style={{ display: "none" }}>
        <div id="map-canvas">
          <div style={{ height: "100%", width: "100%" }}>
            <div style={{ overflow: "hidden" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
