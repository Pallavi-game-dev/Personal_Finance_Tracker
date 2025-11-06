import React from "react";
import { FaWallet } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Illustration */}
      <div className="hidden md:flex w-1/2 bg-blue-600 dark:bg-blue-900 items-center justify-center">
        <div className="text-white text-center px-6">
          <FaWallet className="text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Personal Finance Tracker</h2>
          <p className="text-lg">
            Track your spending. Manage your savings. Be financially free.
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white dark:bg-gray-900">
        <div className="max-w-md w-full px-8 py-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Login
          </h2>

          <form className="space-y-5">
            <div>
              <label className="text-gray-700 dark:text-gray-300 text-sm">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-300 text-sm">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              Sign In
            </button>

            <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-3">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;