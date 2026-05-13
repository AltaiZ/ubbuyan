import { cache } from "react";
import { gql } from "@apollo/client";
import { getClient } from "./ssClient";
import { queries } from "../graphql";
import { getCmsPosts, type CmsPost } from "./cmsPosts";

export type KbArticle = {
  _id: string;
  title?: string | null;
  code?: string | null;
  summary?: string | null;
  content?: string | null;
  image?: {
    url?: string | null;
  } | null;
  attachments?: Array<{
    url?: string | null;
    type?: string | null;
  }> | null;
};

export type CommonParams = {
  variables?: Record<string, unknown>;
};

const token = process.env.ERXES_APP_TOKEN;

const KB_CODE_CANDIDATES: Record<string, string[]> = {
  "medleg-medeelel": ["medleg medeelel", "мэдлэг мэдээлэл", "мэдээ мэдээлэл"],
  "arag-hemjee": ["arag hemjee", "арга хэмжээ", "event", "events"],
  "medlegiin-san": ["medlegiin san", "мэдлэгийн сан", "knowledge", "knowledge base"],
  ontsloh: ["ontsloh", "онцлох", "featured"],
};

export const KB_ARTICLES = gql`
  query knowledgeBaseArticles {
    knowledgeBaseArticles {
      _id
      title
      code
      summary
      content
    }
  }
`;

export async function getKbArticles() {
  const client = getClient();

  const { data } = await client.query<any>({
    query: KB_ARTICLES,
    fetchPolicy: "no-cache",
    context: token
      ? {
          headers: {
            "x-app-token": token,
          },
        }
      : undefined,
  });

  return data;
}

function normalizeKbValue(value?: string | null) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9а-яёөүңә\s-]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreKbMatch(article: KbArticle, candidates: string[]) {
  const haystacks = [article.code, article.title]
    .map(normalizeKbValue)
    .filter(Boolean);

  let score = -1;

  for (const candidate of candidates) {
    const needle = normalizeKbValue(candidate);

    if (!needle) {
      continue;
    }

    for (const haystack of haystacks) {
      if (haystack === needle) {
        score = Math.max(score, 3);
      } else if (haystack.includes(needle) || needle.includes(haystack)) {
        score = Math.max(score, 2);
      } else if (
        haystack.replace(/\s+/g, "") === needle.replace(/\s+/g, "")
      ) {
        score = Math.max(score, 1);
      }
    }
  }

  return score;
}

function getKbMatchCandidates(code: string) {
  return [code, ...(KB_CODE_CANDIDATES[code] || [])];
}

function mapCmsPostToKbArticle(post: CmsPost): KbArticle {
  return {
    _id: post._id,
    title: post.title,
    summary: post.excerpt,
    content: post.content,
    image: post.thumbnail?.url ? { url: post.thumbnail.url } : null,
  };
}

function scoreCmsFallbackMatch(post: CmsPost, candidates: string[]) {
  const haystacks = [
    post.title,
    ...(post.categories || []).map((category) => category?.name || ""),
  ]
    .map(normalizeKbValue)
    .filter(Boolean);

  let score = -1;

  for (const candidate of candidates) {
    const needle = normalizeKbValue(candidate);

    if (!needle) continue;

    for (const haystack of haystacks) {
      if (haystack === needle) {
        score = Math.max(score, 3);
      } else if (haystack.includes(needle) || needle.includes(haystack)) {
        score = Math.max(score, 2);
      } else if (
        haystack.replace(/\s+/g, "") === needle.replace(/\s+/g, "")
      ) {
        score = Math.max(score, 1);
      }
    }
  }

  return score;
}

async function getKbArticlesByFallback(code: string) {
  const candidates = getKbMatchCandidates(code);

  try {
    const data = await getKbArticles();
    const allArticles = ((data?.knowledgeBaseArticles as KbArticle[]) || []).filter(
      (article) => article?.content || article?.summary
    );

    if (code === "medleg-medeelel") {
      return { articles: allArticles };
    }

    const matchedArticles = allArticles.filter(
      (article) => scoreKbMatch(article, candidates) >= 0
    );

    if (matchedArticles.length > 0) {
      return { articles: matchedArticles };
    }
  } catch (error) {
    console.warn("KB ARTICLES FALLBACK ERROR:", error);
  }

  try {
    const cmsPosts = await getCmsPosts();
    const matchedPosts =
      code === "medleg-medeelel"
        ? cmsPosts
        : cmsPosts.filter((post) => scoreCmsFallbackMatch(post, candidates) >= 0);

    return {
      articles: matchedPosts.map(mapCmsPostToKbArticle),
    };
  } catch (error) {
    console.warn("CMS ARTICLES FALLBACK ERROR:", error);
    return { articles: [] as KbArticle[] };
  }
}

export async function findKbArticleByCandidates(candidates: string[]) {
  const data = await getKbArticles();
  const articles = ((data?.knowledgeBaseArticles as KbArticle[]) || []).filter(
    (article) => article?.content || article?.summary
  );

  const matches = articles
    .map((article) => ({
      article,
      score: scoreKbMatch(article, candidates),
    }))
    .filter((item) => item.score >= 0)
    .sort((left, right) => right.score - left.score);

  return matches[0]?.article || null;
}

export const getKbArticlesByCode = cache(async (code: string) => {
  try {
    const kbCat = await getClient().query<any>({
      query: queries.kbCategoryId,
      variables: { _id: code },
      context: token
        ? {
            headers: {
              "x-app-token": token,
            },
          }
        : undefined,
      fetchPolicy: "no-cache",
    });

    const category = (kbCat?.data as any)?.knowledgeBaseCategoryDetail;

    if (!category?._id) {
      return await getKbArticlesByFallback(code);
    }

    const { data } = await getClient().query<any>({
      query: queries.articles,
      variables: {
        categoryIds: [category._id],
        perPage: 2000,
      },
      context: token
        ? {
            headers: {
              "x-app-token": token,
            },
          }
        : undefined,
      fetchPolicy: "no-cache",
    });

    return {
      articles: (data?.knowledgeBaseArticles || []) as KbArticle[],
    };
  } catch (error) {
    console.error("KB CATEGORY ERROR:", error);
    return await getKbArticlesByFallback(code);
  }
});

export const KB_ARTICLE_DETAIL = gql`
  query knowledgeBaseArticleDetail($id: String!) {
    knowledgeBaseArticleDetail(_id: $id) {
      _id
      title
      code
      summary
      content
      attachments {
        url
        type
      }
      image {
        url
      }
    }
  }
`;

export async function getKbArticleDetail(
  input: { id: string } | { variables: { id: string } }
) {
  const client = getClient();
  const variables = "variables" in input ? input.variables : input;

  const { data } = await client.query<any>({
    query: KB_ARTICLE_DETAIL,
    variables,
    context: token
      ? {
          headers: {
            "x-app-token": token,
          },
        }
      : undefined,
    fetchPolicy: "no-cache",
  });

  return {
    article: data?.knowledgeBaseArticleDetail || null,
  };
}