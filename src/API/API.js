import axios from "axios";

export default async function getWeather(lat, lon) {
  const REACT_APP_WEATHER = process.env.REACT_APP_WEATHER;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER}`
  );

  return response.data;
}
