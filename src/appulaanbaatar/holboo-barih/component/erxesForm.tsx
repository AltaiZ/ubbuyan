"use client";

import React, { useEffect } from "react";

export default function erxesForm() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).erxesSettings = {
        forms: [
          {
            brand_id: "qgYkrI",
            form_id: "cC26Mb",
          },
        ],
      };

      const script = document.createElement("script");
      script.src =
        "https://ulaanbaatarbuyan.app.erxes.io/widgets/build/formWidget.bundle.js";
      script.async = true;

      const entry = document.getElementsByTagName("script")[0];
      if (entry && entry.parentNode) {
        entry.parentNode.insertBefore(script, entry);
      }
    }
  }, []);
  return (
    <div>
      <div
        data-erxes-embed="cC26Mb"
        style={{ width: "520px", height: "490px" }}
      ></div>
    </div>
  );
}
