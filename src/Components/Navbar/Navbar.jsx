import React from "react";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "خانه",
    link: "/#",
  },
  {
    id: 2,
    name: "محصولات",
    link: "/#",
  },
  {
    id: 3,
    name: "تماس با ما",
    link: "/#",
  },
  {
    id: 4,
    name: "درباره ما",
    link: "/#",
  },
];

const Dropdownlinks = [
  {
    id: 1,
    name: "شیراز",
    link: "/#",
  },
  {
    id: 2,
    name: "گیلان",
    link: "/#",
  },
  {
    id: 3,
    name: "یزد",
    link: "/#",
  },
  {
    id: 4,
    name: "اصفهان",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className=" py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              ویتوس
            </a>
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

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 flex-row-reverse ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4 hover:text-primary duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple drop down and list  */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              نمایندگی ها{" "}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className=" absolute shadow-md z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul className="">
                {Dropdownlinks.map((data) => (
                  <li key={data.id}>
                    <a
                      className="inline-block w-full text-center rounded-md p-2 hover:bg-primary/20 "
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
