import { Link} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      console.log("Signup successful", res.data);
      // Store token and user data in localStorage or state
    } catch (error) {
      console.error("Signup failed", error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1000">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              required
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2952e3] text-white p-2 rounded hover:bg-[#2546bd] transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#2952e3] hover:text-[#2546bd] transition duration-200"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
