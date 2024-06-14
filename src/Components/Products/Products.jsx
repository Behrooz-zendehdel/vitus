import React from "react";
import { FaStar } from "react-icons/fa6";

import Img1 from "../../assets/Hero/anik-sefid-tala.png";
import Img2 from "../../assets/Hero/antik-sefid-chrome.png";
import Img3 from "../../assets/Hero/daria-rosobgir.png";
import Img4 from "../../assets/Hero/zangole-tala.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "علم دوش سفید طلایی",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 2,
    img: Img2,
    title: "علم دوش سفید کرومی",
    rating: 4.8,
    color: "red",
    aosDelay: "500",
  },
  {
    id: 3,
    img: Img3,
    title: "علم دوش سفید ",
    rating: 4.9,
    color: "brown",
    aosDelay: "600",
  },
  {
    id: 4,
    img: Img4,
    title: "علم دوش طلایی",
    rating: 4.7,
    color: "yellow",
    aosDelay: "700",
  },
  {
    id: 5,
    img: Img4,
    title: "علم دوش طلایی",
    rating: 4.7,
    color: "yellow",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
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
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            علم دوش های برند ویتوس با بهترین متریال و کیفیت ساخته شده و همچنین{" "}
            <br />
            <br />
            با بسته بندی های زیبا که شامل : آچار ، حوله ،بیلبیک رسوب گیر تحویل
            مشتریان عزیز می گردد
          </p>
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
              className="space-y-3 "
            >
              <img
                className="h-[220px] w-[150px] object-cover rounded-md"
                src={data.img}
                alt=""
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span> {data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
