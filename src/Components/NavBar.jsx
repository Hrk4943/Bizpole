import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { Menu } from "react-feather";

export default function NavBar({ open, setOpen }) {
  return (
    <>
    <div>

      <div
        className={`absolute cursor-pointer left-20 z-50 top-6 w-7  text-blue-700 border-dark-purple ${
          !open && "rotate-180"
        } ${open ? "ml-56" : ""}`}
        onClick={() => setOpen(!open)}
        alt="Toggle Sidebar"
      >
        <Menu size={18} />
      </div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`relative z-40 ${open ? "ml-56" : ""}`}>
                  <input
                    type="text"
                    className="border-2 border-gray-300 rounded-full  focus:ring-indigo-500 focus:border-indigo-500 pl-10 pr-4 py-2 w-64 sm:w-80"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-0">
              <div className="absolute  right-11 flex items-center ">
                <FaBell className="h-5 w-7 text-gray-400 mr-7" />
                <FaUserCircle className="h-5 w-7 text-gray-400 mr-7" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>

    </>
  );
}
