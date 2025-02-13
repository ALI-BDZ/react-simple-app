"use client";
import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    console.log("Repeat Password:", formData.repeatPassword);
    console.log("Remember:", formData.remember);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="flex w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
        {/* Left Column: Registration Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to KVP</h1>
          <p className="text-lg mb-8">Create your account.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="6+ strong characters"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.698 7.088 4.066 5 7 5c2.932 0 5.3 2.088 6.542 5H7C4.066 5 1.698 7.088.458 10zM12.542 15C9.57 12.912 7.202 15 5 15c-2.202 0-4.57-.088-6.542-3H5c2.202 0 4.57.088 6.542 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M7 5a1 1 0 011-1h3.5a1 1 0 011 1v3.5a1 1 0 01-1 1h-3.5a1 1 0 01-1-1V5zm4 4H7v-4h4v4zm1 5a1 1 0 001-1v-3.5a1 1 0 00-1-1h-3.5a1 1 0 00-1 1V14a1 1 0 001 1h3.5a1 1 0 001-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div className="mb-6 relative">
              <label className="block text-sm font-bold mb-2" htmlFor="repeatPassword">
                Repeat Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-gray-700 focus:outline-none focus:shadow-outline"
                id="repeatPassword"
                type={showPassword ? "text" : "password"}
                placeholder="6+ strong characters"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.698 7.088 4.066 5 7 5c2.932 0 5.3 2.088 6.542 5H7C4.066 5 1.698 7.088.458 10zM12.542 15C9.57 12.912 7.202 15 5 15c-2.202 0-4.57-.088-6.542-3H5c2.202 0 4.57.088 6.542 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M7 5a1 1 0 011-1h3.5a1 1 0 011 1v3.5a1 1 0 01-1 1h-3.5a1 1 0 01-1-1V5zm4 4H7v-4h4v4zm1 5a1 1 0 001-1v-3.5a1 1 0 00-1-1h-3.5a1 1 0 00-1 1V14a1 1 0 001 1h3.5a1 1 0 001-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  className="form-checkbox h-5 w-5 text-blue-600"
                  id="remember"
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label className="ml-2 block text-sm text-gray-300" htmlFor="remember">
                  Remember for 30 days
                </label>
              </div>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create an Account
              </button>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="border-b border-gray-700 w-full mr-4"></div>
              <span className="text-gray-500">or</span>
              <div className="border-b border-gray-700 w-full ml-4"></div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="mx-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.1 11.1H12.9V8.8l-2.5 2.5L12.9 13.4v-2.3h7.2c-.2 1.4-1 2.5-2.2 3.2-.9.5-2 .9-3.2 1.1-.7.1-1.4.2-2.1.2-.9 0-1.7-.1-2.5-.3-.8-.2-1.5-.5-2.2-.9-1.4-.7-2.4-1.7-3-2.9-.6-1.2-1-2.5-1-3.9s.4-2.7 1-3.9c.7-1.2 1.6-2.2 2.9-3 .9-.5 2-.9 3.2-1.1.7-.1 1.4-.2 2.1-.2 1 0 1.8.1 2.6.3 1.4.7 2.4 1.7 3 2.9.6 1.2 1 2.5 1 3.9s-.4 2.7-1 3.9z" />
                </svg>
              </button>
              {/* Add more social sign-up buttons here */}
            </div>
          </form>
        </div>
        {/* Right Column: Image or Additional Content */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/500x600")' }}>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Join KVP Today!</h2>
            <p className="text-lg">Experience the best features with KVP.</p>
          </div>
        </div>
      </div>
    </div>
  );
}