import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = () => {
  const data = {
    labels: ["Groceries", "Shopping", "Entertainment", "Bills", "Travel"],
    datasets: [
      {
        label: "₹ Spent",
        data: [1200, 1800, 900, 2500, 1500],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#475569",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mt-8">
      <h3 className="text-xl font-bold mb-4">Expense Breakdown</h3>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpensePieChart;