import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleSubmit(response) {
    console.log(response.date);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: "Tuesday 10:06",
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon_url:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <p>
          {weatherData.date},{" "}
          <span className="text-capitalize">{weatherData.description}</span>{" "}
        </p>
        <h2>
          <img src={weatherData.icon_url} alt={weatherData.description} />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°C </span>
        </h2>
        <hr />
        <div className="row">
          <div className="col-6">Humidity:{weatherData.humidity}%</div>
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
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
