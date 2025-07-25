// import { CategoryCard } from "@/components/category-card/category-card";
// import { Heading } from "@/components/heading/heading";
// import RecommendedProducts from "@/components/recommended-products/recommended-products";
// import { getConfig } from "@/sdk/queries/auth";
// import { Metadata } from "next/types";
// import { Suspense } from "react";
// import { IPageProps } from "@/types";
// import HomeCategory from "./home-category/page";
// import FullScreenImage from "@/components/FullScreenImage";
// export const revalidate = 300;
// export async function generateMetadata(): Promise<Metadata> {
//   const { config } = await getConfig();
//   return {
//     title: config.name + " - Нүүр хуудас",
//     openGraph: {
//       title: config.name + " - Нүүр хуудас",
//     },
//   };
// }

// {/* <FullScreenImage />
// <Container />
// <Products searchParams={searchParams} params={{}} />
// <CommentContainer />
// <About />
// <Contact_Info />
// <Blog /> */}

// export default function Home(props: IPageProps) {
//   return (
//     <div className="min-h-screen">
//       <FullScreenImage />
//       <CategoryCard />

//       <div className="container mb-20 md:mb-14 mt-10">
//         <Heading
//           title="Сүүлд нэмэгдсэн"
//           className="text-left mb-3 md:mb-5 "
//         />
//         <Suspense>
//           <RecommendedProducts />
//         </Suspense>
//       </div>
//       <HomeCategory {...props} />

//     </div>
//   );
// }



import Image from "next/image";
import FullScreenImage from "../components/FullScreenImage";
import Container from "../components/Container";
import Products from "../components/Products";
import CommentContainer from "../components/CommentContainer";
import About from "../components/About";
import Contact_Info from "../components/Contact_Info";
import Blog from "../components/Blog";
import { IPageProps } from "@/types";
export default function Home({ searchParams }: IPageProps) {
  return (
    <div>
      <FullScreenImage />
      <Container />
      <Products searchParams={searchParams} params={{}} />
      <CommentContainer />
      <About />
      <Contact_Info />
      <Blog />
    </div>
  );
}
