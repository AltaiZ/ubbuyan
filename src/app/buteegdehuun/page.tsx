import React from "react";

export default function page() {
  return (
    <div id="content">
      <section
        className="row product_bg"
        style={{
          background:
            "linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6) ), url('/static/images/1_Sbdgyaw.jpg') no-repeat center",
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
                <a href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D0%BE%D0%BD%D1%86%D0%BB%D0%BE%D1%85/">
                  <img src="/static/images/tab1.png" />
                  Онцлох
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <img src="/static/images/tab2.png" />
                  Хайрцаг
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%85%D3%A9%D1%88%D3%A9%D3%A9/">
                  <img src="/static/images/tab3.png" />
                  Хөшөө
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%81%D0%B0%D1%86-%D1%81%D1%83%D0%B2%D0%B0%D1%80%D0%B3%D0%B0/">
                  <img src="/static/images/tab4.png" />
                  Сац суварга
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D0%B3/">
                  <img src="/static/images/tab5.png" />
                  Хүндэтгэлийн цэцэг
                </a>
                <div className="arrow-down" />
              </li>
              <li className="col-md-2 ">
                <a href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D0%B7%D1%8D%D0%B4/">
                  Зэд
                </a>
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
                        <a
                          className="product-name"
                          href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D0%BE%D0%BD%D1%86%D0%BB%D0%BE%D1%85/"
                        >
                          <img src="/static/images/tab1.png" />
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
                          href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/"
                        >
                          <img src="/static/tab2.png" />
                          <span>Хайрцаг</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a
                          className="product-name"
                          href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%85%D3%A9%D1%88%D3%A9%D3%A9/"
                        >
                          <img src="/static/images/tab3.png" />
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
                          href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%81%D0%B0%D1%86-%D1%81%D1%83%D0%B2%D0%B0%D1%80%D0%B3%D0%B0/"
                        >
                          <img src="/static/images/tab4.png" />
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
                          href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D0%B3/"
                        >
                          <img src="/static/images/tab5.png" />
                          <span>Хүндэтгэлийн цэцэг</span>
                        </a>
                      </div>
                    </li>
                  </div>
                  <div className="owl-item">
                    <li>
                      <div className="item">
                        <a
                          className="product-name"
                          href="/%D0%B1%D2%AF%D1%82%D1%8D%D1%8D%D0%B3%D0%B4%D1%8D%D1%85%D2%AF%D2%AF%D0%BD%D2%AF%D2%AF%D0%B4/%D0%B7%D1%8D%D0%B4/"
                        >
                          <img src="/static/sites/ulaanbaatarbuyannew/default/images/icons/tab6.png" />
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
          <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
            <a href="/%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
              <div
                className="p_img"
                style={{
                  background:
                    "url('/static/images/-1780990708727174373_300_x_284.png') no-repeat center",
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
                    "url('/static/images/6223098084883678757_300_x_400.png') no-repeat center",
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
            <a href="/%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BC%D0%B8%D1%88%D0%BE%D0%BA/">
              <div
                className="p_img"
                style={{
                  background:
                    "url('/static/images/-4606271830316144378_300_x_200.jpg') no-repeat center",
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
            <a href="/%D0%B3-15-%D1%83-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
              <div
                className="p_img"
                style={{
                  background:
                    "url('/static/images/-4606271830311144354_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144367_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144368_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144365_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-624495185098505618_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144366_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144361_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144364_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830314144370_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830314144371_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830314144369_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/-4606271830311144353_300_x_300.jpg') no-repeat center",
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
                    "url('/static/images/6248084453872226134_300_x_300.jpg') no-repeat center",
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
          <nav>
            <ul className="pagination">
              <li className="disabled">
                <a aria-label="Previous" href="#">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <span>1</span>
                </a>
              </li>
              <li>
                <a href="?page=2&_=1717656742123">2</a>
              </li>
              <li>
                <a href="?page=3&_=1717656742123">3</a>
              </li>
              <li>
                <a href="?page=4&_=1717656742123">4</a>
              </li>
              <li>
                <a href="?page=5&_=1717656742123">5</a>
              </li>
              <li>
                <a href="?page=6&_=1717656742123">6</a>
              </li>
              <li>
                <a aria-label="Next" href="?page=2&_=1717656742123">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}
