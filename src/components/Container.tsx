"use client";
import React, { useEffect, useState } from "react";

const SERVICES = [
  { category: "dald-orshooh", href: "/dald-orshih-uilchilgee/", title: "Далд оршоох үйлчилгээ", fallback: "/static/images/dald3.jpg" },
  { category: "chandarlah", href: "/chandarlah-uilchilgee/", title: "Чандарлах үйлчилгээ", fallback: "/static/images/Funeral-urn-Flowers.jpg" },
  { category: "mashinii-uilchilgee", href: "/mashinii-uilchilgee/", title: "Машины үйлчилгээ", fallback: "/static/images/2.jpg" },
  { category: "ergelt", href: "/ergeltiin-uilchilgee/", title: "Эргэлтийн үйлчилгээ", fallback: "/static/images/12.jpg" },
  { category: "tuv-bairnii-uilchilgee", href: "/tuw-bairnii-uichilgee/", title: "Төв байрны үйлчилгээ", fallback: "/static/images/-2468521239344344000_1800_x_1012.jpg" },
  { category: "ontsloh", href: "http://sambalkhundev.mn/", title: "Хүндэтгэлийн цэцэрлэгт хүрээлэн төслийн танилцуулга", fallback: "/static/images/sambal.jpg" },
];

export default function Container() {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then((data: { category: string; image: string }[]) => {
        const map: Record<string, string> = {};
        data.forEach((item) => { map[item.category] = item.image; });
        setImages(map);
      });
  }, []);

  const getBg = (service: typeof SERVICES[0]) => {
    const img = images[service.category] || service.fallback;
    return `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${img}') no-repeat center`;
  };

  return (
    <div>
      {/* MOBILE */}
      <section className="container-fluid mobilehservice visible-xs">
        <div className="row">
          <h4>Үйлчилгээ</h4>
          <div className="owl-carousel owl-theme owl-loaded owl-drag" id="service-slider">
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{ paddingLeft: "50px", paddingRight: "50px", transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "1750px" }}>
                {SERVICES.map((service) => (
                  <div key={service.category} className="owl-item active" style={{ marginRight: "10px", width: "320px" }}>
                    <div className="item">
                      <div className="services">
                        <a href={service.href}>
                          <div className="s_item col-md-4 np" style={{ background: getBg(service), backgroundSize: "cover" }}>
                            <h3>{service.title}</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className="container-fluid hservice hidden-xs">
        <div className="row">
          <div className="arrow-up" />
          <div className="servicetitle">
            <h2>Үйлчилгээ</h2>
            <p>Бид та бүхэнд дараах үйлчилгээнүүдийг санал болгож байна.</p>
          </div>
          {SERVICES.map((service) => (
            <div key={service.category} className="services">
              <a href={service.href}>
                <div className="s_item col-md-4 np" style={{ background: getBg(service), backgroundSize: "cover" }}>
                  <h3>
                    {service.title}
                    <i className="c_arr"><i className="r_arrow" /></i>
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}