import { NextResponse } from "next/server";

const API_URL = "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql";
const APP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6ImVRUkthUzUwMk9ZaWduOE14b29naSIsImlhdCI6MTc3MjAwMzcyOH0.QQ1zGyIgA3gQyFtsvvDOv6rD1GSty2swB7hOcy5t9wU";

export async function GET() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-token": APP_TOKEN,
    },
    body: JSON.stringify({
      query: `{ cpPostList(sortField: "createdAt", sortDirection: "DESC") { posts { _id title thumbnail { url } categories { name } } } }`,
    }),
  });
  const data = await res.json();
  const posts = data?.data?.cpPostList?.posts || [];

  // "thumbnail-zurag-solix" category-тай thumbnail байгаа post авна
  const post = posts.find((p: any) =>
    p.thumbnail?.url &&
    p.categories?.some((c: any) => c.name === "thumbnail-zurag-solix")
  );

  return NextResponse.json({ thumbnail: post?.thumbnail?.url || null });
}