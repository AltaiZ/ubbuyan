"use client";

import { IPageProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomepageTab({
  name,
  id,
  searchParams,
}: {
  name: string;
  id: string;
  searchParams: IPageProps["searchParams"];
}) {
  const router = useRouter();


  return (
    <li
      className={`col-md-2 ${id === searchParams.activeTab && "active"}`}
      role="presentation "
    >
      <a
        aria-controls="ontsloh"
        aria-expanded="false"
        data-toggle="tab"
        role="tab"
        onClick={() => router.push(`/?activeTab=${id}`, { scroll: false })}
      >
        <img src="/static/images/icon1.png" />
        {name}
      </a>
      <div className="arrow-down" />
    </li>
  );
}
