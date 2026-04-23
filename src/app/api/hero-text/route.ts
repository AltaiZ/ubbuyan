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
      query: `{ cpPostList(sortField: "createdAt", sortDirection: "DESC") { posts { _id title content categories { name } } } }`,
    }),
  });
  const data = await res.json();
  const posts = data?.data?.cpPostList?.posts || [];
  const post = posts.find((p: any) =>
    p.categories?.some((c: any) => c.name === "hero-text")
  );

  function stripHtml(html: string) {
    return html ? html.replace(/<[^>]*>/g, "").trim() : "";
  }

  return NextResponse.json({
    title: post?.title ? stripHtml(post.title) : "ИТГЭЛ ДААХ ХАМТ ОЛОН",
    content: post?.content ? stripHtml(post.content) : "60 жилийн туршлагатай мэргэжлийн баг хамт олон танд буяны үйлчилгээний талаарх бүхий л зөвлөгөө, мэдээ мэдээллийг цаг алдалгүй хүргэж, нэг цэгийн үйлчилгээг үзүүлэхэд үргэлж бэлэн байдаг.",
  });
}
