"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import cmsQueries from "@/graphql/cms/queries";
import {
  findMatchingCmsPosts,
  type CmsPost,
} from "@/lib/cmsPosts";

const SECTION_CONFIG = [
  {
    id: "emgenelemg",
    label: "Эмгэнэлийн үг",
    candidates: ["эмгэнэлийн үг", "эмгэнэл", "emgeneliin ug", "emgenel"],
  },
  {
    id: "emgenelaavdaa",
    label: "Аавдаа зориулсан үг",
    candidates: ["аавдаа зориулсан үг", "aavdaa zoriulsan ug"],
  },
  {
    id: "emgeneleej",
    label: "Ээждээ зориулсан үг",
    candidates: ["ээждээ зориулсан үг", "eejdee zoriulsan ug"],
  },
  {
    id: "emgenelandnohor",
    label: "Анд нөхөртөө зориулсан үг",
    candidates: ["анд нөхөртөө зориулсан үг", "anddaa-emgenel", "and nohortoo zoriulsan ug"],
  },
  {
    id: "emgenelhamtran",
    label: "Хамтран зүтгэгчдээ зориулсан үг",
    candidates: [
      "хамтран зүтгэгчдээ зориулсан үг",
      "hamtragchdaa-emgenel",
      "hamtran zutgegchded zoriulsan ug",
    ],
  },
] as const;

type Props = {
  initialPosts: CmsPost[];
};

function resolveSections(posts: CmsPost[]) {
  const matches = findMatchingCmsPosts(
    posts,
    SECTION_CONFIG.map((section) => [...section.candidates])
  );

  return SECTION_CONFIG.map((section, index) => ({
    ...section,
    post: matches[index] || null,
  })).filter((section) => section.post);
}

export default function EmgenelPageClient({ initialPosts }: Props) {
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const livePosts = ((data as any)?.cpPostList?.posts || []) as CmsPost[];
  const sections = resolveSections(livePosts.length ? livePosts : initialPosts);

  return (
    <div id="content" style={{ display: "block" }}>
      <section className="simple_page container">
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img alt="Эмгэнэлийн үг" src="/static/images/icon.png" />
          </div>
        </div>

        <div className="emgenel" data-spy="scroll" data-target=".sidebar">
          <div className="container">
            <div className="row">
              <div className="hidden-xs col-md-3 col-md-offset-0 sidebar emgenelsubmenu">
                <ul className="nav nav-list affix emgenelsubmenu">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        className={index === 0 ? "active" : undefined}
                        href={`#${section.id}`}
                      >
                        <h4>{section.label}</h4>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-8 col-md-offset-1 content">
                {sections.length ? (
                  sections.map((section) => (
                    <section id={section.id} key={section.id}>
                      <h3>{section.post?.title || section.label}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            section.post?.content || section.post?.excerpt || "",
                        }}
                      />
                    </section>
                  ))
                ) : (
                  <section id="emgenelemg">
                    <h3>Эмгэнэлийн үг</h3>
                    <p>CMS-ээс эмгэнэлийн агуулга олдсонгүй.</p>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
