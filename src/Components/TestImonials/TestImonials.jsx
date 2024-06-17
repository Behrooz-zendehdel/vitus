import React from "react";
import Slider from "react-slick";

const TestImonialsData = [
  {
    id: 1,
    name: "بهروز زنده دل",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 2,
    name: "بهنام دهقانی",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 3,
    name: "خشایار",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "الهام ",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 6,
    name: "علیرضا",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 7,
    name: "دل آرام",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    img: "https://picsum.photos/103/103",
  },
];

var setting = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToScroll: 1,
};

const TestImonials = () => {
  return (
    <div className="py-10">
      <div className="container">
        {
          // Header section
        }
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            {" "}
            نظرات مشتریان{" "}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            بازرگانی ویتوس
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            architecto neque suscipit blanditiis laborum adipisci!
          </p>
        </div>
        {/* Testimonials card  */}
        <div data-aos="zoom-in">
          <Slider {...setting}>
            {TestImonialsData.map((data) => (
              <div key={data.id} className="my-6 text-center">
                <div className="flex flex-col sm:flex-col-1 md:flex-col-2 lg:flex-col-3 xl:flex-col-5 gap-1 shadow-lg py-6 px-6 mx-4 rounded-xl dark:text-white dark:bg-gray-800  relative">
                  <div className="mb-4 flex justify-center items-center">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="">
                      <h1 className="text-xs text-gray-500 dark:text-white">
                        {data.text}
                      </h1>
                      <h2 className="text-xl font-bold text-black/8- dark:text-light">
                        {data.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 "></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestImonials;
