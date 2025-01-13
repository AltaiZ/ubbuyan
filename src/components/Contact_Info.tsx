import React from "react";

export default function Contact_Info() {
  return (
    <div>
      <section className="visible-xs contact_info">
        <div className="contact_infos">
          <div
            className="owl-carousel testi-carousel owl-theme owl-loaded owl-drag owl-hidden"
            id="contact-slider"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "2048px",
                }}
              >
                <div
                  className="owl-item active"
                  style={{
                    width: "512px",
                  }}
                >
                  <div className="item">
                    <div className="np">
                      <div>
                        <img src="/static/images/any.png" />
                      </div>
                      <p>Таньд асууж тодруулах зүйл байсаар байна уу?</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    width: "512px",
                  }}
                >
                  <div className="item">
                    <div className="contact_email">
                      <div>
                        <img src="/static/images/email-white.png" />
                      </div>
                      <p>info@ubbuyan.mn </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    width: "512px",
                  }}
                >
                  <div className="item">
                    <div className="contact_phone">
                      <div>
                        <img src="/static/images/phone-white.png" />
                      </div>
                      <p>7016-2222</p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{
                    width: "512px",
                  }}
                >
                  <div className="item">
                    <div className="np contact_address">
                      <div>
                        <img src="/static/images/location.png" />
                      </div>
                      <p>
                        Авто замчдын гудамж-54, Сүхбаатар дүүрэг, Улаанбаатар,
                        Монгол улс
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev">
                <svg
                  aria-hidden="true"
                  className="svg-inline--fa fa-angle-left fa-w-8 fa-4x"
                  data-fa-i2svg=""
                  data-icon="angle-left"
                  data-prefix="fa"
                  role="img"
                  viewBox="0 0 256 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="owl-next">
                <svg
                  aria-hidden="true"
                  className="svg-inline--fa fa-angle-right fa-w-8 fa-4x"
                  data-fa-i2svg=""
                  data-icon="angle-right"
                  data-prefix="fa"
                  role="img"
                  viewBox="0 0 256 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_info hidden-xs">
        <div className="container">
          <div className="row contact_infos">
            <div className="col-md-3 col-xs-12 np any_question">
              <div className="any_question1">
                <img src="/static/images/any.png" />
                <p>Таньд асууж тодруулах зүйл байсаар байна уу?</p>
              </div>
            </div>
            <div className="col-md-4  col-xs-12 contact_email">
              <img src="/static/images/email-white.png" />
              <p>info@ubbuyan.mn </p>
              <i>и-мэйл хаяг</i>
            </div>
            <div className="col-md-2 np col-xs-12 contact_phone">
              <img src="/static/images/phone-white.png" />
              <p>7016-2222</p>
              <i>лавлах төв</i>
            </div>
            <div className="col-md-3 col-xs-12 np contact_address">
              <img src="/static/images/location.png" />
              <p>
                Авто замчдын гудамж-54, Сүхбаатар дүүрэг, Улаанбаатар, Монгол
                улс
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
