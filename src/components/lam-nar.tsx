"use client";

import React, { use, useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="blog_cat container wrapper h_blog">
        <div className="tab-content">
          <div
            role="tabpanel"
            className="sub_tab fade tab-pane"
            id="medee_medeelel"
          >
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D2%AF%D1%85-%D1%82%D3%A9%D1%80%D0%BB%D0%B8%D0%B9%D0%BD-%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%B7%D1%8D%D0%B4-%D0%B3-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%D0%B0%D0%B0%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/Zed_menu.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>Бүх төрлийн БУЯНЫ ЗЭД-г онлайнаар...</h4>
                  <i>11-Р Сарын 25</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%BC-%D1%8D-%D0%B4-%D1%8D-%D0%B3-%D0%B4-%D1%8D-%D0%BB/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/nuur.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>М Э Д Э Г Д Э Л</h4>
                  <i>10-Р Сарын 12</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%80%D1%85%D0%B0%D0%BD-%D0%B1%D0%BE%D0%BB%D0%BE%D0%B3%D1%81%D0%B4%D1%8B%D0%B3-%D0%B4%D1%83%D1%80%D1%81%D0%B0%D1%85-%D0%BE%D0%BB%D0%BE%D0%BD-%D1%83%D0%BB%D1%81%D1%8B%D0%BD-%D3%A9%D0%B4%D1%80%D0%B8%D0%B9%D0%B3-6-%D0%B4%D0%B0%D1%85%D1%8C-%D0%B6%D0%B8%D0%BB%D0%B4%D1%8D%D1%8D-%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%BD-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%BB%D0%B0%D0%B0/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/2019/Дурсах_өдөр_2022.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>
                    Бурхан бологсдыг дурсах олон улсын өдрийг 6 дахь жилдээ
                    зохион байгууллаа
                  </h4>
                  <i>9-Р Сарын 19</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B4%D0%B0%D0%BB%D0%B0%D0%BD-%D0%B4%D0%B0%D0%B2%D1%85%D0%B0%D1%80-%D1%8B%D0%BD-%D0%BE%D1%80%D1%88%D1%83%D1%83%D0%BB%D0%B3%D1%8B%D0%BD-%D0%B3%D0%B0%D0%B7%D0%B0%D1%80-%D0%B4%D0%B0%D1%85%D1%8C-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3%D1%82-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BD%D0%BE%D0%B3%D0%BE%D0%BE%D0%BD-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%B0%D0%BC%D0%B6%D0%B8%D0%B9%D0%BD-%D0%B0%D0%B6%D0%B8%D0%BB-%D1%8D%D1%85%D1%8D%D0%BB%D0%BB%D1%8D%D1%8D/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/Мэдээ_мэдээлэл/Sambalkhundew_OKweb.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>
                    "Далан давхар"-ын оршуулгын газар дахь Хүндэтгэлийн
                    цэцэрлэгт хүрээлэнгийн ногоон байгууламжийн ажил эхэллээ
                  </h4>
                  <i>9-Р Сарын 15</i>
                </div>
              </a>
            </div>
            <div className="clearfix" />
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%BE%D1%80%D1%88%D1%83%D1%83%D0%BB%D0%B3%D1%8B%D0%BD-%D0%B7%D0%B0%D0%BD-%D2%AF%D0%B9%D0%BB-%D0%B1%D0%BE%D0%BB%D0%BE%D0%BD-%D0%BD%D0%B8%D0%B9%D0%B3%D0%BC%D0%B8%D0%B9%D0%BD-%D1%81%D1%8D%D1%82%D0%B3%D1%8D%D0%BB-%D0%B7%D2%AF%D0%B9%D0%B4-%D1%88%D0%B0%D1%88%D0%BD%D1%8B-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%BB%D0%B0%D0%B3%D1%8B%D0%BD-%D2%AF%D0%B7%D2%AF%D2%AF%D0%BB%D1%8D%D1%85-%D0%BD%D3%A9%D0%BB%D3%A9%D3%A9-%D1%88%D0%B8%D0%B9%D0%B4%D0%B2%D1%8D%D1%80%D0%BB%D1%8D%D1%85-%D0%B0%D1%80%D0%B3%D0%B0-%D1%85%D1%8D%D0%BC%D0%B6%D1%8D%D1%8D%D0%BD%D0%B8%D0%B9-%D1%82%D0%B0%D0%BB%D0%B0%D0%B0%D1%80-%D0%BD%D1%8D%D1%8D%D0%BB%D1%82%D1%82%D1%8D%D0%B9-%D1%85%D1%8D%D0%BB%D1%8D%D0%BB%D1%86%D2%AF%D2%AF%D0%BB%D1%8D%D0%B3-%D0%B1%D0%BE%D0%BB%D0%BB%D0%BE%D0%BE/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/IMG_6112.JPG") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>
                    Оршуулгын зан үйл болон нийгмийн сэтгэл зүйд шашны
                    байгууллагын үзүүлэх нөлөө, шийдвэрлэх арга хэмжээний талаар
                    нээлттэй хэлэлцүүлэг боллоо
                  </h4>
                  <i>2-Р Сарын 23</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D0%B8%D0%B4-%D0%B4%D1%8D%D0%BB%D1%85%D0%B8%D0%B9%D0%BD-%D1%85%D3%A9%D0%B3%D0%B6%D0%BB%D0%B8%D0%B9%D0%BD-%D1%82%D2%AF%D2%AF%D1%87%D1%8D%D1%8D-ix-%D1%81%D0%B5%D0%BC%D0%B8%D0%BD%D0%B0%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/Мэдээ_мэдээлэл/251354164_2137678323064678_3784432436461511115_n.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>БИД ДЭЛХИЙН ХӨГЖЛИЙН ТҮҮЧЭЭ IX - семинар</h4>
                  <i>11-Р Сарын 08</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%80%D1%85%D0%B0%D0%BD-%D0%B1%D0%BE%D0%BB%D0%BE%D0%B3%D1%81%D0%BE%D0%B4%D1%8B%D0%B3-%D0%B4%D1%83%D1%80%D1%81%D0%B0%D1%85-%D0%BE%D0%BB%D0%BE%D0%BD-%D1%83%D0%BB%D1%81%D1%8B%D0%BD-%D3%A9%D0%B4%D3%A9%D1%80-2021-09-19/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/Дурсах_өдөр.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>Бурхан бологсодыг дурсах олон улсын өдөр 2021.09.19</h4>
                  <i>9-Р Сарын 07</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%BB%D0%B0%D0%B2%D0%BB%D0%B0%D1%85-7016-2222/">
                <div
                  className="p_img"
                  style={{
                    background:
                      'url("/media/ulaanbaatarbuyannew/content/159818596_1917519358413910_3775004549954236288_n.jpg") no-repeat center',
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay">
                    <img
                      className="c_arrow"
                      src="/static/images/sum-white.png"
                    />
                  </div>
                </div>
                <div className="garchig">
                  <h4>Буяны лавлах 7016-2222</h4>
                  <i>8-Р Сар ын 31</i>
                </div>
              </a>
            </div>
            <div className="clearfix" />
          </div>
          <div
            role="tabpanel"
            className="sub_tab fade tab-pane in active"
            id="zurhaich_lam"
          >
            <ul className="nav nav-tabs centered blog_buttons lam_tabs">
              <li
                className={`both_list tab2-1 ${
                  activeTab === "list" ? "active" : ""
                }`}
                onClick={() => setActiveTab("list")}
              >
                <span>Жагсаалтаар</span>
              </li>
              <li
                className={`both_list tab2-2 ${
                  activeTab === "map" ? "active" : ""
                }`}
                onClick={() => setActiveTab("map")}
              >
                <span>Газрын зургаар</span>
              </li>
            </ul>
            {activeTab === "list" && (
              <div className="lam_more">
                <div className="list" id="tab2-1" style={{ display: "block" }}>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Санжаадорж</h4>
                      <p>УТАС: +976-99890614</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Хувиараа</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>А.Эрдэнэбат</h4>
                      <p>УТАС: +976-88119032</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Үржин шадовлин хийд</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Ч. Алтангэрэл</h4>
                      <p>УТАС: +976-Дашчойлон хийд</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>88772742</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Я.Аюурзана</h4>
                      <p>УТАС: +976-91999535</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Манба дацан</p>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Энхбат</h4>
                      <p>УТАС: +976-99193681</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Гандан тэгчэнлин хийд</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Д.Цогтбаатар</h4>
                      <p>УТАС: +976-99996668</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Гандан тэгчэнлин хийд</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Ц.Гүнчин-Иш</h4>
                      <p>УТАС: +976-91917492</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Гэсэр сүм</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Галсан</h4>
                      <p>УТАС: +976-99106565</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Түвдэнпэлжээлин хийд</p>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Ж.Гончигсүрэн</h4>
                      <p>УТАС: +976-99092007</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Түвдэнпэлжээлин хийд</p>
                    </div>
                  </div>
                  <div className="lam row">
                    <div className="col-md-6 info">
                      <img
                        className="lam_icon"
                        src="/static/images/lam_icon.png"
                      />
                      <h4>Цолмон</h4>
                      <p>УТАС: +976-99279216</p>
                    </div>
                    <div className="col-md-6 time">
                      <h4>Хаяг</h4>
                      <p>Түвдэнпэлжээлин хийд</p>
                    </div>
                  </div>
                </div>
                <div className="map mapclass" id="tab2-2"></div>
              </div>
            )}
            {activeTab === "map" && (
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  src="https://www.google.com/maps/search/+%D0%A5%D0%B8%D0%B9%D0%B4/@47.8933202,106.9086396,18216m/data=!3m1!1e3?authuser=0&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            )}
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
