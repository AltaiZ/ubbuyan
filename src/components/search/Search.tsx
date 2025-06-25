"use client";

import React, { useState, useMemo } from "react";
import { jsonData } from "../../../data/data";

const DeathNoteSearch: React.FC = () => {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [bornYear, setBornYear] = useState("");
  const [deadYear, setDeadYear] = useState("");
  const [location, setLocation] = useState("");
  const [apartment, setApartment] = useState("");
  const [filteredData, setFilteredData] = useState<typeof jsonData>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  // apartment-ийн давхардсангүй утгуудыг гаргаж авах
  const apartmentOptions = useMemo(() => {
    const unique = Array.from(new Set(jsonData.map((entry) => entry.apartment)));
    return unique.filter((a) => a); // null эсвэл хоосон бол хаяна
  }, []);

  const handleSearch = () => {
    const lnameLower = lname.toLowerCase();
    const fnameLower = fname.toLowerCase();
    const locationLower = location.toLowerCase();

    const result = jsonData.filter((entry) => {
      const entryLastName = entry.last_name?.toLowerCase() || "";
      const entryFirstName = entry.first_name?.toLowerCase() || "";
      const entryLocation = entry.location?.toLowerCase() || "";
      const entryApartment = entry.apartment || "";

      return (
        (!lname || entryLastName.includes(lnameLower)) &&
        (!fname || entryFirstName.includes(fnameLower)) &&
        (!bornYear || entry.born_year.toString().startsWith(bornYear)) &&
        (!deadYear || entry.dead_year.toString().startsWith(deadYear)) &&
        (!location || entryLocation.includes(locationLower)) &&
        (!apartment || entryApartment === apartment)
      );
    });

    setFilteredData(result.slice(0, 20));
    setSearchPerformed(true);
  };

  return (
    <section className="ub_list">
      <div className="container">
        <div className="col-md-12">
          <div className="ub_header">
            <h2 className="sub_title">Бурхан болоочийн хайлтын систем</h2>
          </div>

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
              <label htmlFor="apartment">Цогцолбор</label>
              <select
                id="apartment"
                className="form-control"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
              >
                <option value="">-- Цоцолбор сонгох --</option>
                {apartmentOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-default"
              type="button"
              onClick={handleSearch}
            >
              Хайх
            </button>
          </form>

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
                    {filteredData.map((entry) => (
                      <tr key={entry.dead_id + (entry.apartment || '')}>
                        <td>{entry.last_name}</td>
                        <td>{entry.first_name}</td>
                        <td>{entry.born_year}</td>
                        <td>{entry.dead_year}</td>
                        <td>{entry.location}</td>
                        <td>{entry.apartment || 'Хоосон'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Илэрц олдсонгүй</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeathNoteSearch;