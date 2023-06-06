import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather defaultCity="Berlin" />
      </div>
      <br />
      <br />
      <footer>
        <a href="https://github.com/alenac27/new-weather-react">
          Open-source code{" "}
        </a>
        by Alena Causov and{" "}
        <a href="https://superlative-malabi-ed0581.netlify.app/">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
