import React from "react";
import "./Weather.css";

export default function () {
  return (
    <div className="Weather">
      <h1>Tehran</h1>
      <p>Tuesday 10:06, Clear Sky</p>
      <h2>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="mostly couldy"
        />
        <span className="temperature">17</span>
        <span className="unit"> °C </span>
      </h2>
      <hr />
      <div className="row">
        <div className="col-6">Humidity:25%</div>
        <div className="col-6">Wind:5 km/h</div>
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
}
