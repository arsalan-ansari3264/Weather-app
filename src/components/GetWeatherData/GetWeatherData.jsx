import style from "./GetWeather.module.css";
import { IoLocationSharp } from "react-icons/io5";


import Clear from "../../assets/images/clear.png"
import CLouds from "../../assets/images/clouds.png"
import Rain from "../../assets/images/rain.png"
import Drizzle from "../../assets/images/drizzle.png"
import Mist from "../../assets/images/mist.png"
import Haze from "../../assets/images/haze.png"

import humidity from "../../assets/humidity.png";

import wind from "../../assets/wind.png";

const GetWeatherData = ({ weatherData }) => {
  const currentDate = new Date();
  const day = currentDate.toLocaleString("en-US", { weekday: "long" });
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  const today = ` ${day}, ${date} ${month} , ${year}`;
  let currentImg;
  if (weatherData.weather[0].main == "Clouds") {
    currentImg = CLouds;
  } else if (weatherData.weather[0].main == "Clear") {
    currentImg = Clear;
  } else if (weatherData.weather[0].main == "Rain") {
    currentImg = Rain
  } else if (weatherData.weather[0].main == "Drizzle") {
    currentImg = Drizzle
  } else if (weatherData.weather[0].main == "Mist") {
    currentImg = Mist;
  }
  else if (weatherData.weather[0].main == "Haze") {
    currentImg = Haze;
  }
  return (
    <>
      <div className={style.main_container}>
        <div className={style.icon}>
          <img src={currentImg} alt={weatherData.weather[0].description} />
        </div>
        <div className={style.text}>
          <p>Today</p>
          <span>{today}</span>
        </div>
      </div>
      <div className={style.temprature}>
        <div className={style.degree}>
          {parseFloat(weatherData.main.temp - 273.15).toFixed(1)}
          <span>°C</span>
        </div>
      </div>
      <div className={style.location}>
        {weatherData.name}, {weatherData.sys.country}
        <span>
          <IoLocationSharp />
        </span>
      </div>
      <div className={style.sun}>
        <p>
          min {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}{" "}
          <span>°C</span>
        </p>

        <span className={style.circle}></span>
        <p>
          max {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}{" "}
          <span>°C</span>
        </p>
      </div>
      <div className={style.footer}>
        <div className={style.humidity}>
          <div className={style.icons}>
            <img src={humidity} alt="humidity" />
          </div>
          <div className={style.det}>
            <h2>
              {weatherData.main.humidity}
              <span>%</span>
            </h2>
            <p>Humidity</p>
          </div>
        </div>
        {/* <div className={style.line}></div> */}
        <div className={style.speed}>
          <div className={style.icons}>
            <img src={wind} alt="wind" />
          </div>
          <div className={style.det}>
            <h2>
              {weatherData.wind.speed}
              <span>Km/h</span>
            </h2>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetWeatherData;
