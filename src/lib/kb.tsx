import { cache } from "react";
import { getClient } from "./ssClient";
import { queries } from "../graphql";

const token = process.env.ERXES_APP_TOKEN;

export const getKbArticlesByCode = cache(async (code: string) => {
  try {
    const kbCat = await getClient().query({
      query: queries.kbCategoryId,
      variables: { _id: code },
      context: {
        headers: {
          "x-app-token": token,
        },
      },
      fetchPolicy: "no-cache",
    });

    const category = kbCat?.data?.knowledgeBaseCategoryDetail;

    if (!category?._id) {
      console.error("KB category not accessible:", code);
      return { articles: [] };
    }

    const { data } = await getClient().query({
      query: queries.articles,
      variables: {
        categoryIds: [category._id],
        perPage: 2000,
      },
      context: {
        headers: {
          "x-app-token": token,
        },
      },
      fetchPolicy: "no-cache",
    });

    return {
      articles: data?.knowledgeBaseArticles || [],
    };
  } catch (e) {
    console.error("KB ERROR:", e);
    return { articles: [] };
  }
});