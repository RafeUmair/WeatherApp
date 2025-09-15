import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>🌡️ {weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
