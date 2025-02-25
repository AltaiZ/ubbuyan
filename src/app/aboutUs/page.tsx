"use client";

import React from "react";
import { useState } from "react";

export default function page() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <div>
        <img
          alt="background_about"
          src="/static/images/-2468521239344344000_1800_x_1012.jpg"
        />
      </div>
      <section className="hidden-xs about">
        <div className="np np1">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 aboutvideo">
              <iframe
                allowFullScreen
                frameBorder="0"
                height="315"
                src="https://www.youtube.com/embed/ntpEog0lzww"
                width="100%"
              ></iframe>
            </div>
            <div className="col-md-5 col-md-offset-1 abouttext">
              <h5 className="sub_title">Бидний тухай</h5>
              {show === false && (
                <div
                  className="aboutShow"
                  style={{
                    height: "136px",
                    overflow: "hidden",
                  }}
                >
                  <p>60 жилийн түүхэн замнал</p>
                  <p>
                    Улаанбаатар хотын хэмжээнд нас барагсдын шарилыг оршуулах
                    ажлыг 1950-иад оны  дунд үе хүртэл  ил задгайгаар буюу булж
                    оршуулж ирсэн бөгөөд зарим цөөн тооны  шарилыг хүсэлтийн
                    дагуу авсалж газарт ухан оршуулж иржээ. Ингэж ил задгай
                    оршуулж байсан нь хотын хүн амын сэтгэл санаанд таагүй нөлөө
                    үзүүлж улмаар элдэв араатан амьтан, нохой шувуу тэжээж
                    улмаар эргээд элдэв өвчин тахал тараах гол нөхцлүүдийн нэг
                    болж байжээ.
                  </p>
                  <p>
                    Иймд БНМАУ-ын Сайд нарын зөвлөл МАХН-ын төв хорооны
                    Тэргүүлэгчдийн хорооны 1955 оны 07 дугаар сарын 28-ны өдрийн
                    339/198 дугаар тогтоолоор “Хүүр оршуулах газар” нэртэйгээр
                    анх байгуулагджээ.
                  </p>
                  <p>
                    1990-ээд он хүртэл улсаас санхүүжигдэж төсөв төлөвлөгөөнд
                    захирагдаж байнгын алдагдалтай ажиллаж байсан тус
                    байгууллага нь 1992 оноос Улаанбаатар хотын “Иргэдэд үйлчлэх
                    Буян” компани нэртэйгээр зохион байгуулагдан өөрөө өөрийгөө 
                    санхүүжүүлэн аж ахуйн тооцоон дээр үйл ажиллагаагаа улам
                    өргөтгөсөөр захиргаа, дүн буртгэл, мужааны 2 цех, чулуун
                    хэсэг, оршуулгын гурван цэг, автын хэсэг, чимэглэл, худалдаа
                    үйлчилгээний  гэсэн 34 хүний орон тоотой үйл ажиллагаагаа
                    явуулж байжээ.
                  </p>
                  <p>
                    Ийнхүү 2004 оны 04 сарын 21-ний өдрийн Нийслэлийн Засаг
                    Даргын 180 тоот захирамж, Нийслэлийн Иргэдийн Төлөөлөгчдийн
                    Хурлын 48 тоот тогтоолоор “Иргэдэд үйлчлэх Буян” компани
                    татан буугдаж, 2004 оны 06 дугаар сард Нийслэлийн өмчийн
                    оролцоотой “Улаанбаатар буян” ХХК нэртэйгээр  100% Монгол
                    хүний хөрөнгө оруулалттайгаар үүсгэн байгуулагдан  хүн амын
                    эрүүл аж төрөх орчин, байгаль экологи, газар эдэлбэрт
                    тулгарч буй хүндрэлтэй асуудлуудыг зүй зохистой шийдвэрлэх
                    хамгийн оновчтой хэлбэр болох шарил чандарлах үйлчилгээг
                    дэлхийн стандартад нийцүүлж, орчин үеийн техник технологитой
                    хослуулан 2004 оноос эхлэн үзүүлж ирсэн билээ.
                  </p>
                  <p>
                    Хаалттай нийгмийн үед шашин шүтэх эрх чөлөө, оршуулгын төрөл
                    хэлбэрийн сонголт хязгаарлагдмал, төр засгаас нарийн
                    журамлаж байснаас улбаалан нийгмийн сэтгэхүйд зөвхөн газар
                    шороонд оршуулдаг гэсэн үзэл санаа тогтжээ. “Улаанбаатар
                    буян” ХХК нь шашны зан үйлийг сэргээж, шарил чандарлах
                    эртний уламжлалыг сэргээсэн нь сая гаруй хүн амтай том хотын
                    нийгмийн захиалга байлаа.{" "}
                  </p>
                  <p />
                </div>
              )}
              {show === true && (
                <div className="aboutShow">
                  <p>60 жилийн түүхэн замнал</p>
                  <p>
                    Улаанбаатар хотын хэмжээнд нас барагсдын шарилыг оршуулах
                    ажлыг 1950-иад оны  дунд үе хүртэл  ил задгайгаар буюу булж
                    оршуулж ирсэн бөгөөд зарим цөөн тооны  шарилыг хүсэлтийн
                    дагуу авсалж газарт ухан оршуулж иржээ. Ингэж ил задгай
                    оршуулж байсан нь хотын хүн амын сэтгэл санаанд таагүй нөлөө
                    үзүүлж улмаар элдэв араатан амьтан, нохой шувуу тэжээж
                    улмаар эргээд элдэв өвчин тахал тараах гол нөхцлүүдийн нэг
                    болж байжээ.
                  </p>
                  <p>
                    Иймд БНМАУ-ын Сайд нарын зөвлөл МАХН-ын төв хорооны
                    Тэргүүлэгчдийн хорооны 1955 оны 07 дугаар сарын 28-ны өдрийн
                    339/198 дугаар тогтоолоор “Хүүр оршуулах газар” нэртэйгээр
                    анх байгуулагджээ.
                  </p>
                  <p>
                    1990-ээд он хүртэл улсаас санхүүжигдэж төсөв төлөвлөгөөнд
                    захирагдаж байнгын алдагдалтай ажиллаж байсан тус
                    байгууллага нь 1992 оноос Улаанбаатар хотын “Иргэдэд үйлчлэх
                    Буян” компани нэртэйгээр зохион байгуулагдан өөрөө өөрийгөө 
                    санхүүжүүлэн аж ахуйн тооцоон дээр үйл ажиллагаагаа улам
                    өргөтгөсөөр захиргаа, дүн буртгэл, мужааны 2 цех, чулуун
                    хэсэг, оршуулгын гурван цэг, автын хэсэг, чимэглэл, худалдаа
                    үйлчилгээний  гэсэн 34 хүний орон тоотой үйл ажиллагаагаа
                    явуулж байжээ.
                  </p>
                  <p>
                    Ийнхүү 2004 оны 04 сарын 21-ний өдрийн Нийслэлийн Засаг
                    Даргын 180 тоот захирамж, Нийслэлийн Иргэдийн Төлөөлөгчдийн
                    Хурлын 48 тоот тогтоолоор “Иргэдэд үйлчлэх Буян” компани
                    татан буугдаж, 2004 оны 06 дугаар сард Нийслэлийн өмчийн
                    оролцоотой “Улаанбаатар буян” ХХК нэртэйгээр  100% Монгол
                    хүний хөрөнгө оруулалттайгаар үүсгэн байгуулагдан  хүн амын
                    эрүүл аж төрөх орчин, байгаль экологи, газар эдэлбэрт
                    тулгарч буй хүндрэлтэй асуудлуудыг зүй зохистой шийдвэрлэх
                    хамгийн оновчтой хэлбэр болох шарил чандарлах үйлчилгээг
                    дэлхийн стандартад нийцүүлж, орчин үеийн техник технологитой
                    хослуулан 2004 оноос эхлэн үзүүлж ирсэн билээ.
                  </p>
                  <p>
                    Хаалттай нийгмийн үед шашин шүтэх эрх чөлөө, оршуулгын төрөл
                    хэлбэрийн сонголт хязгаарлагдмал, төр засгаас нарийн
                    журамлаж байснаас улбаалан нийгмийн сэтгэхүйд зөвхөн газар
                    шороонд оршуулдаг гэсэн үзэл санаа тогтжээ. “Улаанбаатар
                    буян” ХХК нь шашны зан үйлийг сэргээж, шарил чандарлах
                    эртний уламжлалыг сэргээсэн нь сая гаруй хүн амтай том хотын
                    нийгмийн захиалга байлаа.{" "}
                  </p>
                  <p />
                </div>
              )}
              {show === false && (
                <button
                  className="button triggerShow"
                  onClick={() => setShow(!show)}
                >
                  Дэлгэрэнгүй
                </button>
              )}
              {show === true && (
                <button
                  className="button triggerHide"
                  onClick={() => setShow(!show)}
                >
                  Хураах
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img src="/static/images/icon12.png" />
          </div>
        </div>
        <div className="np2">
          <div className="abouttext">
            <div className="row">
              <div className="col-md-5 col-md-offset-1 jy  no_img about_text">
                <h5 className="sub_title">Боловсон хүчин</h5>
                {show2 === false && (
                  <div
                    className="aboutShow2"
                    style={{
                      height: "136px",
                      overflow: "hidden",
                    }}
                  >
                    <p>
                      Улаанбаатар Буян" ХХК компани 2004 онд Олон улсын
                      оршуулгын холбоо болон Азийн орнуудын оршуулгын холбоонд
                      гишүүнээр элсэн орсон. Тус холбоодын шугамаар жил бүр
                      зохиогддог их хуралд төлөөлөгчдөө тогтмол оролцуулан
                      туршлага судлуулах, АНУ-ын Олон улсын оршуулгын холбооны
                      их сургуульд ажилтан, ажилчдаа суралцуулах, БНХАУ-ын
                      Шанхай хотод урт, богино хугацааны мэргэжлийн сургалтад
                      хамруулан дадлагажуулах арга хэмжээ авсны үр дүнд
                      мэргэжлийн өндөр ур чадвартай, техник технологийн мэдлэг
                      туршлагатай, ёс суртахууны болон сэтгэл санааны хувьд
                      бэлтгэгдсэн инженер-техникийн ажилтнууд, үйлчилгээний
                      ажилчдаас бүрдсэн хамт олон бий боллоо.
                    </p>
                    <p>
                      <span className="redactor-invisible-space">
                        <span
                          className="redactor-invisible-space"
                          data-redactor-class="redactor-invisible-space"
                        >
                          <span
                            className="redactor-invisible-space"
                            data-redactor-tag="span"
                          >
                            <span
                              className="redactor-invisible-space"
                              data-redactor-class="redactor-invisible-space"
                            >
                              <span
                                className="redactor-invisible-space"
                                data-redactor-tag="span"
                              >
                                <span
                                  className="redactor-invisible-space"
                                  data-redactor-class="redactor-invisible-space"
                                >
                                  <span
                                    className="redactor-invisible-space"
                                    data-redactor-tag="span"
                                  >
                                    <span
                                      className="redactor-invisible-space"
                                      data-redactor-class="redactor-invisible-space"
                                    >
                                      <span
                                        className="redactor-invisible-space"
                                        data-redactor-tag="span"
                                      >
                                        <span
                                          className="redactor-invisible-space"
                                          data-redactor-class="redactor-invisible-space"
                                        >
                                          <span
                                            className="redactor-invisible-space"
                                            data-redactor-tag="span"
                                          />
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="redactor-invisible-space" />
                    </p>
                    <figure>
                      <img
                        data-image="tw5d07p711v1"
                        src="/static/images/Collect.jpg"
                      />
                    </figure>
                    <p />
                    <p />
                  </div>
                )}
                {show2 === true && (
                  <div className="aboutShow2">
                    <p>
                      Улаанбаатар Буян" ХХК компани 2004 онд Олон улсын
                      оршуулгын холбоо болон Азийн орнуудын оршуулгын холбоонд
                      гишүүнээр элсэн орсон. Тус холбоодын шугамаар жил бүр
                      зохиогддог их хуралд төлөөлөгчдөө тогтмол оролцуулан
                      туршлага судлуулах, АНУ-ын Олон улсын оршуулгын холбооны
                      их сургуульд ажилтан, ажилчдаа суралцуулах, БНХАУ-ын
                      Шанхай хотод урт, богино хугацааны мэргэжлийн сургалтад
                      хамруулан дадлагажуулах арга хэмжээ авсны үр дүнд
                      мэргэжлийн өндөр ур чадвартай, техник технологийн мэдлэг
                      туршлагатай, ёс суртахууны болон сэтгэл санааны хувьд
                      бэлтгэгдсэн инженер-техникийн ажилтнууд, үйлчилгээний
                      ажилчдаас бүрдсэн хамт олон бий боллоо.
                    </p>
                    <p>
                      <span className="redactor-invisible-space">
                        <span
                          className="redactor-invisible-space"
                          data-redactor-class="redactor-invisible-space"
                        >
                          <span
                            className="redactor-invisible-space"
                            data-redactor-tag="span"
                          >
                            <span
                              className="redactor-invisible-space"
                              data-redactor-class="redactor-invisible-space"
                            >
                              <span
                                className="redactor-invisible-space"
                                data-redactor-tag="span"
                              >
                                <span
                                  className="redactor-invisible-space"
                                  data-redactor-class="redactor-invisible-space"
                                >
                                  <span
                                    className="redactor-invisible-space"
                                    data-redactor-tag="span"
                                  >
                                    <span
                                      className="redactor-invisible-space"
                                      data-redactor-class="redactor-invisible-space"
                                    >
                                      <span
                                        className="redactor-invisible-space"
                                        data-redactor-tag="span"
                                      >
                                        <span
                                          className="redactor-invisible-space"
                                          data-redactor-class="redactor-invisible-space"
                                        >
                                          <span
                                            className="redactor-invisible-space"
                                            data-redactor-tag="span"
                                          />
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="redactor-invisible-space" />
                    </p>
                    <figure>
                      <img
                        data-image="tw5d07p711v1"
                        src="/static/images/Collect.jpg"
                      />
                    </figure>
                    <p />
                    <p />
                  </div>
                )}
                {show2 === false && (
                  <button
                    className="button triggerShow"
                    onClick={() => setShow2(!show2)}
                  >
                    Дэлгэрэнгүй
                  </button>
                )}
                {show2 === true && (
                  <button
                    className="button triggerHide"
                    onClick={() => setShow2(!show2)}
                  >
                    Хураах
                  </button>
                )}
              </div>
              <div className="col-md-5 col-md-offset-1 dundzurag">
                <img
                  src="/static/images/Collect.jpg"
                  style={{
                    maxWidth: "95%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img src="/static/images/icon12.png" />
          </div>
        </div>
        <div className="np3">
          <div className="abouttext">
            <div className="row">
              <div className="col-md-5 col-md-offset-1 np">
                <img src="/static/images/стандарт_auk181L.jpg" />
              </div>
              <div className="col-md-5 col-md-offset-1 jy  no_img">
                <h5 className="sub_title">Олон улсын стандарт</h5>
                {show3 === false && (
                  <div
                    className="aboutShow3"
                    style={{
                      height: "136px",
                      overflow: "hidden",
                    }}
                  >
                    <p>
                      Улаанбаатар буян" ХХК 2010 оноос Чанарын удирдлагын
                      тогтолцоо ISO 9001:2015, Хөдөлмөрийн аюулгүй байдал, эрүүл
                      ахуйн удирдлагын тогтолцоо OHSAS 18001:2007, 2018 оноос
                      Байгаль орчны удирдлагын
                      тогтолцоо ISO14001:2015 стандартуудыг амжилттай нэвтрүүлж,
                      Англи улсын итгэмжлэлийн байгууллага /UKAS/ болон түүний
                      салбар /QAIC/-аар баталгаажуулан гэрчилгээ авснаар буяны
                      үйлчилгээний салбарт олон улсын стандарт хэрэгжүүлсэн
                      Монголын анхны компани болсон. Мөн 2021 онд Улаанбаатар
                      буян компанийн ISO9001:2015, ISO14001:2015, ISO45001:2018
                      менежментийн тогтолцоог олон улсын стандартын
                      байгууллагаас дахин баталгаажуулж Олон Улсын Итгэмжлэлийн
                      Форум (IAF)-н мэдээллийн санд манай ISO стандартын цахим
                      гэрчилгээ холбогдлоо.
                      <br />
                      <br />
                    </p>
                    <p>
                      Ингэснээр “Улаанбаатар буян” ХХК-ийн бүх төрлийн үйлчилгээ
                      дэлхийн жишигт хүрсэн гэж дүгнэж байна.
                    </p>
                    <p />
                    <figure>
                      <img
                        data-image="utmscx231sa7"
                        src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/стандарт_auk181L.jpg"
                      />
                    </figure>
                    <p>
                      <br />
                      <span className="redactor-invisible-space" />
                    </p>
                    <p />
                  </div>
                )}
                {show3 === true && (
                  <div className="aboutShow3">
                    <p>
                      Улаанбаатар буян" ХХК 2010 оноос Чанарын удирдлагын
                      тогтолцоо ISO 9001:2015, Хөдөлмөрийн аюулгүй байдал, эрүүл
                      ахуйн удирдлагын тогтолцоо OHSAS 18001:2007, 2018 оноос
                      Байгаль орчны удирдлагын
                      тогтолцоо ISO14001:2015 стандартуудыг амжилттай нэвтрүүлж,
                      Англи улсын итгэмжлэлийн байгууллага /UKAS/ болон түүний
                      салбар /QAIC/-аар баталгаажуулан гэрчилгээ авснаар буяны
                      үйлчилгээний салбарт олон улсын стандарт хэрэгжүүлсэн
                      Монголын анхны компани болсон. Мөн 2021 онд Улаанбаатар
                      буян компанийн ISO9001:2015, ISO14001:2015, ISO45001:2018
                      менежментийн тогтолцоог олон улсын стандартын
                      байгууллагаас дахин баталгаажуулж Олон Улсын Итгэмжлэлийн
                      Форум (IAF)-н мэдээллийн санд манай ISO стандартын цахим
                      гэрчилгээ холбогдлоо.
                      <br />
                      <br />
                    </p>
                    <p>
                      Ингэснээр “Улаанбаатар буян” ХХК-ийн бүх төрлийн үйлчилгээ
                      дэлхийн жишигт хүрсэн гэж дүгнэж байна.
                    </p>
                    <p />
                    <figure>
                      <img
                        data-image="utmscx231sa7"
                        src="/static/images/стандарт_auk181L.jpg"
                      />
                    </figure>
                    <p>
                      <br />
                      <span className="redactor-invisible-space" />
                    </p>
                    <p />
                  </div>
                )}
                {show3 === false && (
                  <button
                    className="button triggerShow"
                    onClick={() => setShow3(!show3)}
                  >
                    Дэлгэрэнгүй
                  </button>
                )}
                {show3 === true && (
                  <button
                    className="button triggerHide"
                    onClick={() => setShow3(!show3)}
                  >
                    Хураах
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" hidden-lg about">
        <div className="np np1">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 aboutvideo">
              <iframe
                allowFullScreen
                frameBorder="0"
                height="315"
                src="https://www.youtube.com/embed/ntpEog0lzww"
                width="100%"
              ></iframe>
            </div>
            <div className="col-md-5 col-md-offset-1 abouttext">
              <h5 className="sub_title">Бидний тухай</h5>
              <div
                className="aboutShow"
                style={{
                  height: "136px",
                  overflow: "hidden",
                }}
              >
                <p>60 жилийн түүхэн замнал</p>
                <p>
                  Улаанбаатар хотын хэмжээнд нас барагсдын шарилыг оршуулах
                  ажлыг 1950-иад оны  дунд үе хүртэл  ил задгайгаар буюу булж
                  оршуулж ирсэн бөгөөд зарим цөөн тооны  шарилыг хүсэлтийн дагуу
                  авсалж газарт ухан оршуулж иржээ. Ингэж ил задгай оршуулж
                  байсан нь хотын хүн амын сэтгэл санаанд таагүй нөлөө үзүүлж
                  улмаар элдэв араатан амьтан, нохой шувуу тэжээж улмаар эргээд
                  элдэв өвчин тахал тараах гол нөхцлүүдийн нэг болж байжээ.
                </p>
                <p>
                  Иймд БНМАУ-ын Сайд нарын зөвлөл МАХН-ын төв хорооны
                  Тэргүүлэгчдийн хорооны 1955 оны 07 дугаар сарын 28-ны өдрийн
                  339/198 дугаар тогтоолоор “Хүүр оршуулах газар” нэртэйгээр анх
                  байгуулагджээ.
                </p>
                <p>
                  1990-ээд он хүртэл улсаас санхүүжигдэж төсөв төлөвлөгөөнд
                  захирагдаж байнгын алдагдалтай ажиллаж байсан тус байгууллага
                  нь 1992 оноос Улаанбаатар хотын “Иргэдэд үйлчлэх Буян” компани
                  нэртэйгээр зохион байгуулагдан өөрөө өөрийгөө  санхүүжүүлэн аж
                  ахуйн тооцоон дээр үйл ажиллагаагаа улам өргөтгөсөөр захиргаа,
                  дүн буртгэл, мужааны 2 цех, чулуун хэсэг, оршуулгын гурван
                  цэг, автын хэсэг, чимэглэл, худалдаа үйлчилгээний  гэсэн 34
                  хүний орон тоотой үйл ажиллагаагаа явуулж байжээ.
                </p>
                <p>
                  Ийнхүү 2004 оны 04 сарын 21-ний өдрийн Нийслэлийн Засаг Даргын
                  180 тоот захирамж, Нийслэлийн Иргэдийн Төлөөлөгчдийн Хурлын 48
                  тоот тогтоолоор “Иргэдэд үйлчлэх Буян” компани татан буугдаж,
                  2004 оны 06 дугаар сард Нийслэлийн өмчийн оролцоотой
                  “Улаанбаатар буян” ХХК нэртэйгээр  100% Монгол хүний хөрөнгө
                  оруулалттайгаар үүсгэн байгуулагдан  хүн амын эрүүл аж төрөх
                  орчин, байгаль экологи, газар эдэлбэрт тулгарч буй хүндрэлтэй
                  асуудлуудыг зүй зохистой шийдвэрлэх хамгийн оновчтой хэлбэр
                  болох шарил чандарлах үйлчилгээг дэлхийн стандартад нийцүүлж,
                  орчин үеийн техник технологитой хослуулан 2004 оноос эхлэн
                  үзүүлж ирсэн билээ.
                </p>
                <p>
                  Хаалттай нийгмийн үед шашин шүтэх эрх чөлөө, оршуулгын төрөл
                  хэлбэрийн сонголт хязгаарлагдмал, төр засгаас нарийн журамлаж
                  байснаас улбаалан нийгмийн сэтгэхүйд зөвхөн газар шороонд
                  оршуулдаг гэсэн үзэл санаа тогтжээ. “Улаанбаатар буян” ХХК нь
                  шашны зан үйлийг сэргээж, шарил чандарлах эртний уламжлалыг
                  сэргээсэн нь сая гаруй хүн амтай том хотын нийгмийн захиалга
                  байлаа.{" "}
                </p>
                <p />
              </div>
              <button className="button triggerShow">Дэлгэрэнгүй</button>
              <button
                className="button triggerHide"
                style={{
                  display: "none",
                }}
              >
                Хураах
              </button>
            </div>
          </div>
        </div>
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img src="/static/images/icon12.png" />
          </div>
        </div>
        <div className="np2">
          <div className="abouttext">
            <div className="row">
              <div className="col-md-5 col-md-offset-1 dundzurag">
                <img
                  src="/static/images/Collect.jpg"
                  style={{
                    maxWidth: "95%",
                  }}
                />
              </div>
              <div className="col-md-5 col-md-offset-1 jy  no_img about_text">
                <h5 className="sub_title">Боловсон хүчин</h5>
                <div
                  className="aboutShow2"
                  style={{
                    height: "136px",
                    overflow: "hidden",
                  }}
                >
                  <p>
                    Улаанбаатар Буян" ХХК компани 2004 онд Олон улсын оршуулгын
                    холбоо болон Азийн орнуудын оршуулгын холбоонд гишүүнээр
                    элсэн орсон. Тус холбоодын шугамаар жил бүр зохиогддог их
                    хуралд төлөөлөгчдөө тогтмол оролцуулан туршлага судлуулах,
                    АНУ-ын Олон улсын оршуулгын холбооны их сургуульд ажилтан,
                    ажилчдаа суралцуулах, БНХАУ-ын Шанхай хотод урт, богино
                    хугацааны мэргэжлийн сургалтад хамруулан дадлагажуулах арга
                    хэмжээ авсны үр дүнд мэргэжлийн өндөр ур чадвартай, техник
                    технологийн мэдлэг туршлагатай, ёс суртахууны болон сэтгэл
                    санааны хувьд бэлтгэгдсэн инженер-техникийн ажилтнууд,
                    үйлчилгээний ажилчдаас бүрдсэн хамт олон бий боллоо.
                  </p>
                  <p>
                    <span className="redactor-invisible-space">
                      <span
                        className="redactor-invisible-space"
                        data-redactor-class="redactor-invisible-space"
                      >
                        <span
                          className="redactor-invisible-space"
                          data-redactor-tag="span"
                        >
                          <span
                            className="redactor-invisible-space"
                            data-redactor-class="redactor-invisible-space"
                          >
                            <span
                              className="redactor-invisible-space"
                              data-redactor-tag="span"
                            >
                              <span
                                className="redactor-invisible-space"
                                data-redactor-class="redactor-invisible-space"
                              >
                                <span
                                  className="redactor-invisible-space"
                                  data-redactor-tag="span"
                                >
                                  <span
                                    className="redactor-invisible-space"
                                    data-redactor-class="redactor-invisible-space"
                                  >
                                    <span
                                      className="redactor-invisible-space"
                                      data-redactor-tag="span"
                                    >
                                      <span
                                        className="redactor-invisible-space"
                                        data-redactor-class="redactor-invisible-space"
                                      >
                                        <span
                                          className="redactor-invisible-space"
                                          data-redactor-tag="span"
                                        />
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p>
                    <span className="redactor-invisible-space" />
                  </p>
                  <figure>
                    <img
                      data-image="tw5d07p711v1"
                      src="/static/images/Collect.jpg"
                    />
                  </figure>
                  <p />
                  <p />
                </div>
                <button className="button triggerShow2">Дэлгэрэнгүй</button>
                <button
                  className="triggerHide2"
                  style={{
                    display: "none",
                  }}
                >
                  Хураах
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img src="/static/images/icon12.png" />
          </div>
        </div>
        <div className="np3">
          <div className="abouttext">
            <div className="row">
              <div className="col-md-5 col-md-offset-1 np">
                <img src="https://ulaanbaatarbuyan.mn/media/ulaanbaatarbuyannew/content/стандарт_auk181L.jpg" />
              </div>
              <div className="col-md-5 col-md-offset-1 jy  no_img">
                <h5 className="sub_title">Олон улсын стандарт</h5>
                <div
                  className="aboutShow3"
                  style={{
                    height: "136px",
                    overflow: "hidden",
                  }}
                >
                  <p>
                    Улаанбаатар буян" ХХК 2010 оноос Чанарын удирдлагын
                    тогтолцоо ISO 9001:2015, Хөдөлмөрийн аюулгүй байдал, эрүүл
                    ахуйн удирдлагын тогтолцоо OHSAS 18001:2007, 2018 оноос
                    Байгаль орчны удирдлагын
                    тогтолцоо ISO14001:2015 стандартуудыг амжилттай нэвтрүүлж,
                    Англи улсын итгэмжлэлийн байгууллага /UKAS/ болон түүний
                    салбар /QAIC/-аар баталгаажуулан гэрчилгээ авснаар буяны
                    үйлчилгээний салбарт олон улсын стандарт хэрэгжүүлсэн
                    Монголын анхны компани болсон. Мөн 2021 онд Улаанбаатар буян
                    компанийн ISO9001:2015, ISO14001:2015, ISO45001:2018
                    менежментийн тогтолцоог олон улсын стандартын байгууллагаас
                    дахин баталгаажуулж Олон Улсын Итгэмжлэлийн Форум (IAF)-н
                    мэдээллийн санд манай ISO стандартын цахим гэрчилгээ
                    холбогдлоо.
                    <br />
                    <br />
                  </p>
                  <p>
                    Ингэснээр “Улаанбаатар буян” ХХК-ийн бүх төрлийн үйлчилгээ
                    дэлхийн жишигт хүрсэн гэж дүгнэж байна.
                  </p>
                  <p />
                  <figure>
                    <img
                      data-image="utmscx231sa7"
                      src="/static/images/стандарт_auk181L.jpg"
                    />
                  </figure>
                  <p>
                    <br />
                    <span className="redactor-invisible-space" />
                  </p>
                  <p />
                </div>
                <button className="button triggerShow3">Дэлгэрэнгүй</button>
                <button
                  className="triggerHide3"
                  style={{
                    display: "none",
                  }}
                >
                  Хураах
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
