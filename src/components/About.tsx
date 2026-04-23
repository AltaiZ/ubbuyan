"use client";
import React, { useEffect, useState } from "react";

export default function About() {
  const [title, setTitle] = useState("Бидний тухай");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/about")
      .then((r) => r.json())
      .then((data) => {
        if (data.title) setTitle(data.title);
        if (data.content) {
          const plain = data.content.replace(/<[^>]*>/g, "").trim();
          if (plain) setContent(plain);
        }
      });
  }, []);

  return (
    <section className="h_about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="abouttext1">
              <h1>{title}</h1>
              <p style={{ textAlign: "justify" }}>{content}</p>
              <a className="btn btn-danger go_button" href="/aboutUs">
                Дэлгэрэнгүй
                <i className="r_arrow" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutvideo1 embed-responsive embed-responsive-4by3">
              <figure>
                <iframe
                  allowFullScreen
                  frameBorder="0"
                  src="//www.youtube.com/embed/mQGplUAsXjc"
                  style={{ height: "281px", width: "500px" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}