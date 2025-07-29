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
import { FaCheckCircle, FaPhone, FaShieldAlt } from "react-icons/fa";

function ProductHose() {
  const ProductsData = [
    {
      id: 1,
      link: "",
      image: hose1,
      title: "شلنگ توالت برنجی لوکس مشکی طلایی",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
      badge: "پرفروش",
      badgeColor: "from-red-500 to-red-600",
    },
    {
      id: 2,
      link: "",
      image: hose2,
      title: "شلنگ توالت برنجی لوکس سفید طلایی",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
      badge: "جدید",
      badgeColor: "from-green-500 to-green-600",
    },
    {
      id: 3,
      link: "",
      image: hose3,
      title: "شلنگ توالت برنجی لوکس استیل مات",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
      badge: "ویژه",
      badgeColor: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      link: "",
      image: hose4,
      title: "شلنگ توالت برنجی لوکس طلا مات",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
    },
    {
      id: 5,
      link: "",
      image: hose5,
      title: "شلنگ توالت برنجی لوکس مشکی کروم",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
    },
    {
      id: 6,
      link: "",
      image: hose6,
      title: "شلنگ توالت برنجی لوکس سفید کروم",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
    },
    {
      id: 7,
      link: "",
      image: hose7,
      title: "شلنگ توالت برنجی پولیش (بدون آبکاری)",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
    },
    {
      id: 8,
      link: "",
      image: hose8,
      title: "شلنگ توالت برنجی لوکس کروم",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
    },
    {
      id: 9,
      link: "",
      image: hose9,
      title: "شلنگ توالت برنجی لوکس طلایی (درجه یک)",
      features: [
        "تمامی قطعات برنجی",
        "زره استیل آبکاری شده 120 سانتی متری",
        "بوش بلند استیل یکسال بیمه کالا و سه سال ضمانت تعویض"
      ],
      badge: "درجه یک",
      badgeColor: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 flex items-center justify-center min-h-screen">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-300 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium text-purple-700">
              محصولات شلنگ
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            شلنگ های با کیفیت
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            شلنگ های برند ویتوس با بهترین متریال و کیفیت ساخته شده و مناسب برای استفاده در علم دوش ها می باشد
          </p>
        </div>

        {/* Products Grid - Matching TopProducts Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {ProductsData.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden border border-gray-200 relative">
                {/* Image Section */}
                <div className="relative p-3 bg-gradient-to-br from-gray-50 to-white">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Quality Badge */}
                    <div className="absolute top-1 right-1 bg-green-500 text-white px-1 py-0.5 rounded text-xs font-bold">
                      برتر
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-xs text-gray-800 group-hover:text-purple-600 transition-colors duration-300 leading-relaxed line-clamp-2">
                    {product.title}
                  </h3>
                  
                  {/* Features List */}
                  <div className="space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                        <span className="text-xs text-gray-600 leading-relaxed line-clamp-1">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center gap-1 bg-green-50 p-1 rounded">
                    <FaShieldAlt className="text-green-600 text-xs" />
                    <span className="text-xs text-green-700 font-medium">
                      گارانتی معتبر
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-1.5 px-2 rounded text-xs font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1">
                    <FaPhone className="text-xs" />
                    <a href="tel:09129628596" className="hover:text-white">
                      استعلام موجودی
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHose;
