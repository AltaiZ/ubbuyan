"use client";

import React, { useState, useMemo, useEffect } from "react";

interface FormData {
  first_name: string;
  last_name: string;
  born_year: string;
  dead_year: string;
  location: string;
  department: string;
  dead_id: string;
}

interface Entry {
  first_name: string;
  last_name: string;
  born_year: number;
  dead_year: number;
  location: string;
  department?: string | null;
  dead_id: string;
}

const DeathNoteSearch: React.FC = () => {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [bornYear, setBornYear] = useState("");
  const [deadYear, setDeadYear] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [allData, setAllData] = useState<Entry[]>([]);
  const [filteredData, setFilteredData] = useState<Entry[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteFilter, setDeleteFilter] = useState("");
  const [selectedToDelete, setSelectedToDelete] = useState<Entry | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    born_year: "",
    dead_year: "",
    location: "",
    department: "",
    dead_id: Date.now().toString(),
  });

  // Initial fetch from server API (merges base data.js + custom.json)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/deaths", { cache: "no-store" });
        const json = await res.json();
        setAllData(json.list || []);
      } catch (e) {
        console.error("Failed to load data", e);
      }
    };
    fetchData();
  }, []);

  // department-ийн давхардсангүй утгуудыг гаргаж авах
  const departmentOptions = useMemo(() => {
    const unique = Array.from(new Set(allData.map((entry) => entry.department)));
    // null/undefined болон хоосон мөрүүдийг хаяж string төрлөөр нь нарийвчилна
    return unique.filter(
      (a): a is string => typeof a === "string" && a.trim().length > 0,
    );
  }, [allData]);

  const deleteCandidates = useMemo(() => {
    const q = deleteFilter.trim().toLowerCase();
    if (!q) return allData.slice(0, 20);
    return allData
      .filter((e) => {
        const full = `${e.last_name || ""} ${e.first_name || ""}`.toLowerCase();
        return full.includes(q);
      })
      .slice(0, 50);
  }, [allData, deleteFilter]);

  const handleSearch = () => {
    const lnameLower = lname.toLowerCase();
    const fnameLower = fname.toLowerCase();
    const locationLower = location.toLowerCase();

    const result = allData.filter((entry) => {
      const entryLastName = entry.last_name?.toLowerCase() || "";
      const entryFirstName = entry.first_name?.toLowerCase() || "";
      const entryLocation = entry.location?.toLowerCase() || "";
      const entryDepartment = entry.department || "";

      return (
        (!lname || entryLastName.includes(lnameLower)) &&
        (!fname || entryFirstName.includes(fnameLower)) &&
        (!bornYear || entry.born_year.toString().startsWith(bornYear)) &&
        (!deadYear || entry.dead_year.toString().startsWith(deadYear)) &&
        (!location || entryLocation.includes(locationLower)) &&
        (!department || entryDepartment === department)
      );
    });

    setFilteredData(result);
    setSearchPerformed(true);
    setCurrentPage(1);
  };

  // Pagination calculations for filtered results
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredData.length / pageSize) || 1);
  }, [filteredData.length, pageSize]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, pageSize]);

  return (
    <section className="ub_list">
      <div className="container">
        <div className="col-md-12">
          

          <div style={{ maxWidth: "450px", margin: "0 auto" }}>
            <div className="ub_header">
            <h2 className="sub_title">Бурхан болоочийн хайлтын систем</h2>
          </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <form className="form-vertical filter-wrapper" method="GET">
                  <div className="form-group">
                    <label htmlFor="lname">Овог</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      placeholder="Овог"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fname">Нэр</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Нэр"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bornYear">Төрсөн он</label>
                    <input
                      type="number"
                      className="form-control"
                      id="bornYear"
                      placeholder="Төрсөн он"
                      value={bornYear}
                      onChange={(e) => setBornYear(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="deadYear">Нас барсан он</label>
                    <input
                      type="number"
                      className="form-control"
                      id="deadYear"
                      placeholder="Нас барсан он"
                      value={deadYear}
                      onChange={(e) => setDeadYear(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Хаана оршоосон</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Хаана оршоосон"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="department">Цогцолбор</label>
                    <select
                      id="department"
                      className="form-control"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="">-- Цоцолбор сонгох --</option>
                      {departmentOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginTop: "10px" }}
                  >
                    <div>
                      <button
                        className="btn btn-default"
                        type="button"
                        onClick={handleSearch}
                      >
                        Хайх
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-default"
                        type="button"
                        onClick={() => setShowAddModal(true)}
                        style={{ marginLeft: "10px" }}
                      >
                        Нэмэх
                      </button>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => setShowDeleteModal(true)}
                        style={{ marginLeft: "10px" }}
                      >
                        Устгах
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {searchPerformed && (
            <div className="table-responsive" style={{ marginTop: "20px" }}>
              {filteredData.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Овог</th>
                      <th>Нэр</th>
                      <th>Төрсөн он</th>
                      <th>Нас барсан он</th>
                      <th>Хаана оршоосон</th>
                      <th>Цогцолбор</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((entry) => (
                      <tr key={entry.dead_id + (entry.department || "")}>
                        <td>{entry.last_name}</td>
                        <td>{entry.first_name}</td>
                        <td>{entry.born_year}</td>
                        <td>{entry.dead_year}</td>
                        <td>{entry.location}</td>
                        <td>
                          {entry.department ? String(entry.department) : "Хоосон"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Илэрц олдсонгүй</p>
              )}

              {filteredData.length > pageSize && (
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginTop: 12, gap: 8, flexWrap: "wrap" }}
                >
                  <div className="btn-group" role="group" aria-label="Pagination">
                    <button
                      className="btn btn-default"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      type="button"
                    >
                      Өмнөх
                    </button>
                    {(() => {
                      const pages: number[] = [];
                      const maxButtons = 7;
                      let start = Math.max(1, currentPage - 3);
                      let end = Math.min(totalPages, start + maxButtons - 1);
                      start = Math.max(1, end - maxButtons + 1);
                      for (let i = start; i <= end; i++) pages.push(i);
                      return pages.map((p) => (
                        <button
                          key={p}
                          className={`btn ${p === currentPage ? "btn-primary" : "btn-default"}`}
                          onClick={() => setCurrentPage(p)}
                          type="button"
                        >
                          {p}
                        </button>
                      ));
                    })()}
                    <button
                      className="btn btn-default"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      type="button"
                    >
                      Дараах
                    </button>
                  </div>
                  <div className="d-flex align-items-center" style={{ gap: 8 }}>
                    <span>
                      Хуудас {currentPage} / {totalPages} — Нийт: {filteredData.length}
                    </span>
                    <select
                      className="form-control"
                      style={{ width: 100 }}
                      value={pageSize}
                      onChange={(e) => {
                        const size = parseInt(e.target.value) || 50;
                        setPageSize(size);
                        setCurrentPage(1);
                      }}
                    >
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </div>
                </div>
              )}

              {showDeleteModal && (
                <div
                  className="modal"
                  style={{
                    display: "block",
                    position: "fixed",
                    zIndex: 1000,
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  <div
                    className="modal-dialog"
                    style={{
                      backgroundColor: "#fff",
                      margin: "5% auto",
                      padding: "20px",
                      width: "70%",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="modal-header">
                      <h4 className="modal-title">Мэдээлэл устгах</h4>
                      <button
                        type="button"
                        className="close"
                        onClick={() => {
                          setShowDeleteModal(false);
                          setSelectedToDelete(null);
                          setDeleteFilter("");
                        }}
                        style={{
                          float: "right",
                          border: "none",
                          background: "none",
                          fontSize: "1.5rem",
                          cursor: "pointer",
                        }}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group" style={{ marginBottom: 12 }}>
                        <label>Нэрээр хайх</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Овог эсвэл нэр..."
                          value={deleteFilter}
                          onChange={(e) => setDeleteFilter(e.target.value)}
                        />
                      </div>

                      <div
                        className="table-responsive"
                        style={{ maxHeight: 360, overflow: "auto" }}
                      >
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Сонгох</th>
                              <th>Овог</th>
                              <th>Нэр</th>
                              <th>Төрсөн он</th>
                              <th>Нас барсан он</th>
                              <th>Хаана оршоосон</th>
                              <th>Цогцолбор</th>
                              <th>ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            {deleteCandidates.map((e) => (
                              <tr
                                key={e.dead_id}
                                onClick={() => setSelectedToDelete(e)}
                                style={{
                                  cursor: "pointer",
                                  background:
                                    selectedToDelete?.dead_id === e.dead_id
                                      ? "#f5c6cb"
                                      : undefined,
                                }}
                              >
                                <td>
                                  <input
                                    type="radio"
                                    name="deleteSelect"
                                    checked={
                                      selectedToDelete?.dead_id === e.dead_id
                                    }
                                    onChange={() => setSelectedToDelete(e)}
                                  />
                                </td>
                                <td>{e.last_name}</td>
                                <td>{e.first_name}</td>
                                <td>{e.born_year}</td>
                                <td>{e.dead_year}</td>
                                <td>{e.location}</td>
                                <td>
                                  {e.department ? String(e.department) : "Хоосон"}
                                </td>
                                <td>{e.dead_id}</td>
                              </tr>
                            ))}
                            {deleteCandidates.length === 0 && (
                              <tr>
                                <td colSpan={8} style={{ textAlign: "center" }}>
                                  Илэрц олдсонгүй
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="modal-footer"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          setShowDeleteModal(false);
                          setSelectedToDelete(null);
                          setDeleteFilter("");
                        }}
                      >
                        Болих
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        disabled={!selectedToDelete}
                        onClick={() => {
                          if (!selectedToDelete) return;
                          fetch("/api/deaths", {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              dead_id: selectedToDelete.dead_id,
                            }),
                          })
                            .then((res) => res.json())
                            .then((resp) => {
                              if (resp?.list) {
                                setAllData(resp.list);
                              }
                              // Clear selection and refresh filtered view if open
                              setSelectedToDelete(null);
                              if (searchPerformed) handleSearch();
                              setShowDeleteModal(false);
                            })
                            .catch((e) =>
                              console.error("Failed to delete entry", e),
                            );
                        }}
                      >
                        Баталгаажуулж устгах
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showAddModal && (
        <div
          className="modal"
          style={{
            display: "block",
            position: "fixed",
            zIndex: 1000,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="modal-dialog"
            style={{
              backgroundColor: "#fff",
              margin: "10% auto",
              padding: "20px",
              width: "50%",
              borderRadius: "5px",
            }}
          >
            <div className="modal-header">
              <h4 className="modal-title">Шинэ мэдээлэл нэмэх</h4>
              <button
                type="button"
                className="close"
                onClick={() => setShowAddModal(false)}
                style={{
                  float: "right",
                  border: "none",
                  background: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Овог</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.last_name}
                  onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Нэр</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.first_name}
                  onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Төрсөн он</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.born_year}
                  onChange={(e) =>
                    setFormData({ ...formData, born_year: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Нас барсан он</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.dead_year}
                  onChange={(e) =>
                    setFormData({ ...formData, dead_year: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Хаана оршуулсан</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Цогцолбор</label>
                <select
                  className="form-control"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                >
                  <option value="">-- Сонгох --</option>
                  {departmentOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAddModal(false)}
              >
                Цуцлах
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  // Add the new entry to the data
                  const newEntry = {
                    ...formData,
                    dead_id: Date.now().toString(),
                    born_year: parseInt(formData.born_year) || 0,
                    dead_year: parseInt(formData.dead_year) || 0,
                  };

                  // Persist to server API
                  fetch("/api/deaths", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newEntry),
                  })
                    .then((res) => res.json())
                    .then((resp) => {
                      if (resp?.list) {
                        setAllData(resp.list);
                      } else {
                        // Fallback: prepend locally
                        setAllData((prev) => [
                          newEntry as unknown as Entry,
                          ...prev,
                        ]);
                      }
                      if (searchPerformed) {
                        handleSearch();
                      }
                      // Reset form and close modal
                      setFormData({
                        first_name: "",
                        last_name: "",
                        born_year: "",
                        dead_year: "",
                        location: "",
                        department: "",
                        dead_id: Date.now().toString(),
                      });
                      setShowAddModal(false);
                    })
                    .catch((e) => {
                      console.error("Failed to save entry", e);
                    });
                }}
              >
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeathNoteSearch;
