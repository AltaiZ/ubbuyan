import React from "react";

export default function page() {
  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <div className="container login register-cont">
        <div className="row">
          <div className="col flex-centered">
            <h2 className="title">Бүртгүүлэх</h2>
            <form action="/register/?_=1717735753659" method="post">
              <input
                defaultValue="JnglRsjm7SSlukZgoX658BYHHosjurNX"
                name="csrfmiddlewaretoken"
                type="hidden"
              />
              <div className="field email">
                <div className="field">
                  <input
                    autoComplete="off"
                    autoFocus
                    defaultValue=""
                    id="id_username"
                    name="username"
                    placeholder="Username"
                    type="text"
                  />
                </div>
              </div>
              <div className="field email">
                <div className="field">
                  <input
                    autoComplete="off"
                    defaultValue=""
                    id="id_email"
                    name="email"
                    placeholder="Email Address"
                    type="text"
                  />
                </div>
              </div>
              <div className="control-group d-flex">
                <button className="btn-log" type="submit">
                  Илгээх
                </button>
              </div>
              <button className="btn-long">
                <a className="noajax" href="/login/">
                  Нэвтрэх
                </a>
                <svg
                  aria-hidden="true"
                  className="svg-inline--fa fa-arrow-right fa-w-14"
                  data-fa-i2svg=""
                  data-icon="arrow-right"
                  data-prefix="fa"
                  role="img"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
