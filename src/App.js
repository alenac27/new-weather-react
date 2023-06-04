import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <div className="forecast" id="forecast"></div>
      </div>
      <br />
      <br />
      <footer>
        <a href="https://github.com/alenac27/weather-app">Open-source code</a>
        by Alena Causov
      </footer>
    </div>
  );
}
