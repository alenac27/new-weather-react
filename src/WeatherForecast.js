import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="forecast" id="forecast">
      <div className="col" id="weather-forecast">
        <div className="weather-forecast-date">June 5</div>
        <div className="weather-forecast-day">Monday</div>

        <img src={props.icon.iconUrl} alt={props.icon.description} width="32" />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">5°</span>
          <span className="weather-forecast-temperature-min">2 °</span>
        </div>
      </div>
    </div>
  );
}
