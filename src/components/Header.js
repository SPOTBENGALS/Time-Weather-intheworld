import React, { useEffect, useState } from "react";
import img from "../../assets/monoEarth.png";
import styles from "./Header.module.css";
import useStore from "../Store/store";

export default function Header() {
  const [is24, setIs24] = useState(true);
  const setTimemode = useStore((state) => state.setTimemode);
  const timemode = useStore((state) => state.timemode);
  function handleSetTimemode() {
    setTimemode(is24 ? "12" : "24");
  }

  useEffect(() => {
    timemode === "24" ? setIs24(true) : setIs24(false);
  }, [timemode]);

  return (
    <div className={styles.headerContainer}>
      <div>
        <h1 className={styles.title}>
          Time & Weather <br className={styles.mediaVisible} />
          in the World
        </h1>
        <p>React를 바탕으로 Javascript와 OpenWeather API를 사용하여 세계 주요 도시들의 시간과 날씨를 알려드립니다.</p>
      </div>
      <img src={img} />

      <div className={styles.select} onClick={handleSetTimemode} id={timemode}>
        <label id="mode">
          <input id="mode" type="checkbox" checked={is24} readOnly />
          24시간으로 보기
        </label>
      </div>
    </div>
  );
}
