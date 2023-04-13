export default function getTime(offsetTime, timemode) {
  const today = new Date();

  const offsetTimeforHour = offsetTime * 3600000;

  const cityTime = today.getTime() + today.getTimezoneOffset() * 60000 + offsetTimeforHour;
  today.setTime(cityTime);

  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  function getZero(n) {
    const time = n.toString();

    if (time.length === 1) {
      return 0 + time;
    }

    return time;
  }

  const YYYYMMDD = month + "월 " + date + "일 ";
  let HHMMSS = "";

  if (timemode === "12") {
    if (hour > 12) {
      hour = hour - 12;
      HHMMSS = "오후 " + getZero(hour) + ":" + getZero(minute) + ":" + getZero(second);
    } else {
      HHMMSS = "오전 " + getZero(hour) + ":" + getZero(minute) + ":" + getZero(second);
    }
  } else if (timemode === "24") {
    HHMMSS = " " + getZero(hour) + ":" + getZero(minute) + ":" + getZero(second);
  }

  return YYYYMMDD + HHMMSS;
}
