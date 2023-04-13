import { AiOutlineCloud } from "react-icons/ai";
import styles from "./Item.module.css";
import getTime from "./Time";
import { useEffect, useState } from "react";
import useStore from "../Store/store";
import getWeather from "../API/API";
import useAsync from "../Hooks/useAsync";

export default function ListItem({ cityName, offsetTime, descript, Lat, Lon }) {
  const [state] = useAsync(() => getWeather(Lat, Lon), []);
  const { data } = state;

  const timemode = useStore((state) => state.timemode);
  const [cityTime, setCityTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCityTime(getTime(offsetTime, timemode));
    }, 1000);

    return () => clearInterval(interval);
  }, [timemode]);

  function toCelsius(num) {
    return (num - 273.15).toFixed(1);
  }

  function weatherSort(weather) {
    switch (weather) {
      case "Clouds":
        return " 구름 ☁️";
      case "Thunderstorm":
        return " 번개 ⚡";
      case "Rain":
        return " 비 💧";
      case "Clear":
        return " 맑음 🔆";
      case "Haze":
        return " 안개 🌫️";
      case "Snow":
        return " 눈 ❄️";
      default:
        return " 맑음🔆";
    }
  }

  return (
    <>
      {data && (
        <div className={styles.itemBody}>
          <h2>
            {cityName} <span>{descript}</span>
          </h2>
          <h3 className={styles.time}>
            <span>현재 시간 : </span>
            {cityTime}
          </h3>
          <h3>
            <span>현재 기온 : </span>
            최저 기온 {toCelsius(data.main.temp_min)}˚C / 최고 기온 {toCelsius(data.main.temp_max)}˚C
          </h3>
          <h3 className={styles.weather}>
            <span>현재 날씨 :&nbsp;</span>
            {weatherSort(data.weather[0].main)}&nbsp;&nbsp; 풍향 {data.wind.deg}&nbsp;&nbsp; 풍속 {data.wind.speed} m/s
          </h3>
        </div>
      )}
    </>
  );
}
