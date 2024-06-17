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
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">
            {" "}
            Get Notified About new Products
          </h1>
          <input
            type="text"
            data-aos="fade-up"
            placeholder="Enter Your email"
            className="w-full p-3 rounded-lg text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SubScribe;
