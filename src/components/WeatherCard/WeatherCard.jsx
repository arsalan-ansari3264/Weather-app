import style from "./WeatherCard.module.css";
import { IoLocationSharp } from "react-icons/io5";

import sun from "../../assets/sun.png";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Loader from "../Loader/Loader";
import { Search } from "../Search/Search";

const conf = {
  base_url: String(import.meta.env.BASE_URL),
  api_key: String(import.meta.env.API_KEY),
};
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "554b92849c190f75a2352b2e1481ded5";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(BASE_URL + `q=${city}&appid=${API_KEY}`);
      setLoading(false);
      setWeatherData(data);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city, setCity, setWeatherData]);

  const currentDate = new Date();
  const day = currentDate.toLocaleString("en-US", { weekday: "long" });
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  const today = ` ${day}, ${date} ${month} , ${year}`;

  return (
    <>
      <div className={style.container}>
        <Nav setCity={setCity} fetchWeatherData={fetchWeatherData} />
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            {weatherData !== null ? (
              <>
                <div className={style.main_container}>
                  <div className={style.icon}>
                    <img src={sun} alt="sun" />
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
                    min{" "}
                    {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}{" "}
                    <span>°C</span>
                  </p>

                  <span className={style.circle}></span>
                  <p>
                    max{" "}
                    {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}{" "}
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
            ) : (
              <Search />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
