import Image from "next/image";
import FullScreenImage from "../components/FullScreenImage";
import Container from "../components/Container";
import Products from "../components/Products";
import CommentContainer from "../components/CommentContainer";
import About from "../components/About";
import Contact_Info from "../components/Contact_Info";
import Blog from "../components/Blog";
export default function Home() {
  return (
    <div>
      <FullScreenImage />
      <Container />
      <Products />
      <CommentContainer />
      <About />
      <Contact_Info />
      <Blog />
    </div>
  );
}
