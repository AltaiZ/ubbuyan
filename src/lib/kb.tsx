import { cache, ReactNode } from "react";
import { getClient } from "./ssClient";
import { queries } from "../graphql";
import type { QueryOptions } from "@apollo/client";

const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN;

export interface CommonParams {
  variables?: QueryOptions["variables"];
}

export type GetKbArticleDetail = (params?: CommonParams) => Promise<{
  error_msg: string | undefined;
  article: IArticle;
}>;

export const getKbArticleDetail: GetKbArticleDetail = cache(async (params) => {
  const { data, error } = await getClient().query({
    query: queries.articleDetail,
    variables: params?.variables,
    context: {
      headers: {
        "erxes-app-token": token,
      },
    },
  });

  const { knowledgeBaseArticleDetail: article } = data || {};

  return {
    article,
    error_msg: error?.message,
  };
});



export const getKbArticlesByCode: GetKbArticles = cache(
  async (code, params) => {
    const kbCat = await getClient().query({
      query: queries.kbCategoryId,
      variables: { _id: code },
      context: {
        headers: {
          "erxes-app-token": token,
        },
      },
    });

    const { knowledgeBaseCategoryDetail: category } = kbCat.data || {};

    const { data, error } = await getClient().query({
      query: queries.articles,
      variables: {
        ...params?.variables,
        categoryIds: [category?._id],
        perPage: 2000,
      },
      context: {
        headers: {
          "erxes-app-token": token,
        },
      },
    });

    const { knowledgeBaseArticles: articles } = data || {};

    return {
      articles,
      error_msg: error?.message,
    };
  }
);
export const kbTopicDetail: GetKbTopicDetail = cache(async (params) => {
  const { data, error } = await getClient().query({
    query: queries.kbTopicDetail,
    variables: params?.variables,
    context: {
      headers: {
        "erxes-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    },
  });
  const { knowledgeBaseTopicDetail: topic } = data || {};
  return {
    topic,
    error_msg: error?.message,
  };
});

export type GetKbTopicDetail = (params?: CommonParams) => Promise<{
  error_msg: string | undefined;
  topic: IKBTopicDetail;
}>;

export type GetKbArticles = (
  code: string,
  params?: { variables?: QueryOptions["variables"] }
) => Promise<{
  error_msg: string | undefined;
  articles: IArticle[];
}>;

export interface IArticle {
  _id: string;
  content: string;
  image?: IAttachment;
  attachments?: IAttachment[];
  summary?: string;
  title: string;
}

export interface IKBTopicDetail {
  products: any;
  _id: string;
  title: string;
  code: string;
  brand: Brand;
  description?: string;
  categories: IKBCategoryDetail[];
}

export interface IKBCategoryDetail {
  image: any;
  summary: ReactNode;
  _id: string;
  title: string;
  code: string;
  description?: string;
  articles: IArticle[];
}

export interface Brand {
  _id: string;
  name: string;
}

export type IAttachment = { url?: string } | null;
