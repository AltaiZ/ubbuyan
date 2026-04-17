"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import cmsQueries from "@/graphql/cms/queries";
import { findMatchingCmsPost } from "@/lib/cmsPosts";
import type { CmsPost } from "@/lib/cmsPosts";
import ErxesForm from "./component/erxesForm";

type Props = {
  fallbackContent: string;
};

export default function ContactPageClient({ fallbackContent }: Props) {
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: { searchValue: "holboo barih" },
    fetchPolicy: "no-cache",
  });

  const post = findMatchingCmsPost(
    ((data as any)?.cpPostList?.posts || []) as CmsPost[],
    [
      "холбоо барих",
      "холбоо барих утас",
      "holboo barih",
      "holboo-barih",
      "holboo barikh",
      "holboo",
      "contact",
      "contact us",
      "эрдэнэт хүмүүнийг мөнхжүүлж дурсгалыг нь хүндэтгэн дээдлье",
    ]
  );

  const content = post?.content || fallbackContent;
  const title =
    post?.title || "ЭРДЭНЭТ ХҮМҮҮНИЙГ МӨНХЖҮҮЛЖ ДУРСГАЛЫГ НЬ ХҮНДЭТГЭН ДЭЭДЛЬЕ";

  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <div className="get_help center">
          <img
            alt="contact logo"
            className="contact-logo"
            src="/static/images/blue_logo.png"
          />
          <h3>{title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img alt="icon" src="/static/images/icon12.png" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <p></p>
          <figure>
            <iframe
              allowFullScreen
              frameBorder="0"
              src="//www.youtube.com/embed/9s32DTTLNMA"
              style={{
                height: "281px",
                width: "500px",
              }}
            />
          </figure>
          <p />
        </div>

        <div className="col-md-6 col-md-offset-2 holboo">
          <img alt="" className="full_img" src="" />
        </div>
      </section>
      <section className="container">
        <ErxesForm />
      </section>
    </div>
  );
}
