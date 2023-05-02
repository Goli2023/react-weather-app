import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleSubmit(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <p>Tuesday 10:06, {weatherData.description}</p>
        <h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly couldy"
          />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit"> °C </span>
        </h2>
        <hr />
        <div className="row">
          <div className="col-6">Humidity:{weatherData.humidity} %</div>
          <div className="col-6">Wind:{weatherData.wind} km/h</div>
        </div>
        <form className="mt-3">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "0td6fef782e8b046o3c9bf5a39fbbf05";
    let city = "Tehran";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weatherData.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
