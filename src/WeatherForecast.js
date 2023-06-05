import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleForecastResponse(response) {
    console.log(response.data);
  }

  let city = props.data.city;
  let apiKey = "d2b000c63899bdd9d62748ft3o63f2a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);

  return (
    <div className="forecast" id="forecast">
      <div className="col" id="weather-forecast">
        <div className="weather-forecast-date">June 5</div>
        <div className="weather-forecast-day">Monday</div>

        <img src={props.data.iconUrl} alt={props.data.description} width="32" />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">5°</span>
          <span className="weather-forecast-temperature-min">2 °</span>
        </div>
      </div>
    </div>
  );
}
