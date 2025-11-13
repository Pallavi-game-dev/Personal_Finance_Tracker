import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../config/menuConfig";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } duration-300 bg-teal-600 dark:bg-teal-800 text-white px-4 py-6 flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        className="text-xl mb-8 hover:scale-110 transition-transform"
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      {/* Menu List */}
      <ul className="flex flex-col gap-3">
        {menuItems.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                 ${isActive
                   ? "bg-teal-700 text-white"
                   : "text-gray-200 hover:bg-teal-700 hover:text-white dark:hover:bg-teal-900"}`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {open && (
                <span className="text-sm font-medium tracking-wide">
                  {item.label}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
