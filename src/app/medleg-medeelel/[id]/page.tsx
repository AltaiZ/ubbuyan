import CmsPostDetailPageClient from "@/components/CmsPostDetailPageClient";
import { getKbArticlesByCode } from "@/lib/kb";
import { getCmsPosts } from "@/lib/cmsPosts";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  let post: any = null;

  try {
    const cmsPosts = await getCmsPosts();
    const found = cmsPosts.find((p) => p._id === id);
    if (found) post = found;
  } catch (e) {}

  if (!post) {
    try {
      const { articles } = await getKbArticlesByCode("arag-hemjee");
      const kb = articles.find((a: any) => a._id === id);
      if (kb) {
        post = {
          _id: kb._id,
          title: kb.title,
          excerpt: kb.summary,
          content: kb.content,
          thumbnail: kb.image ? { url: kb.image.url } : null,
        };
      }
    } catch (e) {}
  }

  return (
    <CmsPostDetailPageClient
      id={id}
      initialPost={post}
      detailHrefBase="/medleg-medeelel"
    />
  );
}