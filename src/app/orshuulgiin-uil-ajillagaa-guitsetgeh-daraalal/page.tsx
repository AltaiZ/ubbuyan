import React from "react";
import ServiceArticlePageClient from "@/components/service/ServiceArticlePageClient";

export default function Page() {
  const fallback = (
    <div id="content">
      <section className="container">
        <article className="single_article col-md-9">
          <header className="post">
            <hgroup>
              <h2>Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал</h2>
            </hgroup>
          </header>
          <p>Мэдээлэл удахгүй нэмэгдэнэ.</p>
        </article>
      </section>
    </div>
  );

  return (
    <ServiceArticlePageClient
      candidates={[
        "оршуулгын үйл ажиллагаа гүйцэтгэх дараалал",
        "orshuulgiin uil ajillagaa guitsetgeh daraalal",
        "orshuulgiin-uil-ajillagaa-guitsetgeh-daraalal",
      ]}
      title="Оршуулгын үйл ажиллагаа гүйцэтгэх дараалал"
      fallback={fallback}
    />
  );
}