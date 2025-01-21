import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo.png"; // Import the logo

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full h-16 z-50 bg-black/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center h-full px-4">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Event Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link
              to="/register"
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Register Event
            </Link>
            <Link
              to="/dashboard"
              className="text-white text-sm font-medium hover:text-blue-400 transition-colors duration-300"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
