"use client";

import { IPageProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { usePathname } from "next/navigation";

export default function HomepageTab({
  name,
  id,
  activeTab,
  url,
}: {
  url: any;
  name: string;
  id: string;
  activeTab: any;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li
      className={`col-md-2 ${id === activeTab && "active"}`}
      role="presentation "
    >
      <a
        aria-controls="ontsloh"
        aria-expanded="false"
        data-toggle="tab"
        role="tab"
        onClick={() =>
          router.push(`${pathname}?activeTab=${id}`, { scroll: false })
        }
      >
        <img src={url} />
        {name}
      </a>
      <div className="arrow-down" />
    </li>
  );
}
