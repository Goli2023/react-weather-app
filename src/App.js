import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Goli and is open-sourced on
          <a
            href="https://github.com/Goli2023/react-weather-app"
            target="-blank"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
