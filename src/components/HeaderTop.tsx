"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import HeaderNav from "./HeaderNav";

export default function HeaderTop() {
  const [phone, setPhone] = useState("7016-2222");
  const [email, setEmail] = useState("info@ubbuyan.mn");

  useEffect(() => {
    fetch("/api/contact-info")
      .then((r) => r.json())
      .then((data) => {
        if (data.phone) setPhone(data.phone);
        if (data.email) setEmail(data.email);
      });
  }, []);

  return (
    <div>
      <div className="header-top">
        <div className="container">
          <ul>
            <li className="number">
              <a href={"tel:" + phone}>
                <img src="/static/images/02.png" /> {phone}
              </a>
            </li>
            <li className="email">
              <a href={"mailto:" + email}>
                <img src="/static/images/01.png" /> {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Header />
      <HeaderNav />
    </div>
  );
}