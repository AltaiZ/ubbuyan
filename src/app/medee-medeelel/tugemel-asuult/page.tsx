"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";

export default function Page() {
  const { data, loading, error } = useQuery(queries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const allPosts = (data as any)?.cpPostList?.posts || [];

  const cmsFaqs = allPosts.filter((post: any) =>
    post?.categories?.some((cat: any) => {
      const value = cat?.slug || cat?.name || "";
      return String(value).toLowerCase().trim() === "tugemel-asuult";
    })
  );

  return (
    <div id="content">
      <section className="category_faq">
        <div className="container">
          <h2>Түгээмэл асуулт</h2>
          <p className="center">Түгээмэл асуултын хариулт</p>

          <div className="tus">
            <hr />
            <div className="tus_img">
              <img src="/static/images/icon.png" alt="icon" />
            </div>
          </div>

          <ul className="article-list">
            <Accordion type="single" collapsible className="w-full">
              {cmsFaqs.map((item: any, index: number) => (
                <AccordionItem value={`cms-${index}`} key={item._id}>
                  <div className="panel-group">
                    <div className="panel panel-default">
                      <AccordionTrigger>
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <span className="col-md-1 glyphicon glyphicon-plus" />
                            {item?.title}
                          </h4>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div
                          className="accordion-content"
                          dangerouslySetInnerHTML={{
                            __html: item?.content || item?.excerpt || "",
                          }}
                        />
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}

              <AccordionItem value="item-1">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Хоног даах лам, хойт мөрийг даасан ламаас ялгаатай юм уу?
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
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Ламд хойт мөрийг даатгана гэж юуг хэлдэг юм бэ?
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Талийгаачийн сүнсийг зуурдын орноос номын хүчээр
                          хөтлөж Диваажингийн оронд залах зан үйл юм. Сүнсийг
                          бясалгалын эрдэм төгссөн эрдэмтэй лам нар л удирдан
                          залж чадах учраас хойт мөрийг цөөн тооны тэр чиглэлийн
                          эрдэм төгссөн, мэргэшсэн лам нарт даалгадаг.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem value="item-3">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Манай талийгаач зүүд нойронд ороод байна ямар ном уншуулах вэ?
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Сайн муу янз бүрийн байдлаар зүүдэнд орвол та Маанийн
                          ерөөл, Оройн ерөөл, Гурван гүрэм, Ширнэн зэрэг
                          номуудыг сүм хийдийн газар айлтгаарай.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem value="item-4">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Өнөөдөр манай “Тэрний” оршуулгыг цэвдэг хүйтэн сэтгэлтэй хүмүүс амар тайван байлгахгүй байна. Одоо бид яах вэ?
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Давхар оршуулга хийж байсан түүхэн жишээ бий. Та өвөг
                          дээдсийнхээ шарилыг хамгаалах, чандарлан шүтээний
                          оронд залах боломжийн талаар мэргэжлийн хүмүүстэй
                          зөвлөлдөөрэй.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem value="item-5">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Оршуулгын тэтгэмж авах вэ?
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Нас барсны гэрчилгээг авсны дараа оршуулгын тэтгэмжтэй
                          холбоотой мэдээллийг “Улаанбаатар буян” ХХК-ийн төв
                          байр болон Нийгмийн даатгалын байгууллагаас авна.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem value="item-6">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Тэжээгчээ алдсаны тэтгэвэр авах эрх гэж юу вэ?
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Хөдөлмөрийн чадваргүй гэр бүлийн гишүүд тодорхой
                          нөхцөлд тэжээгчээ алдсаны тэтгэвэр тогтоолгон авах
                          эрхтэй.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem value="item-7">
                <div className="panel-group">
                  <div className="panel panel-default">
                    <AccordionTrigger>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <span className="col-md-1 glyphicon glyphicon-plus" />
                          Эмнэлгийн бус нөхцөлд хүн нас барвал хаана хандах вэ?
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <p className="accordion-content">
                          Холбогдох цагдаа, эмнэлэг, бүртгэлийн байгууллага болон
                          оршуулгын үйлчилгээ үзүүлэгч байгууллагад хандана.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>

              {loading && (
                <div style={{ padding: "12px 0" }}>Уншиж байна...</div>
              )}

              {error && (
                <div style={{ padding: "12px 0" }}>
                  Алдаа гарлаа: {error.message}
                </div>
              )}
            </Accordion>
          </ul>
        </div>
      </section>
    </div>
  );
}