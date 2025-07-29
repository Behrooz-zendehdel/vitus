import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "خانه",
    link: "/",
  },
  {
    id: 2,
    name: "محصولات",
    link: "#products",
  },
  {
    id: 3,
    name: "تماس با ما",
    link: "/contactme",
  },
  {
    id: 4,
    name: "درباره ما",
    link: "/aboutme",
  },
];

const Dropdownlinks = [
  {
    id: 1,
    name: "شرایط دریافت نمایندگی",
    link: "/agent",
  },
  {
    id: 2,
    name: "لیست نمایندگی های مجاز",
    link: "/Representation",
  },
];

function AppNav() {
  return (
    <div className="flex justify-center py-4">
      <ul className="flex items-center gap-6 lg:gap-8 flex-row-reverse">
        {Menu.map((data) => (
          <li key={data.id} className="relative group">
            <a
              className="inline-block px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative"
              href={data.link}
            >
              {data.name}
              {/* Hover Underline Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}

        {/* Enhanced Dropdown */}
        <li className="group relative cursor-pointer">
          <a 
            href="#" 
            className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:text-primary font-medium transition-colors duration-300"
          >
            <span>دریافت نمایندگی</span>
            <FaCaretDown className="transition-all duration-300 group-hover:rotate-180 text-sm" />
          </a>
          
          {/* Enhanced Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-strong border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="p-2">
              <ul className="space-y-1">
                {Dropdownlinks.map((datas) => (
                  <li key={datas.id}>
                    <Link
                      className="block w-full text-right px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
                      to={datas.link}
                    >
                      {datas.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Dropdown Arrow */}
            <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
