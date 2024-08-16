import React from "react";

export default function page() {
  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <section className="blog_cat h_blog">
        <div className="container">
          <div className="col-md-12">
            <h1>Зурхайч лам нар</h1>
            <p />
            <div className="tus">
              <hr />
              <div className="tus_img">
                <img src="/static/images/icon12.png" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <ul className="sidebar-menu">
                <li>
                  <a href="/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D1%82%D2%AF%D0%B3%D1%8D%D1%8D%D0%BC%D1%8D%D0%BB-%D0%B0%D1%81%D1%83%D1%83%D0%BB%D1%82/">
                    Түгээмэл асуулт
                  </a>
                </li>
                <li>
                  <a href="/%D1%8D%D0%BC%D0%B3%D1%8D%D0%BD%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D2%AF%D0%B3/">
                    Эмгэнэл
                  </a>
                </li>
                <li>
                  <a href="/%D1%85%D1%83%D1%83%D0%BB%D1%8C-%D1%8D%D1%80%D1%85-%D0%B7%D2%AF%D0%B9/">
                    Хууль эрх зүй
                  </a>
                </li>
                <li>
                  <a href="/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB-%D1%91%D1%81-%D0%B7%D0%B0%D0%BD%D1%88%D0%B8%D0%BB/%D0%B0/">
                    Монгол ёс заншил
                  </a>
                </li>
                <li>
                  <a href="/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D0%B0%D1%80%D0%B3%D0%B0-%D1%85%D1%8D%D0%BC%D0%B6%D1%8D%D1%8D/">
                    Арга хэмжээ
                  </a>
                </li>
                <li>
                  <a href="/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3%D0%B8%D0%B9%D0%BD-%D1%81%D0%B0%D0%BD/">
                    Мэдлэгийн сан
                  </a>
                </li>
                <li className="active">
                  <a href="/%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3-%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D%D0%BB%D1%8D%D0%BB/%D0%B7%D1%83%D1%80%D1%85%D0%B0%D0%B9%D1%87-%D0%BB%D0%B0%D0%BC-%D0%BD%D0%B0%D1%80/">
                    Зурхайч лам нар
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div
                className="sub_tab fade tab-pane in"
                id="zurhaich_lam"
                role="tabpanel"
              >
                <ul className="nav nav-tabs centered blog_buttons lam_tabs">
                  <li className="both_list tab2-1 active">
                    <span>Жагсаалтаар</span>
                  </li>
                  <li className="both_list tab2-2">
                    <span>Газрын зургаар</span>
                  </li>
                </ul>
                <div className="lam_more">
                  <div className="list" id="tab2-1">
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Санжаадорж</h4>
                        <p>УТАС: +976-99890614</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Хувиараа</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>А.Эрдэнэбат</h4>
                        <p>УТАС: +976-88119032</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Үржин шадовлин хийд</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Ч. Алтангэрэл</h4>
                        <p>УТАС: +976-Дашчойлон хийд</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>88772742</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Я.Аюурзана</h4>
                        <p>УТАС: +976-91999535</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Манба дацан</p>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Энхбат</h4>
                        <p>УТАС: +976-99193681</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Гандан тэгчэнлин хийд</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Д.Цогтбаатар</h4>
                        <p>УТАС: +976-99996668</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Гандан тэгчэнлин хийд</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/stat/images/lam_icon.png"
                        />
                        <h4>Ц.Гүнчин-Иш</h4>
                        <p>УТАС: +976-91917492</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Гэсэр сүм</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Галсан</h4>
                        <p>УТАС: +976-99106565</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Түвдэнпэлжээлин хийд</p>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Ж.Гончигсүрэн</h4>
                        <p>УТАС: +976-99092007</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Түвдэнпэлжээлин хийд</p>
                      </div>
                    </div>
                    <div className="lam row">
                      <div className="col-md-6 info">
                        <img
                          className="lam_icon"
                          src="/static/images/lam_icon.png"
                        />
                        <h4>Цолмон</h4>
                        <p>УТАС: +976-99279216</p>
                      </div>
                      <div className="col-md-6 time">
                        <h4>Хаяг</h4>
                        <p>Түвдэнпэлжээлин хийд</p>
                      </div>
                    </div>
                  </div>
                  <div className="map mapclass" id="tab2-2"></div>
                </div>
              </div>
              <div
                className="map_new"
                style={{
                  display: "none",
                }}
              >
                <div id="map-canvas">
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: "  $('html, body').animate({    scrollTop: 0  }, 1000);",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "  $('.map_new').hide();  $('.tab2-1').click(function() {    $('.tab2-2').removeClass('active');    $(this).addClass('active');    $('.list').show();  });  $('.tab2-2').click(function() {    $('.tab2-1').removeClass('active');    $(this).addClass('active');    $('.list').hide();  });  $('.nav-tabs li').click(function() {    $('.map_new').hide();  });  $('.tab2-2').click(function() {    $('.map_new').show();  });  $('.nav .dropdown a').click(function() {    $('.map_new').hide();  });",
        }}
      />
      <script src="/static/sites/ulaanbaatarbuyannew/default/js/scripts.js" />
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPYAUR1e2LhgXGXPGj-nBx_uVmVqIIJHk&callback=initialize"
      />
      <script
        src="/static/sites/ulaanbaatarbuyannew/default/js/lam_map.js"
        type="text/javascript"
      />
    </div>
  );
}
