import React, { useState } from "react";

const YourComponent = () => {
  const [activeTab, setActiveTab] = useState("ор хоног"); // Эхний табыг идэвхтэй болгоно

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="col-md-8 right-box">
      <div className="headers">
        <div
          className={`cus-4 button-1 ${
            activeTab === "ор хоног" ? "active" : ""
          }`}
          onClick={() => handleTabClick("ор хоног")}
        >
          <p>Ор хоног</p>
        </div>
        <div
          className={`cus-4 button-2 ${
            activeTab === "нэмэлт эмчилгээ" ? "active" : ""
          }`}
          onClick={() => handleTabClick("нэмэлт эмчилгээ")}
        >
          <p>Нэмэлт эмчилгээ</p>
        </div>
        <div
          className={`cus-4 button-3 ${
            activeTab === "багцын сонголт" ? "active" : ""
          }`}
          onClick={() => handleTabClick("багцын сонголт")}
        >
          <p>Багцын сонголт</p>
        </div>
      </div>

      {activeTab === "ор хоног" && (
        <table className="table-notice table-responsive building-1">
          <tbody>
            {/* Энд ор хоногийн контент оруулах */}
            <tr>
              <td>
                <strong>№</strong>
              </td>
              <td spellCheck="false">
                <strong>
                  Энгийн өрөөний ор хоногтой үндсэн багц&nbsp;/үндсэн эмчилгээ +
                  буфет ресторан/
                </strong>
              </td>
              <td>
                <strong>Үнэ</strong>
              </td>
              <td>
                <div style={{ textAlign: "center" }}>
                  <strong>3-12 насны хүүхэд</strong>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td spellCheck="false">7 хоног</td>
              <td>2 380 000</td>
              <td>
                Хүүхдийн эмчилгээ болон хоолны үйлчилгээ том хүний үнээс 40%
                хямд
              </td>
            </tr>
            {/* Бусад мөрүүд... */}
          </tbody>
        </table>
      )}

      {activeTab === "нэмэлт эмчилгээ" && (
        <table className="table-notice table-responsive building-2">
          <tbody>
            {/* Энд нэмэлт эмчилгээний контент оруулах */}
            <tr>
              <td>
                <strong>Нэмэлт эмчилгээ</strong>
              </td>
              <td>
                <strong>Үнэ</strong>
              </td>
              <td>
                <strong>Нэмэлт эмчилгээ</strong>
              </td>
              <td>
                <strong>Үнэ</strong>
              </td>
            </tr>
            <tr>
              <td>Парафин</td>
              <td>45'000</td>
              <td>Хордлого тайлах эмчилгээ</td>
              <td>35'000</td>
            </tr>
            {/* Бусад мөрүүд... */}
          </tbody>
        </table>
      )}

      {activeTab === "багцын сонголт" && (
        <table className="table-notice table-responsive building-3">
          <tbody>
            {/* Энд багцын сонголтын контент оруулах */}
            <tr>
              <td spellCheck="true">
                <strong>Багц үйлчилгээ&nbsp;</strong> Энгийн өрөө ор хоног+
                хоол+ багц эмчилгээ
              </td>
              <td>
                <strong>Үндсэн үнэ /хоног/</strong>
              </td>
              <td>
                <strong>
                  <div style={{ textAlign: "center" }}>Хугацаа</div>
                </strong>
              </td>
            </tr>
            <tr>
              <td>Үндсэн багц</td>
              <td>340 000</td>
              <td>7, 10, 14, 21 хоног</td>
            </tr>
            {/* Бусад мөрүүд... */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default YourComponent;
