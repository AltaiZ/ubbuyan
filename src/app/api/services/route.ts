import { NextResponse } from "next/server";

const API_URL = "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/graphql";
const APP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6ImVRUkthUzUwMk9ZaWduOE14b29naSIsImlhdCI6MTc3MjAwMzcyOH0.QQ1zGyIgA3gQyFtsvvDOv6rD1GSty2swB7hOcy5t9wU";
const FILE_URL = "https://ulaanbaatarbuyanmn.next.erxes.io/gateway/read-file?key=";

const SERVICES = [
  { category: "dald-orshooh", fallback: "/static/images/dald3.jpg" },
  { category: "chandarlah", fallback: "/static/images/Funeral-urn-Flowers.jpg" },
  { category: "mashinii-uilchilgee", fallback: "/static/images/2.jpg" },
  { category: "ergelt", fallback: "/static/images/12.jpg" },
  { category: "tuv-bairnii-uilchilgee", fallback: "/static/images/-2468521239344344000_1800_x_1012.jpg" },
  { category: "ontsloh", fallback: "/static/images/sambal.jpg" },
];

export async function GET() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-token": APP_TOKEN,
    },
    body: JSON.stringify({
  query: `{ cpPostList(sortField: "createdAt", sortDirection: "DESC") { posts { _id thumbnail { url } categories { name } } } }`,
}),
  });
  const data = await res.json();
  const posts = data?.data?.cpPostList?.posts || [];

  const result = SERVICES.map((service) => {
    const post = posts.find((p: any) =>
      p.thumbnail?.url &&
      p.categories?.some((c: any) => c.name === service.category)
    );
    return {
      category: service.category,
      image: post?.thumbnail?.url ? FILE_URL + post.thumbnail.url : service.fallback,
    };
  });

  return NextResponse.json(result);
}