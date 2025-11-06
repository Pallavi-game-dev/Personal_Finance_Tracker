import React, { useState } from "react";
import { FaBars, FaHome, FaList, FaChartPie, FaWallet, FaUser } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaList />, label: "Transactions" },
    { icon: <FaWallet />, label: "Budgets" },
    { icon: <FaChartPie />, label: "Reports" },
    { icon: <FaUser />, label: "Profile" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div
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
              <span className="text-lg">{item.icon}</span>
              {open && <span className="text-sm font-medium">{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="w-full">
        {/* Topbar */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Personal Finance Tracker
          </h2>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition text-sm">
            Logout
          </button>
        </div>

        {/* Dynamic Page Content */}
        <div className="p-6 text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;