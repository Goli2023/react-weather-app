import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <span>
        <FormattedDate date={props.data.date} />
        <span className="text-capitalize"> {props.data.description}</span>{" "}
      </span>
      <h2>
        <img src={props.data.icon} alt={props.data.description} />
        <WeatherTemperature celsius={props.data.temperature} />
      </h2>
      <hr />
      <div className="row">
        <div className="col-6">Humidity:{props.data.humidity}%</div>
        <div className="col-6">Wind:{Math.round(props.data.wind)} km/h</div>
      </div>
    </div>
  );
}
