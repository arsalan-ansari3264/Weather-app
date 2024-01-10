import style from "./WeatherCard.module.css";

import { useEffect, useState } from "react";
import axios, { Axios, AxiosError } from "axios";
import Nav from "../Nav/Nav";
import Loader from "../Loader/Loader";
import { Search } from "../Search/Search";
import GetWeatherData from "../GetWeatherData/GetWeatherData";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const WeatherCard = () => {
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "554b92849c190f75a2352b2e1481ded5";

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  let failed;
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(BASE_URL + `q=${city}&appid=${API_KEY}`);
      setLoading(false);
      setWeatherData(data);
      return data;
    } catch (error) {
      failed = error.response.status;
      setLoading(false);
      setWeatherData(null);
      setMessage(error.message);
      throw error;
    }
  };
  useEffect(() => {
    getData();
  }, [city]);

  return (
    <>
      <div className={style.container}>
        <Nav setCity={setCity} getData={getData} />
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            {failed == 404 ? (
              <ErrorComponent text={message} />
            ) : (
              <>
                {weatherData !== null ? (
                  <GetWeatherData weatherData={weatherData} />
                ) : (
                  <>{city == "" ? <Search /> : <ErrorComponent />} </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
