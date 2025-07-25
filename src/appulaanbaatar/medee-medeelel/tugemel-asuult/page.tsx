import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <div id="content">
      <section className="category_faq">
        <div className="container">
          <h2>Түгээмэл асуулт</h2>
          <p className="center">Түгээмэл асуултын хариулт</p>
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img src="/static/images/icon.png" />
            </div>
          </div>
          <ul className="article-list">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Хоног даах лам, хойт мөрийг даасан ламаас ялгаатай
                            юм уу?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Ялгаатай. Хоног даах лам нь талийгаачийн хойноос 49
                          хоног зул хүж барьж “Санжид молом” буюу Ерөөлийн хаан
                          тэргүүтэн ерөөл номуудыг хоног таслалгүйгээр уншиж
                          байдаг. Хэрвээ Хойт мөрийг нь даатгасан лам зөвшөөрвөл
                          хамт хоногийг даалгаж болно. Хоног даах ламд хадаг бөс
                          бараа эсвэл мөнгө төгрөг өргөхийн зэрэгцээ зулын тос
                          өргөдөг аж.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-2">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      {" "}
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse2"
                            aria-expanded="true"
                            aria-controls="collapse2"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Ламд хойт мөрийг даатгана гэж юуг хэлдэг юм бэ?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {" "}
                      <div>
                        <p className="accordion-content">
                          Талийгаачийн сүнсийг зуурдын орноос номын хүчээр
                          хөтлөж Диваажингийн оронд залах зан үйл юм. Сүнсийг
                          бясалгалын эрдэм төгссөн эрдэмтэй лам нар л удирдан
                          залж чадах учраас хойт мөрийг цөөн тооны тэр чиглэлийн
                          эрдэм төгссөн, орчин үеийн хэллэгээр мэргэшсэн лам
                          нарт даалгадаг.Хойт мөрийг даах ламд эрт үед хадаг бөс
                          бараа өргөдөг байсан бөгөөд одоо үед ихэвчлэн мөнгө
                          төгрөг өгдөг болжээ.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-3">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      {" "}
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse3"
                            aria-expanded="true"
                            aria-controls="collapse3"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Манай талийгаач зүүд нойронд ороод байна ямар ном
                            уншуулах вэ?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Сайн муу янз бүрийн байдлаар зүүдэнд орвол та Маанийн
                          ерөөл, Оройн ерөөл, Гурван гүрэм, Ширнэн зэрэг
                          номуудыг сүм хийдийн газар айлтгаарай. Бурханы шашинд
                          сайн үйл бүтээх эх үндэс нь ерөөл тавих гэж үздэг. Энэ
                          ч утгаараа “Монгол хүн амны бэлэгээр” гэдэг зүйр үг
                          гарсан ажээ. Ингэхлээр та сүм хийдийн газар очихдоо
                          ерөөл уншуулж байвал элдэв муу явдлаас ангид байж,
                          ажил амьдрал өөдрөг байхад нэн тустай.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-4">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse4"
                            aria-expanded="true"
                            aria-controls="collapse4"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Өнөөдөр манай “Тэрний” оршуулгыг цэвдэг хүйтэн
                            сэтгэлтэй хүмүүс амар тайван байлгахгүй байна. Одоо
                            бид яах вэ?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Энэ нь бидний өмнө тулгараад байгаа нилээн хүнд сэдэв
                          болоод байна. Ер нь эхлээд танд монголчууд эрт үеэс
                          давхар оршуулга хийж байсан үүх түүхийн нэгэн баримтыг
                          танилцуулах нь зүйд нийцэх байхаа. Түүхийн тулгуур
                          бичгүүдийн нэг “Гэгээн толь”-д Алтан хантай хамт
                          Монгол оронд шарын шашныг дэлгэрүүлэх ажлыг гардан
                          хийсэн, шашин төрийг хослон тэтгэмжилсэн Хутагтай
                          cэцэн хунтайжийн шарилыг хүмүүс онголоод байсныг
                          гуравдугаар дүрийн Далай лам мэдээд, “Ноён тэрбээр
                          өтөл хүмүүн бус, дээд бодь хутагт одохуйяа юун
                          өгүүлэх. Та бээр өөрийн бие юүгээс хишгийг зайлуулж,
                          гайхамшигт шүтээнийг яахин хөсөр гээвэй хэмээн зарлиг
                          болруун; хүсэхүй мөрийн ерөөлийг зорин, сайн учралын
                          бошгыг сайтар талбижухуй.Далай лам ингэж “Хишгийг
                          зайлуулж, Хөсөрт гээв” хэмээн буруушаан донгодсон
                          болохоор хүмүүс сүүлээр хутагт Сэцэн хун тайжийн
                          шарилыг уудлан гаргаж, гал мандал үйлдээд, цац суварга
                          барьж оршуулсан ажээ. Эндээс харахад давхар оршуулга
                          хийж байсан нь тодорхой тул та өвөг дээдсийнхээ
                          шарилыг хог новш, хулгай зэлгий, эвдэж хэмхлэхээс
                          сэргийлж чандарлан шүтээний оронд залах бүрэн
                          боломжтой. Эдүгээ ч зарим нэг хүмүүс Алтан хонхорт буй
                          аав, ээж, ахан дүүсийнхээ шарилыг чандарлуулж шүтээний
                          оронд залсаар байгаа.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-5">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse5"
                            aria-expanded="true"
                            aria-controls="collapse5"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Оршуулгын тэтгэмж авах вэ?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Нас барсны гэрчилгээг авсны дараа оршуулгын тэтгэмж
                          авахад: /Нийслэлийн{" "}
                        </p>
                        <p className="accordion-content">
                          төвийн 9 дүүргийн иргэд/ “Улаанбаатар буян" ХХК-ий төв
                          байранд байрлах{" "}
                        </p>
                        <p className="accordion-content">
                          “Нийслэлийн Нийгмийн даатгалын сангаас оршуулгын
                          тэтгэмж нь 1 000 000{" "}
                        </p>
                        <p className="accordion-content">төгрөг байна.</p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse6"
                            aria-expanded="true"
                            aria-controls="collapse6"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Тэжээгчээ алдсаны тэтгэвэр авах эрх гэж юу вэ?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Тэтгэвэрийн даатгалын шимтгэлийн нийтдээ 20-иос
                          доошгүй жил, эсвэл тахир дутуу болохын өмнө 5 жилийн 3
                          жилд төлсөн даагуулагч ердийн өвчин, ахуйн ослын
                          улмаас нас барвал түүний асрамжид байсан гэр бүлийн
                          хөдөлмөрийн чадваргүй гишүүд тэжээгчээ алдсаны
                          тэтгэвэр тогтоолгон авах эрхтэй
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value="item-7">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      {" "}
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            className="accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse7"
                            aria-expanded="true"
                            aria-controls="collapse7"
                          >
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            Эмнэлгийн бус нөхцөлд хүн нас барвал хаана хандах
                            вэ?
                          </a>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Асуултын хариулт бүхий текст энд байрлана. Асуултын
                          хариулт бүхий текст энд байрлана. Асуултын хариулт
                          бүхий текст энд байрлана.
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
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </ul>
        </div>
      </section>
    </div>
  );
}
