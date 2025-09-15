import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastList forecast={forecast} />}
    </div>
  );
}

export default App;
