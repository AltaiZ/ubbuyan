"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FILE_URL = "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/read-file?key=";

export default function FullScreenImage() {
  const [bgImage, setBgImage] = useState("/static/images/-5376402999474829474_1800_x_1012.jpg");
  const [title, setTitle] = useState("ИТГЭЛ ДААХ ХАМТ ОЛОН");
  const [content, setContent] = useState("60 жилийн туршлагатай мэргэжлийн баг хамт олон танд буяны үйлчилгээний талаарх бүхий л зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж бэлэн байдаг.");

  useEffect(() => {
    fetch("/api/hero-image")
      .then((r) => r.json())
      .then((data) => {
        if (data.thumbnail) setBgImage(FILE_URL + data.thumbnail);
      });

    fetch("/api/hero-text")
      .then((r) => r.json())
      .then((data) => {
        if (data.title) setTitle(data.title);
        if (data.content) setContent(data.content);
      });
  }, []);

  const bgStyle = {
    background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2)), url(" + bgImage + ")",
    backgroundSize: "cover" as const,
    backgroundPosition: "center" as const,
  };

  return (
    <div id="content">
      <div className="main-body">
        <div className="home-carousel owl-carousel owl-theme owl-loaded owl-drag" id="owl-demo">
          <Swiper className="mySwiper">
            <SwiperSlide>
              <div className="owl-item active" style={{ width: "100vw" }}>
                <div className="item" style={bgStyle}>
                  <div className="sky hidden-xs">
                    <div className="cloud2" />
                  </div>
                  <div className="owlcaption container no_img">
                    <div className="row d-flex">
                      <div className="col-sm-12 col-md-6">
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                          <img className="re-image-logo" src="/static/images/blue_logo.png" />
                        </div>
                        <div className="caption-box">
                          <h2 style={{ textAlign: "center" }}>{title}</h2>
                          <div className="info">
                            <p>{content}</p>
                            <h3 style={{ textAlign: "center" }}>
                              <strong>"УЛААНБААТАР БУЯН" ХХК</strong>
                            </h3>
                            <h1 style={{ textAlign: "center" }}>
                              <strong>7016-2222</strong>
                            </h1>
                            <h3 style={{ textAlign: "center" }}>
                              БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div style={{ textAlign: "center" }} className="pt">
                          <a className="btn btn-danger go_button w-100" href="/orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal/">
                            Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал <i className="r_arrow" />
                          </a>
                          <a className="btn btn-danger go_button w-100" href="/nas-barsnii-hasalt-hiilgeh-orshuulgiin-tetgemj-awah-tuhai">
                            Нас барсаны хасалт хийлгэх, оршуулгын тэтгэмж авах <i className="r_arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}