import React from "react";
import ComplaintPageClient from "./ComplaintPageClient";
import { findCmsPostByCandidates } from "@/lib/cmsPosts";

const fallbackContent = `
  <img class="full_img" src="/static/images/-2468521239344344000_1800_x_1012.jpg" />
`;

export default async function Page() {
  let post = null;

  try {
    post = await findCmsPostByCandidates([
      "санал гомдол",
      "sanal gomdol",
      "complaint",
      "feedback",
    ]);
  } catch (error) {
    console.error("COMPLAINT CMS ERROR:", error);
  }

  return (
    <ComplaintPageClient
      fallbackContent={fallbackContent}
      initialPost={post}
    />
  );
}
