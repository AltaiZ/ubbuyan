import React from "react";
import CmsArticlePageClient from "@/components/about/CmsArticlePageClient";

export default function Page() {
  const fallback = (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <section className="simple_page container">
        <article className="col-md-8 col-md-offset-2">
          <header className="post">
            <hgroup>
              <h2 className="page_title center">
                Бидний өвөр төрх, ялгамж чанар
              </h2>
            </hgroup>
          </header>
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img src="/static/images/icon12.png" />
            </div>
          </div>
          <p className="jy"></p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            Бид 2018 онд байгууллагынхаа "Өвөр төрх, Ялгамж чанар"-ыг утга
            агуулгаар нь судалгаа хийж нэгдсэн цогц бүтээл болгон хөгжүүллээ.
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            Нийт хүн төрөлхтөн үхлийг хүлээж авахдаа бидний сүнсэн ухамсар
            дээшээ явлаа гэсэн ерөнхий үзэл санаа дээр тулгуурладаг.{" "}
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            Аль ч шашинд дээшээ явсан, тэнгэрт очих тухай зүйрлэл, бэлгэдэл
            томоохон байр суурь эзэлдэг төдийгүй Монголчууд бидний уламжлалт
            шүтлэг хүндэтгэл дотор Тэнгэр үзлээс эхлэлтэй түүх археологи, зан
            соёлын олон хэлбэрүүд байдаг.{" "}
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            Ийм агуулгын үүднээс бидний шинэ өнгө төрх маань
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            {" "}
            #Тэнгэр
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            {" "}
            #Газар 
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            #Хүмүүн гэсэн гурвалыг хамтатган дүрслэн илэрхийлж, бид газраас
            үүсэж өөдөө тэмүүлж эцэстээ тэнгэрт эрхшээгдлээ гэсэн санаа
            уламжлалт тамга үсэгний дүрслэлтэй уялдуулан дүрслэв.{" "}
          </p>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            Аливаа брэнд дизайны шийдэлд үндсэн лого төрхийг дэмжих нэмэлт
            дүрслэл ашиглагддаг. Түүнийгээ бид мөнхийн Цагаан уул цэгээр
            илэрхийлж олон утгыг шингээв.
          </p>
          <figure>
            <iframe
              allowFullScreen
              frameBorder="0"
              src="//www.youtube.com/embed/1ftzPgQAa_w"
              style={{
                height: "281px",
                width: "500px",
              }}
            />
          </figure>
          <p />
        </article>
      </section>
    </div>
  );

  return (
    <CmsArticlePageClient
      candidates={[
        "бидний өвөр төрх, ялгамж чанар",
        "bidnii uwur turh yalgamj chanar",
        "yalgamj",
        "yalgamj chanar",
      ]}
      title="Бидний өвөр төрх, ялгамж чанар"
      fallback={fallback}
    />
  );
}
