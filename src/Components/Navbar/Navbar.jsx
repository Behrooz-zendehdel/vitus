import React from "react";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaMobileRetro, FaCartShopping } from "react-icons/fa6";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaMobileAlt,
} from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "خانه",
    link: "./hero",
  },
  {
    id: 2,
    name: "محصولات",
    link: "#products",
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
const social = [
  {
    id: 1,
    link: "https://twitter.com",
    title: "اینستاگرام",
    icon: <FaInstagram />,
    fade: "fade-left",
    aosDelay: "100",
  },
  {
    id: 1,
    link: "https://twitter.com",
    title: "واتساپ",
    icon: <FaWhatsapp />,
    fade: "fade-left",
    aosDelay: "200",
  },
  {
    id: 1,
    link: "https://twitter.com",
    title: "تلگرام",
    icon: <FaTelegram />,
    fade: "fade-left",
    aosDelay: "300",
  },
  {
    id: 1,
    link: "https://twitter.com",
    title: "فیسبوک",
    icon: <FaFacebook />,
    fade: "fade-left",
    aosDelay: "400",
  },
  {
    id: 1,
    link: "https://twitter.com",
    title: "یوتیوب",
    icon: <FaYoutube />,
    fade: "fade-left",
    aosDelay: "500",
  },
  {
    id: 1,
    link: "https://twitter.com",
    title: "لینکدین",
    icon: <FaLinkedin />,
    fade: "fade-left",
    aosDelay: "600",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="container md:flex md:justify-between  ">
        <div className="">
          <ul
            data-aos="fade-left"
            className="flex justify-center items-start p-2"
          >
            {social.map((data) => (
              <li
                key={data.id}
                data-aos={data.fade}
                data-aos-delay={data.aosDelay}
                className="pl-4
                "
              >
                <a href={data.link} target="blank" title={data.title}>
                  {data.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between  items-center pt-2">
          <a className="mr-2 " href="tel:09129474604">
            09129474604
          </a>
          <FaPhone className="size-5 mr-2" />
          <a className="mr-2" href="tel:02155840416">
            02155840416
          </a>
          <FaMobileRetro className="size-5" />
        </div>
      </div>
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
    </>
  );
};

export default Navbar;
