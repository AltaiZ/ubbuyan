"use client";
import React from "react";
import { useQuery } from "@apollo/client/react";
import cmsQueries from "@/graphql/cms/queries";

export default function Page() {
  const { data } = useQuery(cmsQueries.cmsPostList, {
    variables: { sortField: "createdAt", sortDirection: "DESC" },
    fetchPolicy: "no-cache",
  });

  const posts = (data as any)?.cpPostList?.posts || [];

  const getContent = (category: string) => {
    const post = posts.find((p: any) =>
      p.categories?.some((c: any) => c.name === category)
    );
    return post?.content || null;
  };

  const material = getContent("nas-barsnii-material");
  const tetgemj = getContent("orshuulgiin-tetgemj");
  const burduuleh = getContent("tetgemj-burduuleh-material");
  const erh = getContent("tetgemj-avah-erh");

  return (
    <div id="content" style={{ display: "block" }}>
      <section className="simple_page container">
        <div className="tus">
          <hr />
          <div className="tus_img">
            <img src="/static/images/icon12.png" />
          </div>
        </div>
        <div className="emgenel">
          <div className="container">
            <div className="row">
              <div className="hidden-xs col-md-3 col-md-offset-0 sidebar emgenelsubmenu">
                <ul className="nav nav-list tetgemj affix emgenelsubmenu">
                  <li><a className="active" href="#material"><h4>Нас барсны хасалт хийлгэхэд бүрдүүлэх материал</h4></a></li>
                  <li><a href="#tetgemj"><h4>Оршуулгын тэтгэмж авах</h4></a></li>
                  <li><a href="#burduuleh_material"><h4>Оршуулгын тэтгэмж авахад бүрдүүлэх материал</h4></a></li>
                  <li><a href="#erh"><h4>Оршуулгын тэтгэмж авах эрх</h4></a></li>
                </ul>
              </div>
              <div className="col-md-8 col-md-offset-1 content">
                <section id="material">
                  <h3>Нас барсны хасалт хийлгэхэд бүрдүүлэх материал:</h3>
                  {material ? (
                    <div dangerouslySetInnerHTML={{ __html: material }} />
                  ) : (
                    <p>Мэдээлэл удахгүй нэмэгдэнэ.</p>
                  )}
                </section>
                <section id="tetgemj">
                  <h3>Оршуулгын тэтгэмж авах:</h3>
                  {tetgemj ? (
                    <div dangerouslySetInnerHTML={{ __html: tetgemj }} />
                  ) : (
                    <p>Мэдээлэл удахгүй нэмэгдэнэ.</p>
                  )}
                </section>
                <section id="burduuleh_material">
                  <h3>Оршуулгын тэтгэмж авахад бүрдүүлэх материал:</h3>
                  {burduuleh ? (
                    <div dangerouslySetInnerHTML={{ __html: burduuleh }} />
                  ) : (
                    <p>Мэдээлэл удахгүй нэмэгдэнэ.</p>
                  )}
                </section>
                <section id="erh">
                  <h3>Оршуулгын тэтгэмж авах эрх:</h3>
                  {erh ? (
                    <div dangerouslySetInnerHTML={{ __html: erh }} />
                  ) : (
                    <p>Мэдээлэл удахгүй нэмэгдэнэ.</p>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}