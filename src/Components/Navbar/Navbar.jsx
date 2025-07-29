import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Vitus Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-gray-800">ویتوس</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              خانه
            </Link>
            <Link to="/topproducts" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              محصولات برتر
            </Link>
            <Link to="/producthose" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              شلنگ دوش
            </Link>
            <Link to="/banner" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              بنر
            </Link>
            <Link to="/subscribe" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              تماس
            </Link>
            <Link to="/aboutme" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              درباره ما
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
