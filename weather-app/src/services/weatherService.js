import axios from 'axios';
const API_KEY = 'f723f0e1b2e42a32c8868f56bfb96171'; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city) => {
    const response = await axios.get(    
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};

export const getForecast = async (city) => {
    const response = await axios.get(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
}
