import { kbTopicDetail } from "@/lib/kb";
import { getProducts } from "@/lib/products";
import { IPageProps } from "@/types";
import React from "react";
import HomepageTab from "./homepage-tab/homepage-tab";
import { url } from "inspector";

const ITEMS_PER_PAGE = 4;

export default async function Products({ searchParams }: IPageProps) {
  const activeTab = searchParams.activeTab;

  const { products } = await getProducts({
    variables: {
      categoryId:
        activeTab === "ontsloh"
          ? "IyBZvTVk0MEH8zzbXsjJv"
          : activeTab === "hairtsag"
          ? "Gcd-Kq0cfnAerSq9udlUk"
          : activeTab === "hoshoo"
          ? "b53tve5NEAt2Wqf7A2ec3"
          : activeTab === "suvarga"
          ? "fVrZZn1XcQ0rc_OugTyVa"
          : activeTab === "tsetseg"
          ? "Gcd-Kq0cfnAerSq9udl"
          : activeTab === "zed"
          ? "JYYQypAlxufqG6Qds-CIl"
          : "",
    },
  });

  const paginatedArticles = products.slice(0, ITEMS_PER_PAGE);

  const tabs = [
    { name: "Онцлох", id: "ontsloh", url: "/static/images/icon1.png" },
    { name: "хайрцаг", id: "hairtsag", url: "/static/images/icon2.png" },
    { name: "хөшөө", id: "hoshoo", url: "/static/images/icon3.png" },
    { name: "сац суварга", id: "suvarga", url: "/static/images/icon4.png" },
    {
      name: "хүндэтгэлийн цэцэг",
      id: "tsetseg",
      url: "/static/images/icon5.png",
    },
    { name: "зэд", id: "zed" },
  ];

  // console.log(products, "products");

  return (
    <div>
      {/* <section className="hproducts">
        <div className="container">
          <div className="p_tab hidden-xs">
            <ul className="nav nav-tabs menutab" role="tablist">
              {tabs.map((tab) => (
                <HomepageTab
                  key={tab.id}
                  name={tab.name}
                  id={tab.id}
                  url={tab.url}
                  searchParams={searchParams}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="tab-content">
            <div
              className="fade tab-pane row active in"
              id="ontsloh"
              role="tabpanel"
            >
              {paginatedArticles?.map((item: any) => (
                <div
                  className="pc_tab col-md-3 col-sm-6 col-xs-6"
                  key={item._id}
                >
                  <a href={`/product/${item?._id}`}>
                    <div
                      className="p_img"
                      style={{
                        background: `url(https://ulaanbaatarbuyan.app.erxes.io/api/read-file?key=${item?.attachment?.url}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="overlay">
                        <img
                          className="c_arrow"
                          src="/static/images/sum-white.png"
                        />
                      </div>
                    </div>
                    <h3>{item.name}</h3>
                  </a>
                </div>
              ))}
            </div>
            <div className="fade tab-pane row" id="hairtsag" role="tabpanel">
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%85%D1%8D%D1%8D%D1%82%D1%8D%D0%B9-%D0%BC%D0%B8%D1%88%D0%BE%D0%BA/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/43.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Хээтэй мишок</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/зэд/9.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Торгон чимэглэлтэй лакан хайрцаг</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/6-%D1%82%D0%B0%D0%BB%D1%82-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%B8%D0%B1/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/зэд/6.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>6 талт модон хайрцаг - ИБ</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%82%D0%BE%D0%BD%D0%BE%D0%B3%D0%BB%D0%BE%D0%BB%D1%82%D0%BE%D0%B9-%D0%BB%D0%B0%D0%BA%D0%B0%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3-%D0%B8%D0%B1/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/зэд/3.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Тоноглолтой лакан хайрцаг - ИБ</h3>
                </a>
              </div>
            </div>
            <div className="fade tab-pane row" id="hushuu" role="tabpanel">
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B3-15-%D1%83-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/18.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Г-15-у /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B1-15-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/17.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Б-15-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B1-14-%D1%81-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/16.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Б-14-с /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
              <div className="pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B3-14-%D1%85-%D1%85%D2%AF%D0%BD%D0%B4%D1%8D%D1%82%D0%B3%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D1%86%D0%BE%D0%B3%D1%86-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D%D0%BD%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Хөшөө/15.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Г-14-х /Хүндэтгэлийн цогц үйлчилгээнд/</h3>
                </a>
              </div>
            </div>
            <div className="fade tab-pane row" id="sats" role="tabpanel">
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%D0%BB%D1%8D%D0%BB%D1%82%D1%8D%D0%B9-%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D0%BC%D0%BE%D0%B4%D0%BE%D0%BD-%D1%85%D0%B0%D0%B9%D1%80%D1%86%D0%B0%D0%B3/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/FA832462-E735-4FE2-8863-CFC8CD7EBB38.png') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Чимэглэлтэй чандрын модон хайрцаг</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%85%D1%83%D0%BB%D1%81%D0%B0%D0%BD-%D1%81%D0%B0%D0%B2/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/ХАЙРЦАГ_1.png') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Чандрын хулсан сав</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%88%D0%B0%D0%B0%D0%B7%D0%B0%D0%BD-%D0%B1%D1%83%D0%BC%D0%B1%D0%B0/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/ШААЗАН_1.png') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Чандрын шаазан бумба</h3>
                </a>
              </div>
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%D0%BD-%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%BD-%D1%83%D1%83%D1%82/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/Testimonial/Торгон_уут.png') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Чандрын торгон уут</h3>
                </a>
              </div>
            </div>
            <div
              className="fade tab-pane row"
              id="tsetseg"
              role="tabpanel"
            ></div>
            <div className="fade tab-pane row" id="zed" role="tabpanel">
              <div className=" pc_tab col-md-3 col-sm-6 col-xs-6">
                <a href="/%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D0%B7%D1%8D%D0%B4/">
                  <div
                    className="p_img"
                    style={{
                      background:
                        "url('/static/images/316800705_228194152869741_4762417102619081352_n.jpg') no-repeat center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="overlay">
                      <img
                        className="c_arrow"
                        src="/static/images/sum-white.png"
                      />
                    </div>
                  </div>
                  <h3>Буяны зэд</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
