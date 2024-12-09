"use client";

import React from "react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer_menus ">
            <div className="up_button hidden-xs" onClick={handleScrollToTop}>
              <i className="up" />
            </div>
            <div className="col-md-3 col-sm-6 footer_menu">
              <h4>
                <a href="/далд-оршоох-үйлчилгээ/">Үйлчилгээ</a>
              </h4>
              <ul>
                <li className="active hidden-xs" role="presentation">
                  <a href="/chandarlah-uilchilgee">Чандарлах үйлчилгээ</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/dald-orshih-uilchilgee">Далд оршоох үйлчилгээ</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/mashinii-uilchilgee/">Машины үйлчилгээ</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/ergeltiin-uilchilgee">Эргэлтийн үйлчилгээ</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/tuw-bairnii-uichilgee/">Төв байрны үйлчилгээ</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/buyanii-tsagaalga-hurgeltiin-khoolnii-uilchilgee/">
                    Буяны цагаалга, хүргэлтийн хоолны үйлчилгээ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer_menu">
              <h4>
                <a href="/баруун-буяны-төв-цогцолбор/">Буяны төв цогцолбор</a>
              </h4>
              <ul>
                <li className="active hidden-xs" role="presentation">
                  <a href="/baruun-buynii-tuw-tsogtsolbor/">
                    Баруун буяны төв цогцолбор
                  </a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/zvvn-buynii-tuw-tsogtsolbr/">
                    Зүүн буяны төв цогцолбор
                  </a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="#">Дурсгалын цэцэрлэгт хүрээлэн</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="#">Диваажингийн цэцэрлэгт хүрээлэн</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer_menu">
              <h4>
                <a href="/бүтээгдэхүүний-хуудас/">Бүтээгдэхүүн</a>
              </h4>
              <ul>
                <li className="active hidden-xs" role="presentation">
                  <a href="/buteegdehuun/">Хайрцаг</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/buteegdehuun/">Хөшөө</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/buteegdehuun/">Сац суварга</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/buteegdehuun/">Хүндэтгэлийн цэцэг</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/buteegdehuun/">Зэд</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer_menu">
              <h4>
                <a href="/medee-medeelel">Мэдлэг, мэдээлэл</a>
              </h4>
              <ul>
                <li className="active hidden-xs" role="presentation">
                  <a href="/medee-medeelel">Мэдээ мэдээлэл</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB-%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8/">
                    Оршуулгын зан үйл
                  </a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/huuli-erh-zui">Хууль эрх зүй</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/medee-medeelel/tugemel-asuult">Түгээмэл асуулт</a>
                </li>
                <li className=" hidden-xs" role="presentation">
                  <a href="/medee-medeelel/arag-hemjee">Арга хэмжээ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_social_list hidden-md hidden-lg">
        <a href="https://www.facebook.com/ulaanbaatarbuyan/" target="_blank">
          <div className="social">
            <svg
              aria-hidden="true"
              className="svg-inline--fa fa-facebook-f fa-w-9"
              data-fa-i2svg=""
              data-icon="facebook-f"
              data-prefix="fab"
              role="img"
              viewBox="0 0 264 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
        <a href="https://twitter.com/UBBuyan_LLC" target="_blank">
          <div className="social">
            <svg
              aria-hidden="true"
              className="svg-inline--fa fa-twitter fa-w-16"
              data-fa-i2svg=""
              data-icon="twitter"
              data-prefix="fab"
              role="img"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
        <a href="https://www.instagram.com/ulaanbaatarbuyan/" target="_blank">
          <div className="social">
            <svg
              aria-hidden="true"
              className="svg-inline--fa fa-instagram fa-w-14"
              data-fa-i2svg=""
              data-icon="instagram"
              data-prefix="fab"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>
      </div>
      <div className="bottom_menu container">
        <li>
          <a href="/plugins/ub_buyan/list/">Бурхан болоочийн хайлтын систем</a>
        </li>
        <li className="active" role="presentation">
          <a href="/aboutUs">Компани танилцуулга</a>
        </li>
        <li className="" role="presentation">
          <a href="/aljiin-bair/">Ажлын байр</a>
        </li>
        <li className="" role="presentation">
          <a href="/uilchelgenii-nohtsol">Үйлчилгээний нөхцөл</a>
        </li>
        <li className="" role="presentation">
          <a href="/holboo-barih/">Холбоо барих</a>
        </li>
        <li>
          <a download="Ulaanbaatarbuyan.png" href="/static/images/Logo.png">
            Лого татах
          </a>
        </li>
        <div className="social_list">
          <a href="https://www.facebook.com/ulaanbaatarbuyan/" target="_blank">
            <div className="social">
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-facebook-f fa-w-9"
                data-fa-i2svg=""
                data-icon="facebook-f"
                data-prefix="fab"
                role="img"
                viewBox="0 0 264 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
          <a href="https://twitter.com/UBBuyan_LLC" target="_blank">
            <div className="social">
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-twitter fa-w-16"
                data-fa-i2svg=""
                data-icon="twitter"
                data-prefix="fab"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.instagram.com/ulaanbaatarbuyan/" target="_blank">
            <div className="social">
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-instagram fa-w-14"
                data-fa-i2svg=""
                data-icon="instagram"
                data-prefix="fab"
                role="img"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="left copyright">
          <p>© 2004-2024 Улаанбаатар буян ХХК</p>
        </div>
        <div className="right gerege">
          <div className="gerege-agency">
            <div className="gerege-info">
              <span className="gerege-icon-code" />
              by
            </div>
            <a href="http://gerege.agency/" target="_blank">
              <span className="gerege-icon-char-g" />
              <span className="gerege-icon-char-e" />
              <span className="gerege-icon-char-r" />
              <span className="gerege-icon-char-e" />
              <span className="gerege-icon-char-g" />
              <span className="gerege-icon-char-e" />
            </a>
          </div>
        </div>
        <div className="um">
          <p>Ум сайн амгалан болтугай</p>
          <img src="/static/images/Layer-41.png" />
        </div>
      </div>
    </footer>
  );
}
