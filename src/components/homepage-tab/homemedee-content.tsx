"use client";

import React, { useMemo, useState } from "react";
import HomeMedeeTab from "./homemedee-tab";
import LamNar from "../lam-nar";
import { getCmsPostThumbnailCandidates } from "@/lib/cms-media";

const ITEMS_PER_PAGE = 4;

export default function HomeMedeeContent({
  tabs,
  articles,
}: {
  tabs: any[];
  articles: any[];
}) {
  const [activeNewTab, setActiveNewsTab] = useState(tabs[0]?.id || "news");

  const filteredArticles = useMemo(() => {
    if (!articles?.length) return [];

    return articles.filter((article: any) =>
      article?.categories?.some((cat: any) => {
        const value = cat?.slug || cat?.name || cat?._id || "";
        return (
          String(value).toLowerCase().trim() ===
          String(activeNewTab).toLowerCase().trim()
        );
      })
    );
  }, [articles, activeNewTab]);

  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a: any, b: any) => {
      const left = new Date(a?.createdAt || 0).getTime();
      const right = new Date(b?.createdAt || 0).getTime();
      return right - left;
    });
  }, [filteredArticles]);

  const perArticles =
    activeNewTab === "zurhaich-lam-nar"
      ? sortedArticles
      : sortedArticles.slice(0, ITEMS_PER_PAGE);

  return (
    <div>
      <ul
        className="nav nav-tabs centered blog_buttons desktop-tab"
        role="tablist"
      >
        {tabs.map((tab: any) => (
          <HomeMedeeTab
            key={tab.id}
            name={tab.name}
            id={tab.id}
            state={activeNewTab}
            setState={setActiveNewsTab}
          />
        ))}

        <li role="presentation">
          <a href="/medee-medeelel/tugemel-asuult" role="tab">
            Түгээмэл асуулт
          </a>
        </li>

        <li role="presentation">
          <a href="/huuli-erh-zui" role="tab">
            Хууль эрх зүй
          </a>
        </li>
      </ul>

      <br />

      <div className="tab-content">
        <div
          className="sub_tab fade tab-pane in active"
          id="medee_medeelel"
          role="tabpanel"
        >
          {activeNewTab === "zurhaich-lam-nar" ? (
            <LamNar cmsLams={perArticles} />
          ) : perArticles.length > 0 ? (
            perArticles
              .slice()
              .reverse()
              .map((item: any) => {
                const thumbnailCandidates = getCmsPostThumbnailCandidates(item);
                const imageUrl = thumbnailCandidates[0] || "/static/images/news.jpg";

                return (
                  <div key={item._id} className="pc_tab col-md-3 col-sm-6">
                  <a href={`/medee-medeelel/${item._id}`}>
                    <div
                      className="p_img"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <img
                        src={imageUrl}
                        alt={item?.title || "news image"}
                        data-fallbacks={JSON.stringify([
                          ...thumbnailCandidates.slice(1),
                          "/static/images/news.jpg",
                        ])}
                        onError={(event) => {
                          const target = event.currentTarget;
                          const raw = target.getAttribute("data-fallbacks") || "[]";
                          const fallbackList = JSON.parse(raw) as string[];
                          const next = fallbackList.shift();

                          if (!next) {
                            return;
                          }

                          target.setAttribute("data-fallbacks", JSON.stringify(fallbackList));
                          target.src = next;
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div className="overlay">
                        <img
                          className="c_arrow"
                          src="/static/images/8.png"
                          alt="arrow"
                        />
                      </div>
                    </div>

                    <div className="garchig">
                      <h4>{item?.title}</h4>
                      <i>{item?.excerpt || item?.summary || ""}</i>
                    </div>
                  </a>
                  </div>
                );
              })
          ) : (
            <div style={{ padding: "20px 0" }}>Пост олдсонгүй</div>
          )}
        </div>
      </div>
    </div>
  );
}
