import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft, FaShieldAlt, FaTruck, FaHeadset, FaStar } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects - Matching Header */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-blue-900/50"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-xl font-bold text-gray-800 bg-transparent border-0 p-0 m-0 focus:outline-none"
                style={{ background: 'none' }}
              >
                ویتوس
              </button>
            </div>
            
            {/* Promotional Slogan */}
            <div className="mb-6">
              <h2 className="text-lg text-purple-200 font-medium mb-2">
                علم دوش‌های مدرن، تجربه‌ای متفاوت
              </h2>
              <p className="text-sm text-gray-300">
                با کیفیت برتر، قیمت مناسب و ارسال رایگان به سراسر ایران
              </p>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              برترین تولیدکننده علم دوش‌های مدرن و با کیفیت در ایران. 
              ما با بیش از ۱۰ سال تجربه، بهترین محصولات را با قیمت مناسب ارائه می‌دهیم.
            </p>
            
            {/* Feature Cards - Matching Header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <FaShieldAlt className="text-2xl text-green-400" />
                <span className="text-gray-200 font-medium text-sm">کیفیت تضمینی</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <FaTruck className="text-2xl text-blue-400" />
                <span className="text-gray-200 font-medium text-sm">ارسال رایگان</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <FaHeadset className="text-2xl text-purple-400" />
                <span className="text-gray-200 font-medium text-sm">پشتیبانی ۲۴/۷</span>
              </div>
            </div>

            {/* Contact Button */}
            <a 
              href="tel:09129628596"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium"
            >
              <FaPhone className="text-sm" />
              تماس با ما
            </a>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">دسترسی سریع</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('top-products')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <FaArrowLeft className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  محصولات برتر
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('product-hose')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <FaArrowLeft className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  محصولات شلنگ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <FaArrowLeft className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  خدمات ویژه
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('agent-section')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <FaArrowLeft className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  نمایندگی
                </button>
              </li>
              <li>
                <Link to="/aboutme" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <FaArrowLeft className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">اطلاعات تماس</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-medium">۰۲۱-۵۵۸۴۰۴۱۶</p>
                  <p className="text-sm text-gray-400">تلفن ثابت</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-medium">۰۹۱۲-۹۶۲۸۵۹۶</p>
                  <p className="text-sm text-gray-400">موبایل</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-medium">info@vitus.ir</p>
                  <p className="text-sm text-gray-400">ایمیل</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-medium">تهران، خیابان ولیعصر</p>
                  <p className="text-sm text-gray-400">آدرس</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-center md:text-right">
              © ۲۰۲۴ ویتوس. تمام حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaStar className="text-yellow-400" />
              <span className="text-sm">برترین برند ایران</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
