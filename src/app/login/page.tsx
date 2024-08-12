import React from "react";

export default function page() {
  return (
    <div id="content">
      <div className="container login ">
        <div className="row justify-content-center">
          <div className="col-12 flex-centered">
            <h2 className="title">Нэвтрэх</h2>
            <form
              action="/login/?next=/plugins/ub_buyan/list/"
              className="noajax"
              method="post"
            >
              <input
                defaultValue="JnglRsjm7SSlukZgoX658BYHHosjurNX"
                name="csrfmiddlewaretoken"
                type="hidden"
              />
              <div className="field email">
                <div className="field">
                  <label className="control-label" htmlFor="id_login_with">
                    Username (email)
                  </label>
                  <input
                    autoComplete="off"
                    autoFocus
                    defaultValue=""
                    id="id_login_with"
                    name="login_with"
                    placeholder="Username or Email"
                    type="text"
                  />
                </div>
              </div>
              <div className="field password-field">
                <div className="field">
                  <label className="control-label" htmlFor="id_password">
                    Password
                  </label>
                  <input
                    autoComplete="off"
                    defaultValue=""
                    id="id_password"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <span id="login-pass-controller">
                    <svg
                      aria-hidden="true"
                      className="svg-inline--fa fa-eye-slash fa-w-18"
                      data-fa-i2svg=""
                      data-icon="eye-slash"
                      data-prefix="fa"
                      role="img"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="grp-log">
                <div className="remember-check">
                  <div className="field">
                    <label className="control-label" htmlFor="id_remember_me">
                      <input
                        id="id_remember_me"
                        name="remember_me"
                        type="checkbox"
                      />
                      Remember me
                    </label>
                  </div>
                </div>
                <button className="btn-log " type="submit">
                  Нэвтрэх
                </button>
              </div>
              <div className="register">
                <a href="/forgot-password/">Нууц үг сэргээх</a>
                <a className="register-text" href="/register/">
                  Бүртгүүлэх
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
