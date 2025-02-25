import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

export const WeatherCard = ({ isDaytime, city, dayTemp, dayStatus }) => {
  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] z-40 backdrop-blur-md bg-opacity-50 flex items-center pt-2 flex-col  ${
        isDaytime ? "bg-white/50" : "bg-gray-900/50"
      }`}
    >
      <div
        className={`w-[398px] h-[440px] rounded-[42px] backdrop-blur-md bg-opacity-100 flex flex-col items-center ${
          isDaytime ? "" : "bg-gradient-to-b from-gray-800 to-transparent"
        }`}
      >
        <div className="flex items-center justify-center w-full pr-[40px] pt-[64px] pl-[48px]   ">
          <div className="flex flex-col  w-full">
            <p
              className={` text-[18px] font-medium ${
                isDaytime ? "text-[#111827]" : "text-[#9CA3AF]"
              }`}
            >
              September 10, 2021
            </p>
            <p
              className={`text-[48px] font-extrabold ${
                isDaytime ? "text-[#111827]" : "text-white "
              }`}
            >
              {city}
            </p>
          </div>
          <MdOutlineLocationOn
            className={`w-8 h-8 ${isDaytime ? "fill-[#4B5563]" : "fill-white"}`}
          />
        </div>
        {isDaytime ? (
          <div className="relative">
            <img
              className="w-[264.891px] h-[264.891px] blur-lg"
              src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
            ></img>
            <img
              className="w-[264.891px] h-[264.891px] opacity-100 absolute top-0 rounded-full z-0"
              src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
            ></img>
          </div>
        ) : (
          <div className="relative">
            <img
              className="w-[264.891px] h-[264.891px] blur-lg"
              src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
            ></img>
            <img
              className="w-[264.891px] h-[264.891px] opacity-100 absolute top-0 rounded-full z-0"
              src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
            ></img>
          </div>
        )}
      </div>
      <div className="w-full pl-[48px] ">
        <h1
          className={`text-[144px] font-bold  text-transparent bg-clip-text ${
            isDaytime
              ? "bg-gradient-to-b from-[#111827] to-[#6B7280]"
              : " bg-gradient-to-b from-gray-300 to-gray-600"
          }`}
        >
          {dayTemp}°
        </h1>
        <p
          className={`text-[24px] font-bold   ${
            isDaytime ? "text-[#FF8E27]" : "text-[#777CCE]"
          }`}
        >
          {dayStatus}
        </p>
      </div>
      <div className="w-full">
        {isDaytime ? (
          <div className="flex gap px-[48px] w-full justify-between pt-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z"
                stroke="url(#paint0_linear_1_129)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_129"
                  x1="16"
                  y1="1.5"
                  x2="16"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#111827" />
                  <stop offset="1" stopColor="#6B7280" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M18.8101 25.5772L23.4929 17.2151C26.556 11.7453 22.6024 5 16.3333 5C10.0643 5 6.1107 11.7453 9.17378 17.2151L13.8566 25.5772C14.9405 27.5128 17.7262 27.5128 18.8101 25.5772Z"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="16.3333"
                cy="13"
                r="2"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M15.916 7.36858C16.1058 7.58431 16.3793 7.70794 16.6666 7.70795C16.954 7.70796 17.2275 7.58435 17.4173 7.36864C19.8166 4.64263 23.9519 4.1919 26.8935 6.42021C29.9751 8.75461 30.5808 13.1452 28.2465 16.2268L22.1863 24.2268C20.8559 25.9831 18.7762 27.0105 16.5728 26.9999C14.3695 26.9893 12.2998 25.942 10.9863 24.173L5.04637 16.173C2.74172 13.069 3.38967 8.68448 6.49361 6.37982C9.43815 4.19353 13.5362 4.66439 15.916 7.36858Z"
                stroke="#D1D5DB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z"
                stroke="#D1D5DB"
                stroke-width="2"
              />
              <circle cx="16" cy="9" r="6" stroke="#D1D5DB" stroke-width="2" />
              <path
                d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>
        ) : (
          <div className="flex gap px-[48px] w-full justify-between pt-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z"
                stroke="#F9FAFB"
                stroke-width="2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M18.8101 25.5772L23.4929 17.2151C26.5559 11.7453 22.6024 5 16.3333 5C10.0643 5 6.11068 11.7453 9.17377 17.2151L13.8565 25.5772C14.9405 27.5128 17.7262 27.5128 18.8101 25.5772Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="16.3333"
                cy="13"
                r="2"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M15.9159 7.36858C16.1058 7.58431 16.3792 7.70794 16.6666 7.70795C16.9539 7.70796 17.2274 7.58435 17.4173 7.36864C19.8166 4.64263 23.9518 4.1919 26.8934 6.42021C29.975 8.75461 30.5808 13.1452 28.2464 16.2268L22.1863 24.2268C20.8558 25.9831 18.7761 27.0105 16.5728 26.9999C14.3695 26.9893 12.2998 25.942 10.9863 24.173L5.04633 16.173C2.74167 13.069 3.38963 8.68448 6.49357 6.37982C9.4381 4.19353 13.5362 4.66439 15.9159 7.36858Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M3 24.9809C3 20.6434 7.15158 17.5119 11.3222 18.7035L14.787 19.6934C15.5798 19.92 16.4202 19.92 17.213 19.6934L20.6778 18.7035C24.8484 17.5119 29 20.6434 29 24.9809C29 27.2006 27.2006 29 24.9809 29H7.01908C4.7994 29 3 27.2006 3 24.9809Z"
                stroke="#4B5563"
                stroke-width="2"
              />
              <circle cx="16" cy="9" r="6" stroke="#4B5563" stroke-width="2" />
              <path
                d="M15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9C19 10.6569 17.6569 12 16 12C14.3431 12 13 10.6569 13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9Z"
                fill="#4B5563"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
