import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";
import { SiMaterialdesignicons } from "react-icons/si";
import imagepack from "../../assets/package.jpg";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center  ">
          {/* image section  */}
          <div className="pt-8 pb-8">
            <img
              className="max-w-[400px] h-[250px] w-full mx-auto   scale-125  "
              src={imagepack}
              alt="package"
            />
          </div>
          {/* text details section  */}
          <div className="">
            <h3
              data-aos="fade-up"
              className="text-xl sm:text-xl font-bold text-center "
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
            <div className="flex justify-evenly gap-4 items-end p-4 ">
              <div
                data-aos="fade-up"
                className="flex items-center gap-2 justify-between  p-2  w-[200px]"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <span data-aos="fade-up">استانداردهای بالا</span>
              </div>
              <div
                data-aos="fade-up "
                className="flex items-center gap-2 justify-between  p-2  w-[200px]  "
              >
                <SiMaterialdesignicons className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <span data-aos="fade-up "> طراحی شگفت‌انگیز</span>
              </div>
            </div>
            <div className="flex justify-evenly items-end  gap-4 p-4">
              <div
                data-aos="fade-up"
                className="flex items-center gap-2 justify-between   p-2  w-[200px]"
              >
                <SlMagnifier className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <span data-aos="fade-up">جزئیات دقیق</span>
              </div>
              <div
                data-aos="fade-up "
                className="flex items-center gap-2 justify-between  p-2  w-[200px] "
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <span data-aos="fade-up">تعهد به کیفیت</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
