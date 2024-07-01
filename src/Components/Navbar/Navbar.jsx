import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppNav from "../AppNav/AppNav";
import SocialNav from "../SocialNav/SocialNav";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SocialNav />
      <div className="shadow-md  dark:bg-secondary dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className="py-2">
          <div className="container flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="font-bold text-2xl sm:text-3xl flex gap-2 hover:text-primary"
              >
                ویتوس
              </Link>
            </div>
            {/* Mobile toggle button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-300 focus:outline-none"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* search bar and order button */}
            <div className="hidden sm:flex justify-between items-center gap-4">
              {/* DarkMode switch */}
              <DarkMode />
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        {isOpen && (
          <div className="sm:hidden">
            <AppNav />
          </div>
        )}
        <div className="hidden sm:block">
          <AppNav />
        </div>
      </div>
    </>
  );
};

export default Navbar;
