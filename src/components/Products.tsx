import React from "react";

export default function Products() {
  return (
    <div>
      <section className="mobilehproducts">
        <ul
          className="nav nav-tabs blog_buttons mobile-tab visible-xs"
          role="tablist"
        >
          <div
            className="owl-carousel owl-theme owl-loaded owl-drag owl-hidden"
            id="product-icon"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "622px",
                }}
              >
                <div
                  className="owl-item active"
                  style={{
                    marginRight: "5px",
                    width: "95.25px",
                  }}
                >
                  <li className="active" role="presentation">
                    <div className="item">
                      <a
                        aria-controls="ontsloh"
                        aria-expanded="true"
                        className="product-name"
                        data-toggle="tab"
                        href="#ontsloh"
                        role="tab"
                      >
                        <img src="/static/images/icon15.png" />
                        <span>онцлох</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div
                  className="owl-item active"
                  style={{
                    marginRight: "5px",
                    width: "95.25px",
                  }}
                >
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="hairtsag"
                        className="product-name"
                        data-toggle="tab"
                        href="#hairtsag"
                        role="tab"
                      >
                        <img src="/static/images/icon14.png" />
                        <span>хайрцаг</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div
                  className="owl-item active"
                  style={{
                    marginRight: "5px",
                    width: "95.25px",
                  }}
                >
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="hushuu"
                        className="product-name"
                        data-toggle="tab"
                        href="#hushuu"
                        role="tab"
                      >
                        <img src="/static/images/icon12.png" />
                        <span>хөшөө</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div
                  className="owl-item active"
                  style={{
                    marginRight: "5px",
                    width: "95.25px",
                  }}
                >
                  <li className="active" role="presentation">
                    <div className="item">
                      <a
                        aria-controls="sats"
                        aria-expanded="true"
                        className="product-name"
                        data-toggle="tab"
                        href="#sats"
                        role="tab"
                      >
                        <img src="/static/images/icons/icon13.png" />
                        <span>сац суварга</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div
                  className="owl-item"
                  style={{
                    marginRight: "5px",
                    width: "95.25px",
                  }}
                >
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="tsetseg"
                        className="product-name"
                        data-toggle="tab"
                        href="#tsetseg"
                        role="tab"
                      >
                        <img src="/static/images/icons/icon9.png" />
                        <span>хүндэтгэлийн цэцэг</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div
                  className="owl-item"
                  style={{
                    marginRight: "5px",
                    width: "95.25px",
                  }}
                >
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="zed"
                        className="product-name"
                        data-toggle="tab"
                        href="#zed"
                        role="tab"
                      >
                        <img src="/static/images/icons/icon9.png" />
                        <span
                          style={{
                            marginLeft: "28px",
                          }}
                        >
                          зэд
                        </span>
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
      </section>
      <section className="hproducts">
        <div className="container">
          <div className="p_tab hidden-xs">
            <ul className="nav nav-tabs menutab" role="tablist">
              <li className="col-md-2" role="presentation">
                <a
                  aria-controls="ontsloh"
                  aria-expanded="false"
                  data-toggle="tab"
                  href="#ontsloh"
                  role="tab"
                >
                  <img src="/static/images/icon1.png" />
                  онцлох
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2" role="presentation">
                <a
                  aria-controls="hairtsag"
                  data-toggle="tab"
                  href="#hairtsag"
                  role="tab"
                >
                  <img src="/static/images/icon4.png" />
                  хайрцаг
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2" role="presentation">
                <a
                  aria-controls="hushuu"
                  data-toggle="tab"
                  href="#hushuu"
                  role="tab"
                >
                  <img src="/static/images/icon5.png" />
                  хөшөө
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2" role="presentation">
                <a
                  aria-controls="sats"
                  data-toggle="tab"
                  href="#sats"
                  role="tab"
                >
                  <img src="/static/images/icon3.png" />
                  сац суварга
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2" role="presentation">
                <a
                  aria-controls="tsetseg"
                  data-toggle="tab"
                  href="#tsetseg"
                  role="tab"
                >
                  <img src="/static/images/tab5.png" />
                  хүндэтгэлийн цэцэг
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 active" role="presentation">
                <a
                  aria-controls="zed"
                  aria-expanded="true"
                  data-toggle="tab"
                  href="#zed"
                  role="tab"
                >
                  зэд
                </a>
                <div className="arrow-down" />
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="tab-content">
            <div
              className="fade tab-pane row active in"
              id="ontsloh"
              role="tabpanel"
            >
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B7%D1%83%D1%80%D0%BC%D0%B0%D0%BB-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/8.jpg') no-repeat center",
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
                  <h3>Зурмал хээтэй лакан хайрцаг</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%88%D0%B8%D0%BD%D1%8D-%D0%B7%D0%B0%D0%B3%D0%B2%D0%B0%D1%80%D1%8B%D0%BD-%D1%85%D0%B0%D0%BC%D0%B1%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/3_TivfSbz.png') no-repeat center",
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
                  <h3>Шинэ загварын хамбан хайрцаг</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%82%D0%BE%D0%BD%D0%BE%D0%B3%D1%82%D0%BE%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/100.jpg') no-repeat center",
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
                  <h3>Тоногтой эсгий хайрцаг</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/9-%D1%8D%D1%80%D0%B4%D1%8D%D0%BD%D0%B8%D0%B9%D0%BD-%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/6_oAmLEe6.png') no-repeat center",
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
                  <h3>9 эрдэнийн чимэглэлтэй лакан хайрцаг</h3>
                </a>
              </div>
            </div>
            <div className="fade tab-pane row" id="hairtsag" role="tabpanel">
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BC%D0%B8%D1%88%D0%BE%D0%BA/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/43.jpg') no-repeat center",
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
                  <h3>Хээтэй мишок</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/зэд/9.jpg') no-repeat center",
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
                  <h3>Торгон чимэглэлтэй лакан хайрцаг</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/6-%D1%82%D0%B0%D0%BB%D1%82-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%B8%D0%B1/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/зэд/6.jpg') no-repeat center",
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
                  <h3>6 талт модон хайрцаг - ИБ</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%82%D0%BE%D0%BD%D0%BE%D0%B3%D0%BB%D0%BE%D0%BB%D1%82%D0%BE%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%B8%D0%B1/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/зэд/3.jpg') no-repeat center",
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
                  <h3>Тоноглолтой лакан хайрцаг - ИБ</h3>
                </a>
              </div>
            </div>
            <div className="fade tab-pane row" id="hushuu" role="tabpanel">
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B3-15-%D1%83-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/18.jpg') no-repeat center",
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
                  <h3>Г-15-у /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B1-15-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/17.jpg') no-repeat center",
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
                  <h3>Б-15-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B1-14-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/16.jpg') no-repeat center",
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
                  <h3>Б-14-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B3-14-%D1%85-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/15.jpg') no-repeat center",
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
                  <h3>Г-14-х /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
            </div>
            <div className="fade tab-pane row" id="sats" role="tabpanel">
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/FA832462-E735-4FE2-8863-CFC8CD7EBB38.png') no-repeat center",
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
                  <h3>Чимэглэлтэй чандрын модон хайрцаг</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%85%D1%83%D0%BB%D1%81%D0%B0%D0%BD-%D1%81%D0%B0%D0%B2/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/ХАЙРЦАГ_1.png') no-repeat center",
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
                  <h3>Чандрын хулсан сав</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%88%D0%B0%D0%B0%D0%B7%D0%B0%D0%BD-%D0%B1%D1%83%D0%BC%D0%B1%D0%B0/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/ШААЗАН_1.png') no-repeat center",
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
                  <h3>Чандрын шаазан бумба</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%83%D1%83%D1%82/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/Торгон_уут.png') no-repeat center",
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
                  <h3>Чандрын торгон уут</h3>
                </a>
              </div>
            </div>
            <div
              className="fade tab-pane row"
              id="tsetseg"
              role="tabpanel"
            ></div>
            <div className="fade tab-pane row" id="zed" role="tabpanel">
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%B7%D1%8D%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/316800705_228194152869741_4762417102619081352_n.jpg') no-repeat center",
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
                  <h3>Буяны зэд</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
