"use client";

import React, { useState } from "react";
import { jsonData } from "../../../testdata/data";

const RemoveDeathNoteEntry: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [filteredData, setFilteredData] = useState<typeof jsonData>([]);

  const [newEntry, setNewEntry] = useState({
    last_name: "",
    first_name: "",
    born_year: "",
    dead_year: "",
    location: "",
    apartment: "",
  });

  return (
    <section className="ub_list">
      <div className="container">
        <div className="col-md-12">
          <div style={{ marginTop: "20px" }}>
            <div className="form-group" style={{ marginTop: "20px" }}>
              <h4>Шинэ бүртгэл нэмэх</h4>
              {["last_name", "first_name", "born_year", "dead_year", "location", "apartment"].map((field) => (
                <input
                  key={field}
                  type={field.includes("year") ? "number" : "text"}
                  className="form-control"
                  placeholder={field}
                  value={newEntry[field as keyof typeof newEntry]}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, [field]: e.target.value })
                  }
                  style={{ marginBottom: "10px" }}
                />
              ))}

              <button
                className="btn btn-success"
                onClick={() => {
                  const updated = [
                    ...filteredData,
                    {
                      ...newEntry,
                      born_year: parseInt(newEntry.born_year),
                      dead_year: parseInt(newEntry.dead_year),
                      dead_id: Date.now().toString(),
                      memorial_id: null,
                      full_name: null,
                      donation: null,
                      phone_number: null,
                      description: null,
                    },
                  ];
                  setFilteredData(updated);
                  alert("Шинэ бүртгэл амжилттай нэмэгдлээ!");
                  setShowAddForm(false);
                  // Clear form
                  setNewEntry({
                    last_name: "",
                    first_name: "",
                    born_year: "",
                    dead_year: "",
                    location: "",
                    apartment: "",
                  });
                }}
              >
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoveDeathNoteEntry;
