import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Create the hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provide the context with value
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On initial load, retrieve user from localStorage if available
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Set the user from localStorage if found
    }
  }, []);

  // Function to handle login and store user data
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
    localStorage.removeItem('token'); // Optionally, remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
