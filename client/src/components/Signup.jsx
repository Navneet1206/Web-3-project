import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle visibility for password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle visibility for confirm password
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("https://web-3-project-iwpi.onrender.com/api/auth/signup", {
        name,
        email,
        password,
      });

      setSuccessMessage("Signup successful! Go to Login");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1000">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Sign Up</h2>
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
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle password type
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              required
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible className="text-white" /> : <AiFillEye className="text-white" />}
            </div>
            {errorMessage.includes("Password") && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"} // Toggle confirm password type
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-400 rounded bg-transparent text-white outline-none focus:ring-2 focus:ring-[#2952e3]"
              required
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiFillEyeInvisible className="text-white" /> : <AiFillEye className="text-white" />}
            </div>
            {errorMessage.includes("Passwords do not match") && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
          {errorMessage && !errorMessage.includes("Password") && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#2952e3] text-white p-2 rounded hover:bg-[#2546bd] transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#2952e3] hover:text-[#2546bd] transition duration-200">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
