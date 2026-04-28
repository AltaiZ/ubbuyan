import React from "react";
import PanoramaViewer from "@/components/PanoramaViewer";
import ServiceArticlePage from "@/components/service/ServiceArticlePage";
import { findCmsPostByCandidates } from "@/lib/cmsPosts";

const fallback = <PanoramaViewer />;

export default async function page() {
  const candidates = ["Виртуал аялал", "virtual-ayalal", "virtual ayalal"];

  try {
    const post = await findCmsPostByCandidates(candidates);

    if (post) {
      return <ServiceArticlePage post={post} title="Виртуал аялал" />;
    }
  } catch (error) {
    console.error("CMS ERROR: virtual-aylal", error);
  }

  return fallback;
}
