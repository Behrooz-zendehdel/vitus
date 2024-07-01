import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";

import Image1 from "../../assets/Hero/anik-sefid-tala-1.png";
import Image2 from "../../assets/Hero/antik-sefid-chrome-2.png";
import Image3 from "../../assets/Hero/daria-rosobgir-3.png";
import Image4 from "../../assets/Hero/zangole-tala-4.png";
import { Rings } from "react-loader-spinner";

const ProductsData = [
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
  {
    id: 5,
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
const Products = () => {
  const [open, setOpen] = useState(null);

  const [load, setLoad] = useState(false);

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div id="products" className="mt-14 mb-12">
      <div>
        {
          // Header section
        }
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            {" "}
            پرفروش ترین محصولات
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            علم دوش های دوکاره
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2"></p>
        </div>
        {/* body section  */}
        <div></div>
        <div className=" container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {
            // card section
          }
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 item-products text-center "
            >
              <img
                className="h-[220px] w-[150px] object-fill rounded-md"
                src={data.img}
                alt=""
              />
              <button
                onClick={() => handleToggle(data.id)}
                className="text-center p-4 rounded-md mt-10  hover:bg-secondary bg-primary cursor-pointer text-white py-1  "
              >
                {open === data.id ? "بستن" : "مشاهده اطلاعات"}
              </button>
              <div className={`details ${open === data.id ? "open" : ""}`}>
                {open === data.id && (
                  <div className="flex flex-col  text-right transition-shadow">
                    <h3 className="font-semibold">{data.Title}</h3>
                    <div>
                      <p className="text-sm text-gray-600 flex flex-row-reverse gap-2 pt-2">
                        <FcSettings size="20px" /> {data.Description1}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 flex flex-row-reverse gap-2 pt-2">
                        <FcSettings size="20px" /> {data.Description2}
                      </p>
                    </div>

                    <div className="flex justify-evenly  items-center    pt-2 ">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <span className="font-bold">امتیاز</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* view all button  */}
        <div className="flex justify-center">
          <button
            onClick={() => setLoad(!load)}
            className={` ${
              load ? "bg-white" : "bg-secondary"
            }  text-center p-4 rounded-md mt-10  bg-secondary  cursor-pointer text-white py-1`}
          >
            {load ? (
              <Rings
                visible={true}
                height="50"
                width="50"
                color="#4834d4"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "محصولات دیگر"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
