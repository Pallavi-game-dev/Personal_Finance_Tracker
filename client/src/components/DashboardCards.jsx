import React from "react";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

const stats = [
  {
    title: "Total Balance",
    amount: "₹ 85,400",
    icon: <FaWallet />,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Income (This Month)",
    amount: "₹ 45,200",
    icon: <FaArrowUp />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Expense (This Month)",
    amount: "₹ 28,700",
    icon: <FaArrowDown />,
    gradient: "from-rose-500 to-red-500",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${card.gradient} text-white flex flex-col gap-2 transition transform hover:scale-[1.03]`}
        >
          <div className="text-3xl">{card.icon}</div>
          <h3 className="text-lg font-medium">{card.title}</h3>
          <p className="text-2xl font-bold">{card.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;