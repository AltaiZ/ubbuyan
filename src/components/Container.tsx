import React from "react";

export default function Container() {
  return (
    <div>
      {/* <section className="container-fluid mobilehservice visible-xs">
        <div className="row">
          <h4>Үйлчилгээ</h4>
          <div
            className="owl-carousel owl-theme owl-loaded owl-drag"
            id="service-slider"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "1750px",
                }}
              >
                <div
                  className="owl-item active"
                  style={{
                    marginRight: "10px",
                    width: "320px",
                  }}
                >
                  <div className="item">
                    <div className="services">
                      <a href="/dald-orshih-uilchilgee/">
                        <div
                          className="s_item col-md-4 np"
                          style={{
                            background:
                              "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/dald3.jpg') no-repeat center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h3>Далд оршоох үйлчилгээ</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    marginRight: "10px",
                    width: "320px",
                  }}
                >
                  <div className="item">
                    <div className="services">
                      <a href="/chandarlah-uilchilgee/">
                        <div
                          className="s_item col-md-4 np"
                          style={{
                            background:
                              "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/Funeral-urn-Flowers.jpg') no-repeat center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h3>Чандарлах үйлчилгээ</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    marginRight: "10px",
                    width: "320px",
                  }}
                >
                  <div className="item">
                    <div className="services">
                      <a href="/mashinii-uilchilgee/">
                        <div
                          className="s_item col-md-4 np"
                          style={{
                            background:
                              "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/2.jpg') no-repeat center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h3>Mашины үйлчилгээ</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    marginRight: "10px",
                    width: "320px",
                  }}
                >
                  <div className="item">
                    <div className="services">
                      <a href="/ergeltiin-uilchilgee/">
                        <div
                          className="s_item col-md-4 np"
                          style={{
                            background:
                              "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/12.jpg') no-repeat center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h3>Эргэлтийн үйлчилгээ</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    marginRight: "10px",
                    width: "320px",
                  }}
                >
                  <div className="item">
                    <div className="services">
                      <a href="/tuw-bairnii-uichilgee/">
                        <div
                          className="s_item col-md-4 np"
                          style={{
                            background:
                              "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/-2468521239344344000_1800_x_1012.jpg') no-repeat center",
                            backgroundSize: "cover",
                          }}
                        >
                          <h3>Төв байрны үйлчилгээ</h3>
                        </div>
                      </a>
                    </div>
                  </div>
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
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid hservice hidden-xs">
        <div className="row">
          <div className="arrow-up" />
          <div className="servicetitle">
            <h2>Үйлчилгээ</h2>
            <p>Бид та бүхэнд дараах үйлчилгээнүүдийг санал болгож байна.</p>
          </div>
          <div className="services">
            <a href="/dald-orshih-uilchilgee/">
              <div
                className="s_item col-md-4 np"
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/dald3.jpg') no-repeat center",
                  backgroundSize: "cover",
                }}
              >
                <h3>
                  Далд оршоох үйлчилгээ
                  <i className="c_arr">
                    <i className="r_arrow" />
                  </i>
                </h3>
              </div>
            </a>
          </div>
          <div className="services">
            <a href="/chandarlah-uilchilgee/">
              <div
                className="s_item col-md-4 np"
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/Funeral-urn-Flowers.jpg') no-repeat center",
                  backgroundSize: "cover",
                }}
              >
                <h3>
                  Чандарлах үйлчилгээ
                  <i className="c_arr">
                    <i className="r_arrow" />
                  </i>
                </h3>
              </div>
            </a>
          </div>
          <div className="services">
            <a href="/mashinii-uilchilgee/">
              <div
                className="s_item col-md-4 np"
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/2.jpg') no-repeat center",
                  backgroundSize: "cover",
                }}
              >
                <h3>
                  Mашины үйлчилгээ
                  <i className="c_arr">
                    <i className="r_arrow" />
                  </i>
                </h3>
              </div>
            </a>
          </div>
          <div className="services">
            <a href="/ergeltiin-uilchilgee/">
              <div
                className="s_item col-md-4 np"
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/12.jpg') no-repeat center",
                  backgroundSize: "cover",
                }}
              >
                <h3>
                  Эргэлтийн үйлчилгээ
                  <i className="c_arr">
                    <i className="r_arrow" />
                  </i>
                </h3>
              </div>
            </a>
          </div>
          <div className="services">
            <a href="/tuw-bairnii-uichilgee/">
              <div
                className="s_item col-md-4 np"
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/-2468521239344344000_1800_x_1012.jpg') no-repeat center",
                  backgroundSize: "cover",
                }}
              >
                <h3>
                  Төв байрны үйлчилгээ
                  <i className="c_arr">
                    <i className="r_arrow" />
                  </i>
                </h3>
              </div>
            </a>
          </div>
          <div className="services">
            <a href="http://sambalkhundev.mn/">
              <div
                className="s_item col-md-4 np"
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/static/images/sambal.jpg') no-repeat center",
                  backgroundSize: "cover",
                }}
              >
                <h3>
                  Хүндэтгэлийн цэцэрлэгт хүрээлэн төслийн танилцуулга
                  <i className="r_arrow" />
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
