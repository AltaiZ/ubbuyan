"use client";

import React, { useState } from "react";
import {jsonData}  from "../../data/data"



const DeathNoteSearch: React.FC = () => {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [bornYear, setBornYear] = useState("");
  const [deadYear, setDeadYear] = useState("");
  const [location, setLocation] = useState("");
  const [filteredData, setFilteredData] = useState<typeof jsonData>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    const result = jsonData.filter((entry) => {
      return (
        (!lname || entry.full_name.includes(lname)) &&
        (!fname || entry.full_name.includes(fname)) &&
        (!bornYear || entry.born_year.toString().startsWith(bornYear)) &&
        (!deadYear || entry.dead_year.toString().startsWith(deadYear)) &&
        (!location || entry.location.includes(location))
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
            <a className="btn" href="/death-note/create">
              <i className="fa fa-plus"></i> Нэмэх
            </a>
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

            <button className="btn btn-default" type="button" onClick={handleSearch}>
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
                      <th>Төрсөн он</th>
                      <th>Нас барсан он</th>
                      <th>Хаана оршоосон</th>
                      <th>Буяны төв цогцолбор</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((entry) => (
                      <tr key={entry.id}>
                        <td>{entry.full_name}</td>
                        <td>{entry.born_year}</td>
                        <td>{entry.dead_year}</td>
                        <td>{entry.location}</td>
                        <td>
                          {entry.monastery === 1
                            ? "Баруун буяны төв"
                            : "Зүүн буяны төв"}
                        </td>
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
