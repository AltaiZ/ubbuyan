"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CommentContainer() {
  const isExtraLarge = useMediaQuery("(min-width:100%)");
  const isLarge = useMediaQuery("(min-width:1024px)");
  const isMedium = useMediaQuery("(min-width:760px)");
  const isSmall = useMediaQuery("(min-width:600px)");

  return (
    <section className="testi container">
      <div
        className="bg_testi"
        style={{
          background:
            "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('/static/images/Blue_sky_wallpaper_14366.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <h3>Сэтгэгдэл</h3>
        <p className="hidden-xs">Үйлчлүүлэгчдийн сэтгэгдэл</p>
        <div className="row">
          <div
            className="owl-carousel testi-carousel owl-theme owl-loaded owl-drag"
            id="testi-carousel"
          >
            <Swiper
              pagination={true}
              slidesPerView={isExtraLarge ? 2 : isLarge ? 2 : isSmall ? 1 : 1}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="owl-item" style={{ marginRight: "10px", width: "480px" }}>
                  <div className="item">
                    <img className="quote hidden-xs" src="/static/images/03.png" />
                    <div className="owlcaption custom-style">
                      <div className="col-md-3 yes_img">
                        <img src="/static/images/18195145_1508287412576597_3255052871209800463_n.jpg" />
                        <h4>Н. Түвшинбаяр</h4>
                      </div>
                      <div className="col-md-9 no_img">
                        <p>"Улаанбаатар буян" ХХК-ийн хамт олондоо хийж буй ажилдаа сэтгэл зүрхээ зориулан ажиллаж байдагт гүнээ талархал илэрхийлье!</p>
                        <p>Сайн үйлс дэлгэрэх болтугай!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="owl-item" style={{ marginRight: "10px", width: "480px" }}>
                  <div className="item">
                    <img className="quote hidden-xs" src="/static/images/03.png" />
                    <div className="owlcaption custom-style">
                      <div className="col-md-3 yes_img">
                        <img src="/static/images/20622129_1428348160605529_7837121744385571155_n.jpg" />
                        <h4>Зоригтбаатар Баярцэцэг</h4>
                      </div>
                      <div className="col-md-9 no_img">
                        <p>"УЛААНБААТАР БУЯН" КОМПАНИ ХАМТ ОЛОНДОО ЭНЭ ХОРВООГООС ОДСОН БЯЦХАН <span className="text_exposed_show">ОХИНЫХОО ӨМНӨӨС ТАЛАРХАЖ БАЙГААГАА ИЛЭРХИЙЛЭЕ. ТА БҮХНИЙ БУЯН ӨЛЗИЙ ТАНЬ ДЭЛГЭРЧ ЯВАГ......."ЭВЭЭЛТЭЙ СЭТГЭЛ" ГРУПП. МОНГОЛЫН ОЛОН МЯНГАН ЭХЧҮҮДЭЭС.......</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="owl-item" style={{ marginRight: "10px", width: "480px" }}>
                  <div className="item">
                    <img className="quote hidden-xs" src="/static/images/03.png" />
                    <div className="owlcaption custom-style">
                      <div className="col-md-3 yes_img">
                        <img src="/static/images/17203181_1441115199254183_4508586150976407966_n.jpg" />
                        <h4>Болормаа Цэвэлжав</h4>
                      </div>
                      <div className="col-md-9 no_img">
                        <p>Талахал. Улаанбаатар Буян компанийн зүгээс өнгөрөгч 1-р сард талий<span className="text_exposed_show">гч болсон Намуун охины (ээждээ орхигдсон) буяны ажлыг бүрэн хариуцаж хийж өгсөнд Фэйсбүүк группын олон мянган ээжүүдийн өмнөөс тус компанийн хамт олонд гүнээ талархаж байна. Танай компани ажилдаа эзэн болсон, хариуцлагатай, нягт нямбай, тусч ажилсаг хамт олонтой, соёлч боловсон үйлчилгээтэй албан байгууллага байна. Танай хамт олонд ирж буй Гол Бичин жилдээ ажлын өндөр амжилт гаргаж юу санасан есөн хүсэл тань биелэхийг ерөөе!</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="owl-item" style={{ marginRight: "10px", width: "480px" }}>
                  <div className="item">
                    <img className="quote hidden-xs" src="/static/images/03.png" />
                    <div className="owlcaption custom-style">
                      <div className="col-md-3 yes_img">
                        <img src="/static/images/55861004_271556510390099_5831999438263943168_n.jpg" />
                        <h4>Маргад-Эрдэнэ миний эрдэнэ</h4>
                      </div>
                      <div className="col-md-9 no_img">
                        <p>Талархал.<br />"Улаанбаатар буян" ХХК-ны хамт олондоо энэ хорвоогоос одсон бидний бурхан болооч хүү Э.Маргад-Эрдэнэний буяны ажлыг 100 хувь үнэ төлбөргүй бүрэн хариуцан хийж өгч буйд талийгчийн гэр бүл, ах дүү, төрөл төрөгсөд, найз нөхөд, хүүд минь сэтгэл гаргаж тусалсан мянган мянган элэг нэгт ахан дүүсийнхээ нэрийн өмнөөс гүнээ талархаж байна.<br />Сайн үйлс бүхэн дэлгэрэх болтугай.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="owl-item" style={{ marginRight: "10px", width: "480px" }}>
                  <div className="item">
                    <img className="quote hidden-xs" src="/static/images/03.png" />
                    <div className="owlcaption custom-style">
                      <div className="col-md-3 yes_img">
                        <img src="/static/images/70935824_1318683751642229_3589780090298302464_n.jpg" />
                        <h4>Бага Хуяг</h4>
                      </div>
                      <div className="col-md-9 no_img">
                        <p>Танай хамт олонд машид талархаж байна. Үргэлж энэ буянтай үйл бүхнийг санаж явах болно. Та бүхэнд сайн сайхан бүхнийг хүсье. Тэнгэр мэт аавын минь салах ёсыг хийж гүйцэтгэсэн билээ та бүхэн минь.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="owl-item" style={{ marginRight: "10px", width: "480px" }}>
                  <div className="item">
                    <img className="quote hidden-xs" src="/static/images/03.png" />
                    <div className="owlcaption custom-style">
                      <div className="col-md-3 yes_img">
                        <img src="/static/images/29432870_1757986270927928_6351355918238448301_n.jpg" />
                        <h4>Tumee Tumku</h4>
                      </div>
                      <div className="col-md-9 no_img">
                        <p>Үнэхээр сайхан үйлчилгээ сайтай хамт олон санагдсан. Цаашдын ажилд нь амжилт хүсэе.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}