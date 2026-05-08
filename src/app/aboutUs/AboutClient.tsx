"use client";
import React, { useEffect, useState } from "react";
import type { CmsPost } from "@/lib/cmsPosts";

export default function AboutClient({ post }: { post?: CmsPost | null }) {
  const [title, setTitle] = useState(post?.title || "Бидний тухай");
  const [content, setContent] = useState(post?.content || "");

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
    <div id="content" style={{ display: "block" }}>
      <div>
        <img
          alt="background_about"
          src="/static/images/-2468521239344344000_1800_x_1012.jpg"
        />
      </div>
      <section className="about">
        <div className="np np1">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 aboutvideo">
              <iframe
                allowFullScreen
                frameBorder="0"
                height="315"
                src="https://www.youtube.com/embed/ntpEog0lzww"
                width="100%"
              />
            </div>
            <div className="col-md-5 col-md-offset-1 abouttext">
              <h5 className="sub_title">{title}</h5>
              <div style={{ textAlign: "justify" }}>
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
