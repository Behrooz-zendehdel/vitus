import React from "react";

import Image1 from "../assets/Hero/anik-sefid-tala-1.png";
import Image2 from "../assets/Hero/antik-sefid-chrome-2.png";
import Image3 from "../assets/Hero/daria-rosobgir-3.png";
import Image4 from "../assets/Hero/zangole-tala-4.png";

import Slider from "react-slick";
import Layout from "../Components/Layout/Layout";

import Products from "../Components/Products/Products";
import TopProducts from "../Components/TopProducts/TopProducts";
import Banner from "../Components/Banner/Banner";
import SubScribe from "../Components/SubScribe/SubScribe";
import TestImonials from "../Components/TestImonials/TestImonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { FcCheckmark } from "react-icons/fc";
import ProductHose from "../Components/ProductHose/ProductHose";

var setting = {
  dots: false,
  arrows: false,

  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToScroll: 1,
};

const ImageList = [
  {
    id: 1,
    img: Image1,
    Title: "علم دوش  ویتوس  مدل آنتیک",
    color: "رنگ سفید طلایی",
    Description1: "لوله استیل 202 جوشی",
    Description2: "شلنگ های رابط  150 سانت تمام برنجی",
    Description3: "سه راهی 140 گرم دسته فلز",
    Description4: "سردوش با گوشی ایرانی با بهترین متریال مواد اولیه",
    Description5:
      " تمامی محصولات ویتوس شامل : 1 سال بیمه کالا و 3 سال ضمانت تعویض قطعات می باشد ",
  },
  {
    id: 2,
    img: Image2,
    Title: "علم دوش ویتوس مدل آنیتک ",
    color: "رنگ سفید کروم",
    Description1: "لوله استیل 202 جوشی",
    Description2: "شلنگ های رابط  150 سانت تمام برنجی",
    Description3: "سه راهی 140 گرم دسته فلز",
    Description4: "سردوش با گوشی ایرانی با بهترین متریال مواد اولیه",
    Description5:
      "تمامی محصولات ویتوس شامل : 1 سال بیمه کالا و 3 سال ضمانت تعویض قطعات می باشد ",
  },
  {
    id: 3,
    img: Image3,
    Title: "علم دوش ویتوس مدل دریا رسوب گیر ",
    color: "رنگ کروم",
    Description1: "لوله استیل 202 جوشی",
    Description2: "شلنگ های رابط  150 سانت تمام برنجی",
    Description3: "سه راهی 140 گرم دسته فلز",
    Description4: "قابلیت رسوب زدایی دستی در گوشی و سردوش طراحی خاص لوله",
    Description5:
      " تمامی محصولات ویتوس شامل : 1 سال بیمه کالا و 3 سال ضمانت تعویض قطعات می باشد ",
  },
  {
    id: 4,
    img: Image4,
    Title: "علم دوش  ویتوس مدل زنگوله ",
    color: " رنگ  طلایی براق",
    Description1: "لوله استیل 202 جوشی",
    Description2: "شلنگ های رابط  150 سانت تمام برنجی",
    Description3: "سه راهی 140 گرم دسته فلز",
    Description4: "سردوش و گوشی طرح زنگوله با قطر 23 سانت طراحی خاص لوله",
    Description5:
      " تمامی محصولات ویتوس شامل : 1 سال بیمه کالا و 3 سال ضمانت تعویض قطعات می باشد ",
  },
];

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-ease",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Layout>
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center dark:bg-secondary dark:text-white duration-200">
          {/* background pattern  */}
          <div className="  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
          {/* hero section  */}
          <div className="container pb-8 sm:pb-24 ">
            <Slider {...setting}>
              {ImageList.map((data) => {
                return (
                  <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 ">
                      {/* text content section  */}
                      <div className="flex flex-col justify-center gap-2 pt-2 sm:pt-2 text-center sm:text-right order-2 sm:order-1 relative z-10">
                        <h1
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-once="true"
                          className="text-3xl sm:text-3xl lg:text-4xl font-bold "
                        >
                          {data.Title}
                        </h1>
                        <h2
                          data-aos="fade-up"
                          data-aos-delay="300"
                          className="font-semibold "
                        >
                          {data.color}
                        </h2>
                        {/* <p
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="100"
                          className="text-sm"
                        >
                          {data.Description}
                        </p> */}
                        <div className="flex flex-col font-thin text-end ">
                          <div
                            className="flex flex-row-reverse items-center gap-2 "
                            data-aos="fade-up"
                            data-aos-delay="200"
                          >
                            <FcCheckmark size="1.5rem" />
                            <span className="hover:scale-110 hover:font-bold">
                              {data.Description1}
                            </span>
                          </div>
                          <div
                            className="flex flex-row-reverse items-center  gap-2"
                            data-aos="fade-up"
                            data-aos-delay="300"
                          >
                            <FcCheckmark size="1.5rem" />
                            <span className="hover:scale-110 hover:font-bold">
                              {data.Description2}
                            </span>
                          </div>
                          <div
                            className="flex flex-row-reverse items-center  gap-2"
                            data-aos="fade-up"
                            data-aos-delay="400"
                          >
                            <FcCheckmark size="1.5rem" />
                            <span className="hover:scale-110 hover:font-bold">
                              {data.Description3}
                            </span>
                          </div>
                          <div
                            className="flex flex-row-reverse items-center  gap-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                          >
                            <FcCheckmark size="1.5rem" />
                            <span className="hover:scale-110 hover:font-bold">
                              {data.Description4}
                            </span>
                          </div>
                        </div>

                        <p
                          data-aos="fade-up"
                          data-aos-delay="1000"
                          className="font-bold text-end hover:text-green-900 "
                        >
                          {data.Description5}
                        </p>

                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="100"
                        >
                          <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                            همین حالا خرید کن
                          </button>
                        </div>
                      </div>
                      {/* image  section  */}

                      <div
                        data-aos="fade-up"
                        className="order-1 sm:order-2 md:order-1"
                      >
                        <div className="relative z-10">
                          <img
                            src={data.img}
                            alt=""
                            className="object-contain w-[300px] pt-10 h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 ms-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <Products />
        <TopProducts />
        <ProductHose />
        <Banner />
        <SubScribe />
        <TestImonials />
      </Layout>
    </>
  );
};

export default Home;
