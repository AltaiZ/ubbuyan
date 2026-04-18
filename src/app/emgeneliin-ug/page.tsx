import React from "react";
import EmgenelPageClient from "./EmgenelPageClient";
import { getCmsPosts, type CmsPost } from "@/lib/cmsPosts";

export default async function Page() {
  let posts: CmsPost[] = [];

  try {
    posts = await getCmsPosts();
  } catch (error) {
    console.error("EMGENEL CMS ERROR:", error);
  }

  return <EmgenelPageClient initialPosts={posts} />;
}
