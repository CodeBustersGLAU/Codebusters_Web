import React, { useState } from "react";
import ParticlesComponent from "../User/Particles";
import { useNavigate } from "react-router-dom";
import { login } from "./../../APIs/admin";
function Auth() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    let res = await login({ name: name, passowrd: password });
    console.log(res);
  };
  return (
    <div className="relative">
      <ParticlesComponent />

      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white bg-opacity-60 shadow-lg rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Admin Login
            </h2>
            <div className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <p className="mt-6 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <p
                href="#"
                className="text-blue-600 hover:underline mt-2 cursor-pointer"
              >
                Contact to President
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
