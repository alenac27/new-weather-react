import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <div className="col-lg-3">
          <img
            id="current-weather-icon"
            src={props.data.iconUrl}
            alt={props.data.description}
            className="w-100 p-3"
          />
          <div id="description"> {props.data.description}</div>
        </div>

        <div className="col" id="current-temperature">
          <div className="current-city">{props.data.city}</div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col">
          <div className="additional-weather-data">
            <div className="humidity-title">Humidity</div>
            <div className="humidity-percent">{props.data.humidity} %</div>
          </div>
        </div>
        <div className="col">
          <div className="additional-weather-data">
            <div className="wind-title">Wind</div>
            <div className="wind-speed">{Math.round(props.data.wind)} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
