import { useState } from "react";
import { getCurrentWeather, getForecast } from "../services/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const current = await getCurrentWeather(city);
      const future = await getForecast(city);

      setWeather(current);
      setForecast(future.list.slice(0, 5)); 
    } catch (err) {
      setError("City not found!");
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather };
};
