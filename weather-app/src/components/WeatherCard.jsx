import React from "react";

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`; 

  return (
    <div
      className="card text-white bg-dark shadow-lg mb-4"
      style={{ maxWidth: "40rem", minHeight: "12rem" }}
    >
      <div className="card-body d-flex align-items-center">

        {}
        <img
          src={iconUrl}
          alt={weather.weather[0].description}
          className="me-4"
          style={{ width: "120px", height: "120px" }} 
        />

        {}
        <div>
          <h3 className="card-title">{weather.name}</h3> {}
          <p className="display-2 mb-2">{Math.round(weather.main.temp)}°C</p> {}
          <p className="fs-4 text-capitalize mb-0">{weather.weather[0].description}</p> {}
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;
