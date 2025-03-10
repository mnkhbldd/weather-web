"use client";
import {
  CustomInput,
  WeatherCard,
  RoundCircle,
  DropDownMenu,
} from "@/components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const circleData = ["340px", "540px", "940px", "1340px"];
  const defaultCity = "New York";

  const [weatherData, setWeatherData] = useState(null);
  const [inputData, setInputData] = useState(defaultCity);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=${inputData}`
      )
      .then((res) => setWeatherData(res.data));
  }, [inputData]);

  const handleOnChange = (event) => {
    setInputData(event.target.value);
  };

  //Changes input value once clicked
  const handleDropDownClick = (cityName) => {
    setInputData(cityName);
  };

  return (
    <div className="w-screen h-screen flex relative">
      <div className="w-1/2 h-full bg-[#F3F4F6] flex flex-col justify-center items-center overflow-hidden">
        <CustomInput
          handleOnChange={handleOnChange}
          className="absolute z-50 top-10 left-10 shadow-lg max-w-full"
          placeholder="Enter city name"
        />

        {inputData && inputData !== defaultCity && (
          <div className="flex flex-col items-start absolute top-[150px] left-10 z-50 bg-white px-6 py-4 rounded-3xl shadow-lg">
            {weatherData && (
              <div className="w-fit h-fit">
                <DropDownMenu
                  cityName={weatherData.location.name}
                  onClick={() => handleDropDownClick(weatherData.location.name)} //Changes input value once clicked
                />
              </div>
            )}
          </div>
        )}

        <WeatherCard
          city={weatherData?.location?.name}
          dayTemp={weatherData?.forecast?.forecastday[0].day?.maxtemp_c}
          dayStatus={weatherData?.forecast?.forecastday[0].day?.condition?.text}
          isDaytime={true}
          inputData={inputData}
        />
      </div>
      <div className="w-1/2 h-full bg-[#0F141E] flex justify-center items-center overflow-hidden">
        <WeatherCard
          city={weatherData?.location?.name}
          dayTemp={weatherData?.forecast?.forecastday[0].day?.mintemp_c}
          dayStatus={weatherData?.forecast?.forecastday[0].day?.condition?.text}
          isDaytime={false}
          inputData={inputData}
        />

        <div className="absolute bottom-[170px] right-[370px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
          >
            <circle cx="64" cy="64" r="64" fill="#6E72C9" />
            <circle
              cx="64"
              cy="64"
              r="64"
              fill="url(#paint0_radial_1_145)"
              fillOpacity="0.35"
              style={{ mixBlendMode: "overlay" }}
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_145"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(64 64) rotate(90) scale(64)"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[140px] h-[140px] bg-[#F3F4F6] rounded-full flex items-center justify-center gap-[15.71px] absolute top-1/2 left-[45%] transform -translate-x-[45%] -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="86"
            viewBox="0 0 43 86"
            fill="none"
          >
            <path
              d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
              fill="#111111"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="86"
            viewBox="0 0 44 86"
            fill="none"
          >
            <path
              d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
              fill="#111111"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-full absolute overflow-hidden">
        {circleData.map((value, index) => (
          <RoundCircle key={index} size={value} className="" />
        ))}
      </div>
    </div>
  );
}
