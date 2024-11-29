import React from "react";

import Slider from "./components/Slider";
import { getProductDetail } from "@/lib/products";

export default async function page({ params }: { params: { id: string } }) {
  const { product } = await getProductDetail({
    variables: { _id: params.id },
  });
  console.log(product, "product");

  return (
    <div id="content" style={{ display: "block" }}>
      <div className="row product_body">
        <article className="row product-detail">
          <div className="container detail">
            <div className="col-md-6">
              <Slider product={product} />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: product?.description || "" }}
            />
          </div>
        </article>
        <section className="hproducts product_tab">
          <div className="row p_tab">
            <div className="container">
              <ul className="product_details nav nav-tabs" role="tablist">
                {/*<li role="presentation" class="active"><a href="#p_detail1" aria-controls="p_detail1" role="tab" data-toggle="tab">Бүтээгдэхүүний тухай</a><div class="arrow-down"></div></li>
     <li role="presentation" class="" ><a href="#p_detail2" aria-controls="p_detail2" role="tab" data-toggle="tab">Тайлбар</a><div class="arrow-down"></div></li>*/}
                <li role="presentation" className="active">
                  <a
                    href="#p_detail3"
                    aria-controls="p_detail3"
                    role="tab"
                    data-toggle="tab"
                  >
                    Үйлчилгээний нөхцөл
                  </a>
                  <div className="arrow-down" />
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="fade tab-pane in active"
                id="p_detail3"
              >
                <p className="nuhtsul col-md-8 col-md-offset-2 col-xs-12">
                  <a href="http://ulaanbaatarbuyan.mn">
                    www.ulaanbaatarbuyan.mn
                  </a>{" "}
                  сайт нь Улаанбаатар буян ХХК ий өмч бөгөөд уг компаний үйл
                  ажиллагааг танилцуулах, хэрэглэгчдэд мэдээлэл түгээх
                  зориулалттай болно. Сайтын үйлчилгээг зориулалтын бусаар хууль
                  бус зүйлд, айлган сүрдүүлэх, бусдын нэр хүнд хувийн нууцад
                  халдах, ялгаварлан гадуурхах, дайрч доромжилох, хувийн болон
                  албаны нууц баримтыг олонд дэлгэх, зохиогчийн эрх зөрчих,
                  зөвшөөрөгдөөгүй зар сурталчилгааны зорилгоор ашиглах, мөн
                  бусдад хор хохирол учруулах зорилгоор кодыг оруулах, санаатай
                  болон санамсаргүйгээр бүхий л шатны хууль дүрмийг зөрчих
                  зэрэгт ашиглах хориотой! Энд заасан нөхцлийг зөрчсөн тухайн
                  мэдээллүүдийг сайтын администратор хэрэглэгчээс хамаарлгүйгээр
                  шууд устгана. Зохиогчийн эрхийг хүндэтгэж бусдын бүтээлийг
                  зөвшөөрөлгүй нийтлэх, хуулбарлах нь хориотой ба хуулиар
                  хамгаалагдсан.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
