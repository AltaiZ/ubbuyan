import { cache } from "react";
import { getClient } from "./ssClient";
import { queries } from "@/graphql";
import { CommonParams } from "./kb";

const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN;

type GetProducts = (params?: CommonParams) => Promise<{
  products: IProducts[];
  error_msg: string | undefined;
}>;

type GetProductCategories = (params?: CommonParams) => Promise<{
  categories: any[];
  error_msg: string | undefined;
}>;

type GetProductDetail = (params?: CommonParams) => Promise<{
  product: IProduct;
  error_msg: string | undefined;
}>;

export const getProducts: GetProducts = cache(async (params: any) => {
  const { data, error } = await getClient().query({
    query: queries.products,
    variables: params?.variables,
    context: {
      headers: {
        "erxes-app-token": process.env.NEXT_ERXES_APP_TOKEN,
      },
    },
  });

  const { products: products } = data || {};

  return {
    products,
    error_msg: error?.message,
  };
});

export const getProductCategories: GetProductCategories = cache(
  async (params: any) => {
    const { data, error } = await getClient().query({
      query: queries.productCategories,
      variables: params?.variables,
      context: {
        headers: {
          "erxes-app-token": process.env.NEXT_ERXES_APP_TOKEN,
        },
      },
    });

    const { productCategories: categories } = data || {};

    return {
      categories,
      error_msg: error?.message,
    };
  }
);

export const getProductDetail: GetProductDetail = cache(async (params: any) => {
  const { data, error } = await getClient().query({
    query: queries.productDetail,
    variables: params?.variables,
    context: {
      headers: {
        "erxes-app-token": process.env.NEXT_ERXES_APP_TOKEN,
      },
    },
  });

  const { productDetail: product } = data || {};

  return {
    product,
    error_msg: error?.message,
  };
});

export interface IProductsBase {
  _id: string;
  name: string;
  unitPrice: number;
  isPackage?: boolean;
}

export interface IProductBase {
  _id: string;
  name: string;
  unitPrice: number;
  isPackage?: boolean;
}

export interface CustomField {
  field: string;
  value: string;
  stringValue: string;
}

export interface Group {
  fieldId: string;
  title: string;
}

export interface IProduct extends IProductBase {
  categoryId?: string | null;
  type?: string | null;
  description?: string | null;
  attachment?: { url?: string } | null;
  remainder?: number;
  code?: string;
  manufacturedDate?: string;
  hasSimilarity?: boolean;
  customFieldsData?: CustomField[];
  shortName?: string;
}

export interface IProducts extends IProductsBase {
  categoryId?: string | null;
  type?: string | null;
  description?: string | null;
  attachment?: { url?: string } | null;
  remainder?: number;
  code?: string;
  manufacturedDate?: string;
  hasSimilarity?: boolean;
  customFieldsData?: CustomField[];
  shortName?: string;
}
