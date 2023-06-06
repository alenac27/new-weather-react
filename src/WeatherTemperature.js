import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="current-temp">
      <strong id="current-degree">{Math.round(props.celsius)}</strong>
      <span className="units"> °C </span>
    </div>
  );
}
