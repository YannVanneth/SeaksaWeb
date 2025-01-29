import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-md border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
            <span className="relative z-10 bg-white px-6">OR</span>
          </span>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="h-5 w-5 mr-2"
              />
              Facebook
            </button>
            <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <FaGoogle className="h-5 w-5 mr-2 text-blue-600" />
              Google
            </button>
            <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <FaApple className="h-5 w-5 mr-2 text-blue-600" />
              Apple
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 mt-4 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register">
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
