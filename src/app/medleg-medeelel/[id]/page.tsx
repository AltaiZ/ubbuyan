"use client";

import { useParams } from "next/navigation";
import CmsPostDetailPageClient from "@/components/CmsPostDetailPageClient";

export default function Page() {
  const params = useParams();
  const id = params?.id as string;

  return <CmsPostDetailPageClient id={id} detailHrefBase="/medleg-medeelel" />;
}
