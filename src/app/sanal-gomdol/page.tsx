import React from "react";
import ComplaintPageClient from "./ComplaintPageClient";

const fallbackContent = `
  <img class="full_img" src="/static/images/-2468521239344344000_1800_x_1012.jpg" />
`;

export default function Page() {
  return <ComplaintPageClient fallbackContent={fallbackContent} />;
}
