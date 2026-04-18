"use client";

import React from "react";
import { useQuery } from "@apollo/client/react";
import cmsQueries from "@/graphql/cms/queries";
import { findMatchingCmsPost } from "@/lib/cmsPosts";
import type { CmsPost } from "@/lib/cmsPosts";
import Erxesform from "./component/erxesForm";

type Props = {
  fallbackContent: string;
  initialPost?: CmsPost | null;
};

export default function ComplaintPageClient({
  fallbackContent,
  initialPost = null,
}: Props) {
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: {},
    fetchPolicy: "no-cache",
  });

  const post = findMatchingCmsPost(
    ((data as any)?.cpPostList?.posts || []) as CmsPost[],
    ["санал гомдол", "sanal gomdol", "complaint", "feedback"]
  );

  const content = post?.content || initialPost?.content || fallbackContent;

  return (
    <div id="content" style={{ display: "block" }}>
      <section className="container">
        <div className="col-md-4">
          <div id="form_container_3">
            <Erxesform />
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "        $(document).ready(function(){            nm.ajaxForm('#form_id_3', {                success: function(res){                    if (res.is_valid == 'true'){                        res.redirect_url ? location.href = res.redirect_url: $('#form_container_3').html(res.content);                    }else{                        $('#form_id_3 .errors').html(res.errors);                    };                },            });        });    ",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 col-md-offset-2 sanal">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </section>
    </div>
  );
}
