"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
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
            "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Blue_sky_wallpaper_14366.jpg') no-repeat center",
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
              modules={[Pagination]}
              className="mySwiper"
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1470px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                    width: "5880px",
                  }}
                >
                  <SwiperSlide>
                    <div
                      className="owl-item cloned"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/18195145_1508287412576597_3255052871209800463_n.jpg" />
                            <h4>Н. Түвшинбаяр</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              "Улаанбаатар буян" ХХК-ийн хамт олондоо хийж буй
                              ажилдаа сэтгэл зүрхээ зориулан ажиллаж байдагт
                              гүнээ талархал илэрхийлье!
                            </p>
                            <p>Сайн үйлс дэлгэрэх болтугай!</p>
                            <p>
                              <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/18195145_1508287412576597_3255052871209800463_n.jpg" />
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item cloned"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/20622129_1428348160605529_7837121744385571155_n.jpg" />
                            <h4>Зоригтбаатар Баярцэцэг</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              "УЛААНБААТАР БУЯН" КОМПАНИ ХАМТ ОЛОНДОО ЭНЭ
                              ХОРВООГООС ОДСОН БЯЦХАН{" "}
                              <span className="text_exposed_show">
                                ОХИНЫХОО ӨМНӨӨС ТАЛАРХАЖ БАЙГААГАА ИЛЭРХИЙЛЭЕ.
                                ТА БҮХНИЙ БУЯН ӨЛЗИЙ ТАНЬ ДЭЛГЭРЧ
                                ЯВАГ......."ЭВЭЭЛТЭЙ СЭТГЭЛ" ГРУПП. МОНГОЛЫН
                                ОЛОН МЯНГАН ЭХЧҮҮДЭЭС.......
                              </span>
                              <br />
                            </p>
                            <p>
                              <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/20622129_1428348160605529_7837121744385571155_n.jpg" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item cloned"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/17203181_1441115199254183_4508586150976407966_n.jpg" />
                            <h4>Болормаа Цэвэлжав</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Талахал. Улаанбаатар Буян компанийн зүгээс
                              өнгөрөгч 1-р сард талий
                              <span className="text_exposed_show">
                                гч болсон Намуун охины (ээждээ орхигдсон) буяны
                                ажлыг бүрэн хариуцаж хийж өгсөнд Фэйсбүүк
                                группын олон мянган ээжүүдийн өмнөөс тус
                                компанийн хамт олонд гүнээ талархаж байна. Танай
                                компани ажилдаа эзэн болсон, хариуцлагатай, нягт
                                нямбай, тусч ажилсаг хамт олонтой, соёлч
                                боловсон үйлчилгээтэй албан байгууллага байна.
                                Танай хамт олонд ирж буй Гол Бичин жилдээ ажлын
                                өндөр амжилт гаргаж юу санасан есөн хүсэл тань
                                биелэхийг ерөөе!
                              </span>
                              <span className="redactor-invisible-space" />
                            </p>
                            <p>
                              <span className="redactor-invisible-space" />
                              <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/17203181_1441115199254183_4508586150976407966_n.jpg" />
                              <span className="redactor-invisible-space" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item active"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/55861004_271556510390099_5831999438263943168_n.jpg" />
                            <h4>Маргад-Эрдэнэ миний эрдэнэ</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Талархал.
                              <br />
                              "Улаанбаатар буян" ХХК-ны хамт олондоо энэ
                              хорвоогоос одсон бидний бурхан болооч хүү
                              Э.Маргад-Эрдэнэний буяны ажлыг 100 хувь үнэ
                              төлбөргүй бүрэн хариуцан хийж өгч буйд талийгчийн
                              гэр бүл, ах дүү, төрөл төрөгсөд, найз нөхөд , хүүд
                              минь сэтгэл гаргаж тусалсан мянган мянган элэг
                              нэгт ахан дүүсийнхээ нэрийн өмнөөс гүнээ талархаж
                              байна.
                              <br />
                              Танай компаний удирдлага болон баг хамт олны
                              цаашдын ажил үйлст нь өндрөөс өндөр амжилт
                              бүтээлийг хүсэн ерөөе.
                              <br />
                              Сайн үйлс бүхэн дэлгэрэх болтугай.
                            </p>
                            <figure>
                              <img
                                data-image="1nljk8qis8e9"
                                src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/55861004_271556510390099_5831999438263943168_n.jpg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item active"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/70935824_1318683751642229_3589780090298302464_n.jpg" />
                            <h4>Бага Хуяг</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Танай хамт олонд машид талархаж байна.Үргэлж энэ
                              буянтай үйл бүхнийг санаж явах болно.Та бүхэнд
                              сайн сайхан бүхнийг хүсье.Тэнгэр мэт аавын минь
                              салах ёсыг хийж гүйцэтгэсэн билээ та бүхэн минь.
                            </p>
                            <figure>
                              <img
                                data-image="3sjy79pow3bv"
                                src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/70935824_1318683751642229_3589780090298302464_n.jpg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/29432870_1757986270927928_6351355918238448301_n.jpg" />
                            <h4>Tumee Tumku</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Үнэхээр сайхан үйлчилгээ сайтай хамт олон
                              санагдсан. Цаашдын ажилд нь амжилт хүсэе.
                            </p>
                            <figure>
                              <img
                                data-image="gv7c18uzwtth"
                                src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/29432870_1757986270927928_6351355918238448301_n.jpg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/18195145_1508287412576597_3255052871209800463_n.jpg" />
                            <h4>Н. Түвшинбаяр</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              "Улаанбаатар буян" ХХК-ийн хамт олондоо хийж буй
                              ажилдаа сэтгэл зүрхээ зориулан ажиллаж байдагт
                              гүнээ талархал илэрхийлье!
                            </p>
                            <p>Сайн үйлс дэлгэрэх болтугай!</p>
                            <p>
                              <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/18195145_1508287412576597_3255052871209800463_n.jpg" />
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/20622129_1428348160605529_7837121744385571155_n.jpg" />
                            <h4>Зоригтбаатар Баярцэцэг</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              "УЛААНБААТАР БУЯН" КОМПАНИ ХАМТ ОЛОНДОО ЭНЭ
                              ХОРВООГООС ОДСОН БЯЦХАН{" "}
                              <span className="text_exposed_show">
                                ОХИНЫХОО ӨМНӨӨС ТАЛАРХАЖ БАЙГААГАА ИЛЭРХИЙЛЭЕ.
                                ТА БҮХНИЙ БУЯН ӨЛЗИЙ ТАНЬ ДЭЛГЭРЧ
                                ЯВАГ......."ЭВЭЭЛТЭЙ СЭТГЭЛ" ГРУПП. МОНГОЛЫН
                                ОЛОН МЯНГАН ЭХЧҮҮДЭЭС.......
                              </span>
                              <br />
                            </p>
                            <p>
                              <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/20622129_1428348160605529_7837121744385571155_n.jpg" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/17203181_1441115199254183_4508586150976407966_n.jpg" />
                            <h4>Болормаа Цэвэлжав</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Талахал. Улаанбаатар Буян компанийн зүгээс
                              өнгөрөгч 1-р сард талий
                              <span className="text_exposed_show">
                                гч болсон Намуун охины (ээждээ орхигдсон) буяны
                                ажлыг бүрэн хариуцаж хийж өгсөнд Фэйсбүүк
                                группын олон мянган ээжүүдийн өмнөөс тус
                                компанийн хамт олонд гүнээ талархаж байна. Танай
                                компани ажилдаа эзэн болсон, хариуцлагатай, нягт
                                нямбай, тусч ажилсаг хамт олонтой, соёлч
                                боловсон үйлчилгээтэй албан байгууллага байна.
                                Танай хамт олонд ирж буй Гол Бичин жилдээ ажлын
                                өндөр амжилт гаргаж юу санасан есөн хүсэл тань
                                биелэхийг ерөөе!
                              </span>
                              <span className="redactor-invisible-space" />
                            </p>
                            <p>
                              <span className="redactor-invisible-space" />
                              <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/Testimonial/17203181_1441115199254183_4508586150976407966_n.jpg" />
                              <span className="redactor-invisible-space" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item cloned"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/55861004_271556510390099_5831999438263943168_n.jpg" />
                            <h4>Маргад-Эрдэнэ миний эрдэнэ</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Талархал.
                              <br />
                              "Улаанбаатар буян" ХХК-ны хамт олондоо энэ
                              хорвоогоос одсон бидний бурхан болооч хүү
                              Э.Маргад-Эрдэнэний буяны ажлыг 100 хувь үнэ
                              төлбөргүй бүрэн хариуцан хийж өгч буйд талийгчийн
                              гэр бүл, ах дүү, төрөл төрөгсөд, найз нөхөд , хүүд
                              минь сэтгэл гаргаж тусалсан мянган мянган элэг
                              нэгт ахан дүүсийнхээ нэрийн өмнөөс гүнээ талархаж
                              байна.
                              <br />
                              Танай компаний удирдлага болон баг хамт олны
                              цаашдын ажил үйлст нь өндрөөс өндөр амжилт
                              бүтээлийг хүсэн ерөөе.
                              <br />
                              Сайн үйлс бүхэн дэлгэрэх болтугай.
                            </p>
                            <figure>
                              <img
                                data-image="1nljk8qis8e9"
                                src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/55861004_271556510390099_5831999438263943168_n.jpg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item cloned"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/70935824_1318683751642229_3589780090298302464_n.jpg" />
                            <h4>Бага Хуяг</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Танай хамт олонд машид талархаж байна.Үргэлж энэ
                              буянтай үйл бүхнийг санаж явах болно.Та бүхэнд
                              сайн сайхан бүхнийг хүсье.Тэнгэр мэт аавын минь
                              салах ёсыг хийж гүйцэтгэсэн билээ та бүхэн минь.
                            </p>
                            <figure>
                              <img
                                data-image="3sjy79pow3bv"
                                src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/70935824_1318683751642229_3589780090298302464_n.jpg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="owl-item cloned"
                      style={{
                        marginRight: "10px",
                        width: "480px",
                      }}
                    >
                      <div className="item">
                        <img
                          className="quote hidden-xs"
                          src="/static/images/03.png"
                        />
                        <div className="owlcaption custom-style">
                          <div className="col-md-3 yes_img">
                            <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/29432870_1757986270927928_6351355918238448301_n.jpg" />
                            <h4>Tumee Tumku</h4>
                            <i />
                          </div>
                          <div className="col-md-9 no_img">
                            <p>
                              Үнэхээр сайхан үйлчилгээ сайтай хамт олон
                              санагдсан. Цаашдын ажилд нь амжилт хүсэе.
                            </p>
                            <figure>
                              <img
                                data-image="gv7c18uzwtth"
                                src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/29432870_1757986270927928_6351355918238448301_n.jpg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
            <div className="owl-nav">
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
          </div>
        </div>
      </div>
    </section>
  );
}
