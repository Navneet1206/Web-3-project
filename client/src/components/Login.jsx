// src/components/Login.jsx
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Get login from AuthContext
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login successful", res.data);

      // Save the user data from the response
      login(res.data.user); // Call login from AuthContext
      // Optionally, store the token in localStorage for persistent login
      localStorage.setItem("token", res.data.token);

      // Navigate to home after successful login
      navigate("/");
    } catch (error) {
      console.error(
        "Login failed",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1000">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {" "}
          {/* Corrected form submit handler */}
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2952e3] text-white p-2 rounded hover:bg-[#2546bd] transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Do not have an account?{" "}
          <Link
            to="/signup"
            className="text-[#2952e3] hover:text-[#2546bd] transition duration-200"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
