import { getKbArticlesByCode } from "@/lib/kb";
import React from "react";

export default async function page() {
  const { articles } = await getKbArticlesByCode("arag-hemjee");
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
            <h1>Арга хэмжээ</h1>
            <p>
              Сүүлийн үеийн арга хэмжээний мэдээллийг та эндээс авах боломжтой.
            </p>
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
                  <a href="/medee-medeelel/tugemel-asuult">Түгээмэл асуулт</a>
                </li>
                <li>
                  <a href="/emgeneliin-ug">Эмгэнэл</a>
                </li>
                <li>
                  <a href="/huuli-erh-zui">Хууль эрх зүй</a>
                </li>
                <li>
                  <a href="/medleg-medeelel/mongol-yos-zanshil">
                    Монгол ёс заншил
                  </a>
                </li>
                <li className="active">
                  <a href="/medleg-medeelel/arga-hemjee">Арга хэмжээ</a>
                </li>
                <li>
                  <a href="/medleg-medeelel/medlegiin-san">Мэдлэгийн сан</a>
                </li>
                <li>
                  <a href="/medleg-medeelel/zurhaich-lam-nar">
                    Зурхайч лам нар
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="blog-list">
                {articles.map((item) => (
                  <div className="col-md-4 col-sm-6" key={item._id}>
                    <div className="blog-item">
                      <div className="blog_img">
                        <a
                          href={`/medee-medeelel/${item._id}`}
                          title="Бүх төрлийн БУЯНЫ ЗЭД-г онлайнаар..."
                        >
                          <img
                            className="img-responsive"
                            width={240}
                            height={180}
                            alt={item.title}
                            src={`https://ulaanbaatarbuyan.app.erxes.io/api/read-file?key=${item?.image?.url}`}
                          />
                        </a>
                      </div>
                      <div className="garchig">
                        <span className="date d-flex align-center">
                          <svg
                            width="12"
                            height="12"
                            aria-hidden="true"
                            className="svg-inline--fa fa-calendar fa-w-14"
                            data-fa-i2svg=""
                            data-icon="calendar"
                            data-prefix="fa"
                            role="img"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"
                              fill="currentColor"
                            />
                          </svg>
                          {item.summary}
                        </span>
                        <h4>
                          <a
                            href={`/medleg-medeelel/${item._id}`}
                            className="medleg_title"
                          >
                            {item.title}
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
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
