import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import TopProducts from "../Components/TopProducts/TopProducts";
import Banner from "../Components/Banner/Banner";
import TestImonials from "../Components/TestImonials/TestImonials";
import ProductHose from "../Components/ProductHose/ProductHose";
import AgentSection from "../Components/AgentSection/AgentSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { FcCheckmark } from "react-icons/fc";
import { FaStar, FaShieldAlt, FaTruck, FaHeadset, FaArrowRight, FaPlay } from "react-icons/fa";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images
  const heroImages = [
    "/src/assets/Hero/anik-sefid-tala.png",
    "/src/assets/Hero/antik-sefid-chrome-2.png",
    "/src/assets/Hero/daria-rosobgir-3.png",
    "/src/assets/Hero/zangole-tala-4.png",
    "/src/assets/Hero/anik-sefid-tala-1.png"
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Layout>
      <main className="flex flex-col items-center">
        {/* Hero Section - Reverted with Smaller Size */}
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background Elements */}
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

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
              {/* Content - Smaller Size */}
              <div data-aos="fade-up" data-aos-delay="200" className="text-center lg:text-right space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-200 text-sm font-medium">برترین برند ایران</span>
                </div>

                {/* Main Title - Smaller */}
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-black mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                      علم دوش‌های
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      مدرن
                    </span>
                  </h1>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    تجربه‌ای متفاوت با برترین کیفیت، طراحی ساده و زیبا، ارسال به سراسر ایران
                  </p>
                </div>

                {/* Enhanced Features - Smaller */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <FaShieldAlt className="text-2xl text-green-400" />
                    <span className="text-gray-200 font-medium">کیفیت تضمینی</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <FaTruck className="text-2xl text-blue-400" />
                    <span className="text-gray-200 font-medium">ارسال رایگان</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <FaHeadset className="text-2xl text-purple-400" />
                    <span className="text-gray-200 font-medium">پشتیبانی ۲۴/۷</span>
                  </div>
                </div>

                {/* Stats - Smaller */}
                <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span>گارانتی ۲ ساله</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTruck className="text-blue-400" />
                    <span>ارسال رایگان</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-green-400" />
                    <span>کیفیت تضمینی</span>
                  </div>
                </div>

                {/* CTA Buttons - Smaller */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                    <span>مشاهده محصولات</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <FaPlay className="text-sm" />
                    <span>مشاهده ویدیو</span>
                  </button>
                </div>
              </div>

              {/* Enhanced Image Section - Smaller with Random Rotation */}
              <div data-aos="fade-left" data-aos-delay="400" className="relative">
                {/* Main Product Image */}
                <div className="relative z-20">
                  <div className="relative">
                    <img
                      src={heroImages[currentImageIndex]}
                      alt="علم دوش مدرن"
                      className="w-full h-auto max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Floating Elements - Smaller */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      جدید
                    </div>
                    
                    <div className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold">
                      پرفروش‌ترین
                    </div>
                  </div>
                </div>

                {/* Enhanced Glow Effects - Smaller */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl transform scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-2xl transform scale-110"></div>
                
                {/* Floating Icons - Smaller */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-2 animate-bounce">
                  <FaStar className="text-yellow-400 text-lg" />
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-2 animate-bounce" style={{animationDelay: '1s'}}>
                  <FaShieldAlt className="text-green-400 text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Smaller */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Special */}
        <div className="w-full">
          <Banner />
        </div>

        {/* Top Products */}
        <div className="w-full">
          <TopProducts />
        </div>

        {/* Product Hose - After Top Products */}
        <div className="w-full">
          <ProductHose />
        </div>

        {/* Agent Section */}
        <div className="w-full">
          <AgentSection />
        </div>

        {/* Testimonials */}
        <div className="w-full">
          <TestImonials />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
