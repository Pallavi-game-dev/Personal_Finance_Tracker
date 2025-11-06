import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-end items-center bg-white dark:bg-gray-800 px-4 py-3 shadow">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Topbar;