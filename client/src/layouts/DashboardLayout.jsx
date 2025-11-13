import React, { useState } from "react";
// import { FaBars, FaHome, FaList, FaChartPie, FaWallet, FaUser } from "react-icons/fa";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = ({ children }) => {


  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      {/* <div
        className={`${
          open ? "w-64" : "w-20"
        } duration-300 bg-teal-600 dark:bg-teal-800 text-white px-4 py-6 flex flex-col`}
      >
        <button
          className="text-xl mb-10"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        <ul className="flex flex-col gap-4">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 px-3 py-3 cursor-pointer hover:bg-teal-700 dark:hover:bg-teal-900 rounded-lg transition"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${isActive? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md": "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
              >
                {item.icon} 
               {open && <span className="text-sm font-medium">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div> */}
        <Sidebar/>
      {/* Main Content Section */}
      <div className="w-full">
        {/* Topbar */}
        <Topbar />
        {/* <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Personal Finance Tracker
          </h2>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition text-sm">
            Logout
          </button>
        </div> */}

        {/* Dynamic Page Content */}
        <div className="p-6 text-gray-800 dark:text-gray-200">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;