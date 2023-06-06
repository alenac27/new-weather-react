import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "d2b000c63899bdd9d62748ft3o63f2a2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} id="search-form">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="enter-city-input"
                  placeholder="Enter you city..."
                  aria-label="Enter you city..."
                  aria-describedby="basic-addon2"
                  onChange={handleCityChange}
                />

                <input type="submit" id="submit-button" value="Change city" />
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
