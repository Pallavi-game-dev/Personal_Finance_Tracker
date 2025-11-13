import { useTransactions } from "../context/TransactionContext";

export default function Dashboard() {
  const { income, expense, balance } = useTransactions();
   console.log(useTransactions());
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">Total Balance</h3>
        <p className="text-2xl font-semibold">₹{balance.toFixed(2)}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">Income</h3>
        <p className="text-2xl font-semibold text-green-500">
          +₹{income.toFixed(2)}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm">Expense</h3>
        <p className="text-2xl font-semibold text-red-500">
          -$₹{expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
}