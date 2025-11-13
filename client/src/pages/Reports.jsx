import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Reports = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const incomeExpenseData = {
    labels: months.slice(0, 6),
    datasets: [
      {
        label: "Income",
        data: [5000, 4500, 6000, 5500, 6200, 7000],
        borderColor: "#14B8A6",
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [3500, 4000, 4500, 4700, 4900, 5200],
        borderColor: "#0EA5E9",
        tension: 0.4,
      },
    ],
  };

  const categoryBarData = {
    labels: ["Food", "Shopping", "Bills", "Travel", "Health"],
    datasets: [
      {
        label: "Amount Spent",
        data: [1200, 1800, 2500, 900, 700],
        backgroundColor: "#0EA5E9",
      },
    ],
  };

  return (
  <>
     <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Financial Reports</h1>

        <select
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
          <h2 className="mb-4 font-semibold text-gray-700 dark:text-gray-200">
            Income vs Expenses
          </h2>
          <Line data={incomeExpenseData} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
          <h2 className="mb-4 font-semibold text-gray-700 dark:text-gray-200">
            Expense by Category
          </h2>
          <Bar data={categoryBarData} />
        </div>
      </div>
  </>
  );
};

export default Reports;