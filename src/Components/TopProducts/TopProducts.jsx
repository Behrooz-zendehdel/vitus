import React from "react";
import Img1 from "../../assets/Hero/anik-sefid-tala-1.png";
import Img2 from "../../assets/Hero/antik-sefid-chrome-2.png";
import Img3 from "../../assets/Hero/daria-rosobgir-3.png";
import Img4 from "../../assets/Hero/zangole-tala-4.png";
import Img5 from "../../assets/imageProducts/antiksefid/antiksefid-def.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "علم دوش  آنتیک سفید طلایی",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
  },
  {
    id: 2,
    img: Img2,
    title: "علم دوش آنتیک سفید  کرومی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
  },
  {
    id: 3,
    img: Img3,
    title: "علم دوش دریا رسوب گیر ",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
  },
  {
    id: 4,
    img: Img4,
    title: "علم دوش زنگوله طلایی",
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
  },
  {
    id: 5,
    img: Img5,
    title: "علم دوش آنتیک سفید",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section  */}

        <div className="text-right mb-24 max-w-[1460px]">
          <p
            data-aos="fade-up"
            className="sm:text-sm md:text-xl font-bold text-primary"
          >
            {" "}
            محصولات منتخب
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            برترین محصولات
          </h1>
          <p
            data-aos="fade-up"
            className="sm:text-xs md:text-lg text-gray-400 mt-2"
          >
            علم دوش های برند ویتوس با بهترین متریال و کیفیت ساخته شده و همچنین{" "}
            <br />
            <br />
            با بسته بندی های زیبا که شامل : آچار ، حوله و شانه رسوب گیر تحویل
            مشتریان عزیز می گردد
          </p>
        </div>
        {/* body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-20">
          {ProductsData.map((data) => (
            <div
              className="rounded-xl bg-white dark:bg-gary-800 hover:bg-black/80 dark:hover:bg-secondary
                hover:text-white relative shadow-xl duration-300 group max-w-[300px] 
            "
              key={data.id}
            >
              {/* max-w-[200px] max-h-[190px] */}
              {/* image section  */}
              <div className="">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] hover:scale-150  block mx-auto transform -translate-y-20 group-hover:Scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section  */}
              <div className="p-4 text-center">
                <div className="w-full flex  items-center justify-center flex-wrap gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xs font-bold mt-2 text-center ">
                  {data.title}
                </h1>
                <p className="text-gary-500 w-[200px] h-[100px] mt-2 group-hover:text-white duration-300 text-sm text-center line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-secondary hover:scale-105 duration-300 text-white p-3 mt-2 rounded-lg group-hover:bg-white text-sm group-hover:text-secondary">
                  <a className="mr-2 hover:text-primary" href="tel:09129628596">
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
};

export default TopProducts;
