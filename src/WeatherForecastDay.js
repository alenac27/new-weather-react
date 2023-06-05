import React from "react";

export default function WeatherForecastDay(props) {
  function dateDay() {
    let date = new Date(props.data.time * 1000);
    let dateDay = date.getDate();
    return dateDay;
  }

  function month() {
    let date = new Date(props.data.time * 1000);
    let month = date.getMonth();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }

  return (
    <div>
      <div className="weather-forecast-date">
        {month()} {dateDay()}
      </div>
      <div className="weather-forecast-day">{day()}</div>

      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        width="32"
      />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature-min">
          {" "}
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
