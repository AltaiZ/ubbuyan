"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client/react';
import { queries, customerMutations } from '@/graphql';

interface FormData {
  firstName: string;
  lastName: string;
  department: string;
  birthYear: string;
  deathYear: string;
  section: string;
  row: string;
  monumentNumber: string;
}

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate?: string;
  location?: string;
  department?: string;
  registrationNumber?: string;
  primaryEmail?: string;
  primaryPhone?: string;
  customFieldsData?: any;
}

interface FieldGroup {
  _id: string;
  name: string;
  fields: Array<{
    _id: string;
    text: string;
    type: string;
    options?: string[];
  }>;
}

const DeathNoteSearch: React.FC = () => {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [deathYear, setDeathYear] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteFilter, setDeleteFilter] = useState("");
  const [selectedToDelete, setSelectedToDelete] = useState<Customer | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    department: "",
    birthYear: "",
    deathYear: "",
    section: "",
    row: "",
    monumentNumber: "",
  });

  const { data, loading, error, refetch } = useQuery<any>(queries.customersMain, {
    variables: {
      page: currentPage,
      perPage: pageSize,
      searchValue: searchQuery,
    },
    skip: !searchPerformed,
  });

  const { data: fieldGroupsData } = useQuery<any>(queries.fieldGroups, {
    variables: {
      contentType: "core:customer",
    },
  });

  const [addCustomer] = useMutation<any>(customerMutations.customersAdd);
  const [removeCustomer] = useMutation<any>(customerMutations.customersRemove);

  const allData = useMemo(() => {
    if (!searchPerformed) return [];
    const customers = data?.customersMain?.list || [];
    return customers.filter((customer: Customer) => {
      const firstName = customer.firstName?.trim() || "";
      const lastName = customer.lastName?.trim() || "";
      
      if (!firstName || !lastName) {
        return false;
      }
      
      const firstNameLower = firstName.toLowerCase();
      const lastNameLower = lastName.toLowerCase();
      
      const isTestEntry = 
        (firstNameLower === "doe" && lastNameLower === "john") ||
        (firstNameLower === "john" && lastNameLower === "doe") ||
        (firstNameLower === "alex" && lastNameLower === "toms") ||
        (firstNameLower === "toms" && lastNameLower === "alex");
      
      const hasTestOrGomo = 
        firstNameLower.includes("test") || 
        firstNameLower.includes("gomo") ||
        lastNameLower.includes("test") || 
        lastNameLower.includes("gomo");
      
      return !hasTestOrGomo && !isTestEntry;
    });
  }, [data, searchPerformed]);

  useEffect(() => {
    if (fieldGroupsData?.fieldsGroups && allData.length > 0) {
      console.log("=== CUSTOM FIELDS SUMMARY ===");
      console.log(`Total customers: ${allData.length}`);
      
      const customersWithData = allData.filter((c: Customer) => 
        c.customFieldsData && Object.keys(c.customFieldsData).length > 0
      );
      console.log(`Customers with customFieldsData: ${customersWithData.length}`);
      
      if (customersWithData.length > 0) {
        const sample = customersWithData[0];
        console.log("Sample customer with data:", sample.firstName, sample.lastName);
        console.log("Their customFieldsData:", sample.customFieldsData);
      } else {
        console.log("⚠️ NO CUSTOMERS HAVE CUSTOM FIELD DATA!");
        console.log("Sample customer:", allData[0]);
      }
      
      // Check for the specific fields we need
      const targetFields = [
        { text: "Төрсөн он", id: "ZbvEltvH8GedVoeHJMZac" },
        { text: "Нас барсан он", id: "yGFQFLpZ5O_8uq1jt6tTM" },
        { text: "Хэсэг ", id: "xRfZ-FvuBLNYKAJc3BcIc" },
        { text: "Эгнээ ", id: "Ym7-Tpl2dJgfTzEN3Lm1A" },
        { text: "Хөшөөний дугаар", id: "XT5uIa8m-3W5frxgHrC2h" },
        { text: "Цогцолбор", id: "PnKDxjuxDNJq6qj__bf5g" },
      ];
      
      targetFields.forEach(field => {
        const count = allData.filter((c: Customer) => 
          c.customFieldsData && c.customFieldsData[field.id]
        ).length;
        console.log(`  "${field.text}": ${count} customers have values`);
      });
    }
  }, [fieldGroupsData, allData]);

  const customFields = useMemo(() => {
    const groups = fieldGroupsData?.fieldsGroups || [];
    const fields: Record<string, any> = {};
    groups.forEach((group: FieldGroup) => {
      group.fields.forEach((field) => {
        fields[field._id] = field;
      });
    });
    return fields;
  }, [fieldGroupsData]);

  const departmentField = useMemo(() => {
    const groups = fieldGroupsData?.fieldsGroups || [];
    for (const group of groups) {
      const field = group.fields.find((f: any) => f.text === "Цогцолбор");
      if (field) return field;
    }
    return null;
  }, [fieldGroupsData]);

  const getCustomFieldValue = (customer: Customer, fieldText: string) => {
    if (!customer.customFieldsData) {
      return "";
    }
    
    const groups = fieldGroupsData?.fieldsGroups || [];
    for (const group of groups) {
      const field = group.fields.find((f: any) => f.text === fieldText);
      if (field) {
        // Check if customFieldsData is an array or object
        if (Array.isArray(customer.customFieldsData)) {
          // It's an array - search through it
          const fieldData = customer.customFieldsData.find((item: any) => 
            item && item.field === field._id
          );
          if (fieldData) {
            const value = fieldData.stringValue || fieldData.numberValue || fieldData.dateValue || fieldData.value;
            if (value !== undefined && value !== null && value !== "") {
              return value;
            }
          }
        } else {
          // It's an object - direct lookup
          const value = customer.customFieldsData[field._id];
          if (value !== undefined && value !== null && value !== "") {
            return value;
          }
        }
      }
    }
    return "";
  };


  const departmentOptions = useMemo(() => {
    if (departmentField?.options && departmentField.options.length > 0) {
      return departmentField.options;
    }
    const unique = Array.from(new Set(allData.map((entry: Customer) => getCustomFieldValue(entry, "Цогцолбор"))));
    return unique.filter(
      (a): a is string => typeof a === "string" && a.trim().length > 0,
    );
  }, [departmentField, allData, fieldGroupsData]);

  const deleteCandidates = useMemo(() => {
    const q = deleteFilter.trim().toLowerCase();
    if (!q) return allData.slice(0, 20);
    return allData
      .filter((e: Customer) => {
        const full = `${e.lastName || ""} ${e.firstName || ""}`.toLowerCase();
        return full.includes(q);
      })
      .slice(0, 50);
  }, [allData, deleteFilter]);

  const handleSearch = () => {
    const searchTerms = [lname, fname].filter(Boolean).join(" ").trim();
    setSearchQuery(searchTerms);
    setSearchPerformed(true);
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    if (!searchPerformed) return [];

    const locationLower = location.toLowerCase();

    return allData.filter((entry: Customer) => {
      const entryDepartment = getCustomFieldValue(entry, "Цогцолбор");
      const entryBirthYear = getCustomFieldValue(entry, "Төрсөн он");
      const entryDeathYear = getCustomFieldValue(entry, "Нас барсан он");
      const entrySection = getCustomFieldValue(entry, "Хэсэг ");
      const entryRow = getCustomFieldValue(entry, "Эгнээ ");
      const entryMonumentNumber = getCustomFieldValue(entry, "Хөшөөний дугаар");
      const combinedLocation = `${entrySection} ${entryRow} ${entryMonumentNumber}`.toLowerCase();

      return (
        (!location || combinedLocation.includes(locationLower)) &&
        (!department || entryDepartment === department) &&
        (!birthYear || entryBirthYear.toString().includes(birthYear)) &&
        (!deathYear || entryDeathYear.toString().includes(deathYear))
      );
    });
  }, [searchPerformed, allData, location, department, birthYear, deathYear, fieldGroupsData]);

  const totalCount = data?.customersMain?.totalCount || 0;
  
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalCount / pageSize) || 1);
  }, [totalCount, pageSize]);

  const paginatedData = useMemo(() => {
    return filteredData;
  }, [filteredData]);

  return (
    <section className="ub_list">
      <div className="container">
        <div className="col-md-12">
          

          <div style={{ maxWidth: "450px", margin: "0 auto" }}>
            <div className="ub_header">
            <h2 className="sub_title">Хэрэглэгчийн хайлтын систем</h2>
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
                    <label htmlFor="birthYear">Төрсөн он</label>
                    <input
                      type="number"
                      className="form-control"
                      id="birthYear"
                      placeholder="Төрсөн он"
                      value={birthYear}
                      onChange={(e) => setBirthYear(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="deathYear">Нас барсан он</label>
                    <input
                      type="number"
                      className="form-control"
                      id="deathYear"
                      placeholder="Нас барсан он"
                      value={deathYear}
                      onChange={(e) => setDeathYear(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Хаана оршоосон (Хэсэг, Эгнээ, Хөшөөний дугаар)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Хэсэг, Эгнээ, Хөшөөний дугаар"
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
                      {departmentOptions.map((opt: string) => (
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
                        onClick={() => handleSearch()}
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
              {loading ? (
                <p>Уншиж байна...</p>
              ) : error ? (
                <p>Алдаа гарлаа: {error.message}</p>
              ) : !loading && filteredData.length > 0 ? (
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
                    {paginatedData.map((entry: Customer) => {
                      const section = getCustomFieldValue(entry, "Хэсэг ");
                      const row = getCustomFieldValue(entry, "Эгнээ ");
                      const monumentNumber = getCustomFieldValue(entry, "Хөшөөний дугаар");
                      const combinedLocation = [section, row, monumentNumber].filter(v => v).join(" - ") || "-";
                      
                      return (
                        <tr key={entry._id}>
                          <td>{entry.lastName}</td>
                          <td>{entry.firstName}</td>
                          <td>{getCustomFieldValue(entry, "Төрсөн он") || "-"}</td>
                          <td>{getCustomFieldValue(entry, "Нас барсан он") || "-"}</td>
                          <td>{combinedLocation}</td>
                          <td>
                            {getCustomFieldValue(entry, "Цогцолбор") || "Хоосон"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p>Илэрц олдсонгүй</p>
              )}

{totalCount > pageSize && (
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
                      Хуудас {currentPage} / {totalPages} — Нийт: {totalCount}
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
                            </tr>
                          </thead>
                          <tbody>
                            {deleteCandidates.map((e: Customer) => {
                              const section = getCustomFieldValue(e, "Хэсэг ");
                              const row = getCustomFieldValue(e, "Эгнээ ");
                              const monumentNumber = getCustomFieldValue(e, "Хөшөөний дугаар");
                              const combinedLocation = [section, row, monumentNumber].filter(v => v).join(" - ") || "-";
                              
                              return (
                                <tr
                                  key={e._id}
                                  onClick={() => setSelectedToDelete(e)}
                                  style={{
                                    cursor: "pointer",
                                    background:
                                      selectedToDelete?._id === e._id
                                        ? "#f5c6cb"
                                        : undefined,
                                  }}
                                >
                                  <td>
                                    <input
                                      type="radio"
                                      name="deleteSelect"
                                      checked={
                                        selectedToDelete?._id === e._id
                                      }
                                      onChange={() => setSelectedToDelete(e)}
                                    />
                                  </td>
                                  <td>{e.lastName}</td>
                                  <td>{e.firstName}</td>
                                  <td>{getCustomFieldValue(e, "Төрсөн он") || "-"}</td>
                                  <td>{getCustomFieldValue(e, "Нас барсан он") || "-"}</td>
                                  <td>{combinedLocation}</td>
                                  <td>
                                    {getCustomFieldValue(e, "Цогцолбор") || "Хоосон"}
                                  </td>
                                </tr>
                              );
                            })}
                            {deleteCandidates.length === 0 && (
                              <tr>
                                <td colSpan={7} style={{ textAlign: "center" }}>
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
                        onClick={async () => {
                          if (!selectedToDelete) return;
                          try {
                            await removeCustomer({
                              variables: {
                                customerIds: [selectedToDelete._id],
                              },
                            });
                            await refetch();
                            setSelectedToDelete(null);
                            setShowDeleteModal(false);
                            if (searchPerformed) {
                              handleSearch();
                            }
                          } catch (e) {
                            console.error("Failed to delete entry", e);
                            alert('Failed to delete entry');
                          }
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
              margin: "5% auto",
              padding: "20px",
              width: "50%",
              maxWidth: "600px",
              borderRadius: "5px",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
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
            <div 
              className="modal-body"
              style={{
                maxHeight: "calc(90vh - 150px)",
                overflowY: "auto",
                padding: "20px 0",
              }}
            >
              <div className="form-group">
                <label>Овог</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Нэр</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Төрсөн он</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.birthYear}
                  onChange={(e) =>
                    setFormData({ ...formData, birthYear: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Нас барсан он</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.deathYear}
                  onChange={(e) =>
                    setFormData({ ...formData, deathYear: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Хэсэг</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.section}
                  onChange={(e) =>
                    setFormData({ ...formData, section: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Эгнээ</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.row}
                  onChange={(e) =>
                    setFormData({ ...formData, row: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Хөшөөний дугаар</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.monumentNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, monumentNumber: e.target.value })
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
                  {departmentOptions.map((opt: string) => (
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
                onClick={async () => {
                  try {
                    const groups = fieldGroupsData?.fieldsGroups || [];
                    const customFieldsData: any[] = [];
                    
                    for (const group of groups) {
                      for (const field of group.fields) {
                        let value = null;
                        if (field.text === "Төрсөн он" && formData.birthYear) {
                          value = formData.birthYear;
                        } else if (field.text === "Нас барсан он" && formData.deathYear) {
                          value = formData.deathYear;
                        } else if (field.text === "Хэсэг " && formData.section) {
                          value = formData.section;
                        } else if (field.text === "Эгнээ " && formData.row) {
                          value = formData.row;
                        } else if (field.text === "Хөшөөний дугаар" && formData.monumentNumber) {
                          value = formData.monumentNumber;
                        } else if (field.text === "Цогцолбор" && formData.department) {
                          value = formData.department;
                        }
                        
                        if (value) {
                          customFieldsData.push({
                            field: field._id,
                            value: value,
                            stringValue: value,
                          });
                        }
                      }
                    }

                    console.log("Attempting to add customer with data:", {
                      firstName: formData.firstName,
                      lastName: formData.lastName,
                      customFieldsData: customFieldsData,
                    });

                    const result = await addCustomer({
                      variables: {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        customFieldsData: customFieldsData,
                      },
                    });
                    
                    console.log("Customer added successfully:", result);
                    
                    if (result.data?.customersAdd) {
                      alert(`Амжилттай нэмэгдлээ! ${formData.firstName} ${formData.lastName}`);
                      await refetch();
                      setFormData({
                        firstName: "",
                        lastName: "",
                        department: "",
                        birthYear: "",
                        deathYear: "",
                        section: "",
                        row: "",
                        monumentNumber: "",
                      });
                      setShowAddModal(false);
                      if (searchPerformed) {
                        handleSearch();
                      }
                    } else {
                      console.error("Customer was not created - result:", result);
                      alert("Алдаа гарлаа: Хэрэглэгч үүсээгүй байна");
                    }
                  } catch (e: any) {
                    console.error("Failed to save entry - Full error:", e);
                    console.error("Error message:", e.message);
                    console.error("GraphQL errors:", e.graphQLErrors);
                    console.error("Network error:", e.networkError);
                    alert(`Failed to save entry: ${e.message || 'Please check your connection.'}`);
                  }
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
