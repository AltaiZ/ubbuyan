import React from "react";
import { getKbArticlesByCode } from "../../../lib/kb";
import { PaginationPart } from "../../../components/pagination";

export const revalidate = 1;
const ITEMS_PER_PAGE = 16; // Хуудас бүрт үзүүлэх нийт зүйлс

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { articles } = await getKbArticlesByCode("ontsloh");
  const reversedArticles = [...articles].reverse();
  const currentPage = parseInt(searchParams.page as string) || 1;
  const totalPages = Math.ceil(reversedArticles.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = reversedArticles.slice(startIndex, endIndex);

  const newArticles = [...articles].reverse();
  return (
    <div id="content">
      <section
        className="row product_bg"
        style={{
          background:
            'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6) ), url("/static/images/1_Sbdgyaw.jpg") no-repeat center',
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1 className="product_title">Бүтээгдэхүүн</h1>
        </div>
      </section>

      <section className="hproducts">
        <div className="row p_tab hidden-xs">
          <div className="container">
            <ul className="nav nav-tabs" role="tablist">
              <li className="col-md-2 ">
                <a href="/buteegdehuun/">
                  <img src="/static/images/tab1.png" width="25" height="25" />
                  Онцлох
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/buteegdehuun/hairtsag">
                  <img src="/static/images/tab2.png" width="25" height="25" />
                  Хайрцаг
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/buteegdehuun/hoshoo">
                  <img src="/static/images/tab3.png" width="25" height="25" />
                  Хөшөө
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/buteegdehuun/sats-suvarga">
                  <img src="/static/images/tab4.png" width="25" height="25" />
                  Сац суварга
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/buteegdehuun/tsetseg">
                  <img src="/static/images/tab5.png" width="25" height="25" />
                  Хүндэтгэлийн цэцэг
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/buteegdehuun/zed/">Зэд</a>
                <div className="arrow-down" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mobilehproducts">
          <ul
            className="nav nav-tabs blog_buttons mobile-tab visible-xs"
            role="tablist"
          >
            <div
              className="owl-carousel owl-theme owl-loaded owl-drag"
              id="product-icon"
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                  }}
                >
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a className="product-name" href="/buteegdehuun/">
                          <img
                            src="/static/images/tab1.png"
                            width="25"
                            height="25"
                          />
                          <span>Онцлох</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a
                          className="product-name"
                          href="/buteegdehuun/hairtsag"
                        >
                          <img src="/static/tab2.png" width="25" height="25" />
                          <span>Хайрцаг</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a className="product-name" href="/buteegdehuun/hoshoo">
                          <img
                            src="/static/images/tab3.png"
                            width="25"
                            height="25"
                          />
                          <span>Хөшөө</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a
                          className="product-name"
                          href="/buteegdehuun/sats-suvarga/"
                        >
                          <img
                            src="/static/images/tab4.png"
                            width="25"
                            height="25"
                          />
                          <span>Сац суварга</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a
                          className="product-name"
                          href="/buteegdehuun/tsetseg"
                        >
                          <img
                            src="/static/images/tab5.png"
                            width="25"
                            height="25"
                          />
                          <span>Хүндэтгэлийн цэцэг</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a className="product-name" href="/buteegdehuun/zed/">
                          <img
                            src="/static/sites/ulaanbaatarbuyannew/default/images/icons/tab6.png"
                            width="25"
                            height="25"
                          />
                          <span>Зэд</span>
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <div className="owl-prev">
                  <svg
                    aria-hidden="true"
                    className="svg-inline--fa fa-angle-left fa-w-8 fa-4x"
                    data-fa-i2svg=""
                    data-icon="angle-left"
                    data-prefix="fa"
                    role="img"
                    viewBox="0 0 256 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="owl-next">
                  <svg
                    aria-hidden="true"
                    className="svg-inline--fa fa-angle-right fa-w-8 fa-4x"
                    data-fa-i2svg=""
                    data-icon="angle-right"
                    data-prefix="fa"
                    role="img"
                    viewBox="0 0 256 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </ul>
        </div>

        <div className="container">
          <div>
            {paginatedArticles.map((item) => (
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href={`/buteegdehuun/${item?._id}`}>
                  <div
                    className="p_img"
                    style={{
                      background: `url(https://khankhujirt.app.erxes.io/api/read-file?key=${item?.image?.url})`,
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
                  <h3>{item.title}</h3>
                  <div className="price_field">
                    <h5 className="price-name">Үнэ: </h5>
                    <h3 className="price">{item.summary}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container mt-[-60px]">
        <div className="pagination">
          <PaginationPart
            currentPage={safeCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}
