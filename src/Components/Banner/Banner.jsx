import React from "react";
import { FaTruck, FaShieldAlt, FaHeadset, FaGift } from "react-icons/fa";

const services = [
  {
    title: "ارسال رایگان",
    description: "ارسال رایگان به سراسر ایران برای سفارشات بالای 500 هزار تومان",
    icon: FaTruck,
    bgColor: "bg-blue-500",
  },
  {
    title: "گارانتی معتبر",
    description: "تمام محصولات شامل گارانتی 2 ساله و خدمات پس از فروش",
    icon: FaShieldAlt,
    bgColor: "bg-green-500",
  },
  {
    title: "پشتیبانی 24/7",
    description: "پشتیبانی شبانه روزی برای پاسخگویی به سوالات شما",
    icon: FaHeadset,
    bgColor: "bg-purple-500",
  },
  {
    title: "هدیه ویژه",
    description: "هدایای رایگان با هر سفارش شامل آچار، حوله و شانه رسوب گیر",
    icon: FaGift,
    bgColor: "bg-orange-500",
  },
];

const Banner = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-300 px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></div>
            <p className="text-xs font-medium text-purple-700">
              خدمات ویژه
            </p>
          </div>
          
          <h1 
            data-aos="fade-up" 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3"
          >
            خدمات ویژه ما
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-sm text-gray-600 leading-relaxed"
          >
            ما خدمات ویژه‌ای برای مشتریان عزیزمان ارائه می‌دهیم
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 border border-gray-100">
                {/* Service Icon */}
                <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-lg text-white" />
                </div>

                {/* Service Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
