import React, { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(null);

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_OW_API_KEY}`;
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main);
  };

  return (
    <div className="weather">
      <h1 className="title">Weather App in ReactJS</h1>
      <div>
        <input
          type="text"
          className="inputField"
          placeholder="Enter City Name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div>
        <button type="button" className="btnSearch" onClick={fetchApi}>
          Submit
        </button>
      </div>

      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <div className="information">
            <div className="location">
              <i className="fas fa-street-view"></i> {search}
            </div>

            <div className="temperature">
              <div className="minTemperature">
                Min: {city.temp_min}&deg; Cel
              </div>
              <div className="maxTemperature">
                Max: {city.temp_max}&deg; Cel
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
