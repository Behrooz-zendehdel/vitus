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
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            دریافت نمایندگی{" "}
          </a>
          <div className=" absolute shadow-md z-[9999] hidden group-hover:block w-[170px] rounded-md bg-white p-2 text-black">
            <ul className="">
              {Dropdownlinks.map((datas) => (
                <li key={datas.id}>
                  <Link
                    className="inline-block w-full text-sm text-center rounded-md p-2  hover:text-primary "
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
