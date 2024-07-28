import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/image default testimonials.svg";
const TestimonialsData = [
  {
    id: 1,
    name: "بهروز زنده دل",
    text: "من اردیبهشت 1401 از این برند خرید کردم و خیلی راضی هستم",
    person: "مشتری",
  },
  {
    id: 2,
    name: "بهنام دهقانی",
    text: "وقتی میگن گارانتی واقعا بهش عمل میکنن من قطعه علم دوشم خراب شده بود بدون هزینه با تیپاکس برام ارسال کردند از شهر گرگان هستم",
    person: "مشتری",
  },
  {
    id: 3,
    name: "خشایار",
    text: "واقعا از لحاظ کیفیت درجه یک هستند وقتی بسته بندی رو دیدم باورم نمیشد این محصول ایرانی باشه",
    person: "مشتری",
  },
  {
    id: 5,
    name: "پور ابراهیمی",
    text: "همین که الن نصب روی بسته بندی وجود داشت برای من کلی ارزش داشت واقعا از کیفیت محصولتون راضی هستم",
    person: "مشتری",
  },
  {
    id: 6,
    name: "علیرضا",
    text: "من همکار هستم واقعا از نظر تنوع بی نظیر هستین هم قیمت ها خوبه و هم بسته بندی تون و همینطور کیفیت محصولات و خدماتتون",
    person: "همکار",
  },
  {
    id: 7,
    name: "دل آرام",
    text: "درسته قیمت هاتون از بازار یک مقدار بالاتر هستش ولی واقعا کیفیتتون عالیه من دوسال پیش علم دوش ارزون قیمت خریداری کردم سه ماه بیشتر برام کار نکرد ولی علم دوش شما نزدیک به دوساله مثل روز اولش داره کار میکنه",
    person: "مشتری",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 2,
  cssEase: "linear",
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // موبایل و تبلت
      settings: {
        slidesToShow: 1, // نمایش یک اسلاید در حالت موبایلی
      },
    },
    {
      breakpoint: 1024, // دسکتاپ
      settings: {
        slidesToShow: 3, // نمایش دو اسلاید در حالت دسکتاپ
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            نظرات مشتریان
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            بازرگانی ویرا
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            تولید کننده علم دوش های دوکاره ویتوس
          </p>
        </div>
        {/* Testimonials card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6 text-center">
                <div className="flex flex-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 shadow-lg py-6 px-6 mx-4 rounded-xl dark:text-white dark:bg-secondary relative min-h-[260px] max-h-[250px] hover:scale-90 duration-150 blur-sm hover:!blur-none ">
                  <div className="mb-4 flex justify-center items-center">
                    <img
                      src={image1}
                      alt={data.name}
                      className="rounded-full w-20 h-20 border  border-solid-gary p-3 bg-secondary "
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 flex-grow">
                    <div>
                      <h2 className="text-base font-bold dark:text-white text-right pb-2">
                        <span>{data.person}</span> : {data.name}
                      </h2>
                      <h1 className="text-base text-gray-500 dark:text-white line-clamp-3 text-right min-h-[100px] ">
                        {data.text}
                      </h1>
                    </div>
                  </div>
                  <p className="text-base text-black/20 font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
