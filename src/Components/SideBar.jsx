import React from "react";
import { useState } from "react";
import "./SideBar.css";
import Logo from "../assets/logo.jpg";
import Logo2 from "../assets/logo.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBuilding,
  faHeadphones,
  faFile,
  faCoins,
  faNoteSticky,
  faTicket,
  faBriefcase,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function SideBar({ open, setOpen}) {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="sidebar fixed flex flex-col md:flex-row z-50">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } bg-white h-screen   relative duration-300`}
        >
        

          <div className="flex flex-col md:flex-row p-4 items-center gap-x-4 md:items-start md:gap-y-4 md:gap-x-0">
            <img src={Logo} className="h-8 w-auto" alt="Logo" />
            <div>
              <img
                src={Logo2}
                className={`${
                  !open && "hidden"
                } origin-left h-8 w-auto ml-3 duration-200`}
                alt="Logo"
              />
            </div>
          </div>

          <ul className="">
            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Dashboard"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Dashboard")}
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>

            <li
              className={`flex mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Leads & Enquires"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Leads & Enquires")}
            >
              <FontAwesomeIcon icon={faHeadphones} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Leads & Enquires
              </span>
            </li>

            <li
              className={`flex mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Customers"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Customers")}
            >
              <FontAwesomeIcon icon={faUser} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Customers
              </span>
            </li>

            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Business"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Business")}
            >
              <FontAwesomeIcon icon={faBuilding} />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Business
              </span>
            </li>

            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Orders"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Orders")}
            >
              <FontAwesomeIcon icon={faNoteSticky} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Orders
              </span>
            </li>

            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Check List"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Check List")}
            >
              <FontAwesomeIcon icon={faFile} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Check List
              </span>
            </li>

            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Coupons"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Coupons")}
            >
              <FontAwesomeIcon icon={faTicket} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Coupons
              </span>
            </li>
            <hr></hr>
            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Service & Packages"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Service & Packages")}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Service & Packages
              </span>
            </li>

            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Filings & Compliances"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Filings & Compliances")}
            >
              <FontAwesomeIcon icon={faLandmark} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Filings & Compliances
              </span>
            </li>

            <li
              className={`flex  mt-0 h-16 p-1 pl-6 cursor-pointer hover:bg-light-white ${
                selectedOption === "Data Management"
                  ? " border-l-4  bg-gray-200 border-blue-700 text-blue-700"
                  : "border-l-0 border-gray-300"
              } text-gray-500 text-sm items-center gap-x-4`}
              onClick={() => handleOptionClick("Data Management")}
            >
              <FontAwesomeIcon icon={faCoins} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Data Management
              </span>
            </li>
          </ul>
        </div>
        {/* <div className=" w-full absolute bottom-0 z-50">
          <Footer />
        </div> */}
      </div>
    </>
  );
}

export default SideBar;
