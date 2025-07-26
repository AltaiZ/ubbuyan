import React from "react";
import CurrentUser from "@/containers/auth/current-user";

export default function Header() {
  return (
    <div className="mobilecontain">
      <div className="container">
        <header className="header flex justify-between items-center">
          <div className="header-left flex items-center gap-4">
            <div className="logo np hitem">
              <a href="/">
                <img className="hidden-xs" src="/static/images/logoo3.png" alt="Logo" />
                <img className="visible-xs" src="/static/images/logoo3.png" alt="Logo Mobile" />
              </a>
            </div>
            <div className="mark-top">
              <div data-mark-height="60" id="iaf-cs-mark">
                <a
                  href="https://www.iafcertsearch.org/r/b/b433889a-2115-59ae-bc47-34f8edadb6f1"
                  target="_blank"
                >
                  <img src="/static/images/iaf.png" alt="IAF Mark" />
                </a>
              </div>
            </div>
          </div>
          <span className="ml-10 md:ml-0">
            <CurrentUser />
          </span>
      </header>
      </div>
    </div>
  );
}
