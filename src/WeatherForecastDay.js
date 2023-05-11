import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.temperature.maximum);
    return `${temperature};`;
  }

  function minTemperature() {
    let temperature = Math.round(props.temperature.minimum);
    return `${temperature};`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props[0].data.daily.condition.icon_url}
        width={80}
        className="WeatherForecast-img"
        alt=""
      />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemperature()}°</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
