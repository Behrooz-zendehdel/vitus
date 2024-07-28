import React from "react";
import Banner from "../../assets/Banner/orange-pattern.avif";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const SubScribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gary-100 mb-10 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1 className="text-2xl text-center sm:text-left sm:text-xl font-semibold ">
            جهت اخذ نمایندگی در سراسر ایران با شماره زیر تماس حاصل فرمایید
          </h1>
          <a href="tel:09129474604" data-aos="fade-up" className=" font-num  cursor-pointer hover:text-primary ">
            09129474604
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubScribe;