import React from "react";
import { FaHandshake, FaMapMarkerAlt, FaPhone, FaBuilding, FaUser, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const AgentSection = () => {
  const benefits = [
    {
      icon: <FaShieldAlt className="text-purple-600" />,
      title: "گارانتی معتبر",
      description: "تمام محصولات با گارانتی معتبر ارائه می‌شود"
    },
    {
      icon: <FaCheckCircle className="text-green-600" />,
      title: "کیفیت تضمینی",
      description: "کیفیت بالا و قیمت مناسب"
    },
    {
      icon: <FaPhone className="text-blue-600" />,
      title: "پشتیبانی ۲۴/۷",
      description: "پشتیبانی شبانه‌روزی برای نمایندگان"
    },
    {
      icon: <FaBuilding className="text-orange-600" />,
      title: "نمایندگی انحصاری",
      description: "نمایندگی انحصاری در شهر شما"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-300 px-4 py-2 rounded-full mb-6">
            <FaHandshake className="text-purple-600" />
            <p className="text-sm font-medium text-purple-700">
              نمایندگی در سراسر ایران
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
            جهت اخذ نمایندگی
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            برند ویتوس در حال گسترش شبکه نمایندگی خود در سراسر ایران است. 
            اگر شما هم می‌خواهید بخشی از این خانواده بزرگ باشید، 
            با ما تماس بگیرید.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              چرا نمایندگی ویتوس؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              با پیوستن به خانواده ویتوس، از مزایای زیر بهره‌مند شوید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">نمایندگی انحصاری</h4>
                  <p className="text-sm text-gray-600">نمایندگی انحصاری در شهر شما</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">پشتیبانی کامل</h4>
                  <p className="text-sm text-gray-600">پشتیبانی فنی و بازاریابی</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">سود تضمینی</h4>
                  <p className="text-sm text-gray-600">سود تضمینی و منصفانه</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">آموزش رایگان</h4>
                  <p className="text-sm text-gray-600">آموزش کامل محصولات و فروش</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">لوازم تبلیغاتی</h4>
                  <p className="text-sm text-gray-600">ارائه لوازم تبلیغاتی رایگان</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">تحویل سریع</h4>
                  <p className="text-sm text-gray-600">تحویل سریع و رایگان</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <FaPhone className="text-purple-600" />
                <span className="text-sm text-gray-700">09129628596</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-purple-600" />
                <span className="text-sm text-gray-700">سراسر ایران</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaUser className="text-purple-600" />
                <span className="text-sm text-gray-700">پشتیبانی نمایندگان</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="tel:09129628596"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaHandshake className="text-xl" />
              تماس برای نمایندگی
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSection; 