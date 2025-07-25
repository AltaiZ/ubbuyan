import { PaginationPart } from "@/components/pagination";
import { getKbArticlesByCode } from "@/lib/kb";
import React from "react";

export const revalidate = 1;
const ITEMS_PER_PAGE = 9;

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { articles } = await getKbArticlesByCode("medlegiin-san");

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
          <li role="presentation" className="">
            <a
              href="/medee-medeelel"
              aria-controls="medee-medeelel"
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
          <li role="presentation" className="active">
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
        <ul
          className="nav nav-tabs blog_buttons mobile-tab visible-xs"
          role="tablist"
        >
          <div
            id="news-button"
            className="owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all",
                }}
              >
                <div className="owl-item">
                  <li role="presentation" className="active">
                    <div className="item">
                      <a
                        href="#medee_medeelel"
                        aria-controls="medee_medeelel"
                        role="tab"
                        data-toggle="tab"
                      >
                        Мэдээ мэдээлэл
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        href="#arga_hemjee"
                        aria-controls="arga_hemjee"
                        role="tab"
                        data-toggle="tab"
                      >
                        Арга хэмжээ
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        href="#medlegiin_san"
                        aria-controls="medlegiin_san"
                        role="tab"
                        data-toggle="tab"
                      >
                        Мэдлэгийн сан
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        href="#zurhaich_lam"
                        aria-controls="zurhaich_lam"
                        role="tab"
                        data-toggle="tab"
                      >
                        Зурхайч лам нар
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a href="http://ulaanbaatarbuyan.mn/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D1%82%D2%AF%D0%B3%D1%8D%D1%8D%D0%BC%D1%8D%D0%BB-%D0%B0%D1%81%D1%83%D1%83%D0%BB%D1%82/">
                        Түгээмээл асуулт
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a href="http://ulaanbaatarbuyan.mn/%D1%85%D1%83%D1%83%D0%BB%D1%8C-%D1%8D%D1%80%D1%85-%D0%B7%D2%AF%D0%B9/">
                        Хууль эрх зүй
                      </a>
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev">
                <svg
                  className="svg-inline--fa fa-angle-left fa-w-8 fa-4x"
                  aria-hidden="true"
                  data-prefix="fa"
                  data-icon="angle-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  />
                </svg>
                {/* <i class="fa fa-angle-left fa-4x"></i> */}
              </div>
              <div className="owl-next">
                <svg
                  className="svg-inline--fa fa-angle-right fa-w-8 fa-4x"
                  aria-hidden="true"
                  data-prefix="fa"
                  data-icon="angle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  />
                </svg>
                {/* <i class="fa fa-angle-right fa-4x"></i> */}
              </div>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </ul>
        <br />
        <div className="tab-content">
          <div role="tabpanel" id="medee_medeelel">
            {articles.map((item) => (
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
