import React from "react";

import Image1 from "../../assets/Hero/anik-sefid-tala.png";
import Image2 from "../../assets/Hero/antik-sefid-chrome.png";
import Image3 from "../../assets/Hero/daria-rosobgir.png";
import Image4 from "../../assets/Hero/zangole-tala.png";

import Slider from "react-slick";

var setting = {
  dots: false,
  arrows: false,

  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 4000,
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
    Title: "علم دوش مدل آنیتک",
    color: "طرح سفید طلایی",
    Description:
      "تمامی علم دوش های برند ویتوس از جمله مدل آنیتک از بهترین متریال ساخته شده و همچنین دارای فراگارانتی می باشد ",
  },
  {
    id: 2,
    img: Image2,
    Title: "علم دوش مدل آنیتک ",
    color: "طرح سفید کروم",
    Description:
      "تمامی علم دوش های برند ویتوس از جمله مدل آنیتک از بهترین متریال ساخته شده و همچنین دارای فراگارانتی می باشد ",
  },
  {
    id: 3,
    img: Image3,
    Title: "علم دوش مدل آنیتک ",
    color: "طرح دریا رسوب گیر",
    Description:
      "تمامی علم دوش های برند ویتوس از جمله مدل آنیتک از بهترین متریال ساخته شده و همچنین دارای فراگارانتی می باشد ",
  },
  {
    id: 4,
    img: Image4,
    Title: "علم دوش  مدل آنیتک ",
    color: " طرح زنگوله طلا",
    Description:
      "تمامی علم دوش های برند ویتوس از جمله مدل آنیتک از بهترین متریال ساخته شده و همچنین دارای فراگارانتی می باشد ",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern  */}
      <div className="  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section  */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...setting}>
          {ImageList.map((data) => {
            return (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section  */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-right order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-3xl sm:text-3xl lg:text-4xl font-bold "
                    >
                      {data.Title}
                    </h1>
                    <h2 className="font-semibold ">{data.color}</h2>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.Description}
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

                  <div className="order-1 sm:order-2 md:order-1">
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
  );
};

export default Hero;
