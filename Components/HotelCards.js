import React, { useState } from "react";
import { hotelsData } from "../data/data";
import Card from "./Card";
import "../src/styles.css";

const initialStateCountry = "All the Countries";
const initialStatePrice = "Any Price";
const initialStateSize = "Any Size";

function HotelInfo() {
  //estado del select countries
  const [country, setCountry] = useState(initialStateCountry);
  //estado del select price
  const [price, setPrice] = useState(initialStatePrice);
  //estado del select Size
  const [rooms, setRooms] = useState(initialStateSize);

  //Change Handlers
  //Country
  const onChangeCountryGlobal = (actualEvent) => {
    setCountry(actualEvent.target.value);
  };
  //Price
  const onChangePriceGlobal = (actualEvent) => {
    setPrice(parseInt(actualEvent.target.value, 10));
  };
  //Size
  const onChangeSizeGlobal = (actualEvent) => {
    setRooms(parseInt(actualEvent.target.value, 10));
  };

  // funciones de filtrado.
  const filterBy = () => {
    //por country
    const newList = hotelsData
      .filter((element) => {
        if (country !== initialStateCountry) {
          return element.country === country;
        }
        return element;
      })
      //por price
      .filter((element) => {
        if (price !== initialStatePrice) {
          // console.log(element.price, price);
          return element.price === price;
        }
        return element;
      })
      //por size
      .filter((element) => {
        //Small Hotel
        if (rooms !== initialStateSize) {
          console.log(element.rooms, rooms);
          return element.rooms === rooms;
        }
        return element;
      });
    return newList;
  };

  let listFilter = filterBy();

  //boton

  return (
    <div>
      <div className="filters-container">
        <div className="inputsDate">
          <input type="date" />
          <input type="date" />
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
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          <select value={rooms} onChange={onChangeSizeGlobal}>
            <option value={initialStateSize}>{initialStateSize}</option>
            <option value="1">Small Hotel</option>
            <option value="2">Medium Hotel</option>
            <option value="3">Large Hotel</option>
          </select>
          <button>Clear All</button>
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

//
