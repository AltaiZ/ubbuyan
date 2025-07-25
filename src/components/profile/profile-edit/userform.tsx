"use client";

import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // шаардлагатай бол өөрийн button хэрэглээрэй

const UserInfo = () => {
  const user = useAtomValue(currentUserAtom);

  const initialPosition =
    user?.customFieldsData?.find((f) => f.field === "h6Fv-SOTVeC6LAgVEuY6t")?.value ?? "";
  const initialCompany =
    user?.customFieldsData?.find((f) => f.field === "TM6BT3QGRX2vZ50e-7VMj")?.value ?? "";

  const [position, setPosition] = useState(initialPosition);
  const [company, setCompany] = useState(initialCompany);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // энд GraphQL mutation эсвэл API дуудалтаа хийнэ
    console.log("Saving...", { position, company });

    // жишээ: customersEdit mutation дуудаж болно
    // await customersEdit({ variables: { id: user._id, position, company } })

    setEditing(false);
  };

  return (
    <div className="text-sm text-black space-y-2">
      <div className="flex items-center gap-2">
        <span className="min-w-[80px]">Position:</span>
        {editing ? (
          <input
            className="border px-2 py-1 rounded w-full max-w-xs"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        ) : (
          <span className={`font-medium px-3 py-1 rounded ${position ? "border border-gray-300" : "border border-red-600"}`}>
            {position || "NotSet"}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="min-w-[80px]">Company:</span>
        {editing ? (
          <input
            className="border px-2 py-1 rounded w-full max-w-xs"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        ) : (
          <span className={`font-medium px-3 py-1 rounded ${company ? "border border-gray-300" : "border border-red-600"}`}>
            {company || "NotSet"}
          </span>
        )}
      </div>

      <div className="pt-2">
        {editing ? (
          <div className="flex gap-2">
            <Button variant="default" onClick={handleSave}>Save</Button>
            <Button variant="ghost" onClick={() => {
              setPosition(initialPosition);
              setCompany(initialCompany);
              setEditing(false);
            }}>Cancel</Button>
          </div>
        ) : (
          <Button variant="outline" onClick={() => setEditing(true)}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
