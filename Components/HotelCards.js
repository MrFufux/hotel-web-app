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
    console.log("select Pais");
  };
  //Price
  const onChangePriceGlobal = (actualEvent) => {
    setPrice(actualEvent.target.value);
    console.log("select precio");
  };
  //Size
  const onChangeSizeGlobal = (actualEvent) => {
    setRooms(actualEvent.target.value);
    console.log("select tamano");
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
          console.log(element.price);
          return element.price === price;
        }
        return element;
      })
      //por size
      .filter((element) => {
        if (rooms !== initialStateSize) {
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
            <option value="Small Hotel">Small Hotel</option>
            <option value="Medium Hotel">Medium Hotel</option>
            <option value="Large Hotel">Large Hotel</option>
          </select>
          <button>Clear All</button>
        </div>
      </div>
      <div className="hotelCards">
        {listFilter.length > 0
          ? listFilter.map((hotelCard) => (
              <Card
                name={hotelCard.name}
                photo={hotelCard.photo}
                description={hotelCard.description}
                rooms={hotelCard.rooms}
                city={hotelCard.city}
                country={hotelCard.country}
                price={hotelCard.price}
              />
            ))
          : "Nothing to Show"}
      </div>
    </div>
  );
}
export default HotelInfo;

// const initialStateCountry = "All the Countries";
// const initialStatePrice = "Any Price";
// const initialStateSize = "Any Size";

// function HotelInfo() {
//   //estado del select countries
//   const [country, setCountry] = useState(initialStateCountry);
//   //estado del select price
//   const [price, setPrice] = useState(initialStatePrice);
//   //estado del select Size
//   const [size, setSize] = useState(initialStateSize);

//   //Change Handlers
//   const onChangeCountryGlobal = (actualEvent) => {
//     setCountry(actualEvent.target.value);
//     console.log("select Pais");
//   };

//   const onChangePriceGlobal = (actualEvent) => {
//     setPrice(actualEvent.target.value);
//     console.log("select precio");
//   };

//   const onChangeSizeGlobal = (actualEvent) => {
//     setSize(actualEvent.target.value);
//     console.log("select tamano");
//   };

//   //funciones de filtrado. Creacion lista
//   //por pais
//   const filterByCountry = (countries) => {
//     const filterArray = countries.filter((element) => {
//       if (country !== initialStateCountry) {
//         console.log(element);

//         return element.country === country;
//       }
//       return element;
//     });
//     return filterArray;
//   };

//   //por precio
//   const filterByPrice = (prices) => {
//     const filterArray = prices.filter((element) => {
//       if (price !== initialStatePrice) {
//         return element.price === price;
//       }
//       return element;
//     });
//     return filterArray;
//   };

//   //por tamano
//   const filterBySize = (hotelSize) => {
//     const filterArray = hotelSize.filter((element) => {
//       if (size !== initialStateSize) {
//         return element.size === size;
//       }
//       return element;
//     });
//     return filterArray;
//   };

//   //filtros
//   //por pais
//   const filterCountries = filterByCountry(hotelsData);
//   //por precio
//   const filterPrices = filterByPrice(filterCountries);
//   //por tamano
//   const filterSize = filterBySize(filterPrices);

//   //dates, selects
//   return (
//     <div>
//       <div className="filters-container">
//         <div className="inputsDate">
//           <input type="date" />
//           <input type="date" />
//         </div>

//         <div className="selects">
//           <select
//             value={country}
//             onChange={(event) => onChangeCountryGlobal(event)}
//           >
//             <option value="All the Countries">All the Countries</option>
//             <option value="Argentina">Argentina</option>
//             <option value="Brazil">Brazil</option>
//             <option value="Chile">Chile</option>
//             <option value="Uruguay">Uruguay</option>
//           </select>
//           <select
//             value={price}
//             onChange={(event) => onChangePriceGlobal(event)}
//           >
//             <option value="Any Price">Any Price</option>
//             <option value="$">$</option>
//             <option value="$$">$$</option>
//             <option value="$$$">$$$</option>
//             <option value="$$$$">$$$$</option>
//           </select>
//           <select value={size} onChange={(event) => onChangeSizeGlobal(event)}>
//             <option value="Any Size">Any Size</option>
//             <option value="Small Hotel">Small Hotel</option>
//             <option value="Medium Hotel">Medium Hotel</option>
//             <option value="Large Hotel">Large Hotel</option>
//           </select>
//           <button>Clear All</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export { HotelInfo };

/* // //  <div className="hotelCards-container">
          {filterSize.length > 0
            ? filterSize.map((hotelCard) => (
                <HotelInfo
                  name={hotelCard.name}
                  photo={hotelCard.photo}
                  description={hotelCard.description}
                  rooms={hotelCard.rooms}
                  city={hotelCard.city}
                  country={hotelCard.country}
                  price={hotelCard.price}
                />
              ))
            : "Nothing to Show"}
        </div>
      </div>
    </div>
  );
} */
