import React, { useState } from "react";
import { hotelsData } from "../data/data";
import Card from "./Card";
import "../src/styles.css";

const initialStateCountry = "All the Countries";
const initialStatePrice = "Any Price";
const initialStateSize = "Any Size";

function HotelInfo() {
  //Dates State
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  //Country select state
  const [country, setCountry] = useState(initialStateCountry);
  //Price select state
  const [price, setPrice] = useState(initialStatePrice);
  //Size select state
  const [size, setSize] = useState(initialStateSize);

  /*
   *Event Handlers
   */
  //Date
  const eventDateFromGlobal = (actualEvent) => {
    setDateFrom(actualEvent.target.value);
  };
  const eventDateToGlobal = (actualEvent) => {
    setDateTo(actualEvent.target.value);
  };
  //Country
  const onChangeCountryGlobal = (actualEvent) => {
    setCountry(actualEvent.target.value);
  };
  //Price
  const onChangePriceGlobal = (actualEvent) => {
    setPrice(actualEvent.target.value);
  };
  //Size
  const onChangeSizeGlobal = (actualEvent) => {
    setSize(actualEvent.target.value);
  };

  /*
   *Filters
   */
  const filterBy = () => {
    const checkIn = new Date(dateFrom).getTime();
    const checkOut = new Date(dateTo).getTime();
    //Country Filter
    const newList = hotelsData
      .filter((element) => {
        if (country !== initialStateCountry) {
          return element.country === country;
        }
        return element;
      })
      //Price Filter
      .filter((element) => {
        if (price === initialStatePrice) {
          return element;
        }
        if (price !== initialStatePrice) {
          return element.price === Number(price);
        }
        return element;
      })
      //Size Filter
      .filter((element) => {
        if (size === initialStateSize) {
          return element;
        }
        if (size === "small hotel") {
          if (element.rooms <= 10) {
            console.log(element.rooms, size);
            return element.rooms === size;
          }
        } else if (size === "medium hotel") {
          if (element.rooms > 10 && element.rooms <= 20) {
            console.log(element.rooms, size);
            return element.rooms === size;
          }
        } else if (size === "large hotel") {
          if (element.rooms > 20) {
            console.log(element.rooms, size);
            return element.rooms === size;
          }
        }
        return element;
      })
      //Date Filter
      .filter((element) => {
        if (dateFrom && dateTo) {
          if (dateFrom <= dateTo) {
            const dateHotel =
              checkIn <= element.availabilityTo &&
              checkOut >= element.availabilityFrom;
            return dateHotel;
          }
        }
        return element;
      });
    return newList;
  };

  let listFilter = filterBy();

  /**
   * Clear All Button
   */
  const resetFilters = () => {
    // setDateFrom(new Date());
    // setDateTo(new Date());
    setCountry(initialStateCountry);
    setPrice(initialStatePrice);
    setSize(initialStateSize);
  };

  return (
    <div>
      <div className="filters-container">
        <div className="inputsDate">
          <input onChange={eventDateFromGlobal} type="date" />
          <input onChange={eventDateToGlobal} type="date" />
        </div>

        <div className="selects">
          <select value={country} onChange={onChangeCountryGlobal}>
            <option value={initialStateCountry}>{initialStateCountry}</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>
          <select value={price} onChange={onChangePriceGlobal}>
            <option value={initialStatePrice}>{initialStatePrice}</option>
            <option value={1}>$</option>
            <option value={2}>$$</option>
            <option value={3}>$$$</option>
            <option value={4}>$$$$</option>
          </select>
          <select value={size} onChange={onChangeSizeGlobal}>
            <option value={initialStateSize}>{initialStateSize}</option>
            <option value="small hotel">Small Hotel</option>
            <option value="medium hotel">Medium Hotel</option>
            <option value="large hotel">Large Hotel</option>
          </select>
          <button onClick={resetFilters}>Clear All</button>
        </div>
      </div>
      <div className="hotelCards">
        {listFilter.length > 0 ? (
          listFilter.map((hotelCard) => (
            <Card
              key={hotelCard.slug}
              name={hotelCard.name}
              photo={hotelCard.photo}
              description={hotelCard.description}
              rooms={hotelCard.rooms}
              city={hotelCard.city}
              country={hotelCard.country}
              price={hotelCard.price}
            />
          ))
        ) : (
          <div className="Nothing-to-Show">"Nothing to Show :c"</div>
        )}
      </div>
    </div>
  );
}
export default HotelInfo;
