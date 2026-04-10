import AboutClient from "./AboutClient";
import { findCmsPostByCandidates } from "@/lib/cmsPosts";

export default async function Page() {
  let post = null;

  try {
    post = await findCmsPostByCandidates([
      "бидний тухай",
      "bidnii tuhai",
      "tuhai",
    ]);
  } catch (error) {
    console.error("ABOUT CMS ERROR:", error);
  }

  return <AboutClient post={post} />;
}
