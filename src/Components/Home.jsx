import React, { useState } from "react";
import TextArea from "./TextArea";
import SideBar from "./SideBar";
import Footer from "./Footer";
import './Home.css'
import useWindowSize from "../customHook/useWindowSize";

function Home() {
  const { width } = useWindowSize();

  const [selectedOption, setSelectedOption] = useState(
    "Address & KYC Information"
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div>
        <div className="flex">
          <div className="absolute z-10 w-full h-screen  ">
            <nav class="flex -mt-14 ml-2" aria-label="Breadcrumb">
              <style>
                {`
      // @media (max-width: 767px) {
      //   .hide-breadcrumbs {
      //     display: none;
      //   }
      // }

      // @media (min-width: 768px) {
      //   .show-breadcrumbs {
      //     display: flex;
      //   }
      // }
    `}
              </style>
              <ol class="inline-flex items-center mt-20 ml-32 space-x-1 md:space-x-3">
                <li class="inline-flex items-center hide-breadcrumbs show-breadcrumbs">
                  <a class="inline-flex items-center cursor-pointer text-m font-medium text-gray-700  dark:text-gray-400">
                    Home
                  </a>
                </li>
                <li className="hide-breadcrumbs show-breadcrumbs">
                  <div class="flex items-center">
                    <svg
                      class="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a class="ml-1 text-m font-medium cursor-pointer text-gray-700 md:ml-2 dark:text-gray-400">
                      Customers
                    </a>
                  </div>
                </li>
                <li
                  aria-current="page"
                  className="hide-breadcrumbs show-breadcrumbs"
                >
                  <div class="flex items-center">
                    <svg
                      class="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span class="ml-1 text-m font-bold cursor-pointer text-gray-700 md:ml-2 dark:text-gray-600">
                      Add News
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <div
              className=" absolute left-2 mt-5 bg-white "
              // style={{ heigth: "920px" }}
            >
              <style>
  {`
    // @media (max-width: 767px) {
    //   .hide-div {
    //     display: none;
    //   }
    // }

    // @media (min-width: 768px) {
    //   .show-div {
    //     display: block;
    //   }
    // }
  `}
</style>
              <div className="bg-slate-50 p-5 hide-div show-div">
                <p>Date & Time: 12 Feb 2021 | 12:00 AM | Business ID:BZ16589</p>
              </div>
              {width > 1000 ? (
                <>
                  <div className="input-container">
                    <select
                      id="type"
                      className="border border-gray-300  text-blue-700 bg-white mt-0  p-3 focus:outline-none focus:shadow-outline"
                      default="Address & KYC Information"
                      style={{ width: "95%" }}                    >
                      <option>Address & KYC Information</option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </>
              ) : (
                <div className="flex p-4 ">
                  <ul className="flex  ">
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Basic Information"
                          ? " border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Basic Information")}
                    >
                      Basic Information
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Offical Mapping"
                          ? "border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Offical Mapping")}
                    >
                      Offical Mapping
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Contact Information"
                          ? " border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Contact Information")}
                    >
                      Contact Information
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Registration Information"
                          ? " border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() =>
                        handleOptionClick("Registration Information")
                      }
                    >
                      Registration Information
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Address & KYC Information"
                          ? "border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() =>
                        handleOptionClick("Address & KYC Information")
                      }
                    >
                      Address & KYC Information
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Promoter Information"
                          ? "border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Promoter Information")}
                    >
                      Promoter Information
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer ${
                        selectedOption === "Compliances Information"
                          ? "border-b-2 border-blue-700 text-blue-700"
                          : "border-b-2 border-gray-300"
                      }`}
                      onClick={() =>
                        handleOptionClick("Compliances Information")
                      }
                    >
                      Compliances Information
                    </li>
                  </ul>
                </div>
              )}
              <div className=" pr-12 ">
                <TextArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
