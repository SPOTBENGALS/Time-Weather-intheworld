import ListItem from "./Item";
import styles from "./List.module.css";

export default function CityList() {
  const cityInfo = [
    {
      cityName: "서울",
      descript: "Seoul in Korea",
      offsetTime: 9,
      Lat: 37.5519,
      Lon: 126.9918,
    },
    {
      cityName: "베이징",
      descript: "Beijing in China",
      offsetTime: 8,
      Lat: 39.9042,
      Lon: 116.4074,
    },
    {
      cityName: "시드니",
      descript: "Sydney in Australia",
      offsetTime: 10,
      Lat: -33.8688,
      Lon: 151.2093,
    },
    {
      cityName: "웰링턴",
      descript: "Wellington in New Zealand",
      offsetTime: 12,
      Lat: -41.2924,
      Lon: 174.7787,
    },
    {
      cityName: "뉴델리",
      descript: "New Delhi in India",
      offsetTime: 5.5,
      Lat: 28.6139,
      Lon: 77.209,
    },
    {
      cityName: "로스엔젤레스",
      descript: "LA in U.S.A",
      offsetTime: -8,
      Lat: 34.0522,
      Lon: -118.2437,
    },
    {
      cityName: "뉴욕",
      descript: "New York in U.S.A",
      offsetTime: -5,
      Lat: 40.7128,
      Lon: -74.006,
    },

    {
      cityName: "런던",
      descript: "London in U.K",
      offsetTime: 1,
      Lat: 51.5072,
      Lon: -0.1277,
    },
    {
      cityName: "파리",
      descript: "Paris in France",
      offsetTime: 2,
      Lat: 48.8566,
      Lon: 2.3522,
    },
    {
      cityName: "싱가포르",
      descript: "Singapore",
      offsetTime: 8,
      Lat: 1.3521,
      Lon: 103.8198,
    },
    {
      cityName: "두바이",
      descript: "Dubai in U.A.E",
      offsetTime: 4,
      Lat: 25.2048,
      Lon: 55.2708,
    },
    {
      cityName: "상파울루",
      descript: "Sao  Paulo in Brazil",
      offsetTime: -3,
      Lat: -23.5558,
      Lon: -46.6396,
    },
  ];

  return (
    <section className={styles.listContainer}>
      {cityInfo.map((city, index) => (
        <ListItem
          key={`${index}_${city}`}
          cityName={city.cityName}
          offsetTime={city.offsetTime}
          descript={city.descript}
          Lat={city.Lat}
          Lon={city.Lon}
        />
      ))}
    </section>
  );
}
