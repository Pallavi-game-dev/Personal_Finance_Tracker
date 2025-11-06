import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const mockData = [
  { id: 1, title: "Salary", amount: 45000, type: "income", date: "Nov 5, 2025" },
  { id: 2, title: "Groceries", amount: -850, type: "expense", date: "Nov 4, 2025" },
  { id: 3, title: "Shopping", amount: -1200, type: "expense", date: "Nov 4, 2025" },
  { id: 4, title: "Freelance Project", amount: 6500, type: "income", date: "Nov 3, 2025" },
  { id: 5, title: "Movie Night", amount: -450, type: "expense", date: "Nov 2, 2025" },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 dark:text-gray-300 border-b">
            <th className="pb-2">Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th className="text-right">Date</th>
          </tr>
        </thead>

        <tbody>
          {mockData.map((tx) => (
            <tr
              key={tx.id}
              className="border-b dark:border-gray-700 text-gray-700 dark:text-gray-200"
            >
              <td className="py-3">{tx.title}</td>
              <td
                className={`font-semibold ${
                  tx.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
              </td>

              <td>
                {tx.type === "income" ? (
                  <span className="flex items-center gap-1 text-green-500 font-medium">
                    <FaArrowUp /> Income
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-red-500 font-medium">
                    <FaArrowDown /> Expense
                  </span>
                )}
              </td>

              <td className="text-right text-sm">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="mt-4 text-teal-600 dark:text-teal-400 font-medium hover:underline">
        View All →
      </button>
    </div>
  );
};

export default RecentTransactions;