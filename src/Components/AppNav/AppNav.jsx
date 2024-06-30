import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Button from "../Navbar/Button";

const Menu = [
  {
    id: 1,
    name: "خانه",
    link: "/",
  },
  {
    id: 2,
    name: "محصولات",
    link: "products",
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
function AppNav() {
  return (
    <div className="flex justify-center ">
      <ul className="sm:flex  items-center  gap-4   flex-row-reverse ">
        {Menu.map((data) => (
          <li key={data.id}>
            <NavLink
              className="inline-block px-4  w-full text-center"
              to={data.link}
            >
              {data.name}
            </NavLink>
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
              {Dropdownlinks.map((datas) => (
                <li key={datas.id}>
                  <Link
                    className="inline-block w-full text-center rounded-md p-2  hover:text-primary "
                    to={datas.link}
                  >
                    {datas.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      {/* <Button></Button> */}
    </div>
  );
}

export default AppNav;
