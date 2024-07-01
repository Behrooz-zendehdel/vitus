import React from "react";
import BannerImg from "../../assets/Banner/Banner-man.avif";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center  ">
          {/* image section  */}
          <div>
            <img
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              src={BannerImg}
              alt=""
            />
          </div>
          {/* text details section  */}
          <div>
            <h3
              data-aos="fade-up"
              className="text-xl sm:text-xl font-bold text-center"
            >
              بسته بندی‌های با کیفیت برند ویتوس = هماهنگی بین زیبایی و عملکرد
            </h3>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5 text-right pt-4"
            >
              بسته بندی‌های جدید با برند ویتوس از جنبه‌های طراحی، کیفیت مواد
              استفاده شده و دقت در جزئیات، نمایانگر تعهد شرکت به ارائه محصولاتی
              با استانداردهای بالا و تجربه کاربری بی‌نظیر هستند
            </p>
            <div className="flex flex-col gap-4 items-end p-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p data-aos="fade-up">استانداردهای بالا</p>
              </div>
              <div data-aos="fade-up " className="flex items-center gap-4  ">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p data-aos="fade-up"> طراحی شگفت‌انگیز</p>
              </div>
            </div>
            <div className="flex flex-col items-end  gap-4 p-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p data-aos="fade-up">جزئیات دقیق</p>
              </div>
              <div data-aos="fade-up " className="flex items-center gap-4 ">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p data-aos="fade-up">تعهد به کیفیت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
