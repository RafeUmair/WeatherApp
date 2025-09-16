import React from "react";

function ForecastList({ forecast }) {
  return (
    <div className="card forecastList-card text-white p-3 mt-4">
      <h3 className="mb-3">Today’s Forecast</h3>
      <div className="d-flex overflow-auto">
        {forecast.map((item, index) => {
          const date = new Date(item.dt_txt);
          const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
          const temp = Math.round(item.main.temp);

          return (
            <div
              key={index}
              className="d-flex flex-column align-items-center justify-content-center innerForecastList-card text-white rounded mx-1 p-2"
              style={{ minWidth: "80px", flexShrink: 0 }}
            >
              <span className="small">{time}</span>
              <img src={iconUrl} alt={item.weather[0].description} className="img-fluid" />
              <span className="fw-bold">{temp}°C</span>
              <span className="text-capitalize small">{item.weather[0].description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastList;
