import React from "react";

export default function Header() {
  return (
    <div className="mobilecontain">
      <div className="container">
        <header className="header">
          <div className="header-left">
            <div className="logo np hitem">
              <a href="/">
                <img className="hidden-xs" src="/static/images/logoo3.png" />
                <img className="visible-xs" src="/static/images/logoo3.png" />
              </a>
            </div>
            <div className="mark-top">
              <div data-mark-height="60" id="iaf-cs-mark">
                <a
                  href="https://www.iafcertsearch.org/r/b/b433889a-2115-59ae-bc47-34f8edadb6f1"
                  target="_blank"
                >
                  <img src="/static/images/iaf.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="sign-up">
            <div className="register">
              <a href="/login/">
                <img alt="profile" src="/static/images/profile.png" />
                <span>Нэвтрэх</span>
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
