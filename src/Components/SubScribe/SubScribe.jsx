import React from "react";
import { FaPhone, FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";

const contactMethods = [
  {
    icon: <FaPhone className="text-2xl" />,
    title: "تماس مستقیم",
    number: "02155840416",
    link: "tel:02155840416",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    title: "واتساپ",
    number: "09129628596",
    link: "https://wa.me/09129628596",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <FaTelegram className="text-2xl" />,
    title: "تلگرام",
    number: "09129628596",
    link: "https://t.me/vitus",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: <FaEnvelope className="text-2xl" />,
    title: "ایمیل",
    number: "info@vitus.ir",
    link: "mailto:info@vitus.ir",
    color: "from-purple-500 to-purple-600",
  },
];

const SubScribe = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-soft"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-soft"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-medium">نمایندگی در سراسر ایران</span>
          </div>
          
          <h1 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            جهت اخذ نمایندگی در سراسر ایران
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            با شماره‌های زیر تماس حاصل فرمایید و از مزایای نمایندگی ویتوس بهره‌مند شوید
          </p>
        </div>

        {/* Enhanced Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105 border border-white/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">
                  {method.title}
                </h3>
                
                <p className="text-white/80 font-num text-xl group-hover:text-white transition-colors duration-300">
                  {method.number}
                </p>
              </a>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-12">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">
              پاسخگویی 24/7 در تمام روزهای هفته
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubScribe;
