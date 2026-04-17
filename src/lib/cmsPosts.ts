import { getClient } from "./ssClient";
import cmsQueries from "@/graphql/cms/queries";

export type CmsPost = {
  _id: string;
  title?: string | null;
  content?: string | null;
  excerpt?: string | null;
  categories?: Array<{
    _id?: string | null;
    name?: string | null;
  }> | null;
};

function normalizeValue(value?: string | null) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9а-яёөүңә\s-]+/gi, " ")
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreMatch(post: CmsPost, candidates: string[]) {
  const values = [
    post.title,
    ...(post.categories || []).map((category) => category?.name || ""),
  ]
    .map(normalizeValue)
    .filter(Boolean);

  let score = -1;

  for (const candidate of candidates) {
    const needle = normalizeValue(candidate);

    if (!needle) {
      continue;
    }

    for (const value of values) {
      const compactValue = value.replace(/\s+/g, "");
      const compactNeedle = needle.replace(/\s+/g, "");

      if (value === needle) {
        score = Math.max(score, 5);
      } else if (compactValue === compactNeedle) {
        score = Math.max(score, 4);
      } else if (value.includes(needle) || needle.includes(value)) {
        score = Math.max(score, 3);
      }
    }
  }

  return score;
}

export async function getCmsPosts() {
  const client = getClient();
  const { data } = await client.query<any>({
    query: cmsQueries.cmsPostList,
    variables: {},
    fetchPolicy: "no-cache",
  });

  return (data?.cpPostList?.posts || []) as CmsPost[];
}

export async function searchCmsPosts(searchValue: string) {
  const client = getClient();
  const { data } = await client.query<any>({
    query: cmsQueries.cmsPostList,
    variables: { searchValue },
    fetchPolicy: "no-cache",
  });

  return (data?.cpPostList?.posts || []) as CmsPost[];
}

export async function findCmsPostByCandidates(candidates: string[]) {
  const collectedPosts: CmsPost[] = [];
  const seenIds = new Set<string>();

  for (const candidate of candidates) {
    const posts = await searchCmsPosts(candidate);

    for (const post of posts) {
      if (!post?._id || seenIds.has(post._id)) {
        continue;
      }

      seenIds.add(post._id);
      collectedPosts.push(post);
    }
  }

  const posts = collectedPosts.length ? collectedPosts : await getCmsPosts();

  return findMatchingCmsPost(posts, candidates);
}

export function findMatchingCmsPost(posts: CmsPost[], candidates: string[]) {
  const safePosts = posts || [];

  const matches = safePosts
    .filter((post) => post?.content || post?.excerpt)
    .map((post) => ({
      post,
      score: scoreMatch(post, candidates),
    }))
    .filter((item) => item.score >= 0)
    .sort((left, right) => right.score - left.score);

  return matches[0]?.post || null;
}
