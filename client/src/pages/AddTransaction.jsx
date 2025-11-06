import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

export default function AddTransaction() {
  const { addTransaction } = useTransactions();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;

    addTransaction({
      id: Date.now(),
      ...form
    });

    setForm({ title: "", amount: "", type: "income" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <select
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}