import React from "react";

export default function page() {
  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <section className="category_faq">
        <div className="container">
          <h2>Түгээмэл асуулт</h2>
          <p className="center">Түгээмэл асуултын хариулт</p>
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img src="/static/sites/ulaanbaatarbuyannew/default/images/icon.png" />
            </div>
          </div>
          <ul className="article-list">
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse1"
                      aria-expanded="false"
                      className="accordion-toggle collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse1"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-plus" />
                      Хоног даах лам, хойт мөрийг даасан ламаас ялгаатай юм уу?
                    </a>
                  </h4>
                </div>
                <div
                  aria-expanded="false"
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse collapsing"
                  id="collapse1"
                  role="tabpanel"
                >
                  <div className="panel-body">
                    <p>
                      Ялгаатай. Хоног даах лам нь талийгаачийн хойноос 49 хоног
                      зул хүж барьж “Санжид молом” буюу Ерөөлийн хаан тэргүүтэн
                      ерөөл номуудыг хоног таслалгүйгээр уншиж байдаг. Хэрвээ
                      Хойт мөрийг нь даатгасан лам зөвшөөрвөл хамт хоногийг
                      даалгаж болно. Хоног даах ламд хадаг бөс бараа эсвэл мөнгө
                      төгрөг өргөхийн зэрэгцээ зулын тос өргөдөг аж.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse2"
                      aria-expanded="true"
                      className="accordion-toggle"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse2"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-minus" />
                      Ламд хойт мөрийг даатгана гэж юуг хэлдэг юм бэ?
                    </a>
                  </h4>
                </div>
                <div
                  aria-expanded="true"
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse in"
                  id="collapse2"
                  role="tabpanel"
                  style={{}}
                >
                  <div className="panel-body">
                    <p>
                      Талийгаачийн сүнсийг зуурдын орноос номын хүчээр хөтлөж
                      Диваажингийн оронд залах зан үйл юм. Сүнсийг бясалгалын
                      эрдэм төгссөн эрдэмтэй лам нар л удирдан залж чадах учраас
                      хойт мөрийг цөөн тооны тэр чиглэлийн эрдэм төгссөн, орчин
                      үеийн хэллэгээр мэргэшсэн лам нарт даалгадаг.Хойт мөрийг
                      даах ламд эрт үед хадаг бөс бараа өргөдөг байсан бөгөөд
                      одоо үед ихэвчлэн мөнгө төгрөг өгдөг болжээ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse3"
                      aria-expanded="false"
                      className="accordion-toggle collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse3"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-plus" />
                      Манай талийгаач зүүд нойронд ороод байна ямар ном уншуулах
                      вэ?
                    </a>
                  </h4>
                </div>
                <div
                  aria-expanded="false"
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse"
                  id="collapse3"
                  role="tabpanel"
                  style={{
                    height: "0px",
                  }}
                >
                  <div className="panel-body">
                    <p>
                      Сайн муу янз бүрийн байдлаар зүүдэнд орвол та Маанийн
                      ерөөл, Оройн ерөөл, Гурван гүрэм, Ширнэн зэрэг номуудыг
                      сүм хийдийн газар айлтгаарай. Бурханы шашинд сайн үйл
                      бүтээх эх үндэс нь ерөөл тавих гэж үздэг. Энэ ч утгаараа
                      “Монгол хүн амны бэлэгээр” гэдэг зүйр үг гарсан ажээ.
                      Ингэхлээр та сүм хийдийн газар очихдоо ерөөл уншуулж
                      байвал элдэв муу явдлаас ангид байж, ажил амьдрал өөдрөг
                      байхад нэн тустай.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse4"
                      aria-expanded="false"
                      className="accordion-toggle collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse4"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-plus" />
                      Өнөөдөр манай “Тэрний” оршуулгыг цэвдэг хүйтэн сэтгэлтэй
                      хүмүүс амар тайван байлгахгүй байна. Одоо бид яах вэ?
                    </a>
                  </h4>
                </div>
                <div
                  aria-expanded="false"
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse"
                  id="collapse4"
                  role="tabpanel"
                  style={{
                    height: "0px",
                  }}
                >
                  <div className="panel-body">
                    <p>
                      Энэ нь бидний өмнө тулгараад байгаа нилээн хүнд сэдэв
                      болоод байна. Ер нь эхлээд танд монголчууд эрт үеэс давхар
                      оршуулга хийж байсан үүх түүхийн нэгэн баримтыг
                      танилцуулах нь зүйд нийцэх байхаа. Түүхийн тулгуур
                      бичгүүдийн нэг “Гэгээн толь”-д Алтан хантай хамт Монгол
                      оронд шарын шашныг дэлгэрүүлэх ажлыг гардан хийсэн, шашин
                      төрийг хослон тэтгэмжилсэн Хутагтай cэцэн хунтайжийн
                      шарилыг хүмүүс онголоод байсныг гуравдугаар дүрийн Далай
                      лам мэдээд, “Ноён тэрбээр өтөл хүмүүн бус, дээд бодь
                      хутагт одохуйяа юун өгүүлэх. Та бээр өөрийн бие юүгээс
                      хишгийг зайлуулж, гайхамшигт шүтээнийг яахин хөсөр гээвэй
                      хэмээн зарлиг болруун; хүсэхүй мөрийн ерөөлийг зорин, сайн
                      учралын бошгыг сайтар талбижухуй.Далай лам ингэж “Хишгийг
                      зайлуулж, Хөсөрт гээв” хэмээн буруушаан донгодсон болохоор
                      хүмүүс сүүлээр хутагт Сэцэн хун тайжийн шарилыг уудлан
                      гаргаж, гал мандал үйлдээд, цац суварга барьж оршуулсан
                      ажээ. Эндээс харахад давхар оршуулга хийж байсан нь
                      тодорхой тул та өвөг дээдсийнхээ шарилыг хог новш, хулгай
                      зэлгий, эвдэж хэмхлэхээс сэргийлж чандарлан шүтээний оронд
                      залах бүрэн боломжтой. Эдүгээ ч зарим нэг хүмүүс Алтан
                      хонхорт буй аав, ээж, ахан дүүсийнхээ шарилыг чандарлуулж
                      шүтээний оронд залсаар байгаа.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse5"
                      aria-expanded="true"
                      className="accordion-toggle"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse5"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-plus" />
                      Оршуулгын тэтгэмж авах вэ?
                    </a>
                  </h4>
                </div>
                <div
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse collapsing"
                  id="collapse5"
                  role="tabpanel"
                >
                  <div className="panel-body">
                    <p>
                      Нас барсны гэрчилгээг авсны дараа оршуулгын тэтгэмж
                      авахад: /Нийслэлийн{" "}
                    </p>
                    <p>
                      төвийн 9 дүүргийн иргэд/ “Улаанбаатар буян" ХХК-ий төв
                      байранд байрлах{" "}
                    </p>
                    <p>
                      “Нийслэлийн Нийгмийн даатгалын сангаас оршуулгын тэтгэмж
                      нь 1 000 000{" "}
                    </p>
                    <p>төгрөг байна.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse6"
                      aria-expanded="true"
                      className="accordion-toggle"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse6"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-plus" />
                      Тэжээгчээ алдсаны тэтгэвэр авах эрх гэж юу вэ?
                    </a>
                  </h4>
                </div>
                <div
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse collapsing"
                  id="collapse6"
                  role="tabpanel"
                >
                  <div className="panel-body">
                    Тэтгэвэрийн даатгалын шимтгэлийн нийтдээ 20-иос доошгүй жил,
                    эсвэл тахир дутуу болохын өмнө 5 жилийн 3 жилд төлсөн
                    даагуулагч ердийн өвчин, ахуйн ослын улмаас нас барвал
                    түүний асрамжид байсан гэр бүлийн хөдөлмөрийн чадваргүй
                    гишүүд тэжээгчээ алдсаны тэтгэвэр тогтоолгон авах эрхтэй
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-multiselectable="true"
              className="panel-group"
              id="accordion"
              role="tablist"
            >
              <div className="panel panel-default">
                <div className="panel-heading" id="headingOne" role="tab">
                  <h4 className="panel-title">
                    <a
                      aria-controls="collapse7"
                      aria-expanded="true"
                      className="accordion-toggle"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      href="#collapse7"
                      role="button"
                    >
                      <span className="col-md-1 glyphicon glyphicon-plus" />
                      Эмнэлгийн бус нөхцөлд хүн нас барвал хаана хандах вэ?
                    </a>
                  </h4>
                </div>
                <div
                  aria-labelledby="headingOne"
                  className="panel-collapse collapse collapsing"
                  id="collapse7"
                  role="tabpanel"
                >
                  <div className="panel-body">
                    <p>
                      Асуултын хариулт бүхий текст энд байрлана. Асуултын
                      хариулт бүхий текст энд байрлана. Асуултын хариулт бүхий
                      текст энд байрлана.
                      <span className="redactor-invisible-space">
                        {" "}
                        Асуултын хариулт бүхий текст энд байрлана.
                        <span className="redactor-invisible-space">
                          {" "}
                          Асуултын хариулт бүхий текст энд байрлана.
                          <span className="redactor-invisible-space">
                            {" "}
                            Асуултын хариулт бүхий текст энд байрлана.
                            <span className="redactor-invisible-space">
                              {" "}
                              Асуултын хариулт бүхий текст энд байрлана.
                              <span className="redactor-invisible-space" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html:
            '  $(\'.collapse\').on(\'shown.bs.collapse\', function(){  $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");  }).on(\'hidden.bs.collapse\', function(){  $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");  });',
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: "  $('html, body').animate({ scrollTop: 0 }, 1000);",
        }}
      />
    </div>
  );
}
