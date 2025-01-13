import Image from "next/image";
// import FullScreenImage from "../components/FullScreenImage";
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
      {/* <FullScreenImage /> */}
      <Container />
      <Products searchParams={searchParams} params={{}} />
      <CommentContainer />
      <About />
      <Contact_Info />
      <Blog />
    </div>
  );
}
