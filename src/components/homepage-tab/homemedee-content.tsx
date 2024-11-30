"use client";
import React, { useState } from "react";
import HomeMedeeTab from "./homemedee-tab";
import { IArticle } from "@/lib/kb";
import LamNar from "../lam-nar";

export default function HomeMedeeContent({
  tabs,
  articles,
}: {
  tabs: any[];
  articles: any[];
}) {
  const [activeNewTab, setActiveNewsTab] = useState(tabs[0].id);

  const filteredArticles = articles?.filter(
    (article: any) => article.categoryId === activeNewTab
  );

  console.log(filteredArticles, "filteredArticles");

  return (
    <div>
      <ul
        className="nav nav-tabs centered blog_buttons desktop-tab"
        role="tablist"
      >
        {tabs.map((tab: any) => (
          <HomeMedeeTab
            key={tab.id}
            name={tab.name}
            id={tab?.id}
            state={activeNewTab}
            setState={setActiveNewsTab}
          />
        ))}
        <li role="presentation">
          <a
            href="/medee-medeelel/tugemel-asuult"
            aria-controls="medee_medeelel"
            data-toggle="tab"
            role="tab"
          >
            Түгээмээл асуулт
          </a>
        </li>
        <li role="presentation">
          <a
            href="/huuli-erh-zui"
            aria-controls="medee_medeelel"
            data-toggle="tab"
            role="tab"
          >
            Хууль эрх зүй
          </a>
        </li>
      </ul>

      <ul
        className="nav nav-tabs blog_buttons mobile-tab visible-xs"
        role="tablist"
      >
        <div
          className="owl-carousel owl-theme owl-loaded owl-drag owl-hidden"
          id="news-button"
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "1549px",
              }}
            >
              <div
                className="owl-item active"
                style={{
                  marginRight: "10px",
                  width: "241.5px",
                }}
              >
                <li className="active" role="presentation">
                  <div className="item">
                    <a
                      aria-controls="medee_medeelel"
                      data-toggle="tab"
                      href="#medee_medeelel"
                      role="tab"
                    >
                      Мэдээ мэдээлэл
                    </a>
                  </div>
                </li>
              </div>
              <div
                className="owl-item active"
                style={{
                  marginRight: "10px",
                  width: "241.5px",
                }}
              >
                <li role="presentation">
                  <div className="item">
                    <a
                      aria-controls="arga_hemjee"
                      data-toggle="tab"
                      href="#arga_hemjee"
                      role="tab"
                    >
                      Арга хэмжээ
                    </a>
                  </div>
                </li>
              </div>
              <div
                className="owl-item"
                style={{
                  marginRight: "10px",
                  width: "241.5px",
                }}
              >
                <li role="presentation">
                  <div className="item">
                    <a
                      aria-controls="medlegiin_san"
                      data-toggle="tab"
                      href="#medlegiin_san"
                      role="tab"
                    >
                      Мэдлэгийн сан
                    </a>
                  </div>
                </li>
              </div>
              <div
                className="owl-item"
                style={{
                  marginRight: "10px",
                  width: "241.5px",
                }}
              >
                <li role="presentation">
                  <div className="item">
                    <a
                      aria-controls="zurhaich_lam"
                      data-toggle="tab"
                      href="#zurhaich_lam"
                      role="tab"
                    >
                      Зурхайч лам нар
                    </a>
                  </div>
                </li>
              </div>
              <div
                className="owl-item"
                style={{
                  marginRight: "10px",
                  width: "241.5px",
                }}
              >
                <li role="presentation">
                  <div className="item">
                    <a href="http://ulaanbaatarbuyan.mn/medleg-medeelel/tugeemel-asuult">
                      Түгээмээл асуулт
                    </a>
                  </div>
                </li>
              </div>
              <div
                className="owl-item"
                style={{
                  marginRight: "10px",
                  width: "241.5px",
                }}
              >
                <li role="presentation">
                  <div className="item">
                    <a href="http://ulaanbaatarbuyan.mn/huuli-erh-zui">
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
      <br />
      <div className="tab-content">
        <div
          className="sub_tab fade tab-pane in active"
          id="medee_medeelel"
          role="tabpanel"
        >
          {activeNewTab !== "lam-nar" &&
            filteredArticles?.reverse().map((item: any) => (
              <div className=" pc_tab col-md-3 col-sm-6">
                <a href={`/medee-medeelel/${item._id}`}>
                  <div
                    className="p_img"
                    style={{
                      background: `url(https://khankhujirt.app.erxes.io/api/read-file?key=${item?.image?.url}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img className="c_arrow" src="/static/images/8.png" />
                    </div>
                  </div>
                  <div className="garchig">
                    <h4>{item?.title}</h4>
                    <i>{item?.summary}</i>
                  </div>
                </a>
              </div>
            ))}
          {activeNewTab === "lam-nar" && <LamNar />}
        </div>
      </div>
    </div>
  );
}
