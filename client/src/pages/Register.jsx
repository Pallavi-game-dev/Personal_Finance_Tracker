import React from "react";
import { FaPiggyBank } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-green-600 dark:bg-green-900 items-center justify-center">
        <div className="text-white text-center px-6">
          <FaPiggyBank className="text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Join Us Today!</h2>
          <p className="text-lg">
            Create an account and start tracking your financial goals.
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white dark:bg-gray-900">
        <div className="max-w-md w-full px-8 py-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Create Account
          </h2>

          <form className="space-y-5">
            <div>
              <label className="text-gray-700 dark:text-gray-300 text-sm">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-300 text-sm">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-300 text-sm">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 mt-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
              Sign Up
            </button>

            <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-3">
              Already have an account?{" "}
              <a href="/" className="text-green-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;