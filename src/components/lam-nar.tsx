"use client";

import React, { useMemo, useState } from "react";
import { useQuery } from "@apollo/client/react";
import queries from "@/graphql/cms/queries";

function cleanHtml(html: string) {
  return html
    .replace(/<p><strong>Хаяг<\/strong><\/p>/gi, "")
    .replace(/<p><strong>УТАС:?<\/strong><\/p>/gi, "")
    .replace(/<p><strong>Утас:?<\/strong><\/p>/gi, "")
    .replace(/<p><\/p>/gi, "")
    .trim();
}

const HARDCODED_LAMS = [
  { name: "Санжаадорж", phone: "УТАС: +976-99890614", address: "Хувиараа" },
  { name: "А.Эрдэнэбат", phone: "УТАС: +976-88119032", address: "Үржин шадовлин хийд" },
  { name: "Ч. Алтангэрэл", phone: "УТАС: +976-Дашчойлон хийд", address: "88772742" },
  { name: "Я.Аюурзана", phone: "УТАС: +976-91999535", address: "Манба дацан" },
  { name: "Энхбат", phone: "УТАС: +976-99193681", address: "Гандан тэгчэнлин хийд" },
  { name: "Д.Цогтбаатар", phone: "УТАС: +976-99996668", address: "Гандан тэгчэнлин хийд" },
  { name: "Ц.Гүнчин-Иш", phone: "УТАС: +976-91917492", address: "Гэсэр сүм" },
  { name: "Галсан", phone: "УТАС: +976-99106565", address: "Түвдэнпэлжээлин хийд" },
  { name: "Ж.Гончигсүрэн", phone: "УТАС: +976-99092007", address: "Түвдэнпэлжээлин хийд" },
  { name: "Цолмон", phone: "УТАС: +976-99279216", address: "Түвдэнпэлжээлин хийд" },
];

export default function LamNar({ cmsLams = [] }: { cmsLams?: any[] }) {
  const [activeTab, setActiveTab] = useState("list");

  const { data: searchedLamData } = useQuery(queries.cmsPostList, {
    variables: { searchValue: "лам" },
    fetchPolicy: "no-cache",
  });

  const cmsLamsList = useMemo(() => {
    const searchedLamPosts = ((searchedLamData as any)?.cpPostList?.posts || []).filter(
      (item: any) =>
        item?.categories?.some(
          (cat: any) =>
            String(cat?.slug || cat?.name || "").toLowerCase().trim() === "zurhaich-lam-nar"
        )
    );

    const byId = new Map<string, any>();
    [...searchedLamPosts, ...cmsLams].forEach((item: any) => {
      if (item?._id) byId.set(item._id, item);
    });

    return Array.from(byId.values()).sort((a: any, b: any) => {
      const left = new Date(a?.createdAt || 0).getTime();
      const right = new Date(b?.createdAt || 0).getTime();
      return right - left;
    });
  }, [cmsLams, searchedLamData]);

  return (
    <div id="content" style={{ display: "block" }}>
      <div className="blog_cat container wrapper h_blog">
        <div className="tab-content">
          <div role="tabpanel" className="sub_tab fade tab-pane in active" id="zurhaich_lam">
            <ul className="nav nav-tabs centered blog_buttons lam_tabs">
              <li className={`both_list tab2-1 ${activeTab === "list" ? "active" : ""}`} onClick={() => setActiveTab("list")}>
                <span>Жагсаалтаар</span>
              </li>
              <li className={`both_list tab2-2 ${activeTab === "map" ? "active" : ""}`} onClick={() => setActiveTab("map")}>
                <span>Газрын зургаар</span>
              </li>
            </ul>

            {activeTab === "list" && (
              <div className="lam_more">
                <div className="list" id="tab2-1" style={{ display: "block" }}>

                  {/* CMS-аас ирсэн шинэ лам нар — хамгийн дээд талд */}
                  {cmsLamsList.map((item: any) => (
                    <div key={item._id} className="lam row">
                      <div className="col-md-6 info">
                        <img className="lam_icon" src="/static/images/lam_icon.png" alt="lam" />
                        <h4>{item?.title || ""}</h4>
                        <p>{item?.excerpt || ""}</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <div dangerouslySetInnerHTML={{ __html: cleanHtml(item?.content || "") }} />
                      </div>
                    </div>
                  ))}

                  {/* Hardcoded лам нар — доор */}
                  {HARDCODED_LAMS.map((lam, index) => (
                    <div key={index} className="lam row">
                      <div className="col-md-6 info">
                        <img className="lam_icon" src="/static/images/lam_icon.png" alt="lam" />
                        <h4>{lam.name}</h4>
                        <p>{lam.phone}</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>{lam.address}</p>
                      </div>
                    </div>
                  ))}

                  <div className="clearfix" />
                </div>
                <div className="map mapclass" id="tab2-2"></div>
              </div>
            )}

            {activeTab === "map" && (
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  src="https://www.google.com/maps/search/+%D0%A5%D0%B8%D0%B9%D0%B4/@47.8933202,106.9086396,18216m/data=!3m1!1e3?authuser=0&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}