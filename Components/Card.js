import React from "react";
import { faMapMarker, faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const moneyComparative = (p) => {
  switch (p) {
    case 1:
      return (
        <p className="hotelCards-S-color">
          $<span className="hotelCards-claro">$$$</span>
        </p>
      );

    case 2:
      return (
        <p className="hotelCards-S-color">
          $$<span className="hotelCards-claro">$$</span>
        </p>
      );
    case 3:
      return (
        <p className="hotelCards-S-color">
          $$$<span className="hotelCards-claro">$</span>
        </p>
      );
    default:
      return <p className="hotelCards-S-color">$$$$</p>;
  }
};

export default function Card(props) {
  return (
    <div>
      <div className="hotelCards-container">
        <img className="hotelCards-photo" src={props.photo} alt="" />
        <h3 className="hotelCards-title">{props.name}</h3>
        <p className="hotelCards-description">{props.description}</p>
        <div className="hotelCards-location">
          <div className="hotelCards-location-box">
            <FontAwesomeIcon
              className="hotelCards-location-icon"
              icon={faMapMarker}
            />
          </div>
          <p className="hotelCards-location-place">
            {props.city}, {props.country}
          </p>
        </div>
        <div className="hotelCards-size-container">
          <div className="hotelCards-size">
            <div className="hotelCards-size-box">
              <FontAwesomeIcon
                className="hotelCards-location-icon"
                icon={faBed}
              />
            </div>
            <p className="hotelCards-size-description">{props.rooms} Rooms</p>
          </div>
          <div className="hotelCards-price">{moneyComparative}</div>
        </div>
        <button className="hotelCards-button">Reserve Now!</button>
      </div>
    </div>
  );
}
