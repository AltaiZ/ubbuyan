import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="container wrapper h_blog">
        <h1>Мэдлэг, мэдээлэл</h1>
        <p className="hidden-xs">
          Сүүлийн үеийн мэдээлэл, мэдлэг, арга хэмжээ зэргийг та эндээс авах
          боломжтой.
        </p>
        <ul
          className="nav nav-tabs centered blog_buttons desktop-tab"
          role="tablist"
        >
          <li className="active" role="presentation">
            <a
              aria-controls="medee_medeelel"
              data-toggle="tab"
              href="#medee_medeelel"
              role="tab"
            >
              Мэдээ мэдээлэл
            </a>
          </li>
          <li role="presentation">
            <a
              aria-controls="arga_hemjee"
              data-toggle="tab"
              href="#arga_hemjee"
              role="tab"
            >
              Арга хэмжээ
            </a>
          </li>
          <li role="presentation">
            <a
              aria-controls="medlegiin_san"
              data-toggle="tab"
              href="#medlegiin_san"
              role="tab"
            >
              Мэдлэгийн сан
            </a>
          </li>
          <li role="presentation">
            <a
              aria-controls="zurhaich_lam"
              data-toggle="tab"
              href="#zurhaich_lam"
              role="tab"
            >
              Зурхайч лам нар
            </a>
          </li>
          <li role="presentation">
            <a href="http://ulaanbaatarbuyan.mn/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D1%82%D2%AF%D0%B3%D1%8D%D1%8D%D0%BC%D1%8D%D0%BB-%D0%B0%D1%81%D1%83%D1%83%D0%BB%D1%82/">
              Түгээмээл асуулт
            </a>
          </li>
          <li role="presentation">
            <a href="http://ulaanbaatarbuyan.mn/%D1%85%D1%83%D1%83%D0%BB%D1%8C-%D1%8D%D1%80%D1%85-%D0%B7%D2%AF%D0%B9/">
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
                      <a href="http://ulaanbaatarbuyan.mn/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D1%82%D2%AF%D0%B3%D1%8D%D1%8D%D0%BC%D1%8D%D0%BB-%D0%B0%D1%81%D1%83%D1%83%D0%BB%D1%82/">
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
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D2%AF%D1%85-%D1%82%D3%A9%D1%80%D0%BB%D0%B8%D0%B9%D0%BD-%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%B7%D1%8D%D0%B4-%D0%B3-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%D0%B0%D0%B0%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Zed_menu.jpg') no-repeat center",
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
                  <i>11-р сарын 25</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%BC-%D1%8D-%D0%B4-%D1%8D-%D0%B3-%D0%B4-%D1%8D-%D0%BB/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/nuur.jpg') no-repeat center",
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
                  <i>10-р сарын 12</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%80%D1%85%D0%B0%D0%BD-%D0%B1%D0%BE%D0%BB%D0%BE%D0%B3%D1%81%D0%B4%D1%8B%D0%B3-%D0%B4%D1%83%D1%80%D1%81%D0%B0%D1%85-%D0%BE%D0%BB%D0%BE%D0%BD-%D1%83%D0%BB%D1%81%D1%8B%D0%BD-%D3%A9%D0%B4%D1%80%D0%B8%D0%B9%D0%B3-6-%D0%B4%D0%B0%D1%85%D1%8C-%D0%B6%D0%B8%D0%BB%D0%B4%D1%8D%D1%8D-%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%BD-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%BB%D0%B0%D0%B0/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Дурсах_өдөр_2022.jpg') no-repeat center",
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
                  <i>09-р сарын 19</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B4%D0%B0%D0%BB%D0%B0%D0%BD-%D0%B4%D0%B0%D0%B2%D1%85%D0%B0%D1%80-%D1%8B%D0%BD-%D0%BE%D1%80%D1%88%D1%83%D1%83%D0%BB%D0%B3%D1%8B%D0%BD-%D0%B3%D0%B0%D0%B7%D0%B0%D1%80-%D0%B4%D0%B0%D1%85%D1%8C-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3%D1%82-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BD%D0%BE%D0%B3%D0%BE%D0%BE%D0%BD-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%B0%D0%BC%D0%B6%D0%B8%D0%B9%D0%BD-%D0%B0%D0%B6%D0%B8%D0%BB-%D1%8D%D1%85%D1%8D%D0%BB%D0%BB%D1%8D%D1%8D/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Sambalkhundew_OKweb.jpg') no-repeat center",
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
                  <i>09-р сарын 15</i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="sub_tab fade tab-pane in"
            id="arga_hemjee"
            role="tabpanel"
          >
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B4%D0%B0%D0%BB%D0%B0%D0%BD-%D0%B4%D0%B0%D0%B2%D1%85%D0%B0%D1%80-%D1%8B%D0%BD-%D0%BE%D1%80%D1%88%D1%83%D1%83%D0%BB%D0%B3%D1%8B%D0%BD-%D0%B3%D0%B0%D0%B7%D0%B0%D1%80-%D0%B4%D0%B0%D1%85%D1%8C-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3%D1%82-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BD%D0%BE%D0%B3%D0%BE%D0%BE%D0%BD-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%B0%D0%BC%D0%B6%D0%B8%D0%B9%D0%BD-%D0%B0%D0%B6%D0%B8%D0%BB-%D1%8D%D1%85%D1%8D%D0%BB%D0%BB%D1%8D%D1%8D/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Мэдээ_мэдээлэл/Sambalkhundew_OKweb.jpg') no-repeat center",
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
                  <i>09-р сарын 15</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%80%D1%85%D0%B0%D0%BD-%D0%B1%D0%B0%D0%B3%D1%88%D0%B8%D0%B9%D0%BD-%D0%B8%D1%85-%D0%B4%D2%AF%D0%B9%D1%87%D1%8D%D0%BD-%D3%A9%D0%B4%D3%A9%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Untitled-1_yTzR4ow.jpg') no-repeat center",
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
                  <h4>Бурхан багшийн их дүйчэн өдөр</h4>
                  <i>05-р сарын 19</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B7%D1%83%D0%BB%D1%8B%D0%BD-25-%D0%BD%D1%8B-%D0%B8%D1%85-%D0%B4%D2%AF%D0%B9%D1%87%D0%B8%D0%BD-%D3%A9%D0%B4%D3%A9%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Мэдээ_мэдээлэл/Арга_хэмжээ/20536092_1644582412280429_1200449797_o.jpg') no-repeat center",
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
                  <h4>Зулын 25-ны ИХ ДҮЙЧИН өдөр</h4>
                  <i>08-р сарын 18</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%80%D1%85%D0%B0%D0%BD-%D0%B1%D0%BE%D0%BB%D0%BE%D0%B3%D1%81%D0%BE%D0%B4%D1%8B%D0%B3-%D0%B4%D1%83%D1%80%D1%81%D0%B0%D1%85-%D0%BE%D0%BB%D0%BE%D0%BD-%D1%83%D0%BB%D1%81%D1%8B%D0%BD-%D3%A9%D0%B4%D3%A9%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/web_dursah.jpg') no-repeat center",
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
                  <h4>Бурхан бологсодыг дурсах олон улсын өдөр</h4>
                  <i>08-р сарын 18</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%BC%D0%BE%D0%B4-%D1%82%D0%B0%D1%80%D0%B8%D1%85-%D2%AF%D0%BD%D0%B4%D1%8D%D1%81%D0%BD%D0%B8%D0%B9-%D3%A9%D0%B4%D3%A9%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Мэдээ_мэдээлэл/Арга_хэмжээ/20930615_1644579375614066_747616974_o.jpg') no-repeat center",
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
                  <h4>Мод тарих үндэсний өдөр</h4>
                  <i>08-р сарын 18</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D1%85%D0%B0%D0%BD%D1%88-%D0%BD%D1%8D%D1%8D%D1%85-%D3%A9%D0%B4%D3%A9%D1%80/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Мэдээ_мэдээлэл/Арга_хэмжээ/20952197_1644578998947437_648296907_o.jpg') no-repeat center",
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
                  <h4>Ханш нээх өдөр</h4>
                  <i>08-р сарын 17</i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="sub_tab fade tab-pane in"
            id="medlegiin_san"
            role="tabpanel"
          >
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D1%81%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D0%B3%D1%8D%D0%BC%D1%82%D1%8D%D0%BB-%D0%B3%D1%8D%D0%B6-%D1%8E%D1%83/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/Сэтгэлзүйч_Р.Энхтүвшин_ISw6Plu.png') no-repeat center",
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
                  <h4>Сэтгэлийн гэмтэл гэж юу?</h4>
                  <i>11-р сарын 21</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%BB%D0%B0%D0%B2%D0%BB%D0%B0%D1%85-7016-2222/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/159818596_1917519358413910_3775004549954236288_n.jpg') no-repeat center",
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
                  <i>08-р сарын 31</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%BE%D0%B9%D0%BB%D0%B3%D0%BE%D0%BB%D1%82%D1%8B%D0%BD-%D0%B7%D3%A9%D1%80%D2%AF%D2%AF-4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/236076734_2062591217240056_2581962703071874035_n.jpg') no-repeat center",
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
                  <h4>ОЙЛГОЛТЫН ЗӨРҮҮ №4</h4>
                  <i>08-р сарын 16</i>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6">
              <a href="/%D0%BE%D0%B9%D0%BB%D0%B3%D0%BE%D0%BB%D1%82%D1%8B%D0%BD-%D0%B7%D3%A9%D1%80%D2%AF%D2%AF-3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/static/images/UBB_comic_final-12.jpg') no-repeat center",
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
                  <h4>ОЙЛГОЛТЫН ЗӨРҮҮ №3</h4>
                  <i>08-р сарын 10</i>
                </div>
              </a>
            </div>
          </div>
          <div
            className="sub_tab fade tab-pane in"
            id="zurhaich_lam"
            role="tabpanel"
          >
            <ul className="nav nav-tabs centered blog_buttons lam_tabs">
              <li className="both_list tab2-1 active">
                <span>Жагсаалтаар</span>
              </li>
              <li className="both_list tab2-2">
                <span>Газрын зургаар</span>
              </li>
            </ul>
            <div className="lam_more">
              <div className="list" id="tab2-1">
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
              </div>
              <div
                className="map_new"
                id="tab2-2"
                style={{
                  display: "none",
                }}
              >
                <div id="map-canvas">
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="read_more">
        <a href="http://ulaanbaatarbuyan.mn/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB-%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8/">
          <img src="/static/images/sum-red.png" />
        </a>
        <p>бүгдийг харах</p>
      </div>
    </div>
  );
}
