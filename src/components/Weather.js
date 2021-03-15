import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <h1 className="title">Weather App in ReactJS</h1>

      <div>
        <input
          type="text"
          className="inputField"
          placeholder="Enter City Name"
          onChange={(e) => {}}
        />
      </div>

      <div className="information">
        <div className="location">
          <i className="fas fa-street-view"></i> Mumbai
        </div>

        <div className="temperature">
          <div className="minTemperature">Min: 5.25* Cel</div>
          <div className="maxTemperature">Max: 8.25* Cel</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
