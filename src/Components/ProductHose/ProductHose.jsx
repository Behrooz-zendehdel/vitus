import React from "react";
import { Link } from "react-router-dom";
import hose1 from "../../assets/image-Hose/hose1.png";
import hose2 from "../../assets/image-Hose/hose2.png";
import hose3 from "../../assets/image-Hose/hose3.png";
import hose4 from "../../assets/image-Hose/hose4.png";
import hose5 from "../../assets/image-Hose/hose5.png";
import hose6 from "../../assets/image-Hose/hose6.png";
import hose7 from "../../assets/image-Hose/hose7.png";
import hose8 from "../../assets/image-Hose/hose8.png";
import hose9 from "../../assets/image-Hose/hose9.png";
import { FcPrevious } from "react-icons/fc";

function ProductHose() {
  const ProductsData = [
    {
      id: 1,
      link: "",
      image: hose1,
      title: "شلنگ توالت  برنجی لوکس مشکس طلایی",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose2,
      title: "شلنگ توالت  برنجی لوکس سفید طلایی",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose3,
      title: "شلنگ توالت  برنجی لوکس استیل مات",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose4,
      title: "شلنگ توالت  برنجی لوکس طلا مات ",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose5,
      title: "شلنگ توالت  برنجی لوکس مشکس  کروم ",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose6,
      title: "شلنگ توالت  برنجی لوکس سفید کروم",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose7,
      title: "شلنگ توالت  برنجی پولیش (بدون آبکاری)",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose8,
      title: "شلنگ توالت  برنجی لوکس کروم",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
    {
      id: 1,
      link: "",
      image: hose9,
      title: "شلنگ توالت  برنجی لوکس طلایی (درجه یک)",
      description: "تمامی قطعات برنجی ",
      description1: "زره استیل آبکاری شده 120 سانتی متری",
      description2: "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض",
    },
  ];
  return (
    <div>
      <div className="container">
        {/* Header section  */}

        <div className="text-right mt-24 max-w-[1460px]">
          <p
            data-aos="fade-up"
            className="sm:text-sm md:text-xl font-bold text-primary"
          >
            محصولات سرویس بهداشتی
          </p>
          <h1 data-aos="fade-up" className="text-xl font-bold mb-4">
            شلنگ توالت
          </h1>
        </div>
        {/* body section  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-20 w-full ">
          {ProductsData.map((data) => (
            <div
              className="rounded-xl bg-white dark:bg-gary-800  
              relative shadow-xl duration-300 group w-[240px] hover:bg-gray-200 hover:text-black
          "
              key={data.id}
            >
              {/* max-w-[200px] max-h-[190px] */}
              {/* image section  */}
              <div className="">
                <img
                  src={data.image}
                  alt=""
                  className="w-[100px] hover:scale-150  block mx-auto transform  pt-4 group-hover:Scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section  */}
              <div className="p-4 text-center   w-full ">
                <h1 className="text-xs font-bold mt-2 text-center">
                  {data.title}
                </h1>
                <div className="flex flex-row-reverse justify-center items-center   text-gary-500  mb-2  duration-300 text-sm line-clamp-2 text-right">
                  <FcPrevious />
                  <span>{data.description}</span>
                </div>
                <div className="flex flex-row-reverse w-[200px] justify-center items-center   text-gary-500  mb-2  duration-300 text-sm line-clamp-2 text-right">
                  <FcPrevious />
                  <span>{data.description1}</span>
                </div>
                <div className="flex flex-row-reverse justify-center max-w-[200px]  items-center   text-gary-500  mb-2  duration-300 text-sm line-clamp-2 text-right ">
                  <FcPrevious />
                  <span>{data.description2}</span>
                </div>
                <button className="bg-secondary hover:scale-105 duration-300 text-white hover:bg-white hover:text-secondary p-3 mt-2 rounded-lg  text-sm ">
                  <a className="mr-2 hover:text-primary" href="tel:09129474604">
                    استعلام موجودی
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHose;
