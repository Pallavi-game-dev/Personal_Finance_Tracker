import { FiHome, FiLayers, FiPieChart, FiFolder, FiUser, FiPlus } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";

export const menuItems = [
  { path: "/", label: "Dashboard", icon: <FiHome /> },
  { path: "/transactions", label: "Transactions", icon: <FiLayers /> },
  { path: "/add-transaction", label: "Add Transaction", icon: <FiPlus /> },
  { path: "/budgets", label: "Budgets", icon: <FiPieChart /> },
  { path: "/reports", label: "Reports", icon: <BsGraphUp /> },
  { path: "/categories", label: "Categories", icon: <FiFolder /> },
  { path: "/profile", label: "Profile", icon: <FiUser /> },
];