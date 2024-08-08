import React from "react";

import { FaMobileRetro } from "react-icons/fa6";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
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

function SocialNav() {
  return (
    <div className="dark:bg-secondary">
      <div className="container  md:flex md:justify-between  dark:bg-secondary dark:text-white">
        <div className="">
          <ul
            data-aos="fade-left"
            className="flex justify-center items-start p-2  "
          >
            {social.map((data) => (
              <li
                key={data.id}
                data-aos={data.fade}
                data-aos-delay={data.aosDelay}
                className="pl-4
            "
              >
                <a
                  href={data.link}
                  target="blank"
                  title={data.title}
                  className=" hover:text-black hover:translate-x-3 duration-300"
                >
                  {data.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between  items-center pt-2">
          <a className="mr-2 hover:text-black  " href="tel:09129474604">
            09129474604
          </a>
          <FaPhone className="size-5 mr-2" />
          <a className="mr-2 hover:text-black " href="tel:02155840416">
            02155840416
          </a>
          <FaMobileRetro className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default SocialNav;
