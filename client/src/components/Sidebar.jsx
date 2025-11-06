import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../config/menuConfig";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 h-screen shadow-lg fixed left-0 top-0 p-4 flex flex-col justify-between transition-colors">
      
      {/* App Branding */}
      <div>
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
          FinanceMate
        </h2>

        {/* Navigation Menu */}
        <ul className="mt-10 space-y-3">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                {item.icon} 
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      <button className="mt-auto px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;