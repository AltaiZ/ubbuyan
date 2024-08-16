import React from "react";

export default function hProducts() {
  return (
    <section className="hproducts">
      <div className="row p_tab hidden-xs">
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li className="active col-md-2" role="presentation">
              <a
                aria-controls="ontsloh"
                data-toggle="tab"
                href="#ontsloh"
                role="tab"
              >
                <img src="/static/sites/ulaanbaatarbuyannew/default/images/tab1.png" />
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
                <img src="/static/images/tab2.png" />
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
                <img src="/static/images/tab3.png" />
                хөшөө
              </a>
              <div className="arrow-down" />
            </li>
            <li className="col-md-2" role="presentation">
              <a aria-controls="sats" data-toggle="tab" href="#sats" role="tab">
                <img src="/static/images/tab4.png" />
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
            <li className="col-md-2" role="presentation">
              <a aria-controls="zed" data-toggle="tab" href="#zed" role="tab">
                зэд
              </a>
              <div className="arrow-down" />
            </li>
          </ul>
        </div>
      </div>
      <section className="mobilehproducts">
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
                  <li className="active" role="presentation">
                    <div className="item">
                      <a
                        aria-controls="ontsloh"
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
                <div className="owl-item">
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
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="hushuu"
                        className="product-name"
                        data-toggle="tab"
                        href="#hushuu"
                        role="tab"
                      >
                        <img src="/static/icon12.png" />
                        <span>хөшөө</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="sats"
                        className="product-name"
                        data-toggle="tab"
                        href="#sats"
                        role="tab"
                      >
                        <img src="/static/sites/ulaanbaatarbuyannew/default/images/icons/icon13.png" />
                        <span>сац суварга</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="tsetseg"
                        className="product-name"
                        data-toggle="tab"
                        href="#tsetseg"
                        role="tab"
                      >
                        <img src="/static/sites/ulaanbaatarbuyannew/default/images/icons/icon9.png" />
                        <span>хүндэтгэлийн цэцэг</span>
                      </a>
                    </div>
                  </li>
                </div>
                <div className="owl-item">
                  <li role="presentation">
                    <div className="item">
                      <a
                        aria-controls="zed"
                        className="product-name"
                        data-toggle="tab"
                        href="#zed"
                        role="tab"
                      >
                        <img src="/static/sites/ulaanbaatarbuyannew/default/images/icons/icon9.png" />
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
      <div className="container">
        <div className="tab-content">
          <div className="fade tab-pane in active" id="ontsloh" role="tabpanel">
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D1%80%D0%BC%D0%B0%D0%BB-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/8.jpg') no-repeat center",
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
                <h3>Зурмал хээтэй лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%88%D0%B8%D0%BD%D1%8D-%D0%B7%D0%B0%D0%B3%D0%B2%D0%B0%D1%80%D1%8B%D0%BD-%D1%85%D0%B0%D0%BC%D0%B1%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/3_TivfSbz.png') no-repeat center",
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
                <h3>Шинэ загварын хамбан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">550000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
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
                      src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png"
                    />
                  </div>
                </div>
                <h3>Тоногтой эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1450000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/9-%D1%8D%D1%80%D0%B4%D1%8D%D0%BD%D0%B8%D0%B9%D0%BD-%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/6_oAmLEe6.png') no-repeat center",
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
                <h3>9 эрдэнийн чимэглэлтэй лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1550000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/18.png') no-repeat center",
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
                <h3>Энгийн лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">480000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%86%D1%8D%D1%86%D0%B3%D1%8D%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/цэцэг1.png') no-repeat center",
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
                <h3>Цэцгэн хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">690000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%8B%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-president/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/1_9sK70nY.png') no-repeat center",
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
                <h3>Импортын хайрцаг /President/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">2200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%8B%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%BE%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Untitled-3.png') no-repeat center",
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
                <h3>Импортын хайрцаг /камерон/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">2200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1%D1%83%D0%B3%D0%B0%D1%82%D0%B0%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Буга1.png') no-repeat center",
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
                <h3>Бугатай эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1150000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%82%D0%BE%D0%BE%D0%BD%D0%BE%D1%82-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Тоонот.png') no-repeat center",
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
                <h3>Тоонот хайрцаг /лакан/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">950000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%86%D1%8D%D1%86%D1%8D%D0%B3%D1%82%D1%8D%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Untitled-2.png') no-repeat center",
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
                <h3>Цэцэгтэй хайрцаг /лакан/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">950000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1%D0%B0%D0%B4%D0%B0%D0%BC%D0%BB%D1%8F%D0%BD%D1%85%D1%83%D0%B0-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D1%80%D0%BE%D0%BC%D0%B1%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Бадам6.png') no-repeat center",
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
                <h3>Бадамлянхуа хээтэй ромбон хайрцаг / лакан/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">445000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1%D0%B0%D0%B4%D0%B0%D0%BC%D0%BB%D1%8F%D0%BD%D1%85%D1%83%D0%B0-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Бадам1.png') no-repeat center",
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
                <h3>Бадамлянхуа хээтэй эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">320000₮</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="fade tab-pane" id="hairtsag" role="tabpanel">
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BC%D0%B8%D1%88%D0%BE%D0%BA/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/43.jpg') no-repeat center",
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
                <h3>Хээтэй мишок</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">340000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/зэд/9.jpg') no-repeat center",
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
                <h3>Торгон чимэглэлтэй лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">365000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/6-%D1%82%D0%B0%D0%BB%D1%82-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%B8%D0%B1/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/зэд/6.jpg') no-repeat center",
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
                <h3>6 талт модон хайрцаг - ИБ</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">790000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%82%D0%BE%D0%BD%D0%BE%D0%B3%D0%BB%D0%BE%D0%BB%D1%82%D0%BE%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%B8%D0%B1/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/зэд/3.jpg') no-repeat center",
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
                <h3>Тоноглолтой лакан хайрцаг - ИБ</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">790000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D1%8B%D0%BD-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/зэд/1.jpg') no-repeat center",
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
                <h3>Монгол стандартын модон хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D1%80%D0%BC%D0%B0%D0%BB-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/8.jpg') no-repeat center",
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
                <h3>Зурмал хээтэй лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D0%B0%D0%B3%D0%B0%D0%BB%D0%BC%D0%B0%D0%B9%D1%82%D0%B0%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/3.jpg') no-repeat center",
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
                <h3>Загалмайтай лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">550000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%88%D0%B8%D0%BD%D1%8D-%D0%B7%D0%B0%D0%B3%D0%B2%D0%B0%D1%80%D1%8B%D0%BD-%D1%85%D0%B0%D0%BC%D0%B1%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/3_TivfSbz.png') no-repeat center",
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
                <h3>Шинэ загварын хамбан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">550000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%82%D0%BE%D0%BE%D0%BD%D0%BE%D1%82%D0%BE%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/тоонотой_эсгий_хайрцаг.jpg') no-repeat center",
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
                <h3>Тоонотой эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">780000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
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
                      src="/static/sites/ulaanbaatarbuyannew/default/images/sum-white.png"
                    />
                  </div>
                </div>
                <h3>Тоногтой эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1450000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/9-%D1%8D%D1%80%D0%B4%D1%8D%D0%BD%D0%B8%D0%B9%D0%BD-%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/6_oAmLEe6.png') no-repeat center",
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
                <h3>9 эрдэнийн чимэглэлтэй лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1550000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%88%D0%B8%D0%BD%D1%8D-%D0%B7%D0%B0%D0%B3%D0%B2%D0%B0%D1%80%D1%8B%D0%BD-%D3%A9%D0%BB%D0%B3%D0%B8%D0%B9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/6.png') no-repeat center",
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
                <h3>Шинэ загварын өлгий</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">230000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/18.png') no-repeat center",
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
                <h3>Энгийн лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">480000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BC%D0%B0%D0%B0%D0%BD%D0%B8%D0%B9%D0%BD-%D2%AF%D1%81%D1%8D%D0%B3%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/11.png') no-repeat center",
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
                <h3>Маанийн үсэгтэй лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">680000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB-%D0%B1%D2%AF%D1%85%D0%B8%D0%B9-%D1%85%D0%B0%D0%BC%D0%B1%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/16.png') no-repeat center",
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
                <h3>Чимэглэл бүхий хамбан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">280000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%86%D1%8D%D1%86%D0%B3%D1%8D%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/цэцэг1.png') no-repeat center",
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
                <h3>Цэцгэн хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">690000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%8B%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-president/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/1_9sK70nY.png') no-repeat center",
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
                <h3>Импортын хайрцаг /President/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">2200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%8B%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%BE%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Untitled-3.png') no-repeat center",
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
                <h3>Импортын хайрцаг /камерон/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">2200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%8B%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Untitled-1_omL6nyP.png') no-repeat center",
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
                <h3>Импортын хайрцаг / ла/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">2200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%8D%D0%BA%D0%BE-%D3%A9%D0%BB%D0%B3%D0%B8%D0%B9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/эко_өлгий.png') no-repeat center",
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
                <h3>Эко өлгий</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">230000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D0%BC%D0%B8%D1%88%D0%BE%D0%BA/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/10.png') no-repeat center",
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
                <h3>Эсгий мишок</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">240000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Шинэ_загвар.png') no-repeat center",
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
                <h3>Лакан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">325000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%85%D0%B0%D0%BC%D0%B1%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Хамбан.png') no-repeat center",
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
                <h3>Хамбан хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">280000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BF%D3%A9%D0%BC%D0%B1%D3%A9%D0%B3%D3%A9%D1%80-%D1%82%D0%B0%D0%B3%D1%82%D0%B0%D0%B9-%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Торгон.png') no-repeat center",
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
                <h3>Пөмбөгөр тагтай торгон хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">210000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%82%D0%BE%D0%B2%D0%B3%D0%BE%D1%80-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/4.png') no-repeat center",
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
                <h3>Товгор хээтэй эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">360000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%80%D0%BE%D0%BC%D0%B1%D0%BE%D0%BD-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/12.png') no-repeat center",
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
                <h3>Ромбон эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">630000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BF%D3%A9%D0%BC%D0%B1%D3%A9%D0%B3%D3%A9%D1%80-%D1%82%D0%B0%D0%B3%D1%82%D0%B0%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/14.png') no-repeat center",
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
                <h3>Пөмбөгөр тагтай эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">580000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BE%D1%87%D0%B8%D1%80-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Очиртой.png') no-repeat center",
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
                <h3>Очир хээтэй хайрцаг /лакан/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">415000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BD%D0%B0%D0%BB%D1%83%D1%83-%D1%82%D0%B0%D0%B3%D1%82%D0%B0%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/1.png') no-repeat center",
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
                <h3>Налуу тагтай эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">450000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Монгол_стандарт2.png') no-repeat center",
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
                <h3>Монгол стандарт хайрцаг /лакан/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1200000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/7.png') no-repeat center",
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
                <h3>Модон хүрээтэй эсгий хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">820000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D0%B8%D0%B3-%D0%B7%D0%B0%D0%B3-%D1%80%D0%BE%D0%BC%D0%B1%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хайрцаг/Зиг_заг_ромбо.png') no-repeat center",
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
                <h3>Зиг заг ромбон хайрцаг /лакан/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">540000₮</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="fade tab-pane" id="hushuu" role="tabpanel">
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-15-%D1%83-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/18.jpg') no-repeat center",
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
                <h3>Г-15-у /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-15-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/17.jpg') no-repeat center",
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
                <h3>Б-15-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-14-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/16.jpg') no-repeat center",
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
                <h3>Б-14-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-14-%D1%85-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/15.jpg') no-repeat center",
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
                <h3>Г-14-х /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-13-%D1%83-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/1_XU55XQx.jpg') no-repeat center",
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
                <h3>Г-13-у /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-12-%D1%85-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/14.jpg') no-repeat center",
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
                <h3>Б-12-х /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-12-%D1%86-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/11.jpg') no-repeat center",
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
                <h3>Б-12-ц /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-12-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/12.jpg') no-repeat center",
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
                <h3>Б-12-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-11-%D1%83-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/21.jpg') no-repeat center",
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
                <h3>Б-11-у /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-11-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/22.jpg') no-repeat center",
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
                <h3>Б-11-с /Хүндэтгэлийн цогц үйлчилгээнд/ </h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-10-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/20.jpg') no-repeat center",
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
                <h3>Б-10-С /Хүндэтгэлийн цогц үйлчилгээнд</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-09-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/19.jpg') no-repeat center",
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
                <h3>Б-09-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-08-%D1%85-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/4_CHwK78Q.jpg') no-repeat center",
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
                <h3>Г-08-х /Хүндэтгэлийн цогц үйлчилгээнд</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-08-%D1%88-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/5_yYixXNv.jpg') no-repeat center",
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
                <h3>Г-08-ш /хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-08-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/6_NT0f4X0.jpg') no-repeat center",
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
                <h3>Б-08-С /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-07-%D1%88-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/2_1WyECkJ.jpg') no-repeat center",
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
                <h3>Г-07-ш /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-07-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/3_3Iy1TTF.jpg') no-repeat center",
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
                <h3>Б-07-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-02-%D1%86-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/13.jpg') no-repeat center",
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
                <h3>Г-02-ц /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-02-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/10.jpg') no-repeat center",
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
                <h3>Б-02-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-01-%D1%85-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/9_npqaLm6.jpg') no-repeat center",
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
                <h3>Г-01-х /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3-01-%D1%86-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/8_GZlEdO0.jpg') no-repeat center",
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
                <h3>Г-01-Ц /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1-01-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/7_nIQmQxx.jpg') no-repeat center",
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
                <h3>Б-01-С /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">1₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%88%D0%B8%D1%80%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%B7%D1%83%D0%BB%D1%8B%D0%BD-%D1%85%D0%BE%D1%80%D0%B3%D0%BE/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/45000.png') no-repeat center",
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
                <h3>Ширээтэй зулын хорго</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">45000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D0%BB%D1%8B%D0%BD-%D1%85%D0%BE%D1%80%D0%B3%D0%BE-%D0%B1%D0%BE%D1%80%D0%B6%D0%B8%D0%BD/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/23000.png') no-repeat center",
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
                <h3>Зулын хорго /боржин/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">23000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D0%BB%D1%8B%D0%BD-%D1%85%D0%BE%D1%80%D0%B3%D0%BE-%D1%82%D0%BE%D0%BC/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/50000.png') no-repeat center",
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
                <h3>Зулын хорго /том/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">50000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D0%BB%D1%8B%D0%BD-%D1%85%D0%BE%D1%80%D0%B3%D0%BE-%D0%B6%D0%B8%D0%B6%D0%B8%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/40000.png') no-repeat center",
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
                <h3>Зулын хорго /жижиг/</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">40000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B4%D1%83%D0%B3%D1%83%D0%B9-%D0%BE%D1%80%D0%BE%D0%B9%D1%82%D0%BE%D0%B9-%D1%85%D3%A9%D1%88%D3%A9%D3%A9-2/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/9.jpg') no-repeat center",
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
                <h3>Дугуй оройтой хөшөө 2</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">240000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B4%D1%83%D0%B3%D1%83%D0%B9-%D0%BE%D1%80%D0%BE%D0%B9%D1%82%D0%BE%D0%B9-%D0%BC%D3%A9%D1%80%D1%82%D1%8D%D0%B9-%D1%85%D3%A9%D1%88%D3%A9%D3%A9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/8.jpg') no-repeat center",
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
                <h3>Дугуй оройтой мөртэй хөшөө</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">240000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B3%D1%83%D1%80%D0%B2%D0%B0%D0%BB%D0%B6%D0%B8%D0%BD-%D0%BE%D1%80%D0%BE%D0%B9%D1%82%D0%BE%D0%B9-%D1%85%D3%A9%D1%88%D3%A9%D3%A9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/6.jpg') no-repeat center",
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
                <h3>Гурвалжин оройтой хөшөө </h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">240000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BD%D1%83%D0%BC%D0%B0%D0%BD-%D0%BE%D1%80%D0%BE%D0%B9%D1%82%D0%BE%D0%B9-%D0%B6%D0%B8%D0%B6%D0%B8%D0%B3-%D1%85%D3%A9%D1%88%D3%A9%D3%A9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/5.jpg') no-repeat center",
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
                <h3>Нуман оройтой жижиг хөшөө</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">120000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B4%D1%83%D0%B3%D1%83%D0%B9-%D0%BE%D1%80%D0%BE%D0%B9%D1%82%D0%BE%D0%B9-%D1%85%D3%A9%D1%88%D3%A9%D3%A9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/4.jpg') no-repeat center",
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
                <h3>Дугуй оройтой хөшөө</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">240000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B4%D0%B8%D0%B2%D0%B0%D0%B0%D0%B6%D0%B8%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BC%D0%BE%D0%B4%D1%82%D0%BE%D0%B9-%D1%85%D3%A9%D1%88%D3%A9%D3%A9/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Бүтээгдэхүүн/Хөшөө/3.jpg') no-repeat center",
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
                <h3>Диваажингийн модтой хөшөө</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">240000₮</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="fade tab-pane" id="sats" role="tabpanel">
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/FA832462-E735-4FE2-8863-CFC8CD7EBB38.png') no-repeat center",
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
                <h3>Чимэглэлтэй чандрын модон хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">150000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%85%D1%83%D0%BB%D1%81%D0%B0%D0%BD-%D1%81%D0%B0%D0%B2/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/ХАЙРЦАГ_1.png') no-repeat center",
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
                <h3>Чандрын хулсан сав</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">65000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%88%D0%B0%D0%B0%D0%B7%D0%B0%D0%BD-%D0%B1%D1%83%D0%BC%D0%B1%D0%B0/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/ШААЗАН_1.png') no-repeat center",
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
                <h3>Чандрын шаазан бумба</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">100000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%83%D1%83%D1%82/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/Торгон_уут.png') no-repeat center",
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
                <h3>Чандрын торгон уут</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">24000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%8D%D1%81%D0%B3%D0%B8%D0%B9-%D1%83%D1%83%D1%82/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/573AEE07-F19A-4D1A-8008-4BBD80D4D6DB.jpg') no-repeat center",
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
                <h3>Чандрын эсгий уут</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">115000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/8-%D1%82%D0%B0%D1%85%D0%B8%D0%BB%D1%82%D0%B0%D0%B9-%D1%88%D0%B0%D0%B0%D0%B7%D0%B0%D0%BD-%D1%81%D0%B0%D1%86/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/Шаазан_хайрцаг.png') no-repeat center",
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
                <h3>8 тахилтай шаазан сац</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">180000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BE%D1%87%D0%B8%D1%80%D1%82%D0%BE%D0%B9-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/37E5D9F5-11CC-4173-B394-040604C8AA8C.jpg') no-repeat center",
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
                <h3>Очиртой модон хайрцаг </h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">180000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%83%D1%83%D0%BB-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/Уул_хээтэй_хайрцаг.png') no-repeat center",
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
                <h3>Уул хээтэй чандрын хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">85000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D1%80%D0%BC%D0%B0%D0%BB-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-2/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/хайрцаг_3.png') no-repeat center",
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
                <h3>Зурмал хээтэй модон хайрцаг 2</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">115000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%86%D1%8D%D0%B2%D1%8D%D1%80-%D0%BC%D0%BE%D0%B4%D0%BD%D1%8B-%D1%83%D1%80%D0%B0%D0%B0%D1%80-%D1%85%D0%B8%D0%B9%D1%81%D1%8D%D0%BD-%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%81%D0%B0%D0%B2/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/5C713384-11F3-48D1-B275-C30425D05B94.jpg') no-repeat center",
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
                <h3>Цэвэр модны ураар хийсэн чандрын сав</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">300000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B7%D1%83%D1%80%D0%BC%D0%B0%D0%BB-%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/Модтой_модон_хайрцаг.png') no-repeat center",
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
                <h3>Зурмал хээтэй модон хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">115000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/Мааньтай_модон_хайрцаг.png') no-repeat center",
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
                <h3>Энгийн модон хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">85000₮</h3>
                </div>
              </a>
            </div>
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%BC%D0%B0%D0%B0%D0%BD%D0%B8%D0%B9%D0%BD-%D2%AF%D1%81%D1%8D%D0%B3%D1%82%D1%8D%D0%B9-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/Testimonial/9E8AEF71-41AA-4C6C-8789-C096332CFF2A.png') no-repeat center",
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
                <h3>Маанийн үсэгтэй модон хайрцаг</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">115000₮</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="fade tab-pane" id="tsetseg" role="tabpanel"></div>
          <div className="fade tab-pane" id="zed" role="tabpanel">
            <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
              <a href="/%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%B7%D1%8D%D0%B4/">
                <div
                  className="p_img"
                  style={{
                    background:
                      "url('/media/ulaanbaatarbuyannew/content/316800705_228194152869741_4762417102619081352_n.jpg') no-repeat center",
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
                <h3>Буяны зэд</h3>
                <div className="price_field">
                  <h5 className="price-name">Үнэ: </h5>
                  <h3 className="price">20000₮</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
