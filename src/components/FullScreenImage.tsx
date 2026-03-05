"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function FullScreenImage() {
  
  return (
    <div id="content">
      <div className="main-body">
        <div
          className="home-carousel owl-carousel owl-theme owl-loaded owl-drag"
          id="owl-demo"
        >
          <Swiper className="mySwiper">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-2512px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "6280px",
                }}
              >
                <SwiperSlide>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "100vw",
                    }}
                  >
                    <div
                      className="item"
                      style={{
                        background:
                          "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) ), url('static/images/-5376402999474829474_1800_x_1012.jpg')",
                      }}
                    >
                      <div className="sky hidden-xs">
                        <div className="cloud2" />
                      </div>
                      <div className="owlcaption container no_img">
                        <div className="row d-flex">
                          <div className="col-sm-12 col-md-6">
                            <div
                              style={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                className="re-image-logo"
                                src="/static/images/blue_logo.png"
                              />
                            </div>
                            <div className="caption-box">
                              <h2 style={{ textAlign: "center" }}>
                                ИТГЭЛ ДААХ ХАМТ ОЛОН
                              </h2>
                              <div className="info">
                                <p>
                                  60 жилийн туршлагатай мэргэжлийн баг хамт олон
                                  танд буяны үйлчилгээний талаарх бүхий л
                                  зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй
                                  хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж
                                  бэлэн байдаг.
                                  <br />
                                </p>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>“УЛААНБААТАР БУЯН” ХХК</strong>
                                </h3>
                                <h1
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>7016-2222</strong>
                                </h1>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ
                                  <figure />
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div style={{ textAlign: "center" }} className="pt">
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal/"
                              >
                                Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал
                                <i className="r_arrow" />
                              </a>
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/nas-barsnii-hasalt-hiilgeh-orshuulgiin-tetgemj-awah-tuhai"
                              >
                                Нас барсаны хасалт хийлгэх, оршуулгын тэтгэмж
                                авах
                                <i className="r_arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "100vw",
                    }}
                  >
                    <div
                      className="item"
                      style={{
                        background:
                          "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) ), url('static/images/-5376402999474829474_1800_x_1012.jpg')",
                      }}
                    >
                      <div className="sky hidden-xs">
                        <div className="cloud2" />
                      </div>
                      <div className="owlcaption container no_img">
                        <div className="row d-flex">
                          <div className="col-sm-12 col-md-6">
                            <div
                              style={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                className="re-image-logo"
                                src="/static/images/blue_logo.png"
                              />
                            </div>
                            <div className="caption-box">
                              <h2 style={{ textAlign: "center" }}>
                                ИТГЭЛ ДААХ ХАМТ ОЛОН
                              </h2>
                              <div className="info">
                                <p>
                                  60 жилийн туршлагатай мэргэжлийн баг хамт олон
                                  танд буяны үйлчилгээний талаарх бүхий л
                                  зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй
                                  хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж
                                  бэлэн байдаг.
                                  <br />
                                </p>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>“УЛААНБААТАР БУЯН” ХХК</strong>
                                </h3>
                                <h1
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>7016-2222</strong>
                                </h1>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ
                                  <figure />
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div style={{ textAlign: "center" }} className="pt">
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal/"
                              >
                                Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал
                                <i className="r_arrow" />
                              </a>
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/nas-barsnii-hasalt-hiilgeh-orshuulgiin-tetgemj-awah-tuhai"
                              >
                                Нас барсаны хасалт хийлгэх, оршуулгын тэтгэмж
                                авах
                                <i className="r_arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="owl-item active"
                    style={{
                      width: "100vw",
                    }}
                  >
                    <div
                      className="item"
                      style={{
                        background:
                          "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) ), url('static/images/-5376402999474829474_1800_x_1012.jpg')",
                      }}
                    >
                      <div className="sky hidden-xs">
                        <div className="cloud2" />
                      </div>
                      <div className="owlcaption container no_img">
                        <div className="row d-flex">
                          <div className="col-sm-12 col-md-6">
                            <div
                              style={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                className="re-image-logo"
                                src="/static/images/blue_logo.png"
                              />
                            </div>
                            <div className="caption-box">
                              <h2 style={{ textAlign: "center" }}>
                                ИТГЭЛ ДААХ ХАМТ ОЛОН
                              </h2>
                              <div className="info">
                                <p>
                                  60 жилийн туршлагатай мэргэжлийн баг хамт олон
                                  танд буяны үйлчилгээний талаарх бүхий л
                                  зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй
                                  хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж
                                  бэлэн байдаг.
                                  <br />
                                </p>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>“УЛААНБААТАР БУЯН” ХХК</strong>
                                </h3>
                                <h1
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>7016-2222</strong>
                                </h1>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ
                                  <figure />
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div style={{ textAlign: "center" }} className="pt">
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal/"
                              >
                                Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал
                                <i className="r_arrow" />
                              </a>
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/nas-barsnii-hasalt-hiilgeh-orshuulgiin-tetgemj-awah-tuhai"
                              >
                                Нас барсаны хасалт хийлгэх, оршуулгын тэтгэмж
                                авах
                                <i className="r_arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "100vw",
                    }}
                  >
                    <div
                      className="item"
                      style={{
                        background:
                          "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) ), url('static/images/-5376402999474829474_1800_x_1012.jpg')",
                      }}
                    >
                      <div className="sky hidden-xs">
                        <div className="cloud2" />
                      </div>
                      <div className="owlcaption container no_img">
                        <div className="row d-flex">
                          <div className="col-sm-12 col-md-6">
                            <div
                              style={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                className="re-image-logo"
                                src="/static/images/blue_logo.png"
                              />
                            </div>
                            <div className="caption-box">
                              <h2 style={{ textAlign: "center" }}>
                                ИТГЭЛ ДААХ ХАМТ ОЛОН
                              </h2>
                              <div className="info">
                                <p>
                                  60 жилийн туршлагатай мэргэжлийн баг хамт олон
                                  танд буяны үйлчилгээний талаарх бүхий л
                                  зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй
                                  хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж
                                  бэлэн байдаг.
                                  <br />
                                </p>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>“УЛААНБААТАР БУЯН” ХХК</strong>
                                </h3>
                                <h1
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>7016-2222</strong>
                                </h1>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ
                                  <figure />
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div style={{ textAlign: "center" }} className="pt">
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal/"
                              >
                                Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал
                                <i className="r_arrow" />
                              </a>
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/nas-barsnii-hasalt-hiilgeh-orshuulgiin-tetgemj-awah-tuhai"
                              >
                                Нас барсаны хасалт хийлгэх, оршуулгын тэтгэмж
                                авах
                                <i className="r_arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="owl-item cloned"
                    style={{
                      width: "100vw",
                    }}
                  >
                    <div
                      className="item"
                      style={{
                        background:
                          "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) ), url('static/images/-5376402999474829474_1800_x_1012.jpg')",
                      }}
                    >
                      <div className="sky hidden-xs">
                        <div className="cloud2" />
                      </div>
                      <div className="owlcaption container no_img">
                        <div className="row d-flex">
                          <div className="col-sm-12 col-md-6">
                            <div
                              style={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                className="re-image-logo"
                                src="/static/images/blue_logo.png"
                              />
                            </div>
                            <div className="caption-box">
                              <h2 style={{ textAlign: "center" }}>
                                ИТГЭЛ ДААХ ХАМТ ОЛОН
                              </h2>
                              <div className="info">
                                <p>
                                  60 жилийн туршлагатай мэргэжлийн баг хамт олон
                                  танд буяны үйлчилгээний талаарх бүхий л
                                  зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй
                                  хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж
                                  бэлэн байдаг.
                                  <br />
                                </p>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>“УЛААНБААТАР БУЯН” ХХК</strong>
                                </h3>
                                <h1
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>7016-2222</strong>
                                </h1>
                                <h3
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ
                                  <figure />
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div style={{ textAlign: "center" }} className="pt">
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal/"
                              >
                                Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал
                                <i className="r_arrow" />
                              </a>
                              <a
                                className="btn btn-danger go_button w-100"
                                href="/nas-barsnii-hasalt-hiilgeh-orshuulgiin-tetgemj-awah-tuhai"
                              >
                                Нас барсаны хасалт хийлгэх, оршуулгын тэтгэмж
                                авах
                                <i className="r_arrow" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
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
          <div className="owl-dots disabled">
            <div className="owl-dot active">
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
