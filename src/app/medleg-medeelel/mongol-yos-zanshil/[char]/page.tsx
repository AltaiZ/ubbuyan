const CharPage = ({ params }: { params: { char: string } }) => {
  const fixedItems = items.filter((item) => item.startWord === params.char);

  console.log({ params: params.char });

  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <section className="zanshil">
        <div className="container">
          <h2>МОНГОЛ ЁС ЗАНШИЛ</h2>
          <div className="filter swiper-container swiper-container-horizontal">
            <ul
              className="filter-tab swiper-wrapper"
              style={{
                transform: "translate3d(-1150px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="9"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/i">И</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="10"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/k">К</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="11"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/l">Л</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="12"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/m">М</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="13"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/n">Н</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="14"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/o">О</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="15"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/u">Ө</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="16"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/r">Р</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="17"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/s">С</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="18"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/t">Т</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="19"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/uu">У</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="20"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/v">Ү</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="21"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/pi">Ф</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="22"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/h">Х</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="23"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ts">Ц</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="24"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ch">Ч</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="25"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/sh">Ш</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="26"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/e">Э</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="27"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/yu">Ю</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate swiper-slide-prev"
                data-swiper-slide-index="28"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ya">Я</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-active"
                data-swiper-slide-index="0"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/a">А</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-next"
                data-swiper-slide-index="1"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/b">Б</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="2"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/w">В</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="3"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/g">Г</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="4"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/d">Д</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="5"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ye">Е</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="6"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/yo">Ё</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="7"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/j">Ж</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="8"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/z">З</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="9"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/i">И</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="10"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/k">К</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="11"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/l">Л</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="12"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/m">М</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="13"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/n">Н</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="14"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/o">О</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="15"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/u">Ө</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="16"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/r">Р</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="17"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/s">С</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="18"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/t">Т</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="19"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/uu">У</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="20"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/v">Ү</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="21"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/pi">Ф</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="22"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/h">Х</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="23"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ts">Ц</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="24"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ch">Ч</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="25"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/sh">Ш</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="26"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/e">Э</a>
              </li>
              <li
                className="filter-item swiper-slide"
                data-swiper-slide-index="27"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/yu">Ю</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate-prev"
                data-swiper-slide-index="28"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ya">Я</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="0"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/a">А</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="1"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/b">Б</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="2"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/w">В</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="3"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/g">Г</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="4"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/d">Д</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="5"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/ye">Е</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="6"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/yo">Ё</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="7"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/j">Ж</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="8"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/z">З</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="9"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/i">И</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="10"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/k">К</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="11"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/l">Л</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="12"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/m">М</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="13"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/n">Н</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="14"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/o">О</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="15"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/u">Ө</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="16"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/r">Р</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="17"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/s">С</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="18"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/t">Т</a>
              </li>
              <li
                className="filter-item swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="19"
                style={{
                  marginRight: "10px",
                  width: "47.5px",
                }}
              >
                <a href="/medleg-medeelel/mongol-yos-zanshil/uu">У</a>
              </li>
            </ul>
            <span
              aria-atomic="true"
              aria-live="assertive"
              className="swiper-notification"
            />
          </div>
          <div className="filter-result">
            {fixedItems.map((item, index) => (
              <div key={index} className="row">
                <div className="col-md-3 onlyone">
                  <h4>{item.startWordMN}</h4>
                </div>
                <div className="col-md-9">
                  <div className="filter-text">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: "    $('html, body').animate({ scrollTop: 0 }, 1000);  ",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "    var swiper = new Swiper('.swiper-container', {      slidesPerView: 20,      spaceBetween: 10,      loop: true,      pagination: {        el: '.swiper-pagination',        clickable: true,      },    });  ",
        }}
      />
    </div>
  );
};

export default CharPage;

const items = [
  {
    startWord: "a",
    startWordMN: "А",
    title: "АРХИЙГ ЦЭЭРЛЭХ ЁС",
    desc: "Архи бол хамгийн хүндэтгэлтэй идээ. Монголчууд таван тансагийн идээ гэж ярьдаг. Бүх идээнүүдийг нийлүүлсэнтэй тэнцэх хамгийн товч дээд идээ гэдэг. Мах, сүү, айраг, тараг, тос бүгдийг хамтатгасан учраас тэгэж нэрлэдэг. Монголчуудын бүр эртнээс баримталж ирсэн заншлыг үзэхэд архи хамаагүй хэрэглэхийг хатуу цээрлэдэг байжээ. Бүр Хабул хааны үеэс архины хатуу хэмжээ гарсан. <Дөч хүрээд дөнгөж амс, тавь хүрээд тааруулж балга, жар хүрээд жаргаж хүрт> гэсэн байна. Энэ дотор <уу> гэдэг үг алга. Дөч хүрээгүй хүн бол уруул ч бүү дүр гэсэн санаа байна. <Их засаг> хуулинд ажил албандаа анхны удаа согтуу ирвэл тэр өдрийн барьсан зэвсгээр торго, хоёр дахь удаагаа согтуу ирвэл унасан мориор торго, гурав дахь удаагаа болбол мөчий огтол, дөрөв дэхь удаагаа ирвэл уул нутгаас зайлуул гэсэн байдаг. XVIII зууны дунд үеийн баримт сурвалжид: Хэрвээ гэлэн хүн архи уувал 3 мориор, гэцэл хүн архи уувал 2 мориор, банди хүн архи уувал 1 мориор, хиа, лам нар, хаалгач ууваас 2 мориор тус тус баалан (торгож), тэдний сахил санваарыг хурааж, торгуульд авсан морьдыг илрүүлсэн, гэрчилсэн хүнд өгөх тухай заасан байна. Бас архи уугчийг хэн хүн дарж нуун далдалвал 1 мориор, мөн архи өгсөн хүнийг 1 мориор баалж торгодог ажээ. XIX зууны дунд үеийн судалгааны мэдээнд: гэлэн хүн архи ууваас 9 соёолон мориор, гэцэл хүн архи уувал 5 соёолон мориор, банди хүн уувал 3 соёолон мориор тус тус баалан илрүүлсэн, гэрчилсэн хүнд мөн баа торгуульд авсан морьдыг шагнал болгон өгдөг журам үргэлжилжээ.",
  },
  {
    startWord: "a",
    startWordMN: "А",
    title: "АРВАН ЦАГААН БУЯН",
    desc: `Нэгд, хорхой шавьжнаас эхлээд аливаа амьтны амь хөнөөхийг хатуу цээрлэж, авран өршөөх арга замыг барин дагах.  
    Хоёрт, юм өгөөгүй харамласан хүнд гомдохгүй, авахыг ч бодохгүй, харин өөрөө өгөх Гуравт, буруу харилцахыг тэвчин, зүй зохисыг эрхэмлэх. Дөрөвт, хов зөөх, хутган үймүүлэхийг жигшин, хүлээцтэй, тайван амарлингуйг хичээнгүйлэх.
    
    Тавд, худлаа хэлэхийг цээрлэж, болсон явдлыг үнэн мөнөөр нь шударгаар өгүүлэх.
    
    Зургаад, ширүүн үг, хэрцгий яриаг цээрлэж, нийлэмжтэй зөөлнөөр харилцах.
    
    Долоод, ашиг хонжоо хичээсэн далд зальхай үгийг тэвчээд чин сэтгэлийн үгийг ил тод хэлж байх.
    
    Наймд, бусадтай арцалдах элдэв хорт сэтгэл агуулахыг тэвчиж, чин сэтгэлийн үгийг ил тод хэлж байх.
    
    Ест, хомхой, шунаг сэтгэлийг цээрлэж, бусдыг хайрлах, өрөвдөх, туслах сэтгэлийг баримтлах.
    
    Аравт, аливаа хүний эсрэг элдэв буруу үзэл бүхнийг тэвчээд эвсэг зөөлөн хүнлэг сэтгэлийг баримтлах.`,
  },
  {
    startWord: "a",
    startWordMN: "А",
    title: "АРВАН ХАР НҮГЭЛ",
    desc: `Биеэр үйлдэж, сэтгэлдээ муу муухай юм бодох нь бас нүгэл болдог гэдэг.

    Нэгд, аливаа амьтныг алах, хоёрт хулгай дээрэм хийх, гуравт хүнийг шулж мөлжих эдгээр нь биеэр үйлдэж байгаа гурван хар нүгэл юм. Нэгд, худал хэлэх, хоёрд, хов зөөх, хутган үймүүлэх, гуравт, загнаж зандрах, гүжирдэн гүтгэх нь ам хэлээр үйлдэж байгаа гурван хар нүгэл билээ.
    
    Нэгд; бусдад атаархан жөтөөрхөж илүү үзэх санаа, хоёрт; эд хөрөнгө, эрх тушаал, алдар нэрэнд шунах сэтгэл, гуравт; хар амиа хичээх, харамлах, дөрөвд бусдад хар санаж хажиглах, үл итгэх зэрэг нь санаа сэтгэлээр үйлдэх дөрвөн хар нүгэл болдог.`,
  },
  {
    startWord: "a",
    startWordMN: "А",
    title: "АНД БОЛОЛЦОХ ЁС",
    desc: "Монголчуудын нэг сонин заншил нь анд бололцох ёс юм. Энэ талаар <Монголын нууц товчоо>, <Алтан товч> зэрэг түүхийн уг сурвалж бичгүүдэд баримт сэлт олон байдаг. Жишээлбэл Тэмүүжин, Жамуха хоёр Онон мөрний мөсөн дээр шагай солилцон анд бололцдог билээ. Түүхээс үзвэл эрдэмтэн мэргэд, сайн эрчүүд, эрэлхэг баатрууд, аянчин гөрөөчид анд бололцох нь цөөнгүй. Тэгж анд бололцохдоо өмссөн цамц, зүүсэн зэр зэвсэг, мэргэн санаа, бүсээ солилцож өнө үүрд нөхөрлөхийн андгай тангараг тавилцдаг байна. Ингэхэд найр хийдэг ч ёс бий. Анд бололцох ёсыг одоо ч гүйцэтгэж байна. Жишээ нь: зохиолч Л. Чойжилсүрэн Чингисийн үеийн монголын тухай сонирхолтой роман бичсэн Исай Калашников нар цамцаа солилцон өмсөж анд нөхөд бололцсон гэдэг. Анд бололцох ёс нь Монголчуудын эрхэм нандин зан үйлийн нэг юм.",
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: "БОГД ЗОНХОВЫН ТУХАЙТ ДҮЙНЦЭН ӨДӨР",
    desc: "Шарын шашныг үндэслэгч Төвдийн лам Зонховын нас барсан өдөр буюу өвлийн эхэн сарын харин тавныг бүх хүрээ хийд хурал хуран, хүн бүхэн маань мэгзэм уншиж, айл бүр гадаа гэртгүй мөнх зул барин буяныг үйлдэж тэмдэглэнэ. Тиймээс энэ өдрийг <Зулын хорин таван> гэдэг.",
  },

  {
    startWord: "b",
    startWordMN: "Б",
    title: "​БЭРЛЭХ ЁС",
    desc: `Бэрлэх ёс бол эмэгтэйчүүд (бэрээд) хүндтэй хүмүүст буюу хадмууддаа хичээнгүйлэн, найрдсаг үйлчлэх заншил юм. Ийм заншил монгол туургатанд нийтлэг. Монголч эрдэмтэн Пентти Аалтогийн нотолсноор, халимаг бүсгүйчүүд ахмад хүний нэр, ялангуяа нөхрийнхөө садан төрөл эмэгтэйчүүдийн нэрийг цээрлэдэг байна. Ингэж цээрлэж хэлэлцэхийг халимагаар бэрлхэ буюу бэрлэх, бэрмсэх гэдэг.

    Сайн бэр:
    
    Өрхөөр гийсэн нар мэт
    
    Үүдээр орсон сар мэт
    
    Өөрөө ургасан жимст мэт
    
    Бал чихэр овоолсон мэт.
    
    Муу бэр:
    
    Ад тотгор нэмэх
    
    Эд мал барагдах
    
    Унгас
    
    Унгас ноос хийсч
    
    Тэмээ туйлсан мэт гэж цэцэн үгэнд дурдсан нь хар цагаан хоёр зураглал буюу бахархмаар эерэг дүрслэл, жигшмээр сөрөг зүйрлэл юм.
    
    Цэцэн бэрийн тухай олон хувилбартай үлгэр монгол угсаатны дунд түгээмэл тархсаныг нийтээрээ мэднэ. Үлгэрт гардгаар цэцэн бэр бол ёгт далд утгыг сэтгэж тайлдаг, ёролсон муу үйлийг сэрэмжлэн зайлуулдаг, нөхрийнхөө болон хадмынхаа саар талыг эерүүгээр мэдрүүлж, сайн явдлыг урамшуулан дэмждэг, сэтгэлийн тэнгэр, ухааны наран билээ. Сайн бүхний эх саруул ухаан гэдэг. Цэцэн бэрийн эрдэм өрх гэртээ төдийгүй өнөр түмэн, төр улсдаа түшиг тулгуур болдгийг үлгэрт мөнхжүүлж, түүхэнд үлдээсэн бий.
    
    Хүнийг овог нэр, худ ургийн холбогдолтой үгийг эцэг эхчүүд өөрсдөө эерүүлэн дуудаж, охиндоо учрыг тайлж өгдөг журамтай. Өөрөөр хэлбэл, цээрлэх ёс, эерүүллийн уламжлалыг охид эцэг эхийн үлгэрлэх ярианаас сурч, арга учрыг зөнгөөрөө мэдэрдэг байжээ. Тухайлбал, цагааныг – гялаан, гаансыг – шившүүр, цус гоожихыг өнгө ялгарах буюу, шунхлах, чоныг – хээрийн нохой, мөлхөө Лувсан, мануухайг – Өлзийхүү, айгуул, унтахыг нойрсох, сэрж босохыг – өөдлөх, худал хэлэхийг андуурах, нүд сохорохыг – нүд булингартах буюу хиртэх, хонийг – малмай гэхчилэн эерүүлэл, хүндэтгэлийн үгийг охид төрсөн гэртээ сурсан учраас тэдгээрийг хадмын өргөөнд хээвнэг хэлж, нүүр улайдаггүй байв.
    
    Энэ нь амьд яриа, аман зохиолыг ашиглан охидод ёсыг мэдүүлж, гэдний хэлийг зүгшрүүлж, ухааны цоморлигийг нээгдүүлэх монгол гэрийн өвөрмөц сургууль юм.
    
    Хүүхэн хүн хадамд гарсан өдрөө хамгийн сайн сайхан байх гэж мэрийдэг. Ерөөлийн эзэн бүсгүй бэрхлэх ёсыг чанд сахихаа нийтийн өмнө андгайлдаг байжээ.
    
    <Ерөөл бат оршиг, ёсоор болтугай. Монголын за андгаар буй за> хэмээн молцогхон зүрхэндээ бэр шивнэдэг.
    
    Хадмууд бэрдээ оньсогот үлгэр таалгаж эрдэм ухааныг нь шалгадаг соньхон арга агсныг дурдахад илүүдэх юун. Үүний нэг жишээг сонирхуулъя. <Урьд нэгэн далны яс яйжийгаад хэвтэж байдаг юм байжээ. Далны ясан дээр далан цэрэг буудаллаж гэнэ. Тэр далны ясыг нэг бүргэд зууж яваад, ухнын эвэр дээр сууж идэх гэтэл алдчихжээ. Ухнын сахал дотор хоргодож суусан өвгөний нүдэнд өнөөх дал орчихсон гэнэ. Түүнийг эмгэн хэлээрээ долоож аваад хаячихжээ. Эдгээрийн аль нь их вэ?
    
    Хариу нь: Далны яс их гэвэл мунхаг хүний бодлого, бүргэд их гэвэл бүдүүлэг хүний санаа, өвгөн их гэвэл урт бодлоготны шинж, эмгэн их гэвэл богино бодлоготны илрэл, ухна их гэвэл цэцэн хүний санаа, далан цэрэг их гэвэл олон санаатны бодлого гэдэг.>
    
    Ухааны цэц сорьсон иймэрхүү оньсогот үлгэрийн хариуг нэг бүрчлэн хэлж цээжлүүлэхдээ биш, утгыг ухааруулж, учрыг тайлбарлуулахыг чухалчилдаг нь сорих, сургах аргын хослол юм.
    
    Биед хүрсэн охиндоо эцэг эх нь бэрлэх ёсыг зааж сургадаг, зөвлөж ойлгуулдаг уламжлал хөдөө нутгийнхний дунд хадгалагдсаар иржээ.
    
    `,
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: "БӨӨ УДГАН НАРЫН БӨӨЛӨХ ЁС, ДЭГЛЭМ",
    desc: `Бөө удган нар бөөлөхдөө тусгай бэлтгэсэн бөө хувцсаа өмсөнө. Монгол бөөгийн хувцасны хэлбэр ерөнхийдөө адил боловч, ядуу хоосны ялгавраас болж хувцасных нь байдал бас харилцан адилгүй байдаг.

    Монгол бөөгийн хувцас нь оршин амьдарч байгаа угсаатан ястныхаа хувцасны онцлогийг дууриаж, түүнд зохилдсон байдгаас, хэлбэр маяг нь хоорондоо зөрүүтэй байдаг ажээ. Тухайлбал баруун монголын бөө удган нар ихэнх нь намхан оройтой малгай өмсөж, зарим нь алчуураар толгойгоо боодог. Харин дээл нь захаасаа аваад, хормой хүртэл урт эрээн даавуунууд унжуулан зүүсэн, нилээд сүртэй байдалтай байдаг. Гэтэл халх бөө нарын малгай нь нилээд сүрлэг байдалтай, ялангуяа удганы малгай их өндөр оройтой байдаг. Дархадын бөөгийн хувцас ч гэсэн өвөрмөц байдалтай.
    
    Бөө, удган нар бөөлөхдөө, янз бүрийн бүс даавуугаар эрээлж оёсон урт дээл өмсөнө. Дээлийн захаар бүс даавуугаар хайчлан хийсэн могой зэрэг элдэв амьтны дүрсийг хадна. Үүнийг <далавч> гэнэ. Бүргэдийн савар буюу бугын эврийн дүрсийг цутган отго болгон суулгасан төмөр буюу оргой гэдэг малгай өмсөнө. Малгайн ар талд 6 буюу 9 салаа өнгийн даавуу унжсан байх бөгөөд үүнийгээ майхууч буюу майхавч гэдэг. Зарим нь 9 үетэй төмөр гинж малгайныхаа араас зүүсэн байдаг. Урд талдаа, дээр нь 3 – 3-аар зэрэгцүүлсэн төмөр цагираг хадсан арьсан буюу даавуун хаалт зүүх ба үүнийгээ элгэвч гэнэ. Бүсэндээ 9 ширхэг хүрэл толь зүүнэ. Харин шавь бөө бол 8 ширхэгийг зүүнэ. Учир нь жинхэнэ бөө, удган гэдэг эрх олоогүй цагт 9 ширхэг толь зүүх ёсгүй ажээ. Хүрэл толь дээр 12 жил, лууны дүрснүүд хийсэн байдаг. Энэ голдуу хуучирсан байдаг. Энэ нь бөө, удганы хамгийн эрхэмлэн олон үе дамжин хадгалж ирсэн зүйл юм. Хүрэл толио бүсэлхийдээ зүүдэг нь нэг талаар хүндэтгэж байгаа нөгөө талаар хоорондоо хавирч сүртэй дуу чимээ гарахад зориулжээ. Манж ба сибирийн бөө нар голдуу бүсэлхийдээ хонх зүүдэг. Харин монгол бөө, удган нар голдуу толь зүүнэ. Гартаа <сорви> гэдэг нарийн мод барьсан байхаас гадна, даавууны нарийн өөдөс зүүсэн, төмөр цагирагтай мод барьсан байх бөгөөд үүнийгээ ташуур гэнэ. Гартаа тал хэнгэрэг барьдаг. Үүнийг <гэц> буюу <хэс> гэж нэрлэдэг. Багш бөө, удганы гэц бол цагаан өнгөтэй байх ба шавь бөөгийн гэц улаан өнгөтэй байна. Учир нь бөөгийн ёсонд цагаан өнгө бол хамгийн эрхэм өнгө мөн. Бөө нар бөөлөхдөө юуны урьд нэг онгоны дүр хийж тавьдаг. Онгоны дүрийг мөнгө буюу төмрөөр хийдэг. Дээр үед зарим монгол айл нүүхдээ хэдэн тэрэг онгоны дүрс ачдаг байжээ. Энэ бол сонирхолтой хэрэг юм. Яагаад тэр вэ гэвэл, монгол айл бөө, удган залж бөөлүүлэхдээ, заавал нэг онгоны дүр хийдэг. Хийсэн онгоны дүрүүдийг хаях ёсгүй, аятайхан хадгалан тахиж явах ёстой ажээ. Иймээс нэг айл удам угсаагаараа хичнээн удган бөө, удган залсан байн, төдий их онгоны дүр байдаг.
    
    Бөөгийн мөргөлийн онгон бол хамгийн их учиртай. Бөө, удган болгон нэг онгоны дүрс гэртээ хийж тавиад тахиж байдгаас гадна, бөөлөх газартаа бөөлөхийн өмнө заавал онгоны дүрс хийж тавина. Бөөгийн сургаалд, онгон бол ямарваа нэг аюулаас авран хамгаалж чадах сахиус мөн гэж үздэг.`,
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: "БУДДЫН БУРХДАД ЗОРИУЛСАН ДҮЙНЦЭН ӨДӨР",
    desc: `Бурхан багшийн шашин тэтгэгч догшин сахиусыг тахих тусгай хурал сар бүрийн сүүлчээр тохиолдохын дээр хамгийн өргөн дэлгэр нь өвлийн адаг сарын хуучаар болно. Өвлийн адаг сарын хорин тавнаас гучны өдрүүдэд их хөлгөний шашинтны догшин бурхад – Хангал (Чойжил, Гомбо, Лхам, Шалши, Намсрай, Жамсран, Цамба) гэх мэт хийгээд Говилха зэргийн тухай номыг уншин тахил барин өргөж, хуур хөгжим дуурсган нэгэн жилийн үйлсээ даатгадаг байжээ. Буддийн домгоор бурхны шашныг тэтгэгч Лхам бурхан нийт дэлгэр оронг өвлийн адаг сарын битүүнд эргэдэг гэх учир гус өдөр хүрээ хийд, лам хувгарууд Цэдэр лхам хэмээх номыг уншиж үүр цайлгадаг байна. Ингээд өглөө хурсан хуврагууд бурхан шүтээн, багш лам, ахас эгчдээ мөргөн золгоод, дараа нь бурхан багшийн риди үзүүлсэн арван таван хоногийн хурлыг эхэлдэг.`,
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: `БӨӨ МӨРГӨЛИЙГ ШҮТЭХ ЁС`,
    desc: `Хүннүгийн үед бөөгийн мөргөл дэлгэр байжээ. Хүннү улсын бөөгийн мөргөл нь монголын бөөгийн мөргөлтэй нягт холбоотой. Учир нь Хүннүгийн ихэнх нь монгол угсаатан байсан тухай баталгаа олон бий.

    Хүннү улсын дараагаар монголын эх газраар нутаглаж байсан Сяньби Жуань-жу-ань нар мөн бөөгийн мөргөлтэй байжээ. <Сяньбигийн Тай зу, хаан 40 гаруй газар тахилга явуулж, маш олон удганыг цуглуулж бөөлүүлж байсан. Мөн Жуаньцжуаний хаант улс олон удгантай байсан ба манай эриний 508 оны үед жуань жуаний хаан Күэй-ну – удганыг маш ихээр шүтэж бөөлүүлж байсан> гэж хятадын түүх судрыг үндэслэж, японы эрдэмтэн Хата бичжээ.
    
    Кидан аймаг нь маш олон удган бөөтэй байсан. Баяр ёслолын үед удган бөө нарыг цуглуулж, дайн дажны үед тэд нараар төлөг бариулдаг байсан гэх мэтээр хятадын олон төрлийн түүхийн, Киданы тухай бүлгүүдэд бичсэн байдаг.
    
    Уйгарын хаант улс нь манай эриний 8,9 дүгээр зууны үед монголын нутаг дээр цэцэглэн мандаж байсан эртний улс бөгөөд мөн бөөгийн мөргөлтэй байжээ. <Уйгар, Турк зэрэг үндэстэн нь үхсэн хүнийг хээр ил хаяж орхих ёсонгүй тул бөө хүнээр сайн газрыг шинжлүүлэн, үхсэн хүнээ хүн суудаг газраас хол аваачиж, ор засч оршуулаад, дээр нь чулуу овоолж бөөгөөр уншлага уншуулдаг байсан> гэж Финляндын монголч эрдэмтэн Рамстедт <Уйгарын хураангуй түүх> гэдэг номондоо бичжээ. Мөн дээр үеийн <Уйгар, Турк, Монгол цөмөөр эрт цагт тал хэнгэрэгтэй бөө хүнд шүтэгч улсууд байсан> гэж тэр эрдэмтэн бичжээ.
    
    Нууц товчооны 10 дугаар бүлгийн 121 дүгээр зүйлд, Хонхотны Мэнлиг эцгийн хүү Хөхөч бөөгийн тухай гарна. Хөхөч тэр үеийн том зайран бөө байсан ба түүний цол нь тэв тэнгэр (тэнгэрийн хувилгаан) гэнэ. Хөхөч, би бол тэнгэртэй үргэлж харьцаатай байдаг. Морь унаад тэнгэр хаанд үргэлж очиж байдаг гэх мэтээр биеэ өргөмжлөн магтаж Чингис хаан ба монгол хүмүүсийн итгэл найдварыг түр зуур их татжээ.
    
    1206 онд хуралдсан их хуралдай дээр Хөхөчийн саналаар Тэмүүжинд, <Чингис Хаан> гэдэг цол өргөмжилсөн гэдэг. Гэвч Хөхөч нь Чингис хаан болон, олон түмэнд хэтэрхий их итгэгдсэндээ эрдэж улмаар төрийн эрхийг булаахаар бөөгийн мөргөлийн хуурамч зальт аргыг хэрэглэж өдүүлээд, сүүлдээ хэргийн учир цаазаар авахуулжээ.
    
    Нууц товчооны 12 дугаар бүлгийн 372 дугаар зүйлээс 12 дугаар зууны үеийн монголын бөөгийн мөргөл нь маш их өргөмжлөгдсөнийг улам тодорхой харж болно.
    
    Өгөөдэй хаан өвчлөх үед олон бөө удган нар ирж бөөлөөд, мэргэлсэн ёсоор Чингисийн отгон хүү Толой, хаан ахын амь насны төлөө амиа өгсөн тухай тодорхой материал байдаг.
    
    Чингис хаан, өөрөө бөөгийн мөргөлийг хамгийн их шүтдэг хүн байлаа. Чингис хаан улс төр, цэргийн талаар их эрх олж монголыг нэгтгэн, монголын их хаан болсон явдал бол бөөгийн мөргөлийг ашиглаж биедээ татсантай нягт холбоотой.
    
    Чингис хаан дайн хийхийн өмнө заавал өндөр уулан дээр гарч (тухайлбал бурхан халдун) бүсээ хүзүүндээ өлгөж залбирдаг байсан. Ингэж цэргээ сүсэг бишрэлийн аргаар зоригжуулах явдал их байсан нь нууц товчооноос тодорхой харагддаг. Энэ бүхнээс үзэхэд нууц товчоо нь тэр үеийн монголын бөөгийн мөргөлийн талаар бага бус материал бидэнд үлдээж өгчээ.
    
    `,
  },
  {
    startWord: "b",

    startWordMN: "Б",
    title: "БИТҮҮ ХАГАРАХ ЁС",
    desc: `Нэгэн домог өгүүлье.

    Урьд эрт цагт Лхам бурхан шинийн нэгний өглөө эрт ирж хүн бүрт нэг нас өгдөг байж гэнэ. Нэг удаа бурхны орноос Лхам бурхныг залрахаар гарахад замд нь шулам, мангасын элч нар явуулахгүй хоргоожээ.
    
    Тэгтэл Лхам бурхны хүлэг шулмын унасан хүлэгтэй тэмцэлдэж хөлийг нь гэмтээсэн аж. Тэр цагаас хойш энэ үйл явдлыг дүрсэлж хүмүүс гэр гэртээ чөмөг хагалах заншил үйлддэг болсон гэдэг. Битүүний орой нэг хот айлынхаа хамгийн өндөр настныдаа цуглан урьдаас бэлтгэж чанасан үхрийн дунд чөмөгний махнаас гэрт байгаа бүх хүнд хэрчиж амсуулдаг. Тэгээд үхрийн дунд чөмгийг шулмын хүлгийн хөлтэй зүйрлэн хугалж,
    
    Заа
    
    Буур жил гарваа
    
    Ботгон жил оров оо
    
    Цагаан идээнд цаднаа
    
    Цасан мөсөн хайлнаа
    
    Хөхөө шувуу донгодноо
    
    Хөх ногоо дэлгэрнээ
    
    Заараагүй юм (эргүү толгой) заарнаа
    
    гэж хэлээд гэрийн эзэнд тавагтай нь барина. Гэрийн эзэн түүнээс бурхандаа дээжлээд, өөрөө амсаад, бусдад амсуулдаг. Дараа нь бууз, банш мэт битүү хоолоо зооглодог.`,
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: `БӨӨГИЙН МӨРГӨЛИЙН ГУРВАН СҮНС БОЛОН СҮЛДНИЙ УЧИР
    `,
    desc: `Амьдран орших сүнс гэж эзэн нь үхэвч сүнс нь үхэхгүй амьд хүмүүстэй хамт амьдарч ар гэр орондоо ач тусаа үзүүлж явна. Харин түүнийг гомдоохгүйн тул үргэлж тахиж хоол, унд өгч байх нь чухал гэнэ.
    Сэтгэл санааны буюу түр зуурын сүнс. Тийм сүнс бол бие махбодиос бүрмөсөн ангижрахгүй эргэж тойрч байдаг гэнэ. Хүн унтвал түр зуур үхэж байгаа хэрэг бөгөөд сүнс биеэс эгшин зуур хөндийрөн яваад хэрэг ажлаа бүтээн буцаж бие махбодид орохоор хүн дахин амь орж нойроос сэрдэг юм гэж бөө нар хэлдэг.
    Эргэн төрөх сүнс гэж үхсэний дараагаар бие махбодиос бүрмөсөн ангижирч зүсээ хувирган өөр хүн болон эргэж төрөх сүнсийг хэлнэ гэнэ.
    Сүлд гэдэг нь хүний амь насыг даасан эзэн бөгөөд үүнийгээ монголчууд <Амин сүлд> гэж хэлдэг. Ямарваа нэгэн хүнд заавал сүлд болсон нэг эзэн амьтан байх бөгөөд тэр амин сүлдийг нь албал хүн аяндаа үхнэ гэж үздэг байжээ. Сүлд үхвэл хүн үхэж сүнс болдог гэнэ.
    
    <Сүнс дуудах>, <сүнс даллах>, <Шид хөөх>, <Ад чөтгөр хөөх> гэх мэтийн сүнс, сүлд бий гэдэг ойлголтоос уламжилсан олон янзын зан үйл бий болжээ.
    
    <Сүнс дуудах>, <Сүнс даллах> явдал нь нэг чанартай бөгөөд ямар нэг хүний сүлд зайлж явахаар үхэх тийшээ хандана. Харин сүлдий нь дуудаж даллаж авч ирвэл тэр хүн үргэлжлэн амьдарч болно гэдэг.
    
    <Шид хөөх> гэдэг нь буг чөтгөртэй холбогдсон, бас л бөөгийн мөргөлийн зүйл байжээ. Лам нар ч гэсэн <Шид хөөх> гэж их хэмжээний гүрэм дором хийдэг байжээ. Зарим нэг хүн үхэхээр түүний сүнс жинхэнэ ёсоор тонилгохгүй заавал ардаа нэг зүйлийн эд хогшилд тачааж хорогддог. Иймд тэр тачаал татсан эд хогшлыг олж золигт гаргах гэж <Шид хөөх> ёслол хийдэг байжээ.`,
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: "БИТҮҮЛЭХ ЁС",
    desc: `Монголчууд өвлийн адаг сарын сүүлчийн өдөр битүүлдэг. Битүүлэх гэдэг нь билгийн улирлын сар бүрийн гучинд тэнгэрт сар үл үзэгдэх битүү харанхуйгаас үүдэн <Лавай> хэмээх өвлийн адаг сарын гучны буцаж байгаа буурал жилийн отголох өдрийг буюу хуучин оны битүүрэн хангирсах өдрийг тэмдэглэхийг хэлнэ. Энэ өдрийг хүн ард зан үйлээр үддэг ёс заншилтай. Лавай сар гэдэг нь өвлийн адаг сар юм. Альшаа зэрэг нутагт түүнийг Ла сар гэж эерүүлэн дууддаг.

    Битүүлэх ёсны бэлгэдлийг хэл бичгийн ухааны дэд эрдэмтэн С. Дулам “Ер нь битүүлэх ёсны гол бэлэгдлийн утга нь байгаль ертөнцийн (саргүй харанхуй битүү байх) бодитой үзэгдлээс, цаг улирлын халагдан солигдоход (нэгэн бүтэн жилийн битүүрэн төгсөх) түүнээс хүн ардын нэгэн жилийн мөчлөгт үйл хэргийг үдэн дүгнэж, дараа жилийн шинэ мөчлөгийг угтаж буй (битүү гаргах, битүү хоол идэх, тоглох наадах) зан үйлээс бүрдсэн давхар давхар утгатай бөгөөд маргааш гарах билгийн улирлын шинэ жил, хувь сар, шинийн нэгний цагаалган ёслолтойгоо зааглан салах, хийгээд нэгдэн бүрдэх өвөрмөц учир жунцантай юм” гэжээ.
    
    Монгол хүн битүүний өдрөөс өмнө хуучин оны өр шир, өглөг авлагаа дуусгадаг заншилтай. Хүн амьтнаас зээлсэн мөнгө зоос, эд мал байвал даруйхан эргүүлэн өгч урьд хэрэлдэж, эв түгжин эвдэрсэн хэн хүнтэй зориуд уулзан учирч эв эеэ засдаг.
    
    Лавай сарын хорин есөнд айл хотлоороо бурхан шүтээнээ тахиж, гэр орныхоо тоос шороог гүвж, утаа хийг цэвэрлэн, хот хороогоо засч, хог буртгийг нь цэвэрлэж цэмцийлгэдэг. Мал адгуусны сэг зэм, өвдөл цөвдлийг хүртэл булж далдалдаг.
    
    Эмэгтэйчүүд эл өдөр исэг цагаагаа бэлтгэж үдээс хойш ширээндээ идээ будаагаа засаж тавьдаг. Эрэгтэйчүүд нь хүлэг сайн морьдоо барилж, хур дэлийг нь сумлан засч, тоног баавар нь гялалзсан шинэ эмээлээ зэхдэг учиртай. Хоточ сайн нохойныхоо уяа хүзүүвчийг хүртэл шинэтгэн сольдог.
    
    Шинэ сарын шинийн нэгний өглөө гал голомтоо ариулах, эр хөх аргалыг хүртэл битүүнд бэлтгэж зэхдэг.
    
    Битүүний орой өрхийн тэргүүлэгч хонь малаа хотлуулаад гэрийнхээ баруун тотгоны дээр цагаан чулуу, цэвэр тунгалаг цас мөс тавьж сайн зүгийн эзэд сахиулсны орохын үүдийг нээхийн хамт, зүүн тотгоны дээр өргөс харгана шарилж тавьж, муу зүгийн ад чөтгөрийн хорлолыг хаан тавьдаг билээ. Битүүний орой шинэ дээлээ өмсцгөөж, өтгөс бууралдаа өнгөтэй өөдтэй олбог дэвсгэрээ дэвсэн, эртгэр ширээгээ засч дээр нь битүүлгээ тавьж идээ ундааныхаа дээжийг зүүнээс баруун тийш дэслүүлэн өрж, мөн галдаа өргөж, бурхандаа дээжилсэний дараа гэрийн эзэгтэй цайныхаа дээжийг гэрийн эзэндээ нар зөв эргүүлэтэй эхэлж барьдаг ёстой. Ингэж битүүлж эхлэхэд аав, ээж, ах, дүү, хөвгүүд, бэргэд эрэмбэ дараалан сууцгааж, цөм товч бүчээ бүрэн товчилж малгайгаа өмсөж ёсолдог. Тавиас дээш настанд архи хүртээдэг учиртай.
    
    Битүүний зоог нь эрүүг нь заагаагүй хонины битүү толгой юм уу өвчүү байдаг. Өвчүү чанасан бол өвчүүгээ өөд нь харуулан дээр нь дал дөрвөн өндөр, хонтой шаант, залаатай богтоос тавина. Битүү толгой чанасан бол аманд нь өвс ногоог төлөөлүүлэн сонгино сармис суулгаж, гургалдайны түрийтэй үзүүрийг толгойныхоо ард тавьж, гургалдайгаар нар зөв ороож, сэмжээр бүтэн дал дөрвөн өндөр, хонтой шаант залаатай богтосны аль нэгийг тавьж битүүлдэг юм.
    
    Битүүний орой бууз жигнэж, банш чанаж, мөн шөлний будаа хийж, гурав тогоолон айл хөршийнхөндөө хүүхэд багачуудаар бууз банш хүргүүлдэг. Бууз баншиндаа цагаан мөнгө хийж, тэр бууз, банш таарсан хүн ирэх жилд олз омогтой явахыг бэлэгшээдэг. Хүний, өөрийн хүүхэд багачуудад мөч махаар хувь хишиг хүртээдэг.
    
    Битүүний орой, -Сайхан битүүлцгээж байна уу? гэсэнөлзий бэлгэтэй сайн сайхан үгс хэлэлцдэг.
    
    Битүүлгийн идээ будаанаас цадтал идэж, ууж гүйцсэний эцэст үлгэр, тууль ярихаас эхлээд шагайгаар алаг мэлхий өрөх, морь, тэмээ уралдуулах, дөрвөн бэрх орхих, тэмээ цохих, буга нуух, хорол зэндмэни эвлүүлэх зэргээр тоглодог.`,
  },
  {
    startWord: "b",
    startWordMN: "Б",
    title: `БАГШ ШАВИЙН БАРИЛДАЛГААНЫ ЁС
    `,
    desc: `Эрдэмт багшаас номын увдисыг сурдаг, багш нь ч шавиа энэрэн хайрлаж, эцгийн оронд эцэг, эхийн оронд эх болдог гэдэг. Багш шавийн барилдалгааны ёсыг өгүүлсэн төвд монгол хэлээр бичсэн олон бүтээл бий.

    Лам багшид шавь орохдоо зул, хүж, хадаг барьдаг ажээ. Зул барьж очдогийн учир нь мунхаг харанхуйгийнхаа туйлыг лам багшаар гэрэлтүүлж явах гэсний бэлэгдэл. Хүж барьж очдог нь лам багшаас ариун тансаг үнэр үнэртэж байна гэснийх. Хадаг барьдаг энх амгалангийн байхын ёс.
    
    Шавь нь багшийнхаа дэргэд ч нарийн дэг ёсыг сахидаг номтой. Лам багшийнхаа хэлснийг эрдмийн хур буулгаж байна гэж биширч, үгийг нь дагадаг ёстой. Өндөр дээд суудалд суух учиргүй. Номоо хичээнгүйлэн үзэж бясалгах ёстой. Бурхны ном үзэж байгаа хүмүүн ариун нинжин сэтгэлтэй байдаг учиртай. Хулгана, шоргоолж, гүйлдэж байхад сахил хүртсэн хүнд алах гэдэг санаа төрөх ёсгүй.
    
    Багш нь шавийгаа хайрлан хамгаалдаг юм. Багш лам шавийгаа санаандгүй нүгэл хийгээд тамын оронд орчихсон байхад өөрөө шатан байж гаргаж авдаг ёстой.
    
    Шавь нь лам багшийнхаа нэрийг хэлэхээс цээрлэдэг. Анх шавь орохдоо эхлээд лам багшдаа, дараа нь бурханд нь гурав гурван удаа мөргөдөг заншилтай.
    
    Монголчууд эрт дээр цагаас номын багшаа <Гучин цагаан үсэг заасан ачтан хэмээн дээдэлсээр иржээ.> Ерөөс багш хүнийг хэн хэмээвээс нэгээхэн үсэгний ацаг заасан ч түүнээ номын буян хүртээсэн ачтан хэмээн дээдэлдэг авай.
    `,
  },
  {
    startWord: "g",
    startWordMN: "Г",
    title: `ГЭР БАРИХ ЁС`,
    desc: `Гэр барихдаа баруун хатавчны хананаас эхлэн нар зөв дугуйлан босгож хооронд нь амыг нь нийлүүлэн боодог. Монголчууд гэрийн хананы амыг буруу нийлүүлэхийг <нохойн ам нийлүүлэх> гэж их цээрлэдэг юм.
    Гэрийн хаалгыг монголчууд урд зүг рүү харуулдаг. Тэгэхдээ уулын онь чиглүүлэхийг бас цээрлэнэ. Гэрийн хаалгыг хазгай муруйгүй тэгш барихыг ямагт эрхэмлэнэ.
    
    Гэрийн хаалгыг хоёр талын ханатай хошлонгоор бэхлэн босгоно. Харин тооныг дээш өргөж, баганаар тулж, дөрвөн талаас нь хэд хэдэн унь өлгөж тогтоодог. Тэгээд бүх унийг урьд голоос эхлэн өлгөж дуусдаг юм. Унинуудаа тоононд өлгөж дуусаад, тоононоос дөрвөн чагтага дөрвөн тал руу татдаг. Дараа нь гэрийн урьдах, хойтох цаваг нөмөргөж, хатавчны туургуудаа бүслэн сэжүүрүүдийг нь зөрүүлж, урьд дээврээс эхлэн дээврүүдээ тавьдаг. Зун цагт бол туурга, тээвэр нь байдаг. Өвөлд бол хоёр юм уу гурваар туурга дээврийг давхарлаж, гадуур нь цагаан бүрээс нөмөргөдөг. Тэгэхэд талд гэрүүд цагаан мөөг бөмбийлцөн харагддаг билээ. Дээврийн оосрыг дөрвөн зүгт даруулж уяхын өмнө гэрийн гадна талын дээр доорхи хоёр хошлонг тойруулан татаад бүх оосроо бэхэлдэг юм. Хамгийн сүүлд нь өрхөө тавьж, гурван бүслүүрээ татаад хоёр шигшиг уядаг. Гэрээ барьчихаад гэрийн эзэгтэй шинэ цай чанаж, идээ будаагаар гэр баригсдыг зочилдог заншилтай.`,
  },
  {
    startWord: "g",
    startWordMN: "Г",
    title: `​ГЭРИЙН ХҮМҮҮЖИЛ`,
    desc: `Монголчуудын ёс заншилд гэрийн хүмүүжил асар их ач холбогдолтой байв. Энэ нь ардын сурган хүмүүжүүлэх ухаан мөн. Гэрийн ёсыг эх хүн голдуу хариуцаж, эцэг нь хянаж бататгадаг уламжлалтай. Гэрийн хүмүүжлийн гол зүйлд: багаас нь ажилд сургах, байгаль орчиноо ажиглах, бэрхшээл зовлонг давж сургах. Үнэнч шударга байх, аав ээж, лам багш, ахмад хүмүүсийг хүндэтгэх ёс заншилд сургах, дүү нараа асрах гэсэн хэдэн чиглэл үе удам дамжисаар иржээ.
    Гэрийн хүмүүжил насны заагаар дөрвөн үетэй: нялхаас – 4 нас, 5 наснаас 12 нас, 12 наснаас 17 нас. Үе тус бүрт хийж сурах ажил, эзэмших хэвшил, олгох хүмүүжил гэсэн чиглэлтэй байв. Тухайлбал: 4 – 5 насанд морь унуулж, ишиг хурга эргүүлж, ойр зуурын юм дөхүүлж өгч сургадаг. Эрэгтэй хүүхдийг 5 – 6 насанд нум сум хийж өгч харвуулж сургаад 12 наснаас нь цэгц онолтойг тогтоолгож, 13 наснаас жил бүр цуглуулан шүүлэг авдаг байв.
    
    Монголчууд үр хүүхдээ балчир багаас нь, өөрөөр хэлбэл, хөлд орохоос нь эхлэн гаднаас 1 – 2 ширхэг аргал оруулах, аяга шаазан дөхүүлэх, улмаар 4 – 5 насанд хүрэхээр нь гэр ахуй, мал аж ахуйн ажилд сургах, тухайлбал, таван хушуу малд хайртай, хөдөлмөрч болгон мал сүргийн ашиг шимийг дээдлэн сургахын хамт нутаг усныхаа ахмад хүмүүсийг хүндлэх хэв ёсноос зааж, гэр бүлийн хүмүүжлийг олгодог заншилтай байжээ.
    
    Өөдлөхөд санаж сэтгэх,
    
    Уруудахад унтаж идэх,
    
    Эрт босоход нэгийг харж
    
    Орой унтаж нэгийг сонсдог юм
    
    гэх зэргээр үр хүүхдүүдээ сургадаг байсан нь хөдөлмөрөөр хүмүүжүүлэх, хөдөлмөрийн үнэ цэнийг мэдрэх, хөдөлмөрч, аж ахуйч болгохоор чиглэгдэж байсан ардын сурган хүмүүжүүлэх мэдлэг, ухааны гол үндэс нь юм.
    
    Монголчууд 4 (5) – 12 насыг <бага нас> гэж үзээд энэ наснаас нь хүүхдэд зүүн гарыг <солгой гар>, баруун гарыг <зөв гар> хэмээн ажил хөдөлмөр хийлгэж сургах, хурга, ишиг, тугал хариулуулах, аргал хомоол түүлгэх зэргээр гэрт гадаах ажил үйлд сургаж 6 – 7 наснаас морь унуулж, адуу мал зүслэн таниулах, улмаар адуу, үхэр, хонь, ямаа хариулдаг болгодог байна. Мөн энэ наснаас бүстэй, бүсгүй хүүхдийн хүмүүжил хийх ажил төрөлд ялгавар гарч, бүстэй хүүхэд эцэг, ах нарын хамт адуу мал хариулах, манах, хурдан морь унах, сойх, нум сум харвах, ан агнах, аян жинд явалцах зэрэгт сурдаг бол бүсгүй хүүхэд эх, эгч нарын дэргэд үйл оёх, хоол унд хийж, цагаан идээ боловсруулах, бэлтгэх, мал саах гэх мэт гэр ахуйн ажилд сурдаг нь үеэс үед уламжлал болон тогтсон байна. Мөн хүүхдээ хүмүүжүүлэн сургаж ирсэн заншил ёс горимд хөвгүүд, охидыг балчир наснаас нь хүн авгайлах, хүндэтгэх, хүний мэнд асуух ёсонд сургах, амьдрал ахуйн уламжлалт, бэл дэлт тоглоом наадам дуу хуур, үлгэр оньсого зааж, өдөр гариг, сар, жилийг 12 амьтнаар нэрлэх, жилийн дөрвөн улирал, дэлхий ертөнцийн дөрвөн зүг, найман зовхис, нутаг, орны уул, ус, ургамал, баялаг, ан гөрөөс зэргээс таниулан зааж сургах гэрийн сургамж, сурган хүмүүжүүлэх арвин их хэв заншилт ёс горимтой болоод зогсохгүй, бичиг үсэгт сургаж байжээ.
    
    Эх нь охиноо утас зүү бариулж, оёдол үйлд сургахдаа эхлэн <хөвөрдөх> оёо сургаад, хөшөлдүүлэх, шаглах оёдол, оймсны ул, гутлын зулаг оёх ажилд сургадаг байв. Ийм уламжлалтай учир монголчуудын бэр сонгох ёсонд айлын охины оёдол үйлийн чадварыг харгалзан үздэг нь зүй бус ажээ.
    
    Монголчуудын айл өрхийн гэрийн доторхи хүмүүжил маш дэг журамтай байв. Энэ дэг ёс, ёс горим нь хатуу хэрцгий биш, эцэг эх нь хүүхдүүдтэйгээ их эелдэг сайхан харилцаатай <миний хүү>, <миний охин> хэмээн дуудаж, тэднийг өрх гэрийнхэн, ахмад хүний үгс, сургамжийг сонсч, хүндэлдэг болон нийгмийн хэв журмыг дагадаг үзлээр хүмүүжүүлдэг ажээ. Тиймээс өрх гэрт хүүхдүүдийн дагаж мөрдөх ёс горим, дээр хорио цөөнгүй байжээ.
    
    Гэрт хүн зочлон ирэхэд хүүхдүүд шуугих, гүйлдэх, хүний ярианд оролцох, чагнах эл бүгд хатуу хориотой хэвшжээ.
    
    Хүүхдүүд эцэг эхийн хэлсэн захисан сургамж, заалтыг ёсчлон гүйцэтгэдэг байв. Эцэг, эхийн хувааж өгсөн хоол, ундыг идэж уух бөгөөд бүсгүй, бүстэй хүүхдэд идүүлэх, идүүлэхгүй хоол, ундны цээрлэж ирсэн ёс горим мөн уламжлагдаж байлаа. Жишээлбэл, эцэг эх хонины чанасан толгойг хуваахдаа тагнайг <хавтаг сайхан хуниарай!>, <уран болоорой!> гэж охиндоо өгдөг байхад бүстэй хүүхдэд толгойн баатар хуйх, нойр, түгшүүр идүүлэхгүй цээрлэдэг байжээ.
    
    Хоол унд, бүхэл махан зоогтой холбоотой элдэв бэлэгдэл, цээр хорио нь бүгд монголчуудын эрхлэн ирсэн аж ахуй болох мал аж ахуйтай нягт уялдаатай байна. Тухайлбал, бүстэй хүүхдэд <түгшүүр> идүүлэхгүй заншсан нь унасан морь нь <түгшинэ> (чөдөртөө тээглэж үхэх, осолдох) гэсэн цээрлэсэн утгатай холбоотой аж.
    
    Манай ард түмэн эртнээс нааш хөдөлмөрийг эрхэмлэн үзэж үр хүүхдээ балчир бага наснаас нь эхлэн ажилч хичээнгүй, даруу төлөв, нийгмийн ёс журмыг хүндэтгэн дагадаг сахилга баттай шударга сайн хүн болгохын төлөө сэтгэлээ тавьж <Эрхийг сурахаар бэрхийг сур> гэж аав ээж, ах эгч нараас эхлэн айл аймгийн жирийн хүмүүс хүртэл уйгагүй хэлж сургадаг сайхан заншилтай байжээ.`,
  },
  {
    startWord: "g",
    startWordMN: "Г",
    title: `​ГАЗРЫН СУДАС БАРЬДАГ ЁС
    `,
    desc: `Газар шороо уул, усыг хүний нэгэн адил мэдрэл, цусны судастай гэж монголчууд үздэг байжээ. Хүний судас таславал үхэж болдгийн нэгэн адил газрын судас таславал байгаль үхдэг гэж үздэг байв. Тийм ч учраас хавар мод тайрах, хамаагүй газар ухаж төнхчихийг хамгийн цээртэй зүйлд үздэг байв.

    Ерөөгийн эхэнд их намагтай газрыг бартаа туулагч хэд хэдэн машинаар дайран зам гарсны дараа намгийн ус нь алга болж гол ширгэсэн тухай надад нутгийн хүмүүс ярьж билээ.
    
    Одоо бодоход энэ бол газрын судсыг тасалсан хэрэг байжээ.
    
    Улаанбаатарын хажуудах Чингэлтэйн уулын эхэнд нэгэн том мод унагасны дараа ихэнх булаг нь ширгэсэн гэдэг. Энэ нь бас тэр голын амин судсыг тасалсан хэрэг ажээ.
    
    ГАЛ ГОЛОМТ
    
    Монгол хүн гал голомтыг амьдралын үндэс, хамгийн нандин зүйлд үзэж эрхэмлэдэг. Эртний монголын заншлаар хамгийн бага хүү нь гал голомтоо сахиж, эд хөрөнгөө өмчилдөг байлаа. Чингис хааныг нас эцэслэсний дараа түүний гал голомт, эд хөрөнгө, бараг бүх цэрэг, хэвтүүл, манааг ямагт эцгийн хажууд явсан дөрөвдэх хөвүүн Тулуй өвлөн авчээ.
    
    Гэр бүлээрээ тулгаа тойрон сууж, илч гэрэлд нь дулаацаж, хоол ундаа болгож, эцэг эхийнхээ үгийг сонсож, бяр, сэтгэлийн тэнхээ авдаг амьдрал тэтгэгч эх булаг бол гал голомт билээ.
    
    Гал голомт хэмээх нь амь зуулга, орон гэрийн төв, улам цаашлаад дэлхийн төв болно хэмээн монгол хүн үзэж байв. Галыг шүтэх заншил монголд эртний уламжлалтай билээ. Төрсөн эцгийн гал голомтноос жигүүр ургаж, хүч чадалтай болоод зүг бүрт мордож, өөр өөрийн гал голомтыг асаадаг.
    
    Хамгийн отгон нь гэртээ үлдэж гал голомтоо залгамжилна. Отгичин хэмээх Чингис хааны отгон дүүгийн нэр гал голомт сахигч гэсэн утгатай.
    
    Чингис хаан нэг удаа авга ах Даридай Отчигийг урван тэрсэлсний учир цаазаар аваачих гэсэн боловч ойрын шадар Боорч: “Төрөл саднаа хороох гэгч гал голомтоо хөнөөхтэй адил буюу. Эцгийн чинь удмаас энэ авга ах чинь л үлдсэн. Чи түүнийг хороохоор шийдэж зүрхлэх үү” хэмээн сануулахад андын үгийг зөвшөөрч авга ахаа өршөөжээ. Сайхь Даридай Отчигин нь Чингис хааны эцэг Есүхэй баатрын отгон дүү аж.
    
    Шинэ айлын гал голомт үүсгэх сонин заншлыг түүхч И. Цоодол сурвалжлан бичжээ. Үүнд: Гэр бүл болоход хурим эхлэхийн өмнө шинэ айлын гал голомтыг анхлан асаах төрийн ёсны зан үйл хийгддэг. Тухайлбал, хурим эхлэхэд өөрсдийн ах дүүс зүүн талд, анд нөхөд бусад зочид нь баруун талд, гэрлэгсдийн эцэг, эх хойморт суудал эзэлсний дараа хархүү хүүхнээ хөтөлж алгуурхан орж ирнэ. Тэд орж ирээд урьдчилж бэлдсэн олбог, суудал дээр галын эхэнд хархүү, галын аманд хүүхэн сууна. Хархүү эцэгтээ хандан, “Аав аа, галаа хайрла!” гэнэ. Эцэг “Галаар яах нь вэ, хүү минь” гэхэд, хүү “Аавын галаас тасалж, айлын галыг асаая!” гэнэ. Эцэг нь маш баяртайгаар хэтээ хүүдээ өгөхөд хүү нь хэтийг хоёр гардан авч адислаад улмаар хэтийг цахиж гал гарган хөгжөөгөөд хүүхэндээ өгнө. Хүүхэн тэр галыг авч зуух, тулганд урьдчилж бэлтгэсэн аргал, хомоол, хуурай зомголоор асаан бадрааж, тэр дороо тогоо тавьж шинэ айлын анхны цайг бэр чанана.`,
  },
  {
    startWord: "g",
    startWordMN: "Г",
    title: `​ГАЗАР ӨМЧЛӨХ ЁС
    `,
    desc: `Аль дээр цагаас, монголчуудын өвөг Хүннүгийн үеэс газрыг улсын үндэс хэмээн үзэж байв: Хүннү улсын бүх газар нутаг нь Хүннү улсын хаан – шаньюйн мэдэлд харъяалагдаж байлаа.

    Хүннүгийн шаньюй сөөм газрын төлөө ч үхэн хатан тэмцэж байжээ. Хятадын Хан улсаас эзэнгүй хэсэгхэн газрыг ч авъяа гэхэд ер зөвшөөрөхгүй, газрыг бусдад өгснөөс толгойгоо өгсөн дээр гэж үзэж байв.
    
    Чингис хааны үед ч, түүний өвөг Хабул хааны үед ч газар нутгийнхаа төлөө л дайтаж байжээ.
    
    Дорно зүгийн орнуудын нэгэн адил Монголын бүх газар нутаг нь улсын өмчинд байсан бөгөөд улсын бүх газрын дээд өмчлөгч нь Чингис хаан байжээ. Тэр үед газар эзэмшил нь гурван зүйл байсан нь: a) Улсын газар буюу мянгатын нутаг, б) Дархалсан нутаг, в) Соёрхлын газар болно.
    
    Мянгатын ноёд бол цэрэг захиргааны нэгж мянгатыг захиран мэдэхийн зэрэгцээгээр харъяат мянганы нутаг бэлчээрийг зонхилон мэдэж байжээ. Мянгатын иргэд уул мянганы нутаг бэлчээрийг хүй нэгдлийн далан заншил, нүүдлийн мал аж ахуйн онцлог зэргээс шалтгаалан нийтээрээ ашиглан эдэлж байжээ. Гэвч мянгатын нутаг бэлчээрийн жинхэнэ өмчлөгч нь мянгатын ноёд байжээ. Харин мянгатын ноёдын тушаал нь анхандаа нэгэн үеийн байсан бөгөөд харъяат мянгатын нутгийг дур зоргоороо өөр бусдад шилжүүлэх зэрэг эрхгүй байжээ.
    
    Дархлан олгосон нутаг гэдэгт бид Чингисээс Сурхан Шира, Хорчи, Илжигдэй зэрэг ноёдод олгосон соёрхол газрыг орлуулж байна. Тийм дархалсан нутгийн эзэд уул газраа үе улиран захирдаг ба тэрхүү газар дээр оршин суугчид нь улсын албан үүргээс хэлтэрсэн, гагцхүү харъяат эзэндээ алба татвар төлдөг байжээ.
    
    Соёрхлын газар бол Монголын хаанаас эхний үед төрөл төрөгсөддөө эзлэн захирсан суурьшмал аж ахуйт орноос энэ тэр муж, хот тариалангийн газрыг алба татвар авч байхаар үүрд өмч болгон олгосон газар бөгөөд жишээлбэл: Шихи хутагт олгосон <байшин гэртэй, балгас хоттой> иргэд бол даруй бидний өгүүлэн буй соёрхол газрын нэг хэлбэр нь юм.`,
  },
  {
    startWord: "d",
    startWordMN: "Д",
    title: `
    ​ДӨРВӨН БЭРХ`,
    desc: `Малын шагайг цэвэрлэж будна. Олноор нь цуглуулж хүүхдэдээ тоглуулна. Уут дүүрэн шагайгүй айл өрх, шагайгаар тоглодоггүй хүүхэд гэж байсангүй. Шагайгаар малаа төлөөлүүлэн тоглохдоо малд дуртай, дөртэй болгон хүмүүжүүлдэг.
    Малчдын хүүхэд, өдөр малаа хариулаад оройн цагаар, бас цагаан сар зэрэг баяр ёслолын үеэр шагайгаараа тоглоно. Алаг мэлхий өрөх, морь уралдах, мал өсгөх, дөрвөн бэр орхих гээд маш олон тоглоом бий. Морь уралдаж тоглохдоо морь болгож цувуулан өрөөд тоглогч хүүхдүүд өөрийн хурдан морио гараан дээр тавина. Ингээд дөрвөн шагай орхих морь буух тоогоор хурдан морио урагш нь ахиулна. <Мал өсгөх> гэдэг тоглоом тоглохдоо, тоглохдоо тоглогч бүр олон шагайг (хоёр гар дүүрэх) ээлжлэн орхино. <За хэн нь адуугаа илүү өсгөхөө үзье> гээд орхих бүрд буусан морийг түүж авсаар бүх шагайг дуусахад авсан адуугаа тоолно, хэн олон адуутай болсон нь хожино. Энэчлэн хонь, тэмээ, ямаагаа хэн нь илүү өсгөхийг үзэж тоглоно.
    
    Дөрвөн бэрх орхиж аз хийморио шинжиж, уралдаж дөрвөн бэрх орхих зэргээрр тоглохдоо морь, хонийг халуун хошуутай мал гэж илүү бэлгэшээдэг байв. Дөрвөн шагайг баруун гартаа авч тэгш зөөлөн талбайд орхино. Дөрвөн шагай нь морь, хонь, тэмээ, ямаа дөрөв болж орхигдох нь ховор, хэцүү бэрх байдаг учраас <дөрвөн бэрх> гэж нэрлэжээ. Дөрвөн бэрх орхиход 35 тохиолдол байна. Жишээ нь морь унахгүй, бусад мал болох 15 тохиолдол, морь нэг удаа унаж, бусад нь өөрчлөгдөх 10 тохиолдол, хоёр морь унаж, бусад нь өөрчлөгдөх 6 тохиолдол, гурван морь унаж, бусад нь өөрчлөгдөх 3 тохиолдол дөрвөн морь унах нэг тохиолдол байдаг. Энэ гучин таван тохиолдол нь хонь, тэмээ, ямааны алинд нь ч ижил байдаг.`,
  },
  {
    startWord: "d",
    startWordMN: "Д",
    title: `
    ​ДОЛООН БУРХНЫГ ШҮТЭХ ЁС`,
    desc: `Оддын ордоос монголчууд хамгийн их шүтэж эрхэмлэдэг нь долоон бурхан од юм. Монгол эмэгтэй сүү саалийнхаа дээжийг үдэш орой долоон бурханд өргөж, өөрсдийнхөө халуун амь, мал сүрэг, эд хөрөнгөө даатгадаг билээ. Долоон бурхан одны тахилга уншлаг бий бөгөөд тийм тахилга, уншлага хийлгэдэг айл дээр цагт мэр сэр байв. Нутаг уснаасаа хол яваа аянчин жинчинд хүртэл долоон бурхан одонд хоол хүнснээсээ өргөн цацаж амь, нас ажил үйлсээ даатгадаг ёс байлаа.
    Мал сүргээ хээр хонуулбал чоно араатнаас авран хамгаалж өгөхийг гуйж долоон бурханд тахил өргөдөг байлаа.`,
  },
  {
    startWord: "ye",
    startWordMN: "Е",
    title: `​ЕСӨН ЭРДЭНИЙН АНАГААХ ЧАДАЛ`,
    desc: `Номин. Энэ эрдэнэ гурван янз. Хар, хөх, цагаан судалтай, огторгуйн хөх туяат мэт өнгөтэй бол маш үнэтэй чухал эрдэнэ гэнэ.
    Алтан судалтай хөх номин ховор хийгээд дээд сайн нь юм. Цайвар хөх өнгөтэй цагаан толботой байдаг. Элдэв хорын болоод шар усны өвчин, хулгана ярыг арилгана.
    
    Оюу. Энэтхэгчүүд дөрвөн янз оюу байдаг гэдэг. Өнгө хөх, цагаан судал нь их гэрэлтэй. Тогосны өдөн дээр өчүүхэн тоос цугларсан адил хар хөх өнгөтэй, өнгө нь хөх шар амсартайг сайнд тооцдог.
    
    Анагаах чадал нь хордлого болох элэгний халуун өвчинд тустай.
    
    Сувд. Амьтны гаралтай хамгийн дээд чанарынх нь улаан сувд. Бөөрөнхий хэлбэртэй, цагаан судалтайг заан сувд гэнэ. Ва-лү сувд нь хөх судалтсан буурцгийн дайтай. Энэтхэгийн урд зүгийн ой модны навчинд хурын ус тогтсоноос ургадаг.
    
    Аром-ба сувд нь ногоон өнгөтэй, буурцгийн чинээ, Сар-ва сувд нь нойтон сэмбэрүүний өнгөтэй.
    
    Ши-Самага сувд. Шаравтар өнгөтэй, хэмжээ харилцан адилгүй. Далайн хясаанаас гардаг. Хясаатай төстэй, хорхойн ходоодноос гардаг сувдч бий гэнэ.
    
    Эдгээр сувдын анагаах чадал нь толгойн яс бэртэж, тархи цуврах болон элдэв хорын өвчинд тустай.
    
    Шүр. Хүйгээрээ амьдардаг, далай тэнгисийн ёроолын ургамал хэлбэрт суумал амьтан. Шүр гурван язгууртай. Үзүүрийг нь улаан, ёзоорын хэсгийг цагаан, эсвэл хар шүр гэж ангилна. Эмэнд зөвхөн улаан шүрийг хэрэглэнэ.
    
    `,
  },
  {
    startWord: "z",
    startWordMN: "З",
    title: `
    ​ЗЭМЛЭХ АРГА ЁС`,
    desc: `Хүн хүний зан байдалд тохируулан харьцдаг. Жишээ нь: Ууртай буюу ихэд аймхай хүүхэдтэй хүн нам тайван байдлаар ярина.
    Олон дахин буюу байнга үглэхийг цээрлэдэг. Иймээс «Олон үгэнд олзгүй» гэдэг мэргэн үг бий.
    Хүнийг зүхэх, доромжлох, зодох зэргээх биед нь ер гар хүрдэггүй. Тиймээс ч «Зодохын муу чимхэх» мэт сургааль гарсан байна.
    Хүний хажууд хүүхдийг барагтай бол зэмлэдэггүй. Хэрэв тун боломгүй зүйл гарвал нүд харцаараа зэмлэдэг ёстой.
    Зарим нөхцөлд хүүхэд алдаа дутагдал гаргавал цөөн хэдэн цаг, нэг , хоёр өдөр дуу гаргадаггүй. Үг асуусан ч хариулдаггүй. Ийм үед хүүхэд ихэд гэмшиж, алдаа дутагдалаа засах тухай бодож, боловсруулж, буруугаа хүлээдэг.
    Заримдаа аар саархан дутагдлыг нь хараагүй юм шиг, мэдээгүй юм шигээр өнгөрүүлдэг. Хожим мартсан хойно нь сэргээж зэмлэх ёстой.
    Хүүхдийн толгой хавьд гар хүрдэггүй. Дээр үед хүүхдэд хааяа нэг гэр хөнгөн хүрч мэдээ өгөх ёс байжээ. Тэгэхдээ заавал хонго хавиар нь зузаан махтай газар нь хорстол нь нэг хоёр мэдээ өгдөг(алгадаж) байв. Энэ нь хүүхэд насанд нь сайндаа л нэг хоёр удаа тун цөөн тохиолддог байв.
    Тухайн алдаа дутагдалтай төстэй үлгэр хэлж зэмлэж сургаж сургамжилдаг.
    Заримдаа шууд дутагдалыг нь хэлж, хүлээлгэж зэмлэдэг.
    Гэрч татаж дутагдалыг нь өөрөөр нь хэлүүлж зэмлэдэг.
    Тухайн дутагдалтай холбогдолтой үг хэлж зэмлэдэг.
    Бусдад сайн хүүхэд, хүний жишээгээр дууриалган хүмүүжүүлдэг ёс байв.
    Заримдаа хүүхдийн нэг хүсэлтийг биелүүлэхгүйгээр зэмлэх нэг арга байв. Үүнийг элбэг хэрэглэдэггүй.
    Хааяа нэг удаа торгуулийн аргаар айлгуулдаг нэг ёс байж. (цай ууя гэхэд өгөхгүйгээр)
    Заримдаа хүний дэргэд дутагдлыг нь ёжлон магтаж зэмлдэнэ. Жишээ нь их унтдаг, орой босдог хүүхдийг «Манай хүүхэд их сэргэг» өглөө эрт босоод цайгаа чанаад биднийг дуудна. Ийм ажилсаг хүүхэд дээ гээд нүдээ ирмэх жишээтэй. Сонсож буй хүн нь тийм байхаа нэг л сүрхий ажилсаг хүүхэд шиг харагдаад байсан юм гэх жишээтэй үг хэлдэг. Ингэхэд хүүхэд нэг талаараа ичиж нөгөө талаараа ажилсаг болохоо мартсан хүндээ мэдэгдэх гэж дутагдлаа засдаг байна.
    Заримдаа зэмлэлтйг урамшуулах, шагнах аргатай хослуулан явуулдаг. Жишээ нь: Чи өнөөдөр тун их сайн ажил хийлээ. Ажилсаг сайн хүн л болох юм байна. Ганцхан уураа багасгавал улам сайн болно доо гэх мэтээр сэнхрүүлэн хэлдэг байна.
    Заримдаа хамгийн хайртай хүнд нь (хайртай ахад нь) хэлж зэмлэдэг ёс байв. Үүнийг олон удаа хэрэглэдэггүй байна.
    Сайн сайн хэвшлийг албадан хийлгэж хэвшүүлдэг зэмлэл байв. Жишээ нь хүнд өгөх зүйлийг заавал баруун гараар нь өгүүлж сургах, нам тайван чанга биш ярьж сургах, хийсэн ажлыг нь заавал дуусгах зэрэг болно.
    Огт зэмлэлгүйгээр өөрийгөө дагуулан, дууриалган сургаж хүмүүжүүлэх зэмлэл байв.
    Хөдөлмөрт сургах, хөдөлмөрийн сайхнаар бахархуулах замаар хүмүүжүүлэх, зэмлэх нэг арга байв.
    Өөрөө алдаа дутагдалд нь дургуйцэж байгаа юм шигээр байж, үг дуугүйгээр зэмлэх ёс байв.
    Тухайн хүний уурласан буюу уйтгар гунигтай байх үед нь зэмлэдэггүй. Бас сэтгэлийн хөдөлгөөн ихтэй байх үед нь зэмлэдэггүй, тайван болсны дараа нь зэмлэдэг.
    Ямар ч нөхцөлд хүнийг зэмлэхдээ тайван тогтууэ байж, намуун зөөлөн дуугаар, үнэмшилтэйгээр, үнэн баримтаар нотолж, энгийн жирийн үгээр зэмлэн зөвлөөд, зэмлэл зөвлөмжийг хүлээж авсан тухайд нь талархаад, дутагдлаа засах нөхцөл болоцоо байгааг тодорхой баримтаар хэлж, дутагдлаа засах арга замыг нь ойлгуулж, алдаагаа засаж, амжилт гаргахыг хүсдэг. Энэ мэт зэмлэн хүмүүжүүлэх ёс байв.
    `,
  },
  {
    startWord: "d",
    startWordMN: "Д",
    title: `​ЗОЧЛОХ ЁС
    `,
    desc: `Хүнийг хүлээж хүндлэхийн нэгэн эрхэм үйл нь зочлох ёс юм. Монгол зочлогын ёс нь цайллага, будаалга, дайллага гэсэн гурван зүйл билээ. Энэ нь ах дүүс анд нөхдөө хүндэтгэн цай уулгах, шинээр айл буусан хөрштэйгээ танилцах зорилгоор эсвэл удаан хугацаанд айлсаж байгаад аль нэг нь салж нүүх болоход харилцан бие биенээ цай уулгах, аливаа баяр ёслол, шинэ оныг тохиолдуулан бие биеэсээ гэр бүлээр нь урьж цай уулгахыг цайллага гэдэг. Цайллагад цай идээ, чихэр жимснээс гадна жирийн хоол, архи айраг хэрэглэдэг нийтлэг ёстой.
    Цагаалга, будаалга хоёр нь тодорхой үйл явдалд зориулсан, зан үйлийн шинжтэй цайллага, дайллага нь иргэний нийтлэг шинжтэй юм. Айл хөршийнхнөө, ах дүү, анд нөхдөө урьж дайлж цайлахыг ардууд цай уулгах гэж энгийн нэрлэдэг. Албан ёсны ийм маягийн хүлээн авалтыг зоог барих гэдэг. Цайллага гэдэг нь сайн нөхөд учрах, үдэх тэргүүтэнд бие биедээ цай идээ барин, хөнгөн зочлохын нэр юм. Цайллаганд цай идээ сархадын зүйлээр зочилдог. Харин нөгөө дайллагад нь цайллагын бүх идээнээс гадна хоол заавал оролцдог. Мөн архи сархадын зүйл ч байдаг. Будаалга гэдэг нь тухайлсан баяр ёслол зан үйлийг тохиолдуулан нийтэд барих нэгэн зүйл дайллагын нэр юм. Хүүхэд угаах, хүүхдийн үс авах, хүүхдийн ой болох, алдар хүндлэл олох зэрэг, зан үйлд зориулах хөнгөн хуримыг будаалга гэх боловч хүн оршуулах, цагаан сар мэт онцгой ёслолд гүйцэтгэх зочлогыг бас будаалга, цагаалга гэх нь буй. Будаалга нь үржин дэлгэрэх, арвижин жаргахын бэлэгдэл болсон сүү будааг эрхэмлэсэн үйл юм. Будаалгад оролцох хүний байдлыг харгалзан насанд хүрээгүй хүмүүст архи сархад үл барих тул цагаан идээ айраг мэтээр дайлдаг заншилтай. Дээр гурван зүйл зочлогын зоогийн цэсийг дор өгүүлье. Үүнд:
    
    ЦАЙЛЛАГАД:
    
    Цай (цайны зүйл)
    Идээ (чихэр, жимс, боов, цагаан идээ)
    Ундаан (жимсний ус, пиво, айраг, архи дарс бага зэрэг)
    БУДААЛГАД:
    
    Цай
    Идээ
    Хөнгөн шүүс (будаа, аарц, махан зууш, тараг)
    Ундаан (жимсний ус, пиво, дарс, айраг зэрэг)
    Дайллага нь цайллагатай адил боловч тухайлсан нэг хоёр гэр бүлийг бус тухайн нутаг усныхан, хамт олныг хамарсан өргөн хүрээтэй, хүндэтгэлийн шүүс ууц тавьж, идээ будааг олон төрөл зүйлтэйгээр өргөн бэлтгэдгээрээ ялгаатай юм. Хүндэтгэлийн ширээнд 15-18 ул боовоор 5-6 үе өрсөн их идээ, бүрин их шүүс буюу ууцыг бэлтгэж баруун гар талд идээг зүүн гар талд шүүсийг тавина. Мөн 2-6-8 тавагт ааруул, амталсан цагаан будаа, өрөм бяслаг, үзэм, алим, жимс зэргийг тавиад байнга сэлбэж байна. Ийнхүү зочныг цайлж дайлахдаа эхлээд цайгаа, дараа нь идээ, цагаалгаа, шүүс ба махан хооол, айраг архийг насны эрэмбээр барина. Цайлуулж дайлуулж байгаа хүн хэн ч байсан дээрх дарааллыг хатуу баримтлан, идээ зоогт хүрэх, хүртэх ёстой. Монголчуудын дайлах ёс нь хүнийг хүндэтгэх, хүмүүжүүлэх гүн утга агуулгатай сайхан уламжлал юм.
    
    ДАЙЛЛАГАНД:
    
    Цай
    Идээ
    Хүнд шүүс (бүхэл мах, таташ, бууз, хуушуур)
    Ундаан (бүх төрлийн ундаан, айраг архи зонхилно)`,
  },
  {
    startWord: "i",
    startWordMN: "И",
    title: `
    ​ИХСИЙГ ОРШООХ ЁС
    `,
    desc: `Хойтох нь цөглөж» ихс унахад эх барьсан хүн ихс оршоох ёсыг гүйцэтгэдэг. Эхэд нь хүүхэд төрөнгүүт«ихс төддөггүй» гэж монгол үнээний түүхий, бүлээн сүү юм уу, хужиртай бүлээн ус балгуулдаг байжээ. Түүнчлэн «биений сойлт сайн болдог» гэж бүлээтгэсэн шар тос уулгадаг байжээ. Энэ бүхэн ихс саадгүй унахад хэрэгтэй гэдэг.

    Хүүхэд төрсөн (унасан) газарт арц уугиулж, тэнд ихсийг оршоож байв. Ихсийг хур үнсэнд юм уу, эсвэл ихс оршооно гэж гараад үнсэндээ булах, ихс дээр тариа будаа «үйлийн үр» гэж цацаад жингэрт хаяж өгдөг заншилч бий. Зарим нутагт хүүхэд төрснөөс хойш гурав хоноод ихсийг оршоодог байв. Тэгэхдээ өдөр гариг, зүг чиг заалгадаг байжээ.`,
  },
  {
    startWord: "i",
    startWordMN: "И",
    title: `​ИВЭЭЛ БА ХАРШ ЖИЛИЙН УЧИР`,
    desc: `Монголчууд эрт дээр цагаас хүний үйл амьдралд өдөр тутам тогтмол тохиолддог эерэг, сөрөг нөлөө үйлдлийг үзүүлдэг зарим хэмнэлийг 12 жил ба од гаригийн холбоогоор үздэг заншилтай байлаа. Үүнд:

    Хулгана жилтний
    Үхэр жилтний
    Бар жилтний
    Туулай жилтний
    Луу жилтний
    Могой жилтний
    Морь жилтний
    Хонь жилтний
    Бич жилтний
    Тахиа жилтний
    Нохой жилтний
    Гахай жилтний
    Сүлд гариг Лхагва , амин гариг нь Мягмар , үхэх гариг нь Бямба, сүлд од нь Бурваасад (суулга) амин одон Ардир (хэрцгий охин) тотгор од нь удираабадраа (могой хүлэгч), үхэх од нь данисда (тооно). Ивээл жил нь луу, бич харш жил нь морь.
    
    Сүлд гараг нь баямба амин гариг нь лхагва, үхэх гараг нь пүрэв, сүлд од нь анурад (гарал) амин од нь зэдра (тэргүүн дагуул) тотгор од нь Браний (гоё хүүхэн) , үхэх од нь Маргашир (гөрөөсөн толгойг) Ивээл жил нь могой, тахиа, харш жил нь хонь.
    
    Сүлд гариг нь Пүрэв, амин гариг нь Бямба , үхэх гариг нь Баасан, сүлд од нь Маргашир (гөрөөсөн толгойт) амин од нь ривади (дэлгэрүүлэгч) тотгор од нь Зэдра (тэргүүн дагуул) , Ивээл жил нь морь , нохой , харш жил нь бич.
    
    Сүлд гариг нь Пүрэв амин гариг нь Бямба, үхэх гариг нь Баасан сүлд од нь Бурваабэл (бага морь) , амин од нь Ривади (дэлгэрүүлэгч) тотгор од нь удираабадраабал (могой хүлэгч) , үхэх од нь зэсда (хонгорцог) . Ивээл жил нь гахай, хонь харш жил нь тахиа.
    
    Сүлд гариг нь Ням амин гариг ньЛхагва, үхэх гариг нь Баасан, сүлд од нь Хирдэг (6 эхтэй хүү) амин од нь Садибис (чөдөр), тотгор од нь Бүс (найрагт эх) , үхэл од нь Бухваабал (бага морь), Ивээл жил нь бич, хулгана, харш жил нь нохой.
    
    Сүлд гариг нь Мягмар , амин гариг нь Баасан , үхэх гариг нь Лхагва, сүлд од нь Хасда (түүнчин) , амин од нь Удирабэл (харцага) тотгор од нь Бүс (найрагт эх), үхэход нь Ардир (хэрцгий охин) , Ивээл жил нь тахиа, үхэр харш жил нь гахай
    
    Сүлд гариг нь Мягмар , амин гариг нь Баасан, үхэх гариг нь Лхагва, сүлд од нь Анурад (гарал) амин од нь Удирабэл (харцага) тотгор од нь Бурваасад (суулга) үхэх од нь Ривади (дэлгэрүүлэгч) Ивээл жил нь бар, нохой , харш жил нь хулгана.
    
    Сүлд гариг нь Баасан амин гариг нь Даваа, үхэх гариг нь Пүрэв сүлд од нь Бүс (найрагт эх ), амин од нь Ашовани (шийдэм), тотгор од нь Бурваасад (суулга) , үхэх од нь Ривади (дэлгэрүүлэгч) , Ивээл жил нь гахай , туулай , харш жил нь үхэр.
    
    Сүлд гариг нь Баасан амин гариг нь Пүрэв үхэх гариг нь Мягмар , сүлд од нь Бүс (найртагт эх) , амин од нь Ашовани (шийдэм), тотгор од нь Бурваасад (суулга), үхэх од нь Ривади (дэлгэрүүлэгч), Ивээл жил нь гахай, туулай харш жил нь үхэр.
    
    Сүлд гариг нь Баасан амин гариг нь Пүрэв, үхэх гариг нь Мягмар, сүлд од нь Зэдра (тэргүүн дагуул), амин од нь Бурнавас (өглөгт охин) тотгор од нь Хирдэг(6 эхтэй хүү) үхэх од нь Садибис (чөдөр). Ивээл жил нь могой, үхэр харш жил нь туулай.
    
    Сүлд гариг нь Даваа амин гариг нь Лхагва, үхэх гариг нь Пүрэв, сүлд од нь Аслис (үнэг), амин од нь Ривади (дэлгэрүүлэгч) тотгор од нь Бураабэл (бага морь) , үхэх од нь Удирабэл (харцага). Ивээл жил нь бар, морь , харш жил нь луу.
    
    Сүлд гариг нь Лхагва, амин гари
    
    г нь Мягмар , үхэх гариг нь Бямба сүлд од нь Браний (гоё хүүхэн) амин од нь Бүс (найрагт эх) тотгор од нь Удураабадраа (могой хүлэгч), үхэх од нь Удирабэл (харцага).Ивээл жил нь туулай, хонь , харш жил нь могой.
    
    Жич: Эдгээр од, гариг, жил нь эзэндээ эерэг , сөрөг нөлөө үйлдлийг үзүүлдэг.
    
    Сүлд гаригт үйлд бүхэн хялбар бүтнэ.Амин гаригт нь буянтай сайн, үхэх гаригт аливаа үйл бүтэмжгүй, сэрэмжилт явах хэрэгтэй.
    
    Сүлд, амин , эрхтэн одтой өдөр үйл бүхэнд бүтэлтэй сайн тотгор , шимнус, үхэх одтой өдөр үйл бүхэнд тааруухан муу байдаг.
    
    Ивээл жил, сар, өдөр, цаг бүх үйл бүтэмжтэй сайн бөгөөд ивээл жилтэй хүмүүс гэр бүл бололцох, их үйлийг хамтран бүтээхэд өлзийтэй сайн. Харш жил, сар, өдөр, цаг аливаа үйл бүтэмж муутай бөгөөд харш жилтэй хүмүүс гэр бүл бололцох хийгээд, элдэв үйл хэргийг хамтран хийхээс болгоомжил, хүүхэд эхээс мэндлэхийн үед сүлд одтойгоо учирвал (төрсөн өдрийн од нь сүлд од бол) урт насална. Эрхтэн одтойгоо учирвал буянтай сайн. Харин үхэх одтойгоо учирвал нас ахархан гэж үздэг. Энэ мэт био хэмнэлүүд хүний бие махбодод явагдаж эерэг ба сөрөг нөлөө үзүүлж байгаа нь үнэн билээ. Хүний био хэмнэл ба од гаригийн хэмнэлийг харьцуулан судлах ухааныг одон гаригийн хэмнэлийг харьцуулан судлах ухааныг содон зурхай гэдэг. (Хуанлигаас)`,
  },
  {
    startWord: "m",
    startWordMN: "М",
    title: `​МУУ ЭХНЭРИЙН ШИНЖ`,
    desc: `Эцэг, эх лүгээ зөрчин хэрэлдэгч

    Эр нөхрөө хачлан муулагч,
    
    Үс гэзэг үл янзлагч,
    
    Үр хүүхдээ эс сургагч,
    
    Үйл оёхыг үл мэдэгч,
    
    Эрт унтаж, орой босогч,
    
    Гийчин зочинд эвгүй аашилж,
    
    Аяга шаазингаа хаялан хангинуулж,
    
    Ач үрээ шалтгаацан өдөж загнан,
    
    Авир төрх нь чөтгөр мэт,
    
    Асар их ууртай эхнэр,
    
    Сайн муу хүн лүгээ дэмийн эсэргүүцэгч,
    
    Салгах ховын үрийг цацаж,
    
    Саваагүй дэмий хэрэлдэн чалчигч
    
    Самуун явдалтай эхнэр
    
    Үс бие нь зараа мэт
    
    Өгүүлэх үг нь ууль мэт
    
    Айх ичихийг үл мэдэн
    
    Угаах арчихаа залхууран мартаад
    
    Халтардан бохирдсон
    
    Уг гар нь хөглөрсөн
    
    Ажиггүй шалиг үг хэлэлцэн
    
    Аливаа самуун садар явдалт
    
    Эхнэр хүн муухай`,
  },
  {
    startWord: "m",
    startWordMN: "М",
    title: `​МОНГОЛ ЦАГ ТООЛОЛ
    `,
    desc: `Монголчууд хүйлэн хөх огторгуйг шүтэгч наран сарны явдлаар хэмжээлэн дэлхийн орчлын хугацааг тооцоолон, цаг улирлын бичгийг зохион ажин төрөлдөө хэрэглэсээр иржээ. Үүний зэрэгцээгээр ан амьтны үржих төлжих, үс зүс нь гүйцэж авлаж гөрөөлөх үеийг харгадзан мөчлөг болгодог өнө эртний заншил нь бас хадгалагдсаар явжээ. Түүний нэгэн жишээ нь эртний монголын аж ахуйн хуанли болно. Монголчуудын өвөг дээдэс жилийн эхийг онгон шүтээнээ тахин ангийн олзоо хуваан хувь түгээлэг сарын нэрээр «хувь сар» гэж нэрлэн, дараа дараагийн сард өвөрмөц нэр өгч байжээ. Хэдий тийм боловч дорно дахинд өргөн дэлгэрсэн арван хоёр сарын нэрийг бас эртнээс хэрэглэж байсан байна. Эртний Хүннү нар «намар адуу таргалах цагаар их хуралдай хурж хүн малаа тоолж» шинэлдэг байсан бөгөөд могой, нохой өдрийг нэн эрхэмлэдэг байсан гэдэг. Хүннүгийн энэ заншил нь хожим хожимдоо уламжлагджээ. Алайр буриадын зангшлаар «Мичид тэнгэрийн хаяанд үзэгдсэн цагт шинэ жилийн баяр хийдэг» байсан ба халимаг Ордост бас өвлийн эхэн бусад зул сараар шинэ жилийг ёсолдог заншил хадгалагдсан ажээ. Хуучны монгол цаглабарын сарын нэр нь дараах болно.Үүнд : хувь сар , хожир сар, өвөөлжин сар, хөнөө сар , улар сар, сүүн сар, гур сар, буга сар, хуцан сар, шилэм сар, идээлэг сар, хөхөөл сар болно.
    Монгол овогтнууд цаг тоолохдоо өвөл, намар , зуны зааг, хаврын эхэн сар зэрэг 3 янзын хуанлийг бий болгон хэрэглэж байсан гэж болно. Үүнээс өвлийн зул сарын баяр нь үлэмж эртний анчин гөрөөчин үеийн заншил бөгөөд зун намрын заагт ёслох ёслогоо нь цагаан идээ дэлгэрдэг цагийг эрхэмлэсэн явдал болно.иймээс тэр үеийг «Сүүн сар» гэж нэрлэж байсан байна. Сүүн сарын тухай мэдлэг нь буриадад хадгалагдан үлджээ.Сүүн сар тохиолдох цаг нь аргын улиралын долоо, наймдугаар сар болох ба халхчуудын дунд өргөн хэлэлцдэг «арван сарын аагим» халуун үетэй таарч байгаа юм.
    
    Ийнхүү сүүн сар гэдэг нь малын шим дэлгэрсэн цагийн бэлгэдэл бөгөөд энэ нь явсаар хаврын эхэн сарын баяр цагаан сар болсон байна.
    
    Сарны улиралын цаг тоолол нь олон мянганы тэртээгээс Вавилон, Хятад, Япон , Солонгос, Вьетнам, Төвд монгол зэрэг Азийн олон газар дэлгэрсний дээрхавар шинэлэх ёс монголд ХIII зууны үеэс нийтлэг болжээ.`,
  },
  {
    startWord: "m",
    startWordMN: "М",
    title: `​МОНГОЛ ХҮНИЙ ЭРХЭМЛЭХ ЗУРГААН ЗҮЙЛ`,
    desc: `Үнэн бат журмыг үргэлж хичээж явах.
    Өвөг дээдсийн сургаалыг санаж сэрж явах.
    Үйлийн дээд ачийг буцааж хариулж явах.
    Өсөх гээхийн хорвоог учирлан таниулж явах.
    Үргэлж мэргэн номыг тогтоон тунгааж явах.
    Үгээгүй дорд ардыг өргөн тэнхрүүлж явах.
    `,
  },
  {
    startWord: "n",
    startWordMN: "Н",
    title: `​НҮҮДЭЛЛЭХ ЁС
    `,
    desc: `Монголчууд нь эрт дээр цагаас нүүдэллэж амьдардаг улс билээ. Одоо малчид жилийн дөрвөн улиралыг дагаж нутаг сэлгэн нүүдэг. Нүүхэл нарийн ёс горим бий. Нүүх өдөр, буух газраа, өмнөөс товлож, цэлмэг сайхан өдөр нүүнэ. Хаана буухыг өрхийн тэргүүлэгч мэднэ. Нүүхийн өмнөх өдөр орчин тойрныхоо хогийг сайтар цэвэрлээд нүүдэлд зэхнэ. Гүүн зэл, шон гадсаа сугалж, нүхэнд нь өтөг бууц, сул шороо хийдэг. Ачаа хөтлөх морины дэлийг засдаг. Гэрийн эзэн гоёлын хувцасаа өмсөөд, бүрэн хэрэглэлтэй эмээлээ тохож ачааг хөтөлдөг заншилтай байв. Ачааны дэс дараалал нь хүүхэд ачсан тэмээ, эд хогшил ачсан тэмээ, цагаан идээ ачсан тэмээ гэх мэи нарийн байжээ. Нүүх өглөөгөө гэргий нь эртлэн босож цайгаа чанаж, үнээ малаа саагаад өлзийгөө өгсөн нутаг хэмээн орон хангайд дээж өргөж дараа нь цайлцгаагаад нүүнэ. Шинэ бууриндаа Нарнаар очсон байхыг эрхэмлэнэ.

    Гэрийн бусад хүн адуу, хонь , ямаагаа хуваарилж аваад тууна. Нүүдлийн цуваа нь холоос бараа сүртэй харагдана. Хэрвээ нүүдлийн бараа харвал гэрийн эзэн айлын нүүдэл гараад ирлээ байгаа чана гэж эзэгтэйд хэлдэг. Ахар богино хугацаанд цай чанана. Таних, танихгүй хамаагүй нүүдлийн хүмүүст зам тосон очиж, домботой цай, таваг идээ барьж, ширдэг дэвсэж цайлдаг заншилтай байв. Нөгөө айлын хаана буухыг асуугаад очиж тусалдаг.
    
    Монголчууд гэрээ буулгахдаа нар зөв эргүүлж буулгана. Гэр барихдаа мөн нар зөв тойруулан ханаа дугуйлж туургаа ороон хошлонгоо татна. Бууриа сонгохдоо төвгөр газрыг сонгож тооно хаалганы голыг эгц буюу ялимгүй баруун тийш татаж барина. Гэрийн үүд тоононы харааг ямагт уулын оройг чиглүүлж барина. Харин хөтөл, хотгор чиглүүлхээс цээрэлдэг юм. Тооныг хамгийн сүүлд ачина.Ачаалж дуустал тооныг гэртйн бууринаас гадагш гаргах ёсгүй. Ачаалж байх үед гэрийн буурь дээгүүр ачаатай, ачаагүй (тэмээ, үхэр, морь) мал гаргадаггүй. Учир нь «ачаа хазайна», «ачаа туйлна» гэж цээрлэдэг. Ачааг айлийн гэргий нь хөтлөх бөгөөд гэрийн буурийг нар зөв тойрч зам шулууддаг. Харин гэрийн эзэн хамгийн сүүлд ачааг дагаж морьдоно. Ачааны өмнө адуугаа бусад малаа ачааны араас тууж нүүдэг заншилтай.
    
    Нүүдлийн замд тохиолдох айл нүүдэлчдийг хүндэтгэж цай идээгээр угтдаг ёстой. Нүүдэлчдийг угтаж байгаа айл нь заавал шинэ цай чанаж өгнө. Хуучин цай халааж өгвөл шинэ буурин удаан суухгүйн ёр гэж цээрлэдэг. Нүүдлийн цай ирэхэд нүүдэлчид заавал сууж цай ууж хүндэтгэнэ. Зарим тохиолдолд хүмүүс ачааны баруун талаар зөрж гарах бөгөөд тэр талын хөлийг дөрөөнөөс мултална. Ингээд аль ахмад хүнээс нь эхлэн амар мэндийг нь солилцоно. Дөрөө мултлах нь нь бууж хүндэтгэсэнтэй ялгаагүй гэж үздэг. Шинэ бууринд гэрийн эзэн түрүүлэн ирж, ачаа хөсгийг тосон авч, гэрийн эзэн унаж ирсэн морины эмээлийг буурийн зүүн талд авч дотогш тавина. Шавь тавьсан газраа бууна. Буух газраа бамбай дэвсэж хүмүүс цайгаа ууж, Хангай дэлхийдээ идээ цагаа өргөнө, хаана хэнийх гэрээ барихыг хөгшчүүл зааж өгнө.
    
    Хамгийн эхлээд галын уурт тулгаа байрлуулдаг заншилтай бөгөөд хуучин нутаг буурин дээр буухыг цээрлэдэг. Монголчууд гал голомтоо их эрхэмлэдэг бөгөөд тулгын чулууны үүдэн талын чулуугаар явах замаа дахиж гаргадаг. Хэрэв харь хол нүүвэл тулгын чулууны нэгийг авч нүүдэг байна. Хэрэв замд овоо тааралдвал чулуу идээ тавьж өнгөрнө. Бас морь малынхаа үс хялгаснаас авч өргөдөг. Шинэ бууринд буугаад идээ цайныхаа дээжийг орон хангайд нь өргөдөг ёстой юм. Хүмүүс ингэж нутаг сэлгэн нүүж малаа таргалуулж байжээ. Үүнээс үүдэн «Баярлан бууж, баяжин нүүнэ» гэсэн ардын цэцэн үн гарчээ. Нүүдлийн хөсгийг гэрийн эзэнтэй хөтөлж, гэрийн эзэн нь нүүдлийн хойноос хонь малаа том хүүхдүүдтэйгээ тууж, ачаагаа харж, хазайхад нь засаж, нүүдлийн замд ан амьтан тааралдвал сайн гэж бэлэгшээж байлаа.`,
  },
  {
    startWord: "n",
    startWordMN: "Н",
    title: `
    ​НАС БАРСАНХҮҮХДИЙГ ОРШУУЛАХ
    `,
    desc: `Энэ зан үйл нилээд онцлог юм. Дээр үед нялх хүүхэд нас бархад нэг бол уутанд хийж «гээдэг» эсвэл өлгийтэй нь «хээр тавьдаг» байжээ. Хүүхэд тогтдоггүй айлд оршуулах ёсыг хатуу дагадаг байсан ажээ. Лам хуврагаас оршуулах газар, явах очих чиглэлийг асуудаг байсан гэнэ. Нас барсан нялх хүүхдийнхээ цээж, нуруу, баруун гуя, зүүн булчинд улаан, хөх, цагаан бэхээр тэмдэг тавьж «эргэж төрөхийг» бэлэгддэг.

    Өлгийтэй нь «хээр тавихдаа» өлгийний нь задлас хийгээд тавьдаг ажээ. Уутанд хийж гээх ёс гүйцэтгэхэд цэнхэр, цагаан даавуугаар уут оёж, түүн дээр хүүхдийн цогцостой хамт чанасан мах (хонтой шаант оролцоно), тоглоом болгож шагай дагуулж хийдэг. Тэгээд аав, ах авга ах, нагац ах буюу ямар нэги эрэгтэй хүн авч явж, олон замын уулзвар газар хадаг тавиад орхидог байжээ. Ингэж гээхдээ уутны амыг задгай орхино. «Гээсэн» хүн мориныхоо цулбуурыг унжуулаад оршуулсан хүүхдээ нар зөв нэг удаа тойроод мориныхоо цулбуурыг унжуулан хар алхаагаар буцна. Цулбуур унжуулдаг нь хүүхдээ эргүүлж авчрах бэлэгдэл ажээ. Хүүхэд цулбуураас бариад гэртээ гүйж ирнэ гэсэн санаа юм. Урьд нялх хүүхэд оршуулахад уй гашуу тайлах ёслол байгаагүй гэнэ.`,
  },
  {
    startWord: "n",
    startWordMN: "Н",
    title: `​НАЙМАН ТАХИЛЫН УЧИР`,
    desc: `Энх амгалангийн цагаан шүхэр. Хамаг амьтан амгаланг хүсэх ялгал үгүйн, харилцан туслалцах ариун үйлсийн мяндсан самбайг намируулж, хатуу аюулын халуунаас хамгаалах сэрүүн сүүдрийг буулгагч, халамжит, энх тайвны цагаан шүхэр нь анх дахь өлзийт тэмдэг.

    Энх амгалангийн Алтан цагас. Аливаа угсаа шүтлэгийн олон орны их мөрнүүд, амар жаргалантайгаар хамтран орших зорилгын далайд нийлэлдсэнд аюул зовлонгоос урьдчилан сэргийлэх хоёр нүдээ ширтсэн амарлингуй тайвны алтан загас нь хоёр дахь өлзийт тэмдэг.
    
    Энх амгалангийн Алтан бумба. Хамаг дэлхийн амьтны зол заяаны эрдэнэсээр бүтсэн, хайрт амь насыг, уртатгах, мөнхийн рашаанаар дүүрсэн, хамаг жаргал, хүссэн тэр бүхний хүслийг хангагч халуун найрамдлын алтан бумба нь гурав дахь өлзийт тэмдэг.
    
    Энх амгалангийн Цагаан лянхуа. Үр бүтээл цог жавхлангийн сайхан өнөрийн хүчээр, үнэнч шудрага хүмүүсийн зөгийг биедээ цуглуулж, үйлс жаргалынбалын баяр хуримаар цэнгүүлэн тэтгэгч өнөд энх амгалангийн лянхуа цэцэг нь дөрөв дэх өлзийт тэмдэг.
    
    Энх амгалангийн Цагаан лавай.Элэгсэг найрамдал холбооны эрчимт амьсгалын үлээх чадлаар, энэ ертөнцийн хүмүүст яруу алдрын дууныг дуурьсгаж , элдэв эргүү мунхгийн зузаан нойроос сэргээн босгогч, энх тайвны цагаан лавай нь тав дахь өлзийт тэмдэг.
    
    Энх амгалангийн Өлзий утас. Газар бүрийн амьтны мөрөөдлийн алтан утсаар биелсэн, гарамгай соёлын зузаан харилцааны уран сүлжээгээр, гаслангуй төгс жаргалын олон нүд дурдсан гайхамшигт энх жаргалын өлзий утас нь зургаа дахь өлзийт тэмдэг.
    
    Энх амгалангийн Ялагч дуаз. Үнэнийг шинжлэн олсон хурц оюуныэсэнд байгуулсан, үл зохилдох бүхнийг бүрэн ялагчийн тэмдгүүд тодорхой, үргэлжид жаргалын төлөө шамдан зүтгэх сэтгэлийн ганжир төгс, үнэлж баршгүй энх амгалангийн дуаз нь долоо дахь өлзийт тэмдэг.
    
    Энх амгалангийн Алтан хорол. Анд нөхдийн журамт амарлингуй ахгын шижир алтаар бүтсэн, аюулт дайсныг сүрээр дарагч мянган хигээс яралзан, агуу олон тивд түгээмэл орчихоор тэтгэгч, амгалан тайвны алтан хүрд нь найм дах өлзийт тэмдэг.`,
  },
  {
    startWord: "o",
    startWordMN: "О",
    title: `
    ​ОХИНЫ ИНЖ`,
    desc: `Сүй бэлгийн хариуд бэрийн талаас инж нэртэй бэлэг өгдөг. Охины инжинд орох бэлэг сэллтийг зөвхөн түүний эцэг, эх хоёрт бэлтгэх бус эцэг эхийн талын төрлийн хүмүүс бэлтгэдэг байжээ.


    Охиныхоо үс гэзэгний чимэг, зүүлт,өвөл зуны дээл, ор дэрний хэрэглэл,авдар сав,эмээлтэй хазаартай морь, хэдэн толгой мал зэрийг инжинд орулдаг байв.
    
    Түүнийг энхэрийн өмч гэдэг нөхөр нь дур мэдэн зарж үрэхёсгүй байв.
    
    Охины талаас бэлтгэхинжийн хэмжээ хоёр талын харилцан тохиролцсоноор их бага байж болно. Гэхдээ хүүхнийг гоёход зориулан өгсөн зүйл сүй бэлгийн хэмжээнээс бага байж болохгүй. Хүүхний тал гэрийн доторхи хогшил, хүүхний хувцас ба счимэглэл бэлтгэдэг ёстой. Үүнд:
    
    Охины тал ургийн үр бэрболсон хүүхэндээ ердийн чимэг болгож хэрэглүүлэхээр есөн эрдэнээр орлож хийсэн сүйх шивэргэл, татуур хавчиг, гархи бөлзөг бэл, туухай, гарын бугуйвч зэрэг нарийн эдлэлийн зэрэгцээгээр цаг цагийн болоод гэрт гадаа өмсөх хувцас, хунар, уналгын морь, мөнгөн чимэг, хогшил зэргийг авдар савууддад агуулан ачлагын ххөсөг тэмээн тэргэнд тэгнэн хамтын хувь болгон өгдөг тухай тодорхой өгүүлжээ.
    
    Мөн Монголын хууль цаазны бичигт:
    
    “Ямбатын охинд өгөх инжний хэмжээ 10 жил оёсонхувцас, 20 жил бэтгэсэн эмээл, хазаар, өмсгөл ууж , хоёр морь, үүнээс дотогш өгч болохгүй.
    
    Дунд ардын охинд өгөх инж таван зах,арван зах оёотой, нэг тэмээ, нэг морь, доод ардбол морь, тэмээ,дээл, ууж, эмээл, хазаар өгнө” гэж тусгагджээ.
    
    Эдгээрээс үзэхэд хүүхнээ гэрүүлж байгаа айл түүнд зориулан эцэг, эхээс бэлтгэж өгсөн зүйл нь хувь өмч болох уламжлалтай. Хэдийгээр инж нь тэр айлын хөрөнгөтөй нэгддэг байсан боловч охин хүн түүндээ эрх мэдэлтэй, ямар нэгэн тохиолдолд түүнийгээ авч гэртээ буцах эрх бүхий байжээ. Хэрэв үр хүүхэдгүй байгаад эхнэр нь нас барвал инж буцаагдана. Энэ тухай халхын цааз эрхэмжийн бичигт:
    
    “ноёд тавнангуудад авхай дээр авхай, өгвөсө урьд авхайг инжтэй нь эцэг нь авах болов.
    
    Тэр дараачийн авхайд инж бүү өг! Өгвөөс зуун адуу, арван тэмээ авах болов” гэжээ.
    
    Ингэж инж малыг хүүхэн гэртээ нөхрийн хамт төрхөмчилж очих үед голдуу өгдөг байсан ба инж хүндагуулах ёс, язгууртны дунд нэлэд дэлгэрч байсан тухай сурвалж бичиг, судалгааны хэрэглэгдэхүүнд тааралдаж буй.`,
  },
  {
    startWord: "o",
    startWordMN: "О",
    title: `
    ​ОВОО ТАХИЛГА`,
    desc: `Овоо тахилга бол монгол туургатны хамгийн түгээмэл зан үйлийн нэг юм. Овоо тахих явдал их эрт цагт бий болжээ. Монгол нутгийн хаагуур ч явсан тахилгын овоо олон дайралдана. Уул хадтай газар чулуугуур, чулуу багатай газар элс шороогоор, модтой газар модоор овоо босгоод тахидаг.

    Сүрт өндөр уулийн оргил, давааны орой, рашааны эх зэрэг гол газрыг олн овоо босгодог.
    
    Овоо (гол)-ны орчимд 4 зүгийг заасан туслах чанарын олон овоог босгож байв. Тахилгын овоог монгол хүмүүс маш их шүтэж эрхэмлэдэг. Монгол хүн овооны дэргэдүүр шууд өнгөрөх ёсгүй, заавал мориноосоо бууж мөнгө төгрөг тавих, архи , идээ цацах буюу мориныхоо дэл сүүлнээс тасалж овоо дээр уяж тавих, овоонд чулуу нэмэх ёстой ажээ. Бүүр эрт үедээ монголчууд тахилгын овооны дэргэдүүр гарахдаа заавал мөргөдөг байжээ.
    
    Овоо тахих явдал яаж үүссэн юм бэ гэвэл, эрт цагт хүүмүүсийн үйлдвэрлэх хүчний хөгжил сул доройгоос байгаль ертөнцийн ямарваа нэгэн үзэгдлүүдийг ид шид, эзэнтэй гэж ойлгоод тахих явдал бий болсоор эхэлжээ. Тухайлбал монголчууд ган гачиг тохиолдох, мал сүрэг үхэх, өвчин зовлонд нэрвэгдэх явдал цөмөөр ойр орчныхоо газар орны лус савдаг олширсонтой заавал холбоотой гэж ойлгоод ойр орчимдоо аль сүртэй харагдсан газруудаар овоо тахилга, ангийн хэлбэртэй, зөвхөн идээ цагааныхаа дээжийг аваачиж тавьж мөргөөд, бөө, удган нар очиж бөөлдөг байсан байна.
    
    Их төлөв өвс ногоо сайтай үхэр,хонь тарга авсан , тал нутгийн хамгийн сайхан цаг болох 6,7,8 сард овоо тахидаг. Тахилга хийхдээ овоон дээр модон салаа хатгаж, дээр нь өнгө бүрийн бөс буюу цаасанд судар бичиг дүүртэл бичсэн хиур хийсгэдэг.
    
    Доорхи хэдэн зүйл тахилга байдаг.
    
    Цусаар тахих. Маллаж байгаа үхэр, морь, хонь ямаагаа нядлаад овооныхоо өмнө тахиж, тэнгэр газар бурхан сахиусны ачийг хариулж байгаагаа илтгэдэг.
    Цацал өргөх. Саалийн архи , шар тос, шинэ сүүгээ овооныхоо өмнө цацаад, бурхан сахиулсан өршөөхийг даатгадаг.
    Галын тахилга. Овооныхоо өмнө нэг овоо гал ноцоогоод тахилаа өргөж, тахил таригч нь өөрийн нэрээ айлтгасны дараа бүхэл махаа галд өргөдөг, гал нь хэдий чинээ дүрэлзэнэ төдий чинээ сайн байдаг. Учир нь монголчууд галыг хамгийн ариун бөгөөд ад тайг зайлуулдаг, гэгээн сарын хүч, чадлын билэг тэмдэг гэж үздэг.
    Хасаар тахих. Хуучин цашт бурхан тахидаг тахилыг хасаар хийдэг байсан гэнэ. Ингэж тахих нь үнэ өртгөөр туйлын их байдаг тул аажмаар уламжлагдахаа байжээ. Гэтэл хойшлох тутам овоо тахихдаа наадам хийж, бөх барилдаж, сур харваж морь уралдах болжээ.
    Лам нар овоо тахилыг ихээр эрхэмлэж, өргөмжлүүлэх явдалд улам их дэмжлэн үзүүллээ. Овоо тахилгын үед лам нар ном уншиж байснаар тэдэнд ашигтай байжээ. Сүүлийн үеийн овоо тахилгууд дээр ихэнхдээ лам нар ном уншин байснаас бөө, удган бөөлөх нь тун ховор болжээ.
    
    Овоо тахихад бас л тусгай зан үйл гэж байдаг. Юуны урьд овоог засч чимнэ. Овооны дээр мод хатгаж, хадаг самбай уяж, дөрвөн талд нь сан тавих тавир чулуунуудыг бэлтгэнэ.
    
    Гол зочин бол овооны баруун хойд талыг барьж сууна. Овоо тахилганд ирж байгаа хүмүүс чанасан бүтэн хонины мах, архи, бяслаг, ааруул идээ авч ирнэ. Ингээд овооны дэргэд гал түлж, мах өргөж, цагаан идээ, архи , айраг овоон дээр асгаж мялаадаг ёстой. Дөрвөн талд нь арцаар сан уугиулна. Сангийн тавиурын чулуу нэг зүгт 3х3=9 чулуу байна. Дараа нь бөө, удган нар бөөлөх буюу лам нар ном уншина. Бөөлөг, уншлага дууссаны дараа тахилганд ирсэн хүмүүс мах, идээ цагаагаа хувааж аваад үлдсэнийг нь овоон дээрээ тавьж орхиод тарж явдаг байна.
    
    Бөөгийн мөргөлд овооны онго гэж тусгай онго байдаг. Бөө, удган нар овоо тахиж, бөөлөхдөө юуны урьд овооны онгыг урин дууддаг ажээ. Овооны онго бол бүх онгоны тэргүүн онго байх ёстой гэдэг. Энэ нь овоо тахилга, бөөгийн тахилгын хамгийн гол тахилга байсан гэдгийг харуулж байна.
    
    Овоо нь зөвхөн тахиж шүтэх зориулалттай бус, газар нутгийн тэмдэг, хил хязгаарыг тэмдэглэн тогтооход давхар үүрэг гүйцэтгэж байдаг юм.`,
  },
  {
    startWord: "u",
    startWordMN: "Ө",
    title: `
    ​ӨРХ ТУСГААРЛАХ ЗАНШИЛ
    `,
    desc: `Монголчууд хөвүүнээ 18-25 наснаас, охидоо 17-21 наснаас нь өрх гэр болгож, өмч хөрөнгө тасдан өгч, өрх тусгаарладаг заншилтай байв. Монголчууд охиноо 17 нас хүрэхэд «цусан тамир» нь гүйцсэн хэмээн эрд өгдөг. Хөвүүнээ бол 18 нас хүрэхэд «цусан чөмөг» нь бүрэдсэн хэмээн эхнэр авахыг зөвшөөрдөг байжээ.`,
  },
  {
    startWord: "u",
    startWordMN: "Ө",
    title: `​ӨНДӨР НАСНЫ ОЙ`,
    desc: `Монголын уламжлалт заншлаар дал, наян тав, ерэн насанд өндөр насны найр хийдэг. Наян тав хүрэхэд зуны дэлгэр цагт айраг цагаа болон найр үүсгэх ба ер хүрэхэд ирэг хурааж ирдэг хэмээх хуучин үг бий.

    Ойн найрыг үр хүүхэд, садан төрөл нь нутаг усныхаа ард олныг урьж өргөн дэлгэр хийдэг.
    
    Орчин үед хүний нийгмийн үүрэг ихэд өсөж, идэр залуугаасаа улс нийгэмд хөдөлмөрлөн түүнийг үнэлэн тавин наснаас эхлэн ойг нь тэмдэглэдэг болж байна. Гэвч тавин насны ой нь голдуу албан шинжтэй. Олонхи ёслол нь зуугийн талаас хэлбийсэн ахмад болох жар, далан насанд тохиолдож байна. Иймд энгүүн аав ээж, ах эгчийн ойг хийх гэвэл жараас дээш насанд тэмдэглэх нь зүйтэй бизээ. Гэхдээ тавин насны ой хийхээс цааргалж үл болно. Энэ эь улс нийгэм хамт олноос тэр хүний үр бүтээлтэй ажилласныг тэмдэглэж байгаа хэрэг юм.
    
    Насны ойн ёслогоо нь албан болон энгийн гэсэн хоёр янз болно. Тус баярыг албан ёсоор тэмдэглэх бол тухайн хамт олон нь албан газраас нь ёслож болно. Мөн энгийн гэр оронд тэмдэглэх ёстой нь хамтруулж ч болно. Ингэж албан ёсоор ёслох бол албан газрынхаа ёслолын байранд хүндэт суудал засан эрхэм улсаа суулган, тус ойг тэмдэглэх комиссын зүгээс уул ёслолыг нээн , уг хүний үйл ажиллагааны тухай даруухан мэдээлэл хийсний дараа үндсэн байгууллагын хамт олноос эхлэн бусад хүмүүс талархал дэвшүүлж дурсгалын бэлэг сэлт гардуулна. Ингээд ёслолын төгсгөлд найрын хүндтэнээс олондоо хариу талархал хүргэн сэтгэгдлээ хэлнэ. Энэ ёслол төгссөний дараа ёслолын цай хүргэж болно.
    
    Гэртээ ёслох ёсолгоонд ах дүү, үр хүүхдээс нь ёсны үг хэлж ёслолыг нээгээд үр ач нарын нь өргөл болгон хүүхэд багачуудаар нь хадаг идээ бариулан эхлүүлээд дараа нь хамт олны төлөөлөгч үг хэдэн хундага дэвшүүлэх ба ах дүү анд гайз нар нь дараалан ёсны үг хэлж бэлэг сэлт барина. Найрын ширэ, найрлах ёс нь эгэл хүндэт найрын адил болно. Энэ найрт хүндэтгэлийн дуугаар ая барин, ерөөл тавьж болно.`,
  },
  {
    startWord: "s",
    startWordMN: "С",
    title: `
    ​СҮЙ ТАВИХ ЁС`,
    desc: `Төв баруун нутгийн халхчуудын дунд гол төлөв сүйг бод малаар (5, 7, 9 гэх мэт сондгой тоотой)хүргэх ба сүйны хэмжээг хүүхэн тал тогтооэ төдөн бодын сүй авна гэж шийддэг байжээ.Сүй бэлэг бол гэрлэлтийн баталгаа боловч хүүхнийг авгай болгон засахад зориулан нэмэрлэх өртөг бөгөөд охины тал, юу л авна гэнэ тэр ёсоор өгдөг байжээ. Сүй бэлгийн хэмжээ, утга санаа нь тухайн айлын хөрөнгө чинээний байдлаас голчлон шалтгаалах бөгөөд 25 хонь, 2 адуу, 5 тэмээ дунджаар өгдөг, ядуувтар нь 2 хонь 1 тэмээ өгдөг байв. Халуун хошоотой малыг хүйтэн хошуутай мал дагуулж өгдөг учраас сүйний мал халзан цагаан хонь буюу зөв зүстэй морины тухай ихэвчлэн ярьдаг ажээ. Сүй бэлэгт ногт морь, эвийг нийлүүлэгч цавуу, сэвийг дарагч хуурай , гал бадруулах хэт зэргийг бэлэг болгон оруулж хүүхний эцэг барьдаг ёстой байв. Шар цавуугаар нааж, шалзан хадаасаар хаднаа гэж хүүхнийг өөрийн болгож бэхлэх утга агуулга бүхий заншил бөгөөд халуун хошуутай халзан цагаан хонь, цайвар зүсмийн мориорцавуу хадаг тавьдаг байжээ. Сүй бэлэг хүргэх ёс хариу авсны дараа гүйцэтгэнэ. Зарим нутагт худ хүргэх ч гэж яригддаг. Энэ нь худ ургийн холбоо тогтоож, хүүхнийг өөрийн талын хүн болгож буй зан үйл билээ. Сүй тависны дараа хүүхэн том таван мөнгөн товруутай толгой хөлний жинтүү бүхий нүүртэй модон ор , эсгий хөшиг , хүүхний өмсгөл, зүүтгэл сүйх толгойндаруулга үсний хавчаарууд , үсний гэ, гуу мөнгөн бэл зэргийг заавал бэлтгэнэ. Сүйний гол нь авгай хүний эдэлж хэрэглэх зүйлд зориулагдаж байв. Тэрчлэн бүсгүй хүний засалд зориулж мал мөнгө хөнжлийн арьс , орны ширдэгний эсгий зэргээр худ хүргэнэ гэдэг байжээ. Энэ үеэс хойш худ ургийн холбоо тогтоож, хүү тал гэр бэлтгэж, хүүхэн тал авгай хүний хэрэглэл болон гэрийн доторхийг төхөөрч мөн харилцан хамтарч оролцох ч зүйл бас байх ажээ. Үүгээр хоёр хүний хэргийг хорин хүн баталж хэлэлцдэг учиртай болно.`,
  },
  {
    startWord: "s",
    startWordMN: "С",
    title: `
    ​САР ШИНИЙГ ЖИНХЛЭХ НЭГЭН ЁС`,
    desc: `Эрт цагт Монголчууд гарч байгаа шинэ жилийн цагаан сарын шинийн нэгний өдрийн эзэлсэн гариг, од, өнгө мөнгө, махбодь, мөн тэр өдөр өглөөнөөс орой хүртэл тэнгэрийн өөрчлөлтийг сайтар ажиглан мэдэж, ирж байгаа он жилийг шинжлэн дүгнэдэг ёс заншилтай байжээ. Үүний нэг нь халхын төв нутаг. Их хүрээ буюу Төв аймгийн нутгаар сар шинийг «үнээ, хөлөг, боов» тоолж тэр жилийн өгөөж өнгө явцыг шинжлэн дүгнэх малчин ардын эртний нэгэн ёс байжээ.

    Энэ ёсыг одоо бараг мэдэх хүнгүй болж мартагдахад хүрч байна. Энэ тоолох ёсыг өгүүлбэл:
    
    Монгол зурхайн 12 жилээс морь, үхэрь мич, тахиаь гахай тавыг авч тэдний аль нэг шинийн нэгэнд таарсан амьтнаас эхэлж тоолж шинэ жилийн өнгө байдлыг шинжлэн дүгнэнэ. Тэгэхдээ морийг «хөлөг» үхрийг «үнээ», мичийг «цэрэг», тахиаг «шин будаа», гахайг «боов» гэж нэрлэн тоолно. Тэгээд жилийн байдал ямар ч бай гарч байгаа шинэ жилийн засал бэлэгдэл болгож билүүлэх орой шагайгаар алаг мэлхий засаж өрөөд шоог нь шөнө хаалганы тотгон дээр тавьж хоноод өглөө шинэлсний дараа өрх гэрийн эзэн малгайгаа өмсөж эхлэн шоо хаяжмэлхийгээ нар зөв тойрон сууж эвдэж тоглоно. Энэ бол Чингич хааны үеийн монгол малчны цагаан сарын улумжлалт ёс заншил ажээ.`,
  },
  {
    startWord: "s",
    startWordMN: "С",
    title: `​СЭЖИМ ӨРГӨХ ЁС
    `,
    desc: `Архитай холбоотой нэг заншил бол сэржим өргөх ёс юм. Түүнийг ядам хуруугаар гурван удаа өргөдөг. Гурван удаа өргөдөгийн учир нь хөх тэнгэр амгалан байг, хөрс дэлхий амгалан байг, хүн зон амгалан байг гэсэн утгатай.

    Ядам хуруугаар өргөдөг ямар учиртай юм гэхлээр тэр нь гарын таван хуруу дотроос болох болохгүй юманд хүрдэггүй хамгийн цэвэр юм. Яагаад ядам гэж нэрлэдэг юм гэвэл:
    
    Монголын нөлөө бүхий том ноёдыг манжийн хаан урьжээ. Урихдаа Чингисийн удмын дээд ноёдыг устгая нэсэн далд санаатай байсан юмсанж. Том хүлээн авалт хийж бүгдэнд нь эрдэнийн хаш хундагатай архи барьжээ. Тэр нь бүгд хортой байж. Сэжэг авахуулахгүйн тулд хорыг тэр дороо үхэхээргүй удаан үйлчилгээтэй, янз бүрээр найруулсан байсныг Ядам түшмэл мэдэнгүүтээ:
    
    Дээдсийг дагаж ирснийх юу билэ, би нэг хүртчихье гээд хундгаа тосчээ. Хийгээд өгөхөөр нь хуруугаа дүрээд сэржим өргөхөд л хуруу нь хувхай цайж мах нь шувтраад яс нь гозойгоод үлджээ.
    
    Ингэж монголын ноёдыг аварсан Ялам түшмэлийн нэрээр нэрлэсэн юм гэдэг домог яриа байдаг.`,
  },
  {
    startWord: "t",
    startWordMN: "Т",
    title: `​ТООНЫ БЭЛЭГДЭЛ`,
    desc: `Монголчууд тэгш, сондгой тооны харийн ойлголттой юм. Найм, есийн тоог их бэлэгшээдэг. Найман тахил гэж бий. Наашлахын найм гэдэг. Есийн тооны бэлэгдэл гэж бий. Есөн цагааны бэлэг тэргүүн зэргийн дээд бэлэгт тооцогддог, есөн эрдэнэ гэж бас бий. Он тооллын эхний есөн өдрийг шинийн нэгэн гэж хэлээд нэгэн, хоёрон, гурван гэж залгадаг нь тэр жилийн эхний есөн өдөрт засал, таалалга, золгох , зочлох бүх зан үйлээ эрхэмлэдэг. Үүндгурвын давтагдах тоо болох ёс, хорин долоо, наян нэг гэхчлэн тоон дээр хүндэтгэлийн тахилга, шүтлэг ёсолгоо гүйцэтгэдэг байв.

    Нэгийг тийм их бэлэгшээхгүй.Ганц хүн айл болдоггүй. Ганц мод гал болдоггүй гэдэг. Тэгш тоотой өдөр хурим найр болдог. Энэ нь дээрх үгтэй холбоотой байна.
    
    Сондгой тоотой өдөр оршуулгын зан үйл болно. Гурав, долоо , дөчин ес хоногт оршуулгын ёс заншлыг гүйцэтгэдэг.
    
    Бурхан шашны зан үйлд арвын тоог их онцолно. Тухайлбал арван цагаан буян, арван хар нүгэл гэж бий. Ардын элдэв дом шившлэгт гурав, долоог эрхэмлэж иржээ.
    
    ТӨРСНИЙ ДАРААХ ЁС – Эх хүн төрсний дараа гурван хоног «төрсний цээр гам» гэж хийдэг байжээ. Энэ нь хоол, унд, нойр, хэвтрийн дэглэмийг сахих ёс байв. Төрөөд унтахыг хатуу цээрэлдэг. Хөлөө жийж болохгүй. Тэгээд хөлд цус хурна, хууч тогтоно гэж хорьдог. Хагас суугаа байдлаар байх ёстой гэнэ. Идээгий нь багахан хйисэн шингэн сүүтэй цай уулгаж, гурван удаа усанд угааж базсан шагай чөмөг голдуу махаар хийсэн шөлтэй хоол идүүлдэг. Дархад юм уу, дорнод нутгийн халх гол хавиар загасны махаар шөл хийж уулгадаг заншил бас байлаа.
    
    ҮР ХҮҮХЭД ГУЙХ – Эмэгтэйчүүд хүүхэд гаргахгүй байхад хүн чулуунд хадаг барьж мөргөн үр хүүхэд заяахыг гуйдаг байв. Түүнчлэн удган мод, уул мод овооноос үр хүүхэд гуйж, өргөл барьц өгч мөргөдөг байлаа. Халхын голын нутгийнхан Вангийн цагаан уулын «хүүхдийн овоо» гэдэгт өргөл мөргөж үйлдэж үр хүүхэд гуйдаг байжээ. Зарим нь үр хүүхэд заяахыг бэлэгдэж, тусгай овоо хүртэл босгодог байсан гэдэг.
    
    Олон хүүхэдтэй айлаас хүүхэд үрчилж, хүүхэд дагуулж ирэхийг зөгнөдөг байв. Айлын хүүхэд цуглуулж баясгалан, даалуу, хорол, шагай мэтээр тоглуулан будаалга- цайллага хийдэг байжээ.`,
  },
  {
    startWord: "t",
    startWordMN: "Т",
    title: `​ТАЛИЙГААЧИЙГ ОРШУУЛАХ ЁС`,
    desc: `Хайрт нөхрөө үүрд үдэн, түүнийг оршуулан ёслооно гэдэг бол хамгийн хүндтэй үйлийн нэгэн билээ. Монголчуудын хүн оршуулах заншил эрт дээр үеэс үе улиран уламжилж ирсэн олон янз ажээ. Үүнд булшлаж, хигисхүү хийнэ. Хөшөө таш босгох, хайлж чандар болгон хадгалах, хатааж занданшуулах , ил задгай гээгдүүлэн оршуулах гэх мэт болно. Эдгээрээс булшлах, ил оршуулах хоёр нь нийтийн түгээмэл ёс байсан бөгөөд түүнээс ил гээгдүүлэн оршуулах зан үйлийг булшлан оршуулах ёсоор халж, тэрхүү булшлан оршуулах заншил нь орчин үеийн монгол нийтийн ёс болж байна. Нас барагсдын оршуулах ёс нь газар авах, талийгаачийн шарилыг гэр орондоо байрлуулан уй хийх, талийгаачийг хөдөөлүүлэх, гашуу тайлах зэрэг үндсэн хэсгээс бүрэлдэж байна.

    А.газар авах –Газар авах гэж талийгаачийн ар гэрийн хүн нас барсан хүнээ хөдөөлүүлэх нутаг сонгохыг хэлнэ. Ингэж газар авахад иргэдийг үйлчлэх байгууллагаас хичнээн тусалж газрыг заан хэрэглэх зүйлийг олгож өгөх нь зүйтэй. Оршуулах газрыг товлосны дараа шарил залахад бэлтгэхийн өмнө газар авах ёс гэдгийг гүйцэтгэдэг. Ингэхэд хадаг тавьж газраа хүндэтгээд, эвэр мод мэтийн зөөлөн юмаа тойруулж зуран дараа нь царил зээтүүгээр ухна. Ингэхийн учир нь нөхцсөн хүнээ тавих газрыг нандигнаж байгаагийн тэмдэг ажээ.
    
    Газрыг доорхи хэмжээгээр ухаж бэлтгэнэ. Ингэхэд газрын гүн нь хэт гүнзгий биш 1,5 метр орчим байхад болно. Шарилын хоорондын зай нь урт талдаа 1 метр, богино талдаа 1,5 метр байх ба шарил залах нүхний хэмжээ нь насанд хүрсэн хүнийхэд нүхний урт нь 2 метр, өргөн нь 1 метр, 10-аад настай хүүхдийнхэд урт нь 1,5 метр, өргөн нь 0,8 метр, 3 хүртэлх насны хүүхдийнхэд урт нь 1 метр, өргөн нь 0,6 метр орчим байж болно.
    
    Түүнчлэн нүхийг хашиж, доторлож болох боловч ёроолыг газраар нь байлгахыг аятай гэдэг. Учир нь монголын заншилаар хайрт хүнээ унасан газар угаасан ус, төрсөн нутгийнх нь бүлээн хөрсөнд өлгийдөн оршуулахыг эрхэмлэх учир тийнхүү хүйтэн үнсэл (цемент) , аргай (бетон)-д булшлах нь аятай бус гэдэг. Харин хана туургийг нь мод чулуулаг буюу дээрх аргай мэтсээр бүрээд, дээрээс нь бат бөх гоёмсог хавтангаар таглан, нэрийн нь дурсгал болсон хөшөө босгох нь зүй. Хөшөөг аргай, чулуугаар хийж болно. Хөшөөн дээр талийгаачийн алдар нэр, журамт иргэний дурсгал болсон нар, сарны дүрс бүхий бэлэгдлийн зураг сийлж болно.
    
    Б.Шарилыг гэр орондоо байрлуулах -Талийгаачийг бие барсны дараа уй хийхэд бэлтгэн аятай тохитой байрлуулах хэрэгтэй болдог. Ингэхдээ гэрт бол юмаа зайчлаад эр хүнийг баруунтай нь , эмэгтэй хүнийг зүүнтэй нь байрлуулах ба их эрхэм хүнийг голд байрлуулдаг. Байшинд мөн нэгэн адил өрөөний юмыг зайлуулан суллаж тасалгааны хаалга үүдний байдлаар хойт, урд чигийг баримтлан талийгаачийн толгойг хойморь хандуулан тогойн чигт хөргийг өлгөнө.
    
    Шарилыг дээш харах буюу хажуугаар нь хандуулан хоёр янзаар байрлуулж болно. Иймд настай аав, ээжийг монгол ёсоор хажуу тийш хандуулан байрлуулахад болох бөгөөд идэр залуу буюу албаны эрхэм хүнийг нийтийн ёсоор өөд нь харуулан хэвтүүлэх нь зүйтэй биз ээ. Гэрт шарил байрлуулвал хаалга үүдийг битүүлж болох бөгөөд байшин саванд бол өрөөний салхивчийг онгойлгон сэрүүн байлгаж болно. Ямар ч атугай гэр байшингийн алинд ч ялгалгүй ариутгах үнэртэнг ихэд хэрэглэх нь чухал. Талийгаачийг заавал шинэ хувцас өмсгөх албагүй. Өмсөж байсан хувцасыг нь хэрэглүүлэх буюу нэгэн бол цайвар өнгийн бөсөөр биеийг ороож болно. Мөн түүнчлэн нүүр, зүс , царайг засан хадаг торгомсгооор бүтээх нь зүйтэй. Тэгэхдээ авч хайрцаг бэлэн болтол ор засах буюу тусгай дэвсгэр дэвсэн дээр нь шарилыг байлгах нь зүйтэй.
    
    В. Авс бэлтгэж байрлуулах – Талийгаачийн биед тохирсон авсыг бэлдэж гүйцсэний дараатүүнийг сайтар янзалж чимэх хэрэгтэй болдог. Тэгэж чимэхдээ авсны тагийг цагаан цэнхэр даавуугаар, авсны доторыг зөөллөгтэй шаргал буюу цагаан бөсөөр бүрдэг. Энэ нь хөх мөнгөн тэнгэр, хөрст алтан дэлхийг бэлэгдсэн зүйл болно. Мөн нилэнхийд нь хөх юмуу улаан хараар бүрнэ. Авсны дээд тагны хөвөөг ногооноор хуниас гарган чимэглэж болно. Цэцэг чимэг хийх бол мөнхийн дурсгалын бэлэгдэл болсон хөх өнгийн цэцэг голдон, хайрын бэлэгдэл болсон шар, ариун бэлэгдэл болсон цагаан өнгийг дагалдуулан чимэн цэцгийн цоморлиг бэлдэж болно. Мөн энэ мэт өнгө харшуулан цэцгэнэрх, бэлтгэж дээр нь эмгэнэлийн үгтэй тууз хийж болно. Цэцгэн дээрх тууз нь монголын уламжлалт заншилт бараан өнгийн байх бөгөөд түүн дээрх үсгийг цагаан буюу шараар бичдэг. Улаан дээр шараар бичихийг баярын дурсгал, хожмын хүндлэлд хэрэглэдэг ажээ. Энэчлэн гашуудлын тэмдэг нь уламжлалт заншилт хар хөх дээр цагааныг хослон хэрэглэдэг. Хэдий тийм боловч орчин үеийн нийтийн ёсны улаан хар болон , уламжлалт хөх , цагаан хоёр өнгийг аль алийг ньбуруутгах аргагүй тул хэрэглэгчийн үзэмжээр сонгох нь зүй. Түүнчлэн авсыг цэцгээр чимэхэд уламжлалт заншилт бэр цэцэг , цагаан лянхуа хийж хэрэглэх нь буй. Мөн авсны дотор их эд зүйл хийх нь төдий л аятай бус тул голдуу бэлэгдлийн эдболох таягийг бяцханаар хийж настай хүнд дагуулах, зүү, утас, мэтсийг эмэгтэй хүнд , тоглоомын зүйлийг хүүхэдбагчуулд дагуулдаг байна. Үүнийг бас бодолцон дуртай зүйлээ хамт хийж болно.
    
    Г. Хөдөөлүүлэх – Талийгаачийг хөдөөлүүлэх өдөр нь даваа , лхагва, баасан гариг болох бөгөөд өглөө этт гарах нь зүйтэй. Шарилыг ачих хэсэг нь машин тэрэг, ердийн хөсгийн аль нь ч байж болно. Унаа хөсгөө бэлдэн шарил ачих байрыг янзлаад шарилаа дотроос гаргана. Шарилыг гаргахдаа амьдын урвуу үйл болгон байшин юм уу гэрээс гаргахад босгон дээр нь хөндлөн мод тавьж шарилыг толгойгоор нь гаргана. Ингээд гашуудлын цуваа хийж, ёс гүйцэтгэх буюу шууд хөсгөнд ачаалж болно. Гашуудлын цуваа үүсгэх аваас хамгийн түрүүнд хөрөг, дараа нь цэцэг, дараа нь гавъяа шагналыг барин, хойноос нь шарилыг явуулан хүмүүс араас нь дагалдана. Тэгээд унаанд шарилыг ачин, оршуулгын газар луу оддог. Тэргэн дээр шарилыг ачихад дор нь дэвсгэр дэвсэн аятай байрлуулахын хамт хажууд нь дотно хүмүүсийг түшүүлэн байлгана.
    
    Ингэж шарилыг хөдөөлүүлэн гаргахад зам зуур шарил хүргэх ёс хийдэг. Тэгэхдээ унаан дээрээс мөнгө шидэх, буун хадаг тавьж явах нь зохимжгүй тул гагц хадагны оронд цэнхэр өнгийн торгомсог туузыг (2-3)-ийг бэлдээд тэрэгний урьд уяхад хадаг барьсантай ялгаагүй болно. Хэрэв ингэвэл замд бууж зогсох хэрэггүй. Шарилыг гэрээс гаргахын урьд уй хийх болон хөдөөлүүлэх үед хөгжим хэрэглэж болно. Мөн шарил хүргэхэд ч хөгжим дуугаргаж болох юм.
    
    Ингэж шарил хүргэн явахад хэтэрхий довтолгон явах нь аятай бус
    
    Д. Шарил залах – хөдөөлүүлэх ёсны нэг хэсэг нь шарил залах зан үйл юм. Энэ ёслолыг талийгаачийн оршуулах газар шарилыг нь авчирсны дараа гүйцэтгэнэ. Шарил хүрч ирэхэд оршуулах нүхний баруун талд шарилаа дэвсгэр дээр буулган толгойг нь газрын өөд чиглүүлэн байрлуулаад, нүхийг цэвэрлэн бэлтгээд, бүх хүн нам гүн болж хагацал үйлдэх ёс гүйцэтгэнэ. Энэ үед дурсгалын үгийг товчоор хэлэн талийгаачтай салах ёс хийнэ. Ингэхдээ түүнийг үнсэж үнгэх нь онц биш. Тэгснээс талийгаач нь дүү хүн бол амьд ахмад нь магнайд нь гараа хүргэж хайрлахын утгыг илэрхийлэх, бүрлээч нь ахмад хүн бол дүүмэд нь өвдөгний нь тус газар авсны буланд духаа хүргэн хайртнаа хүндэтгэж байгаагаа илтгэж болно. Ёслолын үг хэлж дээрх ёсыг гүйцэтгэсний дараа нэг минут номхон зогсож гүн эмгэнэл хийнэ. Ингээд шарилаа газарт залах ёсыг гүйцэтгэнэ. Шарил залах газар их хадгийг тавих нь зохимжгүй, харин цайны зүйлс, арьс, эсгийний өөдөс цагааг чулуу хийдэг болно. Харин мөнгө төгрөг зэрэг их юм хийх нь онцгүй. Тэгээд сүү дусаан, арвайн будаа, цацаад шарилаа зөөлөн идээр тэнчээдэн газар (нүхэнд) тавина. Дараа нь хавтангаар таглан гагнаж, толгойн талд нь хөшөө босгоно. Мөн бунхан хийсэн ч болно. Эсвэл гагц хөшөө босгоод зүгээр шороо овоолж ёслох ч буй. Харин ингэж дан шороо овоолж булвал гоёмсог өнгийн талхалсан чулуу, цацах буюу цэцэг ургамалын үр суулгаж болно. Хашаа хайс сараалгах нь тийм ч аятай бус. Шарилыг бунхалж дуусаад мөнөөх шарил гаргах үед тэргэнд уясан цэнхэр туузыг хөшөөнд зангидан дурсгал болгон үлдээж болох ба эргэн тойронд цэцгэн эрих тавьж болно. Үүнчлэн бүх үйлийг төгсгөөд хавь орчныг сайтар цэвэрлэн, уй хийгч нөхөд бүгдээр сайтар бунхныш гурвантаа тойроод, унаа хөсгөө хөлөглөн гэрийн зүн эгнэ. Ингэхдээ ирсэн замаараа буцдаггүй гэдэг.
    
    Е. Гашуу тайлах- Бие барсан хүнээнутаглуулж ирээд гашуу тайлах ёс гүйцэтгэдэг. Энэ ёсыг ёслоход гэрт үлдсэн улс орон байрыг сайтар цэвэрлэн, нэгэн бол гэрээ шинээр барьж, дэвсгэр, эд өлгийг гоёмсоглон тавьж, идээ цагаа бэлтгэдэг. Оршуулганд явсан улсыг ирэхэд гар угаах ус, хярам хоёрыг бэлдэнэ. Мөн хөвөнд стирт шингээн гар арчиж болно. Бас арц, хүж уугиулж болно. Явсан улс гэрийн гадаа ирэн хувцас хунараа янзал, үс гэзгээ засан дээрхи усаар гарыг угаан бусад зүйлээр ариутгаад гэрт орно. Гэрт ороход угтах улс – Сайн явж ирэв үү, явдал сайхан бүтэв үү? Гэж асуух бөгөөд ирсэн улс «Сайн явж ирлээ, сайхан боллоо» гэж хариулдаг. Гэрт ороход цай , идээ бэлдсэн байна. Ширээг бүдэг хөх, судалтай хөх бараан бүтээлгээр бүтээх нь буй. Энд бэлтгэх зүйл , хоол унд болно. Архи дарж ууж уй гашуудал тайлах ёс огт үгүй. Гашуу тайлах будаалгын үед шарил тээсэн тэрэгний жолооч мэт ихэд хүчин зүтгэсэн хүнд хадаг, цай , мөнгө төгрөг барих бөгөөд бусад хүмүүст их бэлэг барих нь үгүй. Харин утас зүү, шүдэнз өгөх нь буй. Гашуу тайлах будаалгын үед хэрэглэх аяга , таваг нь хэтэрхий гялалзсан бус байх нь зүйтэй. Мөн тэр газар талийгаачийн зургийг өлгөн өмнө нь идээ тавин гэрэл барьж болох юм. Үүний учир нь хайрт хүнийхээ гэгээн дүрийг амьд мэт харж байгаагийн бэлэгдэл болно. Гашуу тайлах ёс гүйцэтгэсний дараа талийгаачийг засаг захиргааны бүртгэлээс нэрий нь хасуулдаг. Тэгээд түүнийг бие барснаас хойших долоо, хорин нэг, дөчин ёс хоногийг алинд ч эргэж очин болно. Ингээд хойшдын эргэлтийг сар жилээр тааруулан ёсолж булш бунханд нь цэцэг өргөж болно.
    
    Дурсгалын туузнаа бичих үгс
    
    Туузны эхэнд нь зориулсан үгийг бичин нөгөө үзүүрт нь дурсаж буй хүмүүсийн хаяг байна. Тэгэхдээ бичих үг нь хүн хүний байдлаар өөр өөр болно.
    
    Үүнд:
    
    Аав ээжийн шарилд үр хүүхдүүдээс өргөх цэцэгт
    Ах эгч болох хүний дурсгалд
    Дүү болох хүний дурсгалд
    Үр хүүхэд болох хүнд
    Амраг хань болох хүнд
    Багш, удирдагч зэрэг хүндэт эрхэм хүнд
    Үе, журмын нөхөрт
    Тухайлан онцлохгүй бүх төрлийн хүнд түгээмэл хэрэглэж болох үг
    «Хайрт аавдаа »
    
    «Хайрт аав таньдаа»
    
    Үр хүүхэд нь
    
    Үр ач нар тань
    
    Хамаатан садан нь гэх мэт
    
    «Хайрт ахдаа»
    
    «Хайрт эгчдээ»
    
    «Хайрт эгч Тандаа»
    
    Дүү нар нь
    
    Дүү нар тань
    
    Хамаатан садан нь
    
    «Хайрт дүүдээ»
    
    «Хайрт дүү чамдаа»
    
    Ах эгч нар нь (чинь)
    
    Хамаатан садан нь
    
    «Хайрт хүү (охин) чамдаа»
    
    Аав ээж нь (чинь)
    
    Ах дүү нар нь (чинь)
    
    Хамаатан садан нь (чинь)
    
    «Хайрт ханьдаа»
    
    «Хайрт хань Чамдаа»
    
    Гэргий чинь (нь)
    
    Нөхөр чинь (нь)
    
    «Хайрт багш (удирдагч, дарга , эмч...)-даа»
    
    «Хайрт багш (удирдагч, дарга , эмч...) Тандаа»
    
    Шавь нар нь (тань)
    
    Хамт ажиллагсад нь (тань)
    
    ................-ны хамт олон
    
    «Найз чамдаа»
    
    «Хайрт найз чамдаа»
    
    «Хайрт нөхөр чамдаа»
    
    «Хайрт нөхөр. .. . . . Чамдаа»
    
    Анд нөхөд нь (чинь)
    
    Хамт ажиллагсад нь (чинь)
    
    Хамт суралцагсад нь(чинь)
    
    . . . . . . .хамт олон
    
    «Хайрт . . . . . . – даа »
    
    «Хайрт Тандаа (Чамдаа)»
    
    «Хайрт ..... Тандаа (Чамдаа)»
    
    Анд нөхөд нь (тань, чинь)
    
    Хамт ажиллагсад нь (Тань, чинь)
    
    Хамт суралцагсад нь (Тань, чинь)
    
    Үр хүүхэд нь (тань, чинь)
    
    Ах дүү нар нь (тань, чинь) 
    Хамт олон нь (тань, чинь)
    Хөшөө – Нас барсан хүнд зориулж босгох хөшөөн дээр гагцхүү овог, нэр , төрсөн, бие барсан оныг хуучин шинэ үсгийн аль дуртайгаар бичиж болно. Хөшөөний дээд тал нь мохоо дугариг, хурц гурвалжин хоёр янз байна. Түүний аль алинд нь талийгаачийн үйл хэрэг алдар нэр нь наран, саран мэт мөнхрөх болтугай гэсний утгаар нар сарны лүрс сийлэх бөгөөд түүнчлэн үйл дурсгал нь галын дөл мэт мандан бадраг гэсний учир мөнөөх нар сарны дээр галын дүрс гаргадаг. Энэ нь нэг ёсондоо манай улсын сүлднээ байдаг монгол улсын төрийн билэгдэл болсон соёмбо тэмдгийн нэг хэсэг болох тул төрдөө нэртэй, түмэндээ хүндлэлтэй хүн явсан гэдгийг албан баталгаа болох юм.`,
  },
  {
    startWord: "t",
    startWordMN: "Т",
    title: `​ТОГТДОГГҮЙ ХҮҮХЭДТЭЙ ХОЛБООТОЙ ЗАНШИЛ`,
    desc: `Хүүхэд нь тогтдоггүй айл үр хүүхэд олонтой тэд нь эсэн мэнд бойжиж байгаа эх хүний дотоод энгэх хортойноос авч хадгалах , ихрийн өрөөсөн хүнээр эх барьж авхуулах, хүүхдийн дээрээс тогой хөмөрч гадуур нь зурах, харь угсаа гаралтай хүний дээл хувцасанд боож авах, гэрийн тавилгыг сольж тавих, чонын арьс тулманд боож авбал сайн гэдэг ажээ. Мөн тийм хүүхдийн хүйг цагаан зээр, буга , чоно, алаг даага гэх мэтийн амьтдын шөрмөсөөр боодог байжээ.

    Хүүхэд нь тогтдоггүй айлд хүүхэд төрөхөд Шаалдуу, Бэлтгэр, Боохой, Мод чулуу, Эмээл, Янгиа, Оргодол, Хөх нохой, Цагаан нохой, Орос гэх зэрэг этгээд нэр өгдөг.
    
    Тогтдоггүй хүүхдийг өөр айлд өргүүлж , үрчлүүлдэгзаншил зарим нутагт одоо хэр байна. Тэгэхдээ эхээс нь нуугдуулж буруу үүдээр гаргадаг. Тогтдоггүй хүүхдийн элдэв муу юмнаас сэргийлэхийн тулд онго- зүүлт зүүх, нялх бага цагт нь айлд оруулахгүй байх, хүүхдийн угаалгын ёсыг цээрлэх, хүүхдийн хүзүүнд бяцхан гархи гинж зүүлгэх, буруу энгэртэй дээл өмсгөх , ан амьтны арьс үс ,шүд , соёо , шагай, шувууны хумс, загасны хүзүү, нурууны яс тэргүүтнийг зүүлгэхийг ихэд эрхэмлэдэг. Тогтдоггүй хүүхдийн үсийг багад нь авдаггүй байв. Тийм хүүхдийн дээлэнд есөн нүх зүүлгэж байсан нь «тогтоох» гэсэн бэлэгдэл юм.`,
  },
  {
    startWord: "v",
    startWordMN: "Ү",
    title: `
    ​ҮРЧЛЭХ ЁС
    `,
    desc: `Монголчууд гэр бүлийг бат тогтвортой байлгахыг эртнээс анхаарч иржээ. Түүний нэг хүчин зүйл бол хүүхэд үрчлэн авах явдал гэж үзэж байв. Сэтгэлтэй эр эм хоёр дундаасаа хүүхэд гарахгүй бол өөр айлаас хүүхэд үрчилж авдаг байлаа. Одоо ч тийм ёс үргэлжилж байна. Үүнийг хүүхэд өргөж авах ч гэж ярьдаг. Нэг талаас хүүхэд үрчилж авах эцэг эх нөгөө талаас хүүхдээ үрчлүүлэх эцэг эх харилцан санаа нийлсэн байдаг. Хүүхэд үрчилж авах, үрчлүүлэх хүмүүс лам, зурхайчаар өдөх цаг үзүүлж гарийн бэлэгдлийг нарийн баримталдаг. Тэгээд үрчлэх эр, эм хоёр үрчлүүлэх айлдаа «сүүн» бэлэгтэй очино.

    Сүүн бэлэгт заасан тодорхой хэмжээ байгаагүй. Өгөх хүмүүсийн сэтгэл, хэр чинээнээс болдог байв. Хүүхдийг нь авч байгаа айлд цөөн тооны мал сүрэг ч тууж очдог.
    
    Говь нутагт сүй бэлгийн дээд хэмжээ болгож нэг тэмээ өгдөг гэнэ. Харин хүүхдээ агч байгаа айлын хүн бүрт дээлийн гадар өгдөг заншил түгээмэл байв.
    
    Зарим нутагт хүүхэд үрчлэн авах хүмүүс хүүхдээ үрчлүүлж байгаа айлд ирж хоноод маргааш нь ургахын улаан нарнаар хонин цагт хүүхдээ авдаг байжээ.
    
    Үрчлэн авч байгаа эх, хүүхдийн төрүүлсэн эхэд хадаг барьж «Хүүхдээ хайрла» хэмээн гуйна. Тэгэхэд хүүхдээ гардуулж өгнө. Өргөж авч байгаа эх авчирсан өлгийдөө өлгийдөн авч явдаг.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `
    ​ХҮҮХДИЙН АМ ГЭМТЭХЭД
    `,
    desc: `Урьд цагт хүүхдийн ам гэмтэхэд голдуу хүйгээр нь домнодог. Мөн нагац нарын унаж явсан морины халуун амгайг тотгоор оруулж домнодог байв. Тэгж домнохдоо

    — Эхэн домЭхэн дом! Эхэн дом! Хэзээ морины хазаараар домнуулж байлаа гэж хэдэнтээ шившин үгэлдэг заншилтай. Зарим нутагт төмөр улайтгаж баганаа цоргиод утаагаар хүүхдээ утаж домнодог ёс ч бий. Нохой засаад халуун төмсгөөр нь домнодог ёс байв.
    
    Бас бурхан багшийн зурмал зургийг аманд нь гурав хүргэж домнодог заншил ч байдаг. Одоо цагт зөгийн балаар эмчилж байгаа юм.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХҮҮХДИЙН УГААЛГА
    `,
    desc: `Хүүхэд төрөхөд гурав буюу долоо хоносны дара “Хүүхдийн угаалга” хэмээх ёслол хийдэг. Уг ёслол нь голцуу өрх гэр, хот айлын хүрээнд болж өнгөрдөг учир тусгайлан зар тарааж зочид урьдаггүй. Харин хүүхдийн угаалганд “авсан эх”-ийг хүндэтгэн урьж, хамгийн хүндэт зочин болгож гэрийн хойморт залж, төрсөн эхэд зориулсан шөлний хонины ууцыг өмнө ньтавьж хүндэтгэдэг. Хүүхдийн «авсан эх» угаалганд ирэхдээ гурван бүстэй нэхин өлгий хүүхдэд бэлэглээд хүүхэд угаах зан үйлийг удирдана. Хүүхдийг эхлээд хар цайгаар угаагаад, махны шөлөнд боож авсан эх нь угаана, төрүүлсэн эх нь энэ бүх зүйлийг бэлдэж өгнө.
    Хуүхдээ угааж дуусаад авсан эх авчирсан нэхийдээ боогоод шинэ хүнд нэр өгнө. Угаалганд лам залсан бол «сан тавиулж» түүнээс нэр хүсэх ч ёс байдаг.
    
    Угаалгын махан зоогонд ууцнаас гадна хонины баруун гуяны шаант чөмөгийг «хүүхдийн хувь» гэж тавиад сүүлд нь төрүүлсэн эх нь идэж, шагайгий нь салгалгүй, чөмөгийг ташилгүй бүтнээр нь хоймор авдартаа хадгалдаг ёстой байв. Угаалгын зоогонд «хурим» гэж нэрлэгдсэн зоог ордог. Будаа агшааж өрөм тос аарц хольж “хүүхэд угаасны хурим” гэж цугларсан олон иддэг ёсгой байна. Угаалганд ирсэн хүмуүс «Адууны хүн үү, тогооны хүн үү?» гэж хүүхдийн хүйсийг асууж авчирсан бэлгээ барина. Хүүхдэд өөрсдийн урласан цамц, тоглоом бэлэглэдэг. Үүний зэрэгцээ хүүхэд нь «тогтдоггүй», «энхрий хүүхэдтэй» айл сахиж дагаж ирсэн элдэв цээр хорионы ёс горим байжээ. Жишээ нь: хүүхэд нь тогтдоггүй айлд хүүхэд төрөхөд эр хүн «боож авах» эцэг нь хүйг нь хад чулуун дээр тавиад “хутгаар дарж” эх барьж авах, хүүхдээ төрмөгц нохойн идүүрэнд тосч аваад дараа нь эцгийн нь дээлийн баруун ханцуйд боож авах илүү гэр, майхан зэрэг тусгай онцолсон оромж барьж төрүүлэх, хүүхдээ боож ширмэн тогоонд “хөмөрч” авах, гүзээнд хийж авах, мөн хэд хоногоор айлд байлгах, төрсний дараа сараар ч хөл хорих зэрэг олон цээр хорио, дом байжээ.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХҮҮХДЭД ЦЭЭРЛЭХ ЗУРГААН ЗҮЙЛ`,
    desc: `Гашуунаар бүү тэтгэ
    Амттанаар бүү цатга
    Өнгөнд бүү шунуул
    Тансагт бүү умбуул
    Улайг бүү үзүүл
    Нойронд бүү автуул
    Гэсэн захиас сэтгэлд сийлж, ухаанаа урлаж орхисон байна. Монгол айлд монгол хүн ийм л жаяг ёсыг сахин амьдарч, хийж, бүтээж, төгс нөгчиж зуун зууныг туулжээ.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХҮҮХДИЙН ҮС (ДААХЬ) АВАХ ЁС`,
    desc: `Эрэгтэй хүүхдийг гурав, тавтайд нь, эмэгтэй хүүхдийг хоёр, дөрөвтэйд нь даахь (өрөвлөг)-ийг үргээнэ. Хүүхэд мэдээ орж өөртөө зориулан баяр хийж буйг мэдрэх чадвартай болсон үед нь өрөвлөгийг үргээдэг байна. Энэ болтол хүүхэл задгай үстэй явах буюу өрөвлөгий нь дээш нь босгож угаар нь уяж болно. Боломжтой аятай нэг сайн өдрийг сонгоод өглөөгүүр буюу үдээс өмнө ах дүү, садан, нзйз нөхдөө цуглуулан ширээ засаж, идээ будаа өрөөд, хүүгээ гоё хувцаслан ширээний тэргүүнд суулган уг ёслолыг гүйцэтгэнэ. Идээний зүйл нь уламжлалт буюу орчин үеийн алин ч байж болох бөгөөд заавал байх зүйл нь цагаалга хэмээх үзэмтэй аарцтай (сүүтэй) будаа болно. Энэ цагаалганаас хүн бүгд амсан, ирсэн хүүхэд бүгдэд аяга аягаар өгч будаалдаг ёстой билээ. Найрын ширээний эхэн талд буюу баруун хойно хүүгийй ивээл гэгдэх тэр айлын хамгийн хүндтэй хүн сууж байна. Найрын ахлаач — За, одоо хүүгийнхээ даахийг үргээе гэнэ. Хүү босно. Нөгөөх хүн хүүхдийн үсэнд модон хутгаар хүрч, дараа нь хадагтай хайчаар хяргана. Нэгэн бол машиндаа хадаг уясан ч болно. Ингээд хүүгийн үсийг хайчилсны дараа сэвий нь хадагны нэг үзүүрт зангидаад, хүүхдийг зочдын урдуур өнгөрөөхөд, тохиолдогчид хайчаар үснээс нь үргээн хадганд нь нэмж боогоод «Урт насалж удаан жарга», «Урт настай удаан жаргалтай аавдаа ачтай ээждээ тустай, төр улсдаа зүтгэлтэй, түмэн олны манлай болж яваарай» гэж ерөөн, бэлгийн зүйл өгнө. Лам болгох хүүхдийн даахийг бүгдийг авдаг ёстой. Бэлэглэх зүйл нь тоглоом, харандаа бичгийн хэрэглэл, үсний тууз, тэмдэг, ил захидал, чихэр боов мөнгө төгрөг өгч болно. Мөн мал амлана. Ингээд зочинд идээ цагаа барьж дуу хуур болно.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `
    ​ХУУЧНЫ ОРШУУЛАХ ЁС`,
    desc: `Хуучны уламжлалт оршуулгынзаншил нь хаад ноёд, хутагт хувилгаад, бөө чойжинг оршуулах тусгай зан үйл эгэл ардыг хөдөөлүүлэх ёслолоос бүрдэж байлаа. Дээрх элдэв анги бүлгийн хүмүүсийг ёслох ёслогоо нь баян хоосон, эрх ямбаны байдлаар ихээхэн ялгаатай байсан боловч нийтдээ түгээмэл монголын нэгэн заншилтай байв. Хуучны оршуулгын ёс нь булшлан оршуулах, хайлж чандарлах, хатааж занданшуулах, хээр гээгдүүлэн оршуулах гэсэн үндсэн дөрвөн янз баисны дээр хээр ил задгай оршуулах нь хам- гийн түгээмэл байв. Иймд түүний тухай дор дурьдъя:

    Урьд хүн нас барахад тэр даруйд нь биед нь гар хүрэлгүй гэртэх юмыг зайлуулаад эмэгтэй бол гэрийнхээ зүүнтэй, эрэгтэй бол баруунтай нь хэвтүүлэн баруун гарын эрхий хуруугаар хамрын нүхийг даруулан сарвуугдэрлүүлж, зүүн гарыг биеийг дагуулан сунгаж тавиад, зүүн хөлийг өвдгөөр бага зэрэг нугас хийлгэн, баруун хөлнийг жийлгэн хажуугаар нь хэвтүүлнэ. Энэ нь хэвтэж байгаа арсланы шинжийг оршуулж байгаа хэрэг гэдэг. Ингээд гэрийн өрхийг битүүлэн, үүдийг дарж хүлээд лам зочийг залж лүйжин тавиулна. Энэ үеэс шарилын нутгийг үзүүлж газрыг сонгоод хадаг дэвсэн газар гуйж нутаг аваад талийгаачийг оршуулахад бэлтгэнэ. Эгэл хүнийг голчлон гурав хоног, аав ээжийг долоохоног,хутагт хувилгаадыг 21 хонуулж хөдөөлүүлдэг. Хаад ноёдыг бол тусгай шарилын газар бунхан байгуулан нутаглуулна. Ихэс лам нарыг хатааж занданшуулах буюу хайлж чандарлаад суварга цутгаж бунхалдаг. Бөө удганыг хээр уулнаа онгоньг асар барьж хэц хэнгэрэгтэй нь хамт хөдөөлүүлдэг. Эгэл хүнийг ил задгай тавина. Тэхдээ түүнийг хөдөөлүүлэх цаг хугацаа гүйцэтгэх ёслолыг ламын зааснаар алтан сав нээлгэсний дагуу ёсчлон гүйцэтгэдэг. Шарилыг гаргахдаа голчлон зөөлөн гариг гэгдэх даваа, лхагва, баасан гаригт хөдөөлүүлнэ. Чингэхдээ шарилыг агуулсан гэрийг зайлуулан ачих тэмээг гэрийн буйранд оруулан голомтон дагуу хэвтүүлээд, яс барих хүн малгайг буруу харуулж өмсөн, хормойг хоёр тийш яран хавчуулаад ханцуйг шамлан ирж бурхан болоочийг савлан ачаан дээр тавина. Ингээд ачааг бэхэлжшарил хөдлөхөд гэрийн улс тавагтай идээ, домботой цай, жадамба судраар даллан хоцордог. Үүнийг хишиг буянаа тогтоож байна гэж үздэг. Хүүрийг есөн цагаан морьтой хүн хөтлөн одох бөгөөд түүнд талийгаачийн ойрын төрөл болон зоч хүн явдаг. Энэхүү хар ачаа явснаас оршуулгын газар ирэхэд лам газрыг оронг эврээр зурж, мөн зурхай ёсоор тооцоолон сум хатгаад хүүрийг буулган эр цагаан чулуу дэрлүүлж сүүжин дор нь эсгий хөдөс дэвсэн хүнээ тавьж дөрвөн зүгт нь мод босгон маань хатгана.Мөн номын хөнжлөөр бүтээх нь буй. Бас зүг зүгт нь суварганы зураг хатгах нь чбий. Энэ нь алив муу аюулыг тонилгон сэргийлж байгаа хэрэг аж.Энэ үеэс лам ном уншиж даллага аван идээ будаа, цацан дэвжид лусыг баярлуулна. Ийнхүү талийгаачийг нутаглуулсны дараа оршуулсан улс эргэж харалгүй гэрийн зүг одно. Хүүрийн зүг харахыг нүгэл гэнэ. Ингээд тэдний замд том хар шувуу тас мэт тохиолдвол сайн гэнэ. Хүүхэд тохиолдвол үлдэгсэд нь өнөр өтгөн явна гэнэ. Ташуур уурга олдвол адуу малтан баян явнахэмээнэ. Иймээс алив олсон зүйлээ бэлэг зохиож сэтгэлээ цагаатгана. Хүн хөдөөлүүлсэн улсыг ирэхэд гэрт хоцорсон хүмүүс гэрээ шинэтгэн бариад ширдэг дэвсгэрээ дэвсэн цагаалга будаалга бэлтгэсэн байна. Улсыг ирэх зүг ариутгах хоёр утаа уугуулсан байх бөгөөд түүний хоорондуур хүмүусийг оруулж ариулаад, хүүрийн зүг нүүрийг хандуулан хар рашаанаар гэрийн зүг харж цагаа рашаанаар угаагаад арц хүжээр утан гэрт орж цай унд болно. Энэ үед лам ном уншиж даллага авна. Тус ёслол төгссөннй хойно дахин гэрээ буулгаж 2-3 дахин нүүх ёстой бөгөөд ингэхийг хар нүүдэл буюу товшиж нүүх гэнэ. Энэ нь талийгаачийн сүнснээс зугатаж байгаа хэрэг аж. Гашуу тайлахад оролцогсдод буян амлаж утас зүү өгдөг. Үунээс хойш дөчин есөн хоногийн дотор ивээгч бурхныг нь бүтээлгэн, ном уншуулж буян чуулган хураана. Хэрвээ үхсэн хүний сүнс нь хэн нэгэн хүнд хоргодсон гэх бол тусгай ариулга засал хийж өгдөг. Мөн ойрын ах дүү нар нь үс самнах, гоёж гоодохыг хорин хоног цээрлэхийн дээр дөчин ссөн хоног нь амьтан алахыг тэвчинэ. Үхсэний хойноос уншуулах гол ном нь магтаал ерөөл гүнрэг зэрэг олон номууд байдаг. Тэдгээрийн аль нэгнйг уншуулж буян үйлдэнэ. Дээрхээс үзвэл хуучны монголын оршуулгын заншилд эртний Монголын бөөгийн зан үйлийн зарим нэгэн уламжлал байх авч буддын ёсны шарын шашны түвд маягийн уламжлал ихээхэн хүчтэй дэлгэрсэн байжээ. Тэгэвч Монголын умарт нутаг тухайлбал, дархад буриадын газраар бөөгийн ёс нилээд харьцангуй хүчтэй төв Монголын нутгаар түвд маягийн ил задгай оршуулах зан үйл зонхилдогбайжээ. Энэ зан үйлд шашны нөлөө ихэд хүчтэй туссан байв. Тиймээс хүн оршуулах зан үйлийг лам нар голлон гүйцэтгэж байв. Жишээлбэл: хүнд тохиолдсон зовлон бэрхшээлийг мэргэд мэргэлэн зааж, түүний заасныг гүрэмч нар засал хийж ёслоод нөхцөгсөдийн зочин нар тонилгон үйлдэж байв. Харин ихэс хаадыг оршуулахад олон хоногийн уй гашуу хийн цэнгэл хорьж малгайныхаа отго жинсэнд бэлбэсрэлийн тэмдэг хадан эмгэнэж байв. Мөн хаад ноёдын шарилын газар бунх хешөө босгон үсэг дурсгал бичин таш босгох нь байв. Лам хуврагийн шарилыг хайлсныг нутаг орны нь дээгүүр цацах буюу суврага шүтээн болгон тахиж, хатааж занданшуулсныг жанчилж шүтээн хийж байв. Тэрхүү ихэс язгууртныг нас барахад мөргөлийн ном уншиж хурал хурах, хэнгэрэг цан хуур хөгжим хэрэглэн маань Хөгжөөн шарилын газар нь цогцосыг оршуулдаг байсан байна.. Энэчлэн хуучны оршуулгын зан үйл нь ихэс дээдэс эгэл ардын гэсэн ангийн ялгавар бүхийн дээр шашны зан үйл онцгойлон голлосон зоч лам нарын эрхлэн нутаг усныхаа хүмүүсийг цуглуулж найр хийдэг үед аливаа халдварт өвчнөөр нас барсан буюу цаазлуулсан хүнийг ёслон оршуулж байсангүй.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХҮН НАС БАРСНЫ ДАРААХЬ ЗАНШИЛ`,
    desc: `Хүн нас барсны дараа нүдийг аниулж, цогцсыг дан банзан дээр цэвэрхэн даавуу дэвсэн, биеийг шулуухан засаж, хоёр гарыг хэвлий дээр нь тавиад нүүрийг хадгаар бүтээж, цогцсыг цагаан даавуугаар бүтээнэ. Бүтээхийн өмнө үс, хумсыг авч арц болон үнэртэнг цацна. Гэрийн доторхи эд хогшлыг зайчилж, аль болох сэрүүн болгоно. Талийгаачийн хоол хүнс болгон зул өргөж, өрхийн оосрыг нар буруу тойруулж буруу талын хадавчнаас даруулан уяж, эсгий үудийг гэр дээр сунган хаядаг ёстой. Тиймч учраас үүд сунган хаях өрхний оосрыг буруу тойруулахыг нүгэл хэмээн цээрлэдэг.

    Талийгаачийн хувцас хунарыг ариутган гадаа гаргах, захыг түр гэр үү харуулж тавьдаг ёс бий.
    
    Шарил хөдөөлүүлэхийн өмнө бүх бэлтгэлийг хийнэ. Юуны өмнө «Алтан сав» нээлгэх буюу шинжээ нээлгэх хүнд хадаг барьж ямар жилтэй хүн эхлэн гар хүрэх, хөдөөлүүлэхэд эхлэн аль зүгт, хэдэн цагт гарч аль зүгээс ирэх хайрцаганд ямар эд зүйл хийх, шарилд ямар хувцас өмсгөх буюу юугаар ороох, ямар ёс заншил буян уйлдэх, талийгаачийн сүнс эргэж хаана, юу болж төрөх зэргийг тогтоон тэр ёсыг гүйцэтгэх ёстой. Хэрэв талийгаач эд юмандаа хоргодсон бол тэр зүйлийг нь хайрцганд нь хийх, эсвэл буян үйлдүүлж сүм хийдэд өргөнө. Энэ нь шашны зан үйл боловч шинжлэх ухааны эсрэг зүйл биш ээ, Шарилыг 3-7 хонуулна. Ихэнхдээ настай хүнийг 7 хонуулдаг бөгөөд энэ хугацаанд шарилын дэргэд чанга ярих, юм нурааж дуу чимээ гаргах, хоорондоо эөрж хэрүүл хийхийг хатуу хориглоно.
    
    Талийгаачийг оршуулахдаа эхлэн гар хүрэх хүн буюу яс барих ёстой хүн эхэлж гар хүрсний дараа бусад хүн гар хүрнэ. Яс барих хүн малгайгаа буруу харуулж өмсөх 6а ханцуйгаа дотогш нь чихэх, захаа дотогш нугалах зэрэг зан үйлийг гүйцэтгэдэг ёс байжээ. Манай эртний ёсонд шарилыг ил хөдөөлүүлдэг байсан бөгөөд баруун зүг харуулж цагаан чулуу дэрлуүлдэг байлаа`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХУРИМЫН ЁС`,
    desc: `Шинэ айл үүсгэж гэрлэх нь хүний амьдрал дахь хамгийн эрхэм үйл явдал юм. Хуримын ёс нь хүн төрөлхтний ёслол төгөлдөр баяр цэнгэл юм. Гэрлэлтийн ёс нь эрх тэгш залуусын халуун хайр, нөхөрлөл, нэгэн үзүүрт сэтгэлээр барилцсан чөлөөт холбоо юм. Энэхүү эрхэм барилдлагааны үндэс нь хүний сэтгэл хүндлэлийн учраар бүтдэг харилцан дурлах, хайрлан хүндлэх өндөр ёс суртахууны харилцаа болж, тэр нь гэрлэх зан үйлд тусгалаа олжээ. Хуримын ёс нь хуримлах орчин, хуримлагч олны онцлогоос болж бага сага ялгаа бүхийболовч нийтлэг нэгэн ёс горимд хамрагдаж байна.

    ХУРИМЫН НАЙРЫН ЕС
    
    Бэр буулгах хуримлах ёслолыг ардын заншил, орчин үеийн бололцоог харгалзан 13 юмуу 18 цагаас эхлэх нь зүйтэй. Хуримчин олон гэрт орох сацуу шинэ айлын гал голомт үүсгэх ёслол болно. Хоёр залууг галын дэргэд очиход ахлаачаас
    
    Халуун галыг эгүүтгэн<
    
    Хал ургийн үндэс болсон
    
    Ханат гэрээ ёслодог нь
    
    Хамаг монголын жам аа! гэхэд ззлуус гал асаана. Дараа нь
    
    Ураг садан барилдаж
    
    Уньт гэрийг үүсгэхэд
    
    Уран гоо бүсгүй нь
    
    Утаагүй улаан галаа түлж
    
    Уургүй улаан цайгаа чанадаг нь Улс монголын ёсоо!
    
    гэхэд хүүхэн тогоонд цай үйж сүлнэ.Ингээд цай буцлахад дээжий нь хүүд барих ба дараа нь хадмын ахмад настнаас эхлэн хүндийн эрэмбээр цай аягална. Удаа нь идээ барина. Үүнтэй залгуулан хундага өргөж болно. Хундаганы анхныхыг хүүгийн аав, хоёрдохыг хүүхний аав, гуравдахийг нь хамт олны төлөөлөгч өргөх нь зохимжтой. Үүннй дараа мах идээ болж хоол барина. Хоол, хоолны урьд тусгайлан бэлдсэн багалзуур, хүзүү, хойт шаант, өвчүү гургалдай зэргийг тавьсан махыг хургэн хүуд барина. Энэ үед хуримын ахлаач ёст махны үг хэлнэ. Ингээд хүү махнаас хөндөн хүүхэд хоёул ёст махнаас зочдод хувь түгээнэ. Хэрэв ууц тавьсан бол нэгэн эрхэм хүн ууц таллана. Ууц тавилгүй гагц ёст махаар зоогийн тэргүүн болгосон ч болно. Ингээд бусад хоол барина. Хуримын найрыг сөн ерөөх буюу дуугаар эхлэж дунд хирд нь хуримын ерөөл хэлэх ба дараа нь зочдоос залуу хосод бэлэг барьж эхэлнэ. Ингээд дуу хуур үргэлжилнэ. Хуримын найр нь тодорхой цагтаа дуусах ёстой учир хэтэрхий сунжруулах нь эвгүй. Учир нь хуримлагч залууст хуримын баясгаланг эдлэх цаг олгох хэрэгтэй юм. Хурим төгсгөхөд молрын үг хэлнэ. Мөн найрын цэг дууг дуулж болно. Хуримын найрыг нар шингэхээс өмнө дуусгадаг. Хуримын төгсгөлд хүүхнээ хүргэж ирсэн эхийг хүргэн үддэг ёстой. Үүнээ тэмдэглэхэд, хүүгийн хадам ээж хүүхнээсээ түрүүлэн эрт ирж шинэ айлын ор дэрийг засалцан гэрийн эд өлгийг янзалдаг. Тэгж ор дэр засахад хөнжил мя-лаах үг хэлж «Бум буян дэлгэрч, өрх өсөж, үр сад олонтой, Өнөр сайхан айл болтугай! хэмээн ерөөдөг, Ийнхүү хуримын ундсэн ёслогоо дуусна.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХИЙМОРЬ`,
    desc: `Аливаа хүний хийморь найман жил босоо, уруугаа, гэдэргээ, түрүүлгээ ээлжилнэ. Монголчууд эртнээс хийморийн дарцгаа хийморь буусан өдрөө хийсгэдэг байжээ. Чингээд:

    Даадар даадар шувуу
    
    Далан дээрээ бичигтэй
    
    Далай ламын шавь нар
    
    Хэлэн дээрээ бичигтэй. Тэр юу вэ?
    
    гэхэд Хийморь гэдэг байлаа. Хийморь гэдэг нь төвдөөр «Лүндаа» монголоор үгчилбэл
    “салхин морь” гэсэн үг юм.
    
    Хийморийг манай монголчууд ланз усэг бүхий ном тэргүүтний дээр мориор дүрсэлдэг бөгөөд морь болбоос гал махбодьтой. Морь цол гэж жин үдийг хэлмүй. Морь цол дор зүрх, нарийн гэдэс дэлгэрмүй, морь өдөр, цаг дор өвчин засахад эрхбиш эдгэх, нөхөр эрэх, нөхөртэй ханилахад ээлтэн сайн гэдэг боловч 24 улиралд харгалзуулсан 12 эзний өдрийн оноолт барилдлагыг бодолцох нь зүйтэй буюу. Хүний оайныг ханилж, хүлгийн сайныг унаж танимуй гэдэг билээ.
    
    ХИШИГ ӨДӨР
    
    Хот айлууд хонио нэгэн сүрэг болгон ээлжлэн өдөр өдрөөр хариулдаг. Олон хоньтон айл нь хоёр өдөр дараалан, цөөн хоньтой нь нэг өдрөө ээлжлэн хариулах журмыг хоорондоо зохицон тогтоодог. Энэ бол угтаа аман тохиролцоо юм.
    
    Хонь харнулах ээлжийн өдрийг “Хишиг өдөр” гэдэг. Хонины хишигт явсан хүнд хонины хүний хувь гэж тусгай хоол унд өгдөг.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХАДАГ БАРИХ
    `,
    desc: `Монголчуудын эдийн манлай болсон алив ёс баяр элдэв хүндэт бэлгэнд хэрэглэж заншсан нэгэн их эд нь хадаг юм. Хадган дээрх хээ угалз, үсэг чимгээрээ маш олон янз бөгөөд урт богиноороо харилцан адилгуй байдаг. Хээ чимгийн байдлаар хүний дүрстэй Аюуш хадгийг эцэг эх ахмад настан эрхэм хүнд голчлон барих бөгөөд нар сар үсэг бүхий Нанжвандан хадгийг ихэвчлэн оршуулгын ёслолд хэрэглэнэ.

    Хадгийг барихдаа өгөх хүн рүүгээ хадгийнхаа амыг хандуулан хүндийн эрэмбээр мэхийх юмуу сөгдөж ба- рина. Цаад хун нь хариу мэхэсхийн хадгийг хоёр гардан аваад аятай эвхэж хямгадах сстой. Хадгыг барихдаа уул ёслолын тухай бэлэгтэй үг өгүүлж сүүлд нь эл баярт нийлүүлэн барих хадгийнхаа тухайд доорхи үгийн аль нэгийг хэлж хадгаа гардуулна.
    
    Хадаг барихад хэлэх үг нь:
    
    «Цаглашгуй урт наст ариун хадаг»
    
    «Тэгш эрхийн тэнгэрээс цэцэглэсэн» Дэлгэрэнгүй урт наст ариун цагаан хадаг
    
    «Идээний дээж элгэн цагаан тараг Эдийн дээж ариун цагаан хадаг
    ХАДАГ БАРЬЖ ЗОЛГОХ ЕС
    
    Өндөр настай буюу нутаг орчиндоо их хүндтэй хүмуүстэй хадаг барьж золгох ёс байдаг. Тэгэхдээ хадагны амыг буруу харуулж болдоггүй. Дүү хүн хадгаа гаргаж, амыг нь золгох хүн тииш харуулж хоср гардан барьсаар золгож буй хүний хоёр гар дээр тавьсаны дараа золгоно. Хадаг авч байгаа хүн хадгаа хавсарган хураагаад золгож ч болно. Хадаг авсан хэвээрээ золгож ч болно. Хадаг тавьж өгч байгаа хүн ч гэсэн анхаарах зүйл бий. Тавьж буй хадгаараа бүх хурууг нь бүтээчихэж болохгүй. Хадгаа эрхий хуруунд нь тулгаж, алганд нь багтааж тавина. Хадаг тавьж байхдаа мэнд мэдэж болохгүй. Хадгаа тавьчихаад золгохдоо мэндээ мэднэ.
    
    ХАДАГТАЙ ЗОЛГОХ ЕС
    
    Хадагтай золгох, хадаг барьж золгох нь золгогчоо асар их хүндэтгэж байгаагааалэрхийлэх талаараа адил боловч ялгаатай тал бий. Хадаг барьж золгох ёсонд дүү хүн нь ах хүндээ хадгаа бүрмөсөн өгөөд золгодог бол, хадагтай золгох ёслолд хадгаа хүнд өгдөггүй ямагт өөртөө авч байдаг, ямар ч насны хүнтэй хадагтай золгож болно. Хадагтай золгоно гэдэг нь хадагныхаа нэг үзүүрээс баруун гарынхаа ядам хурууг дотор талаас нь нар зөв хоёр ороогоод чигчий хуруутай тал руу доош унжуулна, золгох уедээ унжиж буй хадгаа хуний гар дээр тавихгүй унжуулсан чигээрээ золгоно. Мөн таныг золгох гээд дөхөж очиход цаад хүн таяь еврөөееэ юм уу, хажуунаасаа хадаг авазд хуруу- газ ороогосд эхэлбэл та яаралтай энэ хүн намайг ихэд хүндэтгэж байна даа гэж бодоорой.`,
  },
  {
    startWord: "h",
    startWordMN: "Х",
    title: `​ХААД ДЭЭДСИЙГ ОРШУУЛАХ –`,
    desc: `Хааныг насан эцэслэхэд түүний авсыг хийх хоёр хэсэг үнэрт модыг огтлон талийгаачийн биеийн хэмжээгээр ухаж тааруулдаг байв. Талийгаачийг авсанд хийхдээ үстэй дээл, үстэй малгай, гуьал өмсгөн бүсийг бүсэлнэ. Талийгаачийн хамт алтан сав суулга, аяга таваг, савх хийнэ. Энэ бүхнийг хийгээд дөрвөн алтан оосроор орооно. Шарил бүхий авсыг цагаан эсгий, хоргой торгоор орооно. Талийгаачийн хойлго өргөхөд зориулан өдөрт гурвантаа хонь гаргана. Нас эцэслэснээс хойш гурав дахь хоног дээр оршуулахаар товлосон газар руу умар зүгт гаргана. Шарилын өмнө шинэ дээл өмссөн бөө морь унаж , алтаар тоноглосоэ эмээлтэй хоргой торгон цулбууртай сул морь хөтөлнө. Оршуулах газарт ирж газрыг гүн ухаж авсыг хийнэ. Үүний дараа адуу малаар гишгүүлэн газрыг тэгшлэх буюу гарсан шороог өөр газарт зөөнө. Оршуулсан газрыг огт мэдэгдэхийн аргагүй болтол тэгшлэн засна. Талийгаачийн сүнсэнд өргөл болгон олон мал алах буюу онцгой тохиолдолд хүнээр ч тахил өргөдөг байжээ. Үүнийг цусан хойлго гэдэг. Мөн ихсийн шарил (онгон)-ыг бунхлан оргуулах ч бий. Чингэх бол гэр хэлбэрийн чулуун овоо босгож, түүнийхээ дотор зайчлан шарилыг байрлуулан битүүлдэг ажээ.

    Түүнээс гадна дээдсийн цогцсыг хайлан (шатааж) чандрыг нь хийсгэх буюу цац дэлсэн (суварга цутган) гүнгэрваанд (жаазанд) хийн их суварган дотор залж тахигладаг байжээ. Заримдаа ихсийн цогцсыг хатаан занданшуулж хувцаслан шүтээн болгодог байв.
    
    Үхсэн хаад ноёдыг оршуулахдаа эдэлж явсан эд хэрэгсэл, морь , мал, татвар эхнэр, зарцыг ч хамт булдаг хойллого гэдэг аймшигт ёс 15-16 зуун хүртэл байжээ. Гагцхүү 16 зууны эцсээр хойллого ёсыг хоригложээ.`,
  },
  {
    startWord: "ts",
    startWordMN: "Ц",
    title: `
    ​ЦАГААН САР`,
    desc: `Цагаан сар бол Монголчуудын маш том баяр мөн. Билгийн улирлын тооллоор шинэ хуучин он солигдох шинийн нэгний өдрийг баяр ёслолоор тэмдэглэн өнгөрүүлдэг уламжлалтай. Энэ нь хахир өвлийг давж, урин хавартай золгосны учир мөн нэг нас нэмсний баяр юм.
    XIII зууны эхээр Тэмүжин тархай бутархай олон Монгол аймгийг нэгтгэн, Их монгол улсыг байгуулаад гуравдугаар жарны хөхөгчин үхэр жилийн өвлийн сүүл сарын эцэс, улаан барс жилийн хаврын тэргүүн сарын шинэ дээр хаан ширээнд суух ёслол болов. Тэр үеэр Их Монгол улсын нэгдсэн төрийг нээсэн баярыг шинэ оноо хавар тэмдэглэдэг дорно дахины ихэнх ард түмний нийтлэг ёсоор журамлан, цагаан сарыг намраас хаврын эхэнд албан ёсоор шилжүүлэн хамтатган тэмдэглэсэн байна. Ийнхүү улаан барс жил(1206 он) ээс эхлэн цагаан сарыг хавар ёсолдог болжээ.
    
    Цагалн сар ингээд 1206 оноос эхлэн төр ёсны буюу хаврын баярын шинэ утга агуулгаар улам баяжжээ.
    
    Чингис хаан анхны цагаан сараар 88 гавьяатныг шагнажээ.
    
    Цагаан сар төр ёсны баяр болсноос хойш үеүдэд хааны зарлиг гарч, хэрэгтэн ялтан нарт төрийн хишиг хүртээж, өршөөл үзүүлдэг уламжлал ч буй болжээ. Зарим баримт дурдвал IV жарны улаан хулгана жил (1216)-ийн цагаан сараар Чингис хаан зарлиг буулгаж, таван их харгисаас бус ялтанг хэлтрүүлэн, тэдний ялыг нэгэн зэрэг хөнгөрүүлжээ. 1911 онд Богд Монгол улсын хаан ширээнд суусныхаа дараа мөн цагаан сараар зарлиг гаргаж, хоригдол нарыг өршөөн суллаж, ялыг нь хөнгөтгөн хэлтрүүлжээ. Цагаан сарыг төр ёсны их баяр болгон тэмдэглэдэг уламжлал зөвхөн үүгээр хязгаарлагддаггүй байна.
    
    Богдхаант Монгол улсын үед цагаан сарын үеэр сайд, хан, ван, бэйл, бэйс гүн зэрэг ноёд хутагт хувилгаад, хамба, цорж хийгээд ардууд төрийн ордонд морилон ирж, хаанд бараалхан шинэлэх, жагсаал ёслол үйлдэх тусгай тогтоосон дэг журамтай байв. Түүнчлэн шинийн нэгний өдөр дэмий сэлгүүцэх, их дуу чимээ гаргах, шахцалдан үймэх зэрэг зүй зохисгүй үйлдэл гаргахыг хуульчлан хоригложээ. Мөн цагаан сарын шинийн нэгнээс найман хүртэл төрийн ордон, сүм хийд, яамдын дээр төрийндалбааг мандуулдаг ёстой байв. Монголын анхны төр улс Хүннүгийн үед ч, Чингис хааны байгуулсан Их Монгол улсын үед ч ноёд, язгууртнууд цагаан сарын үеэр цөм төрийнхөө ордонд одож, баяр ёслол үйлддэг байсан гэж тулгар бичгүүдэд гэрчлэн өгүүлснээс үзвэл шинэ жилээр төрийн ёслол хийдэг Монголчуудын заншил маш эртний гүн уламжлалтай ажээ.
    
    Монголчууд төрсөн өдрийн баяр гэж тусгай зүйл хийдэггүй. Цагаан сараар нас нэмж, өөрөөр хэлбэл, төрсөн өдрийн баяраа давхар тэмдэглэдэг эртний заншилтай. Чингис хаан 1216 оны цагаан сараар зарлиг буулгаж, улсын сан хөмрөгөөс шар алт мянган лан, цагаан мөнгө түмэн лан, зотон даавуу арван түмэн хэсгийг гаргаж жаран наснаас дээшихэд хоёр хувь. наян наснаас дээшихэд гурван хувь, ерэн наснаас дээшихэд дөрвөн хувь, зуун наснаас дээшихэд таван хувь шагнахын гадна нэгэн зуун арваас дээш настныг над бараадуул, нэгэн зун хориос дээш настныг олбол улсын ИХ ӨТГӨС цол шагнаж, таяг тулуулан над бараадуул, үүнээс өндөр настан байваас сүйх тэргэнд сүулган дамнан ирүүлжнад бараадуул, тэдгээрт цөмтусгай шагнал олго хэмээн тушааж , настан өтгөсдөө төрийн хишиг хүртээжээ. Монголчууд манжийн дарангуйлалд 200 гаруй жил нухлагдахдаа ч уламжлалт баяраа орхисонгүй.
    
    Цагаан сарын шинийн нэгний өглөө монголчууд төрийн тэргүүнийхээ орд өргөөний зүгт хандан залбирч, төрийнхөө сүлдэнд мөргөн ёсолдог. Энэ бүхэн нь цагаан сар бол төр ёсны баярын гэрч, ард түмэн маань төр ёсоо гүн эрхэмлэдэг, төр засаг нь олон түмнээ хүндэтгэдэг соёл байв.
    
    Цагаан сар нь цагаан идээний их баярын анхны утгаа өдгөө ч хадгалсаар байна. Цагаан сүү, цагаан өнгө ньариун сайхны аливаа хар хоргүй цайлган сайхны бэлгэ тэмдэг гэдгийг цагаан сар илтгэдэг. Цагаан сар монголчуудын амьдрал ахуйн иэг жилийн эхлэлийн баяр учир тэр өдөр ямар байна, жилдээ тийм байна хэмээн ихэд бэлгэшээдэг билээ.
    
    Монголчууд энэ өдрийг хамгийн элбэг дэлбэг өдөр болгон идээ будаа базаан бэлтгэж гэр орон, хашаа хороогоо цэвэрлэн зэхэж хүн бүр шинэ хувцас хийж өмсөн, айл хунар, ах дүүтэйгээ уулзаж, бэлэг сэлт өгдөг нь өвөрмөц ёс горимтой. Цагаан сар гэдэг нь нэгд, Монголчууд цагаан өнгийг бэлгэшээдэг. Хоёрт цагаан сар нь угтаа хувхай хоосон өдөр гэгддэг хар өдөр юм байж. Үүнийг элбэг дэлбэг цагаан өдөр сар болгож байгаа ажээ. Гурав. Эрт дээр үед идээ элбэгт намар тэмдэглэдэг байсан. Идээ цагааныхаа дээжийг одоо ч нөөц- лөөд шинэ сараар гаргадаг юм. Цагаан сард элбэг байх гэж их бэлтгэдэг. Үүнд: Архи, айраг, өрөм, бяслаг, ааруул зэргийг намар бэлтгэж авдаг бөгөөд бууз банш, боов хийж бэлтгэхээс гадна цагаалга гэж сүүнд цагаан будаа чанаж аарц, чихэр шар тос хийнэ. Мөн бэлгинн зүйлсийг базаан авч зочин ахан дүүсдээ өгдөг юм. Малчид бол унах морьдныхоо дэлийг засаж бүх биеийг хусуурдана. Цагаан сарын шинийн нэгний өглөө гэрийн эзэгтэй эрт босож цай чанаж бууз жигнэн бэлтгэхэд гэрийн бүх хүмүүс шинэ хувцас малгайгаа өмсөж хамгийн ахмад настай, аав, ээждээ хадаг мөнгөн төгрөг дурдан барьж золгоно. Нарнаар золгоно. Дээр цагт өвөг дээдэс нь шинийн нэгэнд цагаан нэхий дээл өмсдөг байжээ. Одоо бол аль өөдтэйгээрээ гоёдог юм. Үуний дараа настангууд хөөргөөр тамхилж, гэрийн бусгүй цайг аяга дуүрэн хийж аав, ээж нөхөртөө, дараа нь хүүхэд багачууддаа өгнө. Хамгийн өндөр настайгаасаа эхлэн бүх хүн тавагтай идээнээс амсах ёстой. Үүний дараа банш, бууз чанасан махыг цадтал иднэ.
    
    Харин хот айл бол тэр хотонд хамгийн өндөр настай хүндээ урьдаар очиж золгоно. Шинийн нэгний өдөр хүмүүс заавал зүг гаргаж морь уяжж баруун ба өмнө зүг рүү жаахан яваад буцаж ирдэг байлаа. Монголын ард түмэн, тэдний соёлд нүүрлэсэн сталинизмын хар шамрага цагаан сарыг бас ч тойрон өнгөрсөнгүй. 1930 - аад оноос эхлэн манай нам, төрийн эрх баригчид цагаан сар нь лам нарын сайн өдөр, зарц ядуусыг мунхруулан мөлжих өдөр, Феодалуудын цэнгэлийн өдөр, Феодалын үүсгэсэн харгис зүй гэхчлэн элдэв нэр хаягөгч цагаан сарыг хараан гутааж байснаа 1932 оноос түүнийг эсэргүүцэх компанит ажлын төлөвлөгөө гаргаж, бүх аймаг сумдад элч төлөөлөгч илгээж, ялангуяа хот суурин газруудад битүүлэг, цагаалаг хийхийг хориглосон байна. Цагаан сарыг тэмдэглэсэн хүнийг Феодалын үлдэгдэл этгээдэд тооцож элдэв аргаар даралт шахалт ч үзүүлжээ.Харин дэлхийн хоёрдугаар дайн дүрэлзэж, Монгол оронд зуд турхан, ган гачиг тохиолдож ард түмний санаа сэтгэл тавгүйхэн байсан 1940—өөд онд тэдний сэтгэлийг түр боловч сэргээхийн тулд хөдөөгийн малчдад цагаан сар тэмдэглэхийг Улсын Бага Хурлаас зөвшөөрчээ. Тэгтэл нэг хүнийг тахин шүтэх явдал нэн газар авч байсан 1952 оны өвлийн адаг сарын битүүнд X.Чойбалсан нас барж, цагаан сарын шинийн нэгнийг гашуудлын өдөр болгов. Дараа жилийнх нь мөн өдрийг бас л гашуудлын өдөр болгожээ. 1954 оны 1 дүгээр сарын 26—нд Ардын Их хурлын Тэргүүлэгчдийн зарлиг гарч мөн жилээс эхлэн цагаан сарыг ажлын өдөр болгосон байна. Энэ нь хэрэг дээрээ цагаан сарыг тэмдэглэхийг дахин албан ёсоор хориглосон зүйл байв.
    
    1959 онд тус улсад нэгдэлжих хөдөлгөөн яллаа хэмээн зарлаад малчдын санаа сэтгэлийг засах, тэднийг ямар нэг хэмжээгээр урамшуулах хэрэгцээ гарлаа гэж үзэцгээжээ. Гэвч ард түмний дунд нэр хүндтэй цагаан сарыг тодорхой хүрээ хэмжээнд тэмдэглүүлэхээр шийдсэн байна.
    
    Тэгээд ч 1960 оны 1 дүгээр сард Ардын Их хурлын Тэргүүлэгчдийн зарлигаар жил бүрийн билгийн улирлын хаврын тэргүүн сарын шинийн нэгнийг «Нэгдэлчдийн өдөр» болгон уг өдрийг эөвхөн хөдөө аж ахуйн салбарт амралтын өдөр байхаар тогтоожээ.
    
    Хэсэг хугацаанд хориотой байсан цагаан сарыг «Нэг-дэлчдийн өдөр» хэмээх шинэ нэр зүүж хязгаарлагдмал боловч тэмдэглэдэг болов. Түүнээс хойш малчдаас бусаа нийгмийн анги. давхрааныханд цагаан сарыг тэмдэглэхийг зөвшөөрдөггүй, ялангүяа хот суурин газарт ёслон өнгөрүүлэхийг ямар нэг замаар саад хийсээр байв.
    
    Сүүлийн 70 шахам жилд цагаан сар ийнхүү олон зуунаар уламжлагдан ирсэн ард нийт, төр ёсны их баяр байр эрхээ “хасуулж” үе, үе зэрвэсхэн “тэмдэглэгдэж” иржээ.
    
    Монголчуудын уламжлалт, соёл, зан заншлыг хязгаарласан хавчлага хардлагын бараан үүл наяад оны эцсээс эхэлсэн өөрчлөлтийн бүлээн салхинд туугдан сэмэрч буйн ачаар 1988 оноос цагаан сарыг ард нийтээр тэмдэглэн өнгөрүүлэх сайн цаг эхэлсэн.`,
  },
  {
    startWord: "ts",
    startWordMN: "Ц",
    title: `​ЦАЦАЛ ӨРГӨХ ЕС`,
    desc: `Цаг улирал дулаарч цас мөс хайлах хаврын эхээр мал сүрэг төллөн суү цагаан идээ элбэгтэй байхыг билэгдэн саасан сүүний дээжийг тэнгэр, газар орчны уул усанд өргөн цацал өргөх ёс үйлддэг байв. Энэ нь хуучин цагийн малчин ардын төлийн баяр гэж байв. Цацал өргөх ёс нь эрт цагаас Монголчуудын өвөрмөц нэгэн зан үйл юм. Цацал цацах ёс, цацалын шүлэг нь таван хошуу малын аль нэгнийн төллөх цаг хугацааг сааль сааж эхлэх үетэй холбогдсон байдаг.
    Энэ зан үйлийг үйлдэхэд нүдсэн арцаар гэртээ сан тавьж нүдээгүй арцыг агитай хольж өрөм цөцгий зэрэг идээний дээжээр найруулан багсарч хотынхоо баруун хойно буюу эсвэл дөрвөн талд уугиулан их сан тавина. Ингээд ууган төлийн эхээс саасан сүүг агар хувинд хийж ивээлжилтэй хоёр эмэгтэй хүний нэг нь зүүн гар талд хувинтай сүүгээ барин нөгөө нь цацлын модон халбагаар сүүнээс авч ерэн есөн тэнгэр, далан долоон этүгон эзэн, орчны уул усанд өргөн цацал цацна. Ингэхдээ уг зан үйлийг гэр малын хотыг нар зөв тойрон явж гүйцэтгэнэ. Энэ үед цацлын шүлэг хэлдэг. Үүнд хонины цацал цацах үед:
    
    — Хамгийн дээд хан мөнх тэнгэр
    
    Хан газар усан түмэн оддын дүгрэг
    
    Шар алтан наран алтан одон
    
    Өдрийн чинь өлзий
    
    Сарын чинь сайныг
    
    Эрэн бууж
    
    Сайн өдөр чинь цацнам
    
    Цацахын шалтгаан гэвэл
    
    Хан мөнх тэнгэрээс заяат төрсөн
    
    Хар хонины чинь сүү
    
    Хамаг бүгд эс амсагсан
    
    Хар хурга чинь амсагсан билээ.
    
    Цацахын шалтгаан юу гэвэл
    
    Өмчит цагаан хонины чинь
    
    Гамшиг зовлонг барахын тулд Авран хам хэмжээн
    
    Агуу их тахил өргөн
    
    Их өчиг амтат их цагаан цацал
    
    Сүүг чинь цацнам.
    
    гэж хэлдзг.
    
    Үнээний цацал цацах үедээ
    
    Үхэр сарлагийн үрс гаргах ёсыг
    
    Үдэш бор түгүсийн үед гүйцэтгэнэм
    
    Анхлан тугалласан үнээний сүүг
    
    Ариун сав дор амсалгүй хадгалан авч
    
    Айраг тараг чихэр бурам чавга хушга
    
    Амтат үзэм жимс уураг тосон лугаа өргөнөм
    
    Эмүгийн дээд эрхэт мөнх тэнгэр
    
    Эл түгэн эх
    
    Хамгийн дээд
    
    Хан мөнх тэнгэр
    
    Хав газар усан Түмэн одод
    
    Өдрийн чинь сайныг эрэн
    
    Цагаан үнээний сүүгээр
    
    Газар усны эзэд
    
    Цагаав өвгөв дор
    
    Есөв ес цацан мөргөмүү
    
    гэх мэт хэлдэг.
    
    Цацал өргөх ёсыг ийнхүү үйлдээд айл хотлоороо гэрт орж цай идээ ууж идэцгээнэ.`,
  },
  {
    startWord: "sh",
    startWordMN: "Ш",
    title: `
    ​ШИНЭ ГЭР БАРИХ`,
    desc: `Монгол ардын баяр цэнгэлийн нэгэн их ёс нь шинэ гэр барих зүйл юм. Тиймээс ч гэр барих найрын их ёс гарсан билээ. Гэр барих нь шинэ айл үүсгэн ураг хурим хийхэд гүйцэтгэх ёс, хуучин айл гэрээ шинэтгэхэд үйлдэх хоёр үндсэн ёсноос бүрдэнэ. Хуримын шинэ гэр барих нь баахан ёсорхог бөгөөд хуримлахын урьд хүүгээрээ барьж гал голомтоо үүсгээд) дараа нь хүүхнээ авчран хуримаа хийдэг. Орчин үеийн байдлаар хоёрзалуу хамтаар гал голомтоо үүсгэн, шинэ гэрээ мялаах нь түгээмэл болжээ. Тэр чанараараа энэ нь энгүүн шинэ гэр барихтай адилшиж байна. Харин дотоод өлөг тавилга болон уг найрт хэлэх үг ерөөл, барих бэлэг сэлт нь ялгаатай болно. Түүнээс бус гэр барих үйл нь бараг адилхан ажээ. Алив шинэ гэр барихад жирийн гэр барьдгаас онц ялгаагүй. Чингэж гэр барихдаа эхлэн он шаваа босгоод, авдар саваа тавин, ханаа баруун урд талаас нь эхлэн дугуйлна. Дараа нь тооноо босгон, униа өлгөж, модоо босгосны дараа бүслүүр эргүүлэгээ чангалаад, тоононыхоо хойд голоос үржин дэлгэрэхийн бэлэгдэл болсон будаа арвай боосон ариун цагаан хадгийг уяж, гэрээ мялаана. Ингээд цавгаа барин, туургаа баруун урдаас нь нөмөргөн дугуйлаад, дээврээ барина. Дээврийн урд талынхыг эхлэн тавина. Үүний дараа гадуур хошлонгоо баруун урдаас нь татан тойруулж чангалж уяад, хамгийн сүүлд өрхөө тавина Ийнхүү гэр барьж дууссаны дараа авдар саваа янзлан, дэвсгэрээ дэвсэж, ор дэрээ засан янзлаад, галаа түлэн, цайтаа чанана Энэ хооронд бусад идээ будаагаа өрөн, архи айргаа сөгнөнө. Шинэ гэрийн мялаалгын их идээг гэрийн хоймор талын хойд халзад зүүн талд нь, махыг нь баруунтай тавьдаг.

    Харин их бүхэл буюу бүтэн хонины махыг чонхорлож тавих бол идээний ширээний урд ч болно. Энэхүү чонхорт малын тураг мах буюу зургаан хөл, толгой шийр, таван цул бүгд орно. Тэдгээрийг амьдын ёсоор байрлуулан их дэлгэц дээр дэслэн тавина. Мөн энэ үед нэг хүн идээ чонхорыг хуваах бөгөөд махны дээжээс толгой, үе сүүл, зүсэм бяслаг бэлтгэн тоонон дээр тавина. Чингэж толгой сэлтийг тавих сацуу гадаа хүүхдүүд баруун зүүн хойд гурван зүгт жагсан зогсож, уурга барин уг мялаалгын махыг уралдан авахыг эрмэлзэнэ. Гэрийн дотроос уул махыг түлхэхэд хүухдүүд сайхь толгойг уургалан, хэн түрүүлсэн нь авч олноор хуваан иднэ. Тэр хооронд гэртэх цай болж хүмүүст унд барих бөгөөд мөн чонхорыг хуваан олонд түгээнэ. Ингээд тэнд өрсөн архи айраг цагаалга бүгдээс амсан хоол зоог базаасны дараа найрын олонгэрээс гадаалж хэсэг зуур амралт хийгээд эргэж ороход хултай айргийг ширээнд өрж, сөнгөө дүүргэн, гоёмсог хутгуурыг өлгөсөн байна. Гаднах улс орж ирж жигдэрсний дараа зочдоос нэг хүн найрын. ахлагчийг хэнээр сонгохыг асуухад цугларагсдаас санал гарган, тэр нутаг ус, тэнд цугласан олны дунд хамгийн хүндтэй буюу найрын ёс дэглэм, бэлэг дэмбэрэлийн үг сайн мэдэх ахмад тохитой хүнийг даргаар сонгоход мөнөөх хүн босож олонд талархал хүргээд, сөнгийн тус ирж, аягачин сөнчинг томилон ажилд нь оруулж, айраг барихад бэлтгүүлнэ. Найрын ахлаачаас нэгэн их туушаанд айраг дүүргэн, хадаг барин, дуучинд ая хүснэ. Дуучин уг зүйлийг хоёр, гардан мэхэсхийн хү- лээж аваад дуугаа эхэлнэ. Энэ үед бусад хүмүүст айраг барьсан байна. Дуучин цэх сайхан сууж их хүндлэлийн уртын дуугаар ая барина. Мөн зарим газарт эхлэн дуу дуулалгүй шууд сөнгөө ерөөрөөд найраа үүсгэх нь ч буй. Найрын дунд хирд ерөөлчөөр шинэ гэрийн ерөөл хэлүүлнэ. Ингэхэд мөн айраг хадаг барих ёстой.
    
    Ерөөлч ерөөж дуусаад ерөөлийн айргийг өөрөө. амсан, хадгийг авч, их айргийг гэрийн эзэнд бэлэг болгон барьдаг учиртай. Найрын сүүлд найрын цэг дуу дуулан найраа тараана.`,
  },
  {
    startWord: "sh",
    startWordMN: "Ш",
    title: `​ШАРИЛ XӨДӨӨЛҮҮЛЭХЭЭР ЯВАХ
    `,
    desc: `Хуучин цагт шарилыг говьд бол тэмээнд ачиж хөдөлдөг. Тэгэхдээ харганаар тэгнээ хийж ачдаг байв. Хангайд бол үхэр тэрэг юм уу, үхэрт нуруу ачиж хөдөөлүүлж авч явна. Шарил хөдөөлүүлэхээр хөдөлмөгц түүнийг эалж байсан гэрийн доторхийг хана унийг улаан харганаар шавхарч ороолгон ариутгах дом хийдэг. Тэгээд гэрийг зөөж өөр газар барина. Шарил агуулж байсан гэрийн буурин дээр чулуугаар тэмдэг тавьж, түүний дээр алхалж гишгэхийг цээрлэнэ. Шарил авч яваа хумүүс ярих, эргэж харахыг цээрлэдэг.

    Шарил ачсан тэмээний бурантаг, шар үхрийн жолоо цулбуурыг мөрөн дээгүүрээ тавьж явдаг. Энэ нь хүндлэл үзүүлж байгаа хэрэг юм. Говь нутагт шарил хөдөөлүүлж яваа хүмүүс улаан харгана авч мордон, гэр хотоос гарахдаа явж байгаа зүгийнхээ эсрэг дохиж гай зэтгэрийг зайлуулах дом үйлддэг байжээ`,
  },
  {
    startWord: "sh",
    startWordMN: "Ш",
    title: `​ШАРИЛ ТАВИХ ГАЗРЫГ СОНГОХ`,
    desc: `Талийгаачийн шарилыг тавих газрыг зөв сонгохгүй бол үлдэж байгаа хүмүүсийн амь насанд цөвтэй. Эд хөрөнгөд гайтан гэдэг. Газрыг сонгохдоо наран ээвэр, тухайлбал оройн нар жаргах зүгийг тосгуулж авах ба уужим тавиун, энгэр газрыг сонгоно. Харин ар газар буюу голын хөндийд хөдөөлүүлэхийг хориглодог ёс бий.

    Шарилийн толгой талыг уулын төвгөр оройг чиглүүлж, хөлийг өмнөх уулын энгэр рүү жийлгэн хөдөөлүүлэхээр сонгодог юм. Газар нь цэцэг навч, элбэггэй шим сайтай, хад чулуу, багатай төвгөр газар байх нь тохиромжтой гэдэг. Газрыг авахдаа талийгаачийн хамгийн дотны сайн нөхөр юм уу, эсвэл хамгийн ахмад хүндтэй хүн сонгож авах ёстой.
    
    Машинаар явсан бол сайн үзэж сонгоно. Хэрэв мориор явбал морь шээсэн газрыг шууд авах ёс бий. Нэгэнт газраа товолж олсон бол тэр газраа хадаг тавьж, орон хангайд нь сүү өргөж, идээ цацах, арц хүж уйгуулсны дараа хэсэг газрыг очир буюу гурын эвэр зэрлэг гахайн соёоны аль нэгээр тойруулан зурж тэмдэглэнэ.`,
  },
  {
    startWord: "ya",
    startWordMN: "Я",
    title: `​ЯС БАРИГЧ ХҮМҮҮС`,
    desc: `Урьд цагт шарилыг хөдөөлүүлдэг хүмүүсийг яс баригчид гэдэг байв. Яс барих хүмүүс дээл хувцасаа урвуулан өмсөж, малгайгаа мухлайдах юм уу саравчийг нь дотогш нь чихэх, эсвэл буруу харуулж өмсдөг. Дээлийнхээ нударга, захыг дотогш нь чихдэг. Мөн хормойг нь гадагш эргүүлэн шууж бүсэндээ хавчуулан шарил байгаа гэрт орж, түүнд хүрдэг заншилтай байв. Энэ нь яс баригч хүмүүс нөгөө ертөнцийн хүмүүстэй харилцаж байгааг дүрсэлсэн үйлдэл юм. Жирийн цагт яс барьдаг хүмүүс дээл хувцасаа ингэж өмсвөл нүгэл хилэнцэд тооцож, цээрлүүлдэг байжээ. Яс барьдаг хүмүүс шарилыг эхэлж судраар хөндөнө. Тэд гэрийн босгон дээр хэдрэг хөндлөн тавих юм уу, зомгол босгонд тавьж, хуга гишгэчин шарилыг гэргээс гаргадаг байжээ.`,
  },
];
