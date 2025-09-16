import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import { useWeather } from "./hooks/useWeather";
import WeeklyForecast from "./components/WeeklyForecast";

function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  return (
<div className="container-fluid min-vh-100 text-white p-4">
  <div className="d-flex justify-content-start mb-4">
    <SearchBar onSearch={fetchWeather} />
  </div>

  {loading && <p className="loading">Loading...</p>}
  {error && <p className="error">{error}</p>}

  {weather && <WeatherCard weather={weather} />}
  {forecast.length > 0 && <ForecastList forecast={forecast} />}
  {forecast.length > 0 && <WeeklyForecast forecast={forecast} />}
</div>
  );
}

export default App;