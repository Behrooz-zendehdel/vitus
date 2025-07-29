import React, { useState, useRef, useEffect } from "react";
import Img1 from "../../assets/Hero/anik-sefid-tala-1.png";
import Img2 from "../../assets/Hero/antik-sefid-chrome-2.png";
import Img3 from "../../assets/Hero/daria-rosobgir-3.png";
import Img4 from "../../assets/Hero/zangole-tala-4.png";
import Img5 from "../../assets/imageProducts/antiksefid/antiksefid-def.png";
import Img6 from "../../assets/imageProducts/amazongold/amazongold-def.png";
import Img7 from "../../assets/imageProducts/antikchrome/antikchrome-def.png";
import Img8 from "../../assets/imageProducts/antikgold/antikgold-def.png";
import Img9 from "../../assets/imageProducts/antikmeshkichrome/antikmeshkichrome-def.png";
import Img10 from "../../assets/imageProducts/antikmeshkigold/antikmeshkigold-def.png";
import Img11 from "../../assets/imageProducts/antiksadafchrome/A-DSC_5492.jpg";
import Img12 from "../../assets/imageProducts/antiksefid/antiksefid-def.png";
import Img13 from "../../assets/imageProducts/antiksefidgold/antiksefidgold-def.png";
import Img14 from "../../assets/imageProducts/ariachrome/ariachrome-def.png";
import Img15 from "../../assets/imageProducts/ariagold/ariagold-def.png";
import Img16 from "../../assets/imageProducts/dariarosobgir/dariarosobgir-def.png";
import Img17 from "../../assets/imageProducts/homa/homavip-def.png";
import Img18 from "../../assets/imageProducts/khorshidchrome/khorshidchrome-def.png";
import Img19 from "../../assets/imageProducts/sadafchrome/sadafchrome-def.png";
import Img20 from "../../assets/imageProducts/zangolechrome/zangolechrome-def.png";
import Img21 from "../../assets/imageProducts/zangolegold/zangolegold-def.png";
import Img22 from "../../assets/imageProducts/zangolesefidgold/zangolesefidgold-def.png";
import Img23 from "../../assets/imageProducts/aniksefidchrome/antiksefidchrome-def.png";
import { FaStar, FaPhone, FaCheckCircle, FaTimes } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "علم دوش آنتیک سفید طلایی",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سه راهی 140 گرم"],
  },
  {
    id: 2,
    img: Img2,
    title: "علم دوش آنتیک سفید کرومی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سه راهی 140 گرم"],
  },
  {
    id: 3,
    img: Img3,
    title: "علم دوش دریا رسوب گیر",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["قابلیت رسوب زدایی", "شلنگ رابط 150 سانت", "طراحی خاص لوله"],
  },
  {
    id: 4,
    img: Img4,
    title: "علم دوش زنگوله طلایی",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["سردوش طرح زنگوله", "قطر 23 سانت", "طراحی خاص لوله"],
  },
  {
    id: 5,
    img: Img5,
    title: "علم دوش آنتیک سفید",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سه راهی 140 گرم"],
  },
  {
    id: 6,
    img: Img6,
    title: "علم دوش آمازون طلایی",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی آمازون", "شلنگ رابط 150 سانت", "سردوش طلایی"],
  },
  {
    id: 7,
    img: Img7,
    title: "علم دوش آنتیک کرومی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش کرومی"],
  },
  {
    id: 8,
    img: Img8,
    title: "علم دوش آنتیک طلایی",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش طلایی"],
  },
  {
    id: 9,
    img: Img9,
    title: "علم دوش آنتیک مشکی کرومی",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش مشکی کرومی"],
  },
  {
    id: 10,
    img: Img10,
    title: "علم دوش آنتیک مشکی طلایی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش مشکی طلایی"],
  },
  {
    id: 11,
    img: Img11,
    title: "علم دوش آنتیک صدف کرومی",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی صدف", "شلنگ رابط 150 سانت", "سردوش کرومی"],
  },
  {
    id: 12,
    img: Img12,
    title: "علم دوش آنتیک سفید",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش سفید"],
  },
  {
    id: 13,
    img: Img13,
    title: "علم دوش آنتیک سفید طلایی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش سفید طلایی"],
  },
  {
    id: 14,
    img: Img14,
    title: "علم دوش آریا کرومی",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی آریا", "شلنگ رابط 150 سانت", "سردوش کرومی"],
  },
  {
    id: 15,
    img: Img15,
    title: "علم دوش آریا طلایی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی آریا", "شلنگ رابط 150 سانت", "سردوش طلایی"],
  },
  {
    id: 16,
    img: Img16,
    title: "علم دوش دریا رسوب گیر",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["قابلیت رسوب زدایی", "شلنگ رابط 150 سانت", "طراحی خاص لوله"],
  },
  {
    id: 17,
    img: Img17,
    title: "علم دوش هما VIP",
    rating: 5.0,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی VIP", "شلنگ رابط 150 سانت", "سردوش لوکس"],
  },
  {
    id: 18,
    img: Img18,
    title: "علم دوش خورشید کرومی",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی خورشید", "شلنگ رابط 150 سانت", "سردوش کرومی"],
  },
  {
    id: 19,
    img: Img19,
    title: "علم دوش صدف کرومی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["طراحی صدف", "شلنگ رابط 150 سانت", "سردوش کرومی"],
  },
  {
    id: 20,
    img: Img20,
    title: "علم دوش زنگوله کرومی",
    rating: 4.6,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["سردوش طرح زنگوله", "شلنگ رابط 150 سانت", "سردوش کرومی"],
  },
  {
    id: 21,
    img: Img21,
    title: "علم دوش زنگوله طلایی",
    rating: 4.7,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["سردوش طرح زنگوله", "شلنگ رابط 150 سانت", "سردوش طلایی"],
  },
  {
    id: 22,
    img: Img22,
    title: "علم دوش زنگوله سفید طلایی",
    rating: 4.8,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["سردوش طرح زنگوله", "شلنگ رابط 150 سانت", "سردوش سفید طلایی"],
  },
  {
    id: 23,
    img: Img23,
    title: "علم دوش آنتیک سفید کرومی",
    rating: 4.9,
    description:
      "تمامی محصولات برند ویتوس شامل یک سال بیمه و سه سال گارانتی تعویض قطعات میباشد",
    features: ["لوله استیل 202 جوشی", "شلنگ رابط 150 سانت", "سردوش سفید کرومی"],
  },
];

const TopProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleCardClick = (product) => {
    setHoveredProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setHoveredProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 flex items-center justify-center min-h-screen relative">
      {/* Hover Modal */}
      {isModalOpen && hoveredProduct && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300"
          onClick={handleModalClose}
        >
          <div className="relative bg-white rounded-2xl p-8 max-w-2xl mx-4 shadow-2xl">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <FaTimes className="text-2xl" />
            </button>
            <div className="text-center">
              <img
                src={hoveredProduct.img}
                alt={hoveredProduct.title}
                className="w-full h-96 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {hoveredProduct.title}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaStar className="text-yellow-500" />
                <span className="font-bold text-gray-700">{hoveredProduct.rating}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {hoveredProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container max-w-7xl mx-auto px-4">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-300 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium text-purple-700">
              محصولات منتخب
            </p>
          </div>
          
          <h1 
            data-aos="fade-up" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4"
          >
            برترین محصولات
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            علم دوش های برند ویتوس با بهترین متریال و کیفیت ساخته شده و همچنین با بسته بندی های زیبا که شامل آچار، حوله و شانه رسوب گیر تحویل مشتریان عزیز می گردد
          </p>
        </div>

        {/* Enhanced Products Grid with Larger Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {ProductsData.map((data, index) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative cursor-pointer"
              onClick={() => handleCardClick(data)}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden border border-purple-100">
                {/* Enhanced Image Section with Shorter Height */}
                <div className="relative p-4 bg-gradient-to-br from-purple-50 to-white">
                  <div className="relative">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-full h-36 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Rating Badge - Moved to Top Left Corner */}
                    <div className="absolute top-0 left-0 bg-white px-2 py-1 rounded-br-lg shadow-md">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span className="text-sm font-bold text-gray-700">
                          {data.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compact Content Section */}
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-sm text-gray-800 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 min-h-[2rem]">
                    {data.title}
                  </h3>
                  
                  {/* Compact Features List */}
                  <div className="space-y-1">
                    {data.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                        <span className="text-xs text-gray-600 line-clamp-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Compact CTA Button */}
                  <button
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 px-3 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = "tel:09129628596";
                    }}
                  >
                    <FaPhone className="text-xs" />
                    <span>استعلام قیمت</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

