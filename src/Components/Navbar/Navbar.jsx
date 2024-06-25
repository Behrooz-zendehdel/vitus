import React from "react";

import DarkMode from "./DarkMode";

import { Routes, Route, Link } from "react-router-dom";
import Hero from "../../Pages/Hero/Hero";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import AppNav from "../AppNav/AppNav";
import SocialNav from "../SocialNav/SocialNav";

const Navbar = () => {
  return (
    <>
      <SocialNav />
      <div className="shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className=" py-2">
          <div className="container flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="font-bold text-2xl sm:text-3xl flex gap-2  hover:text-primary"
              >
                ویتوس
              </Link>
            </div>
            {/* search bar and order button */}
            <div className="flex justify-between items-center gap-4 ">
              {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search "
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:online-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gary-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 " />
            </div>
          </div>
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group "
            >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-white drop-shadow-sm cursor-pointer" />
          </button> */}
              {/* DarkMode switch */}
            </div>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
        {/* lower Navbar */}

        <AppNav />
      </div>
      <Routes>
        <Route to="/" element={<Hero />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="contactme" element={<ContactMe />} />
      </Routes>
    </>
  );
};

export default Navbar;
