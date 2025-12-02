// import React from "react";
// import { FaBars, FaHome, FaList, FaChartPie, FaWallet, FaUser } from "react-icons/fa";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = ({ children }) => {


  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar/>
      <div className="w-full">
        <Topbar />
        <div className="p-6 text-gray-800 dark:text-gray-200">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;