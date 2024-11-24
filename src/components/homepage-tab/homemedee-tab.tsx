"use client";


import React, { useState } from "react";

export default function HomeMedeeTab({
  name,
  id,
  setState,
  state,
}: {
  name: string;
  id: string;
  setState(value: React.SetStateAction<string>): void;
  state: string;
}) {
  return (
    <li className={`${id === state && "active"}`} role="presentation">
      <a
        aria-controls="medee_medeelel"
        data-toggle="tab"
        role="tab"
        onClick={() => setState(id)}
      >
        {name}
      </a>
    </li>
  );
}
