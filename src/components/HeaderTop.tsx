import Image from "next/image";
import Header from "./Header";
import HeaderNav from "./HeaderNav";
export default function HeaderTop() {
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <ul>
            <li className="number">
              <a href="tel:7016-2222">
                <img src="/static/images/02.png" /> 7016-2222
              </a>
            </li>
            <li className="email">
              <a href="mailto: info@ubbuyan.mn">
                <img src="/static/images/01.png" /> info@ubbuyan.mn
              </a>
            </li>
            {/* <li className="email">
              <a href="/plugins/ub_buyan/online/book/select/">
                <img src="/static/images/01.png" /> Цахим айлтгал
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <Header />
      <HeaderNav />
    </div>
  );
}
