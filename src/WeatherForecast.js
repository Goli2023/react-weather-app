import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForcast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0td6fef782e8b046o3c9bf5a39fbbf05";
  let city = "Tehran";
  let icon =
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img src={icon} width={80} className="WeatherForecast-img" alt="" />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
