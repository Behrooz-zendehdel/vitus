import react from "react";
import Banner from "../../assets/splitNegative-1.svg";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "",
//   height: "100%",
//   width: "100%",
//   color: "#000",
// };

const FooterLinks = [
  {
    name: "خانه",
    link: "/",
  },
  {
    name: "محصولات",
    link: "#products",
  },
  {
    name: "درباره ما",
    link: "/aboutme",
  },
  {
    name: "نمایندگی ها",
    link: "/agent  ",
  },
];
const FooterRefs = [
  {
    title: "شیراز",
    link: "/#",
  },
  {
    title: "اصفهان",
    link: "/#about",
  },
  {
    title: "گیلان",
    link: "/#contact",
  },
  {
    title: "یزد",
    link: "/#blog  ",
  },
];

const Footer = () => {
  return (
    <div className=" w-full dark:bg-gray-900 dark:text-white text-black ">
      <div data-aos="zoom-in" className="container ">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 pb-10 pt-5 ">
          {/* company details  */}

          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="flex items-center gap-3 mt-6 flex-wrap ">
                <a href="#" title="اینستاگرام">
                  <FaInstagram className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                </a>
                <a href="#" title="فیسبوک">
                  <FaFacebook className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                </a>
                <a href="#" title="واتساپ">
                  <FaWhatsapp className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                </a>
                <a href="#" title="یوتیوب">
                  <FaYoutube className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                </a>
                <a href="#" title="تلگرام">
                  <FaTelegram className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                </a>
                <a href="#" title="لینکدین">
                  <FaLinkedin className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mt-6 hover:text-primary">
                  <a
                    href="https://maps.app.goo.gl/giekZdwz6USbRNEN6"
                    target="_blank"
                    title="google map"
                  >
                    <FaLocationArrow className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 text-right">
                <h1 className="sm:text-xl text-xl font-bold sm:text-right  mb-3">
                  نمایندگان{" "}
                </h1>
                <ul>
                  {FooterRefs.map((link) => (
                    <li
                      key={link.id}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-ga200 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 text-right">
                <h1 className="sm:text-xl text-xl font-bold text-right  mb-3">
                  لینک ها
                </h1>
                <ul>
                  {FooterLinks.map((select) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300  "
                      key={select.id}
                    >
                      <a href={select.link}>{select.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social link  */}
          </div>
          <div className="py-8 px-4 text-right">
            <h3 className="sm:text-3xl text-right font-bold text-xl  sm:text-right  mb-3  gap-3 hover:text-primary">
              ویتوس
            </h3>
            <h1 className="font-bold text-xl hover:text-primary ">
              کیفیت و راحتی در یک تجربه
            </h1>
            <h2 className="pt-4">: دفتر مرکزی </h2>
            <span className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300">
              تهران - انتهای اتوبان نواب خیابان غلامرضایی بازار بورس کاشی و
              سرامیک زمزم پلاک 249
            </span>
            <h1 className="pt-2">: تلفن دفتر </h1>
            <a
              href="tel:02155840416 "
              className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
            >
              02155840416
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center pb-2 pt-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          BiziFront طراحی شده توسط تیم
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-300">
          Contact us at: BiziFront@gmail.com | Visit us at: www.BiziFront.ir
        </p>
      </div>
    </div>
  );
};

export default Footer;
