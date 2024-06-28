import React from "react";

import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
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
              <Link to="/"
                className="font-bold text-2xl sm:text-3xl flex gap-2  hover:text-primary"
              >
                ویتوس
              </Link>
            </div>
            {/* search bar and order button */}
            <div className="flex justify-between items-center gap-4 ">
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
    </>
  );
};

export default Navbar;
