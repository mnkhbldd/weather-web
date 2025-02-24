import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

export const WeatherCard = () => {
  return (
    <div className="w-[414px] h-[832px] bg-gray-900 rounded-[48px] backdrop-blur-md z-50 flex justify-center ">
      <div className="w-[398px] h-[504px] rounded-[42px] bg-gradient-to-b from-gray-800 to-transparent pt-2">
        <div className="flex ">
          <div className="flex flex-col pt-[64px] pl-[48px]">
            <p className="text-[#9CA3AF] text-[18px] font-medium">
              September 10, 2021
            </p>
            <p className="text-white text-[48px] font-extrabold">Krakow</p>
          </div>
          <MdOutlineLocationOn className="fill-red-500" />
        </div>
      </div>
    </div>
  );
};
