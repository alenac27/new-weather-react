import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <form id="search-form">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="enter-city-input"
                  placeholder="Enter you city..."
                  aria-label="Enter you city..."
                  aria-describedby="basic-addon2"
                />

                <input type="submit" id="submit-button" value="Change city" />
                <button id="location-button">Your location</button>
              </div>
            </form>
          </div>
        </div>
        <FormattedDate date={weatherData.date} />

        <div className="row">
          <div className="col-lg-3">
            <img
              id="current-weather-icon"
              src={weatherData.icon}
              alt={weatherData.description}
              className="w-100 p-3"
            />
            <div id="description"> {weatherData.description}</div>
          </div>
          <div className="col" id="current-temperature">
            <div className="current-city">{weatherData.city}</div>
            <div className="current-temp">
              <strong id="current-degree">
                {Math.round(weatherData.temperature)}
              </strong>
              <span className="units"> °C </span>
            </div>
          </div>

          <div className="col">
            <div className="additional-weather-data">
              <div className="humidity-title">Humidity</div>
              <div className="humidity-percent">{weatherData.humidity} %</div>
            </div>
          </div>
          <div className="col">
            <div className="additional-weather-data">
              <div className="wind-title">Wind</div>
              <div className="wind-speed">
                {Math.round(weatherData.wind)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d2b000c63899bdd9d62748ft3o63f2a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
