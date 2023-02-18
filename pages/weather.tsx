import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [weatherUrl, setWeatherUrl] = useState(
    "https://weather.tsukumijima.net/api/forecast/city/130010"
  );

  useEffect(() => {
    axios
      .get(weatherUrl)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [weatherUrl]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {weather.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {weather.title}
            の今日、明日、明後日の三日間の天気予報です。雨の日は傘を忘れないようにしましょう！
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {weather.forecasts?.map((forecast) => (
            <li key={forecast.telop}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={forecast.image.url}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {forecast.telop}
              </h3>
              <p className="text-base leading-7 text-gray-600">
                {forecast.date}({forecast.dateLabel})
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={"flex items-center justify-center h-full"}>
        <button
          className={
            "mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }
          onClick={() =>
            setWeatherUrl(
              weatherUrl ===
                "https://weather.tsukumijima.net/api/forecast/city/130010"
                ? "https://weather.tsukumijima.net/api/forecast/city/250020"
                : "https://weather.tsukumijima.net/api/forecast/city/130010"
            )
          }
        >
          {weatherUrl ===
          "https://weather.tsukumijima.net/api/forecast/city/130010"
            ? "滋賀県　彦根の天気予報へ"
            : "東京都　東京の天気予報へ"}
        </button>
      </div>
    </div>
  );
};

export default Weather;
