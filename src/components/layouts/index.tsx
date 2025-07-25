// import BottomNav from '../bottom-nav/bottom-nav';
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Footer from "../footer/footer";
import { Suspense } from "react";
import NavTop from "./nav";
import BottomNav from "../bottom-nav/bottom-nav";
// import Birthday from '../birthday-form';

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavTop />
      {children}
      <ScrollToTop />
      <Suspense>
        <BottomNav />
      </Suspense>
      <Footer />
    </>
  );
};

export default DefaultLayout;
