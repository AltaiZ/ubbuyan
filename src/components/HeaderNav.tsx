"use client";
import React, { useState } from "react";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar navbar-default nav-justified hidden-xs">
        <div className="container">
          <div
            className="np navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="dropdown active" role="presentation">
                <a href="/">Нүүр</a>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/aboutUs/">Бидний тухай</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/aboutUs/">Тухай</a>
                  </li>
                  <li>
                    <a href="/zorilgo-ba-unet-zuils/">Зорилго ба үнэт зүйлс</a>
                  </li>
                  <li>
                    <a href="/bidnii-uwur-turh-ylgamj-chanar/">
                      Бидний өвөр төрх, ялгамж чанар
                    </a>
                  </li>
                  <li>
                    <a href="/gadaad-hariltsaa/">Гадаад харилцаа</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/dald-orshih-uilchilgee" target="_blank">
                  Үйлчилгээ
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/dald-orshih-uilchilgee/">Далд оршоох үйлчилгээ</a>
                  </li>
                  <li>
                    <a href="/chandarlah-uilchilgee/">Чандарлах үйлчилгээ</a>
                  </li>
                  <li>
                    <a href="/mashinii-uilchilgee/">Машины үйлчилгээ</a>
                  </li>
                  <li>
                    <a href="/ergeltiin-uilchilgee/">Эргэлтийн үйлчилгээ</a>
                  </li>
                  <li>
                    <a href="/tuw-bairnii-uichilgee/">Төв байрны үйлчилгээ</a>
                  </li>
                  <li>
                    <a href="/huuli-erh-zui">Ард түмний алтан сан</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/virtual-aylal/">Буяны төв цогцолбор</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/baruun-buynii-tuw-tsogtsolbor">
                      Баруун буяны төв цогцолбор
                    </a>
                  </li>
                  <li>
                    <a href="/zvvn-buynii-tuw-tsogtsolbr/">
                      Зүүн буяны төв цогцолбор
                    </a>
                  </li>
                  <li>
                    <a href="/dursagliin-tsetserlegt-hureelen/">
                      Дурсгалын цэцэрлэгт хүрээлэн
                    </a>
                  </li>
                  <li>
                    <a href="/diwaajingiin-tsetserlegt-hureelen/">
                      Диваажингийн цэцэрлэгт хүрээлэн
                    </a>
                  </li>
                  <li>
                    <a href="/virtual-aylal/">Виртуал аялал</a>
                  </li>
                  <li>
                    <a href="/zowshooroltei-orshuulgiin-gazaruud/">
                      Зөвшөөрөлтэй оршуулгын газрууд
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/buteegdehuun">Бүтээгдэхүүн</a>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/sanal-gomdol/">Cанал гомдол</a>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/medleg-medeelel/medleg-medeelel/">Мэдлэг мэдээлэл</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/medee-medeelel/tugemel-asuult">Түгээмэл асуулт</a>
                  </li>
                  <li>
                    <a href="/emgeneliin-ug/">Эмгэнэл</a>
                  </li>
                  <li>
                    <a href="/huuli-erh-zui/">Хууль эрх зүй</a>
                  </li>
                  <li>
                    <a href="/medleg-medeelel/mongol-yos-zanshil/">
                      Монгол ёс заншил
                    </a>
                  </li>
                  <li>
                    <a href="/medleg-medeelel/arga-hemjee/">Арга хэмжээ</a>
                  </li>
                  <li>
                    <a href="/medleg-medeelel/medlegiin-san/">Мэдлэгийн сан</a>
                  </li>
                  <li>
                    <a href="/medleg-medeelel/zurhaich-lam-nar/">
                      Зурхайч лам нар
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown " role="presentation">
                <a href="/holboo-barih/">Холбоо барих</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: isOpen ? "450px" : "0" }}
      >
        <div className="row">
          <img
            className="visible-xs ml-24"
            src="/static/images/mobilelogo.png"
            height="80%"
            width="80%"
          />
          <button className="closebtn text-white" onClick={toggleMenu}>
            ×
          </button>
        </div>
      
      
      
      
        <ul className="ml-20">
          <li className="active" role="presentation">
            <a href="/">Нүүр</a>
          </li>
          <li className="" role="presentation">
            <a href="/%D0%B1%D0%B8%D0%B4%D0%BD%D0%B8%D0%B9-%D1%82%D1%83%D1%85%D0%B0%D0%B9/">
              Бидний тухай
            </a>
            <ul className="">
              <li className="None">
                <a href="/%D0%B1%D0%B8%D0%B4%D0%BD%D0%B8%D0%B9-%D1%82%D1%83%D1%85%D0%B0%D0%B9/">
                  Тухай
                </a>
              </li>
              <li className="None">
                <a href="/%D0%B7%D0%BE%D1%80%D0%B8%D0%BB%D0%B3%D0%BE-%D0%B1%D0%B0-%D2%AF%D0%BD%D1%8D%D1%82-%D0%B7%D2%AF%D0%B9%D0%BB%D1%81/">
                  Зорилго ба үнэт зүйлс
                </a>
              </li>
              <li className="None">
                <a href="/%D0%B1%D0%B8%D0%B4%D0%BD%D0%B8%D0%B9-%D3%A9%D0%B2%D3%A9%D1%80-%D1%82%D3%A9%D1%80%D1%85-%D1%8F%D0%BB%D0%B3%D0%B0%D0%BC%D0%B6-%D1%87%D0%B0%D0%BD%D0%B0%D1%80/">
                  Бидний өвөр төрх, ялгамж чанар
                </a>
              </li>
              <li className="None">
                <a href="/%D0%B3%D0%B0%D0%B4%D0%B0%D0%B0%D0%B4-%D1%85%D0%B0%D1%80%D0%B8%D0%BB%D1%86%D0%B0%D0%B0/">
                  Гадаад харилцаа
                </a>
              </li>
            </ul>
          </li>
          <li className="mr-10" role="presentation">
            <a href="" target="_blank">
              Үйлчилгээ
            </a>
            <ul className="">
              <li className="None">
                <a href="/%D0%B4%D0%B0%D0%BB%D0%B4-%D0%BE%D1%80%D1%88%D0%BE%D0%BE%D1%85-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D/">
                  Далд оршоох үйлчилгээ
                </a>
              </li>
              <li className="None">
                <a href="/%D1%87%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D0%BB%D0%B0%D1%85-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D/">
                  Чандарлах үйлчилгээ
                </a>
              </li>
              <li className="None">
                <a href="/m%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D/">
                  Машины үйлчилгээ
                </a>
              </li>
              <li className="None">
                <a href="/%D1%8D%D1%80%D0%B3%D1%8D%D0%BB%D1%82%D0%B8%D0%B9%D0%BD-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D/">
                  Эргэлтийн үйлчилгээ
                </a>
              </li>
              <li className="None">
                <a href="/%D1%82%D3%A9%D0%B2-%D0%B1%D0%B0%D0%B9%D1%80%D0%BD%D1%8B-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D/">
                  Төв байрны үйлчилгээ
                </a>
              </li>
              <li className="None">
                <a href="">Ард түмний алтан сан</a>
              </li>
            </ul>
          </li>
          <li className="" role="presentation">
            <a href="/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB-%D0%B0%D1%8F%D0%BB%D0%B0%D0%BB/">
              Буяны төв цогцолбор
            </a>
            <ul className="">
              <li className="None">
                <a href="/%D0%B1%D0%B0%D1%80%D1%83%D1%83%D0%BD-%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D1%82%D3%A9%D0%B2-%D1%86%D0%BE%D0%B3%D1%86%D0%BE%D0%BB%D0%B1%D0%BE%D1%80/">
                  Баруун буяны төв цогцолбор
                </a>
              </li>
              <li className="None">
                <a href="/%D0%B7%D2%AF%D2%AF%D0%BD-%D0%B1%D1%83%D1%8F%D0%BD%D1%8B-%D1%82%D3%A9%D0%B2-%D1%86%D0%BE%D0%B3%D1%86%D0%BE%D0%BB%D0%B1%D0%BE%D1%80/">
                  Зүүн буяны төв цогцолбор
                </a>
              </li>
              <li className="None">
                <a href="/%D0%B4%D1%83%D1%80%D1%81%D0%B3%D0%B0%D0%BB%D1%8B%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3%D1%82-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD/">
                  Дурсгалын цэцэрлэгт хүрээлэн
                </a>
              </li>
              <li className="None">
                <a href="/%D0%B4%D0%B8%D0%B2%D0%B0%D0%B0%D0%B6%D0%B8%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D1%86%D1%8D%D1%86%D1%8D%D1%80%D0%BB%D1%8D%D0%B3%D1%82-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD/">
                  Диваажингийн цэцэрлэгт хүрээлэн
                </a>
              </li>
              <li className="virtual_tour">
                <a href="/%D0%B2%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB-%D0%B0%D1%8F%D0%BB%D0%B0%D0%BB/">
                  Виртуал аялал
                </a>
              </li>
            </ul>
          </li>
          <li className="" role="presentation">
            <a href="/#">Үйлчилгээний үнэ тариф</a>
          </li>
          <li className="" role="presentation">
            <a href="/news/">Мэдээ мэдээлэл</a>
          </li>
          <li className="" role="presentation">
            <a href="/contactus/">Холбоо барих</a>
          </li>
   
        </ul>
      </div>
      <span
        className="navbar-toggler md:hidden flex "
        style={{ fontSize: 30, cursor: "pointer" }}
        onClick={toggleMenu}
      >
        ☰
      </span>


    </div>
  );
}
