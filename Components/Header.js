import React, { useState } from "react";
import hotelsData from "../data/data";

function Header() {
  const [listDateActual, setlistDateActual] = useState(hotelsData);

  const dateFrom = () => {
    let newDates = listDateActual.map((date) => {
      if (date.availabilityFrom === date) {
        return {
          availabilityFrom: date.availabilityFrom
        };
      }
      return date;
    });
    console.log(newDates);
    setlistDateActual(newDates);
  };

  const dateTo = () => {
    let newDates = listDateActual.map((date) => {
      if (date.availabilityTo === date) {
        return {
          availabilityFrom: date.availabilityTo
        };
      }
      return date;
    });
    console.log(newDates);
    setlistDateActual(newDates);
  };
  return (
    <div className="header-container">
      <div>
        <h1>Hotel Revervation</h1>
        <br />
        <h2>desde el x hasta el x</h2>
      </div>
    </div>
  );
}
export default Header;
