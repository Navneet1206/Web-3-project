import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Contact from "./pages/Contact";
import Tutorials from "./pages/Tutorials";
import Login from "./components/Login";
import Signup from "./components/Signup"; // Add Signup page
import { AuthProvider, useAuth } from "./context/AuthContext";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <AuthProvider>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* Protect services and transactions */}
          <Route path="/services" element={<Services />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  </Router>
);

export default App;
