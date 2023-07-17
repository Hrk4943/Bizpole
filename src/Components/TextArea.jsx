import React, { useState } from "react";
import SideBar from "./SideBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "./TextArea.css";
import useWindowSize from "../customHook/useWindowSize";

function TextArea() {
  const [selectedOption, setSelectedOption] = useState("GST");
  const { width } = useWindowSize();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="container mx-auto">
        <form className="md:px-4 lg:px-10 bg-white">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-2 ">
            <div className="input-container">
              <label htmlFor="name" className="text-gray-900 ">
                Type
                <span className="text-red-600">*</span>
              </label>
              <select
                id="type"
                className="border border-gray-300 w-full  bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
              >
                <option value="">Select</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="Name" className="text-gray-900 ">
                Name
                <span className="text-red-600">*</span>
              </label>
              <input
                id="turfName"
                className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="name" className="text-gray-900 ">
                Phone Number
                <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="Name" className="text-gray-900 ">
                Address Line 1<span className="text-red-600">*</span>
              </label>
              <input
                id="turfName"
                className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="name" className="text-gray-900 ">
                Address Line 2
              </label>
              <input
                id="name"
                className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="Name" className="text-gray-900 ">
                Address Line 3
              </label>
              <input
                id="turfName"
                className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="input-container">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <label htmlFor="name" className="text-gray-900 ">
                    Country
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="type"
                    className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="Name" className="text-gray-900 ">
                    City
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="type"
                    className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="input-container">
              <div className="flex flex-col h-full">
                <div>
                  <label htmlFor="Name" className="text-gray-900 ">
                    State
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="type"
                    className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                  </select>
                </div>
                <div className="flex-grow mt-4">
                  <label htmlFor="Name" className="text-gray-900 ">
                    Pincode
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="turfName"
                    className="border border-gray-300 w-full bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="name" className="text-gray-900 ">
                Description
              </label>
              <ReactQuill
                id="description"
                className=" bg-white text-gray-900 mt-1 pt-1 focus:outline-none focus:shadow-outline"
                style={{ height: "110px" }}
              />
            </div>
          </div>
          <br></br>
          <div className="my-2 -mt-2 w-full lg:w-1/4">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide border border-blue-500 text-blue-500 bg-transparent p-3 w-full rounded focus:outline-none focus:shadow-outline hide-button show-button"
            >
              + ADD NEW ADDRESS
            </button>
          </div>
          <hr className="mt-"></hr>
          <div className="flex">
            <div className="grid grid-cols-1">
              <div className="w-96">
                <div>
                  <ul className="pt-3">
                    <li
                      className={` flex items-center h-10 pl-6 cursor-pointer ${
                        selectedOption === "GST"
                          ? "bg-gray-100 border-r-4 border-blue-700 text-blue-700"
                          : "border-r-4 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("GST")}
                    >
                      GST
                    </li>
                    <li
                      className={` flex items-center h-10 pl-6 cursor-pointer ${
                        selectedOption === "Rental Agreement"
                          ? "bg-gray-100 border-r-4 border-blue-700 text-blue-700"
                          : "border-r-4 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Rental Agreement")}
                    >
                      Rental Agreement
                    </li>
                    <li
                      className={` flex items-center h-10 pl-6 cursor-pointer ${
                        selectedOption === "Utility Bill"
                          ? "bg-gray-100 border-r-4 border-blue-700 text-blue-700"
                          : "border-r-4 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Utility Bill")}
                    >
                      Utility Bill
                    </li>
                    <li
                      className={` flex items-center h-10 pl-6 cursor-pointer ${
                        selectedOption === "Address Proof"
                          ? "bg-gray-100 border-r-4 border-blue-700 text-blue-700"
                          : "border-r-4 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Address Proof")}
                    >
                      Address Proof
                    </li>
                    <li
                      className={` flex items-center h-10 pl-6 cursor-pointer ${
                        selectedOption === "Other"
                          ? "bg-gray-100 border-r-4 border-blue-700 text-blue-700"
                          : "border-r-4 border-gray-300"
                      }`}
                      onClick={() => handleOptionClick("Other")}
                    >
                      Other
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex" style={{ width: "52rem" }}>
                <div className="w-full md:w-1/2 ml-32">
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-3 mt-5">
                    <div className="input-container">
                      <label htmlFor="name" className="text-gray-900">
                        Number
                      </label>
                      <input
                        id="name"
                        className="border border-gray-300 w-96 bg-white text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
                    <div className="flex">
                      <div className="input-container">
                        <label htmlFor="Name" className="text-gray-900">
                          Front Page
                        </label>
                        <div className="relative">
                          <input
                            className="border border-gray-300 w-96 bg-white text-gray-900 mt-2 p-3 pr-10 focus:outline-none focus:shadow-outline"
                            placeholder="No File Upload"
                          />
                          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                            <div
                              className="p-3"
                              style={{
                                marginTop: "8px",
                                backgroundColor: "#E1E1E1",
                              }}
                            >
                              <FontAwesomeIcon
                                style={{ transform: "rotate(-45deg)" }}
                                icon={faPaperclip}
                                className="text-gray-600"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input-container ml-8">
                        <label htmlFor="Name" className="text-gray-900">
                          Back Page
                        </label>
                        <div className="relative">
                          <input
                            id="turfName"
                            className="border border-gray-300 w-96 bg-white text-gray-900 mt-2 p-3 pr-10 focus:outline-none focus:shadow-outline"
                            placeholder="No File Upload"
                          />
                          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                            <div
                              className="p-3"
                              style={{
                                marginTop: "8px",
                                backgroundColor: "#E1E1E1",
                              }}
                            >
                              <FontAwesomeIcon
                                style={{ transform: "rotate(-45deg)" }}
                                icon={faPaperclip}
                                className="text-gray-600"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" absolute right-5 my-2 mt-5 ">
                <button
                  type="submit"
                  className="  uppercase text-sm font-bold tracking-wide w-24 h-9 border border-blue-500 text-blue-500 bg-transparent  p-0  mr-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="  uppercase text-sm font-bold tracking-wide w-24 h-9  border border-blue-500 text-white bg-blue-500  p-0  rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default TextArea;
