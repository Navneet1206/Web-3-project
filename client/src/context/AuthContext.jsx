// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create the hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provide the context with value
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle login and store user data
  const login = (userData) => {
    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    // Optionally, remove token from localStorage
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
