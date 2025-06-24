"use client";

import React, { useState } from "react";

const AddDeathNoteEntry: React.FC = () => {
  const [newEntry, setNewEntry] = useState({
    last_name: "",
    first_name: "",
    born_year: "",
    dead_year: "",
    location: "",
    apartment: "",
  });

  const handleAdd = async () => {
    const entryToSubmit = {
      ...newEntry,
      dead_id: Date.now(),
      born_year: parseInt(newEntry.born_year),
      dead_year: parseInt(newEntry.dead_year),
      memorial_id: null,
      full_name: null,
      donation: null,
      phone_number: null,
      description: null,
    };

    try {
      const response = await fetch("http://localhost:3001/deaths", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSubmit),
      });

      if (response.ok) {
        alert("Амжилттай хадгалагдлаа!");
        setNewEntry({
          last_name: "",
          first_name: "",
          born_year: "",
          dead_year: "",
          location: "",
          apartment: "",
        });
      } else {
        alert("Хадгалах үед алдаа гарлаа!");
      }
    } catch (error) {
      alert("Сервертэй холбогдож чадсангүй!");
    }
  };

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

              <button className="btn btn-success" onClick={handleAdd}>
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDeathNoteEntry;
