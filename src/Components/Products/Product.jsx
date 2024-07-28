import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
// --------
import ariachrome1 from "../../assets/imageProducts/ariachrome/ariachrome1.png";
import ariachrome2 from "../../assets/imageProducts/ariachrome/ariachrome2.png";
import ariachrome3 from "../../assets/imageProducts/ariachrome/ariachrome3.png";
import ariachrome4 from "../../assets/imageProducts/ariachrome/ariachrome4.png";
import ariachrome5 from "../../assets/imageProducts/ariachrome/ariachrome5.png";
import ariachrome6 from "../../assets/imageProducts/ariachrome/ariachrome6.png";
// ----------
import amazongold1 from "../../assets/imageProducts/amazongold/amazongold1.png";
import amazongold2 from "../../assets/imageProducts/amazongold/amazongold2.png";
import amazongold3 from "../../assets/imageProducts/amazongold/amazongold3.png";
import amazongold4 from "../../assets/imageProducts/amazongold/amazongold4.png";
import amazongold5 from "../../assets/imageProducts/amazongold/amazongold5.png";
// ---------
import antikchrome1 from "../../assets/imageProducts/antikchrome/antikchrome1.png";
import antikchrome2 from "../../assets/imageProducts/antikchrome/antikchrome2.png";
import antikchrome3 from "../../assets/imageProducts/antikchrome/antikchrome3.png";
import antikchrome4 from "../../assets/imageProducts/antikchrome/antikchrome4.png";
import antikchrome5 from "../../assets/imageProducts/antikchrome/antikchrome5.png";
// -----------
import antiksefidchrome from "../../assets/imageProducts/antiksadafchrome/A-DSC_5492.jpg";
import Slider from "react-slick";
// ----------------------------------
import ariagold11 from "../../assets/imageProducts/ariagold/ariagold11.png";
import ariagold22 from "../../assets/imageProducts/ariagold/ariagold22.png";
import ariagold33 from "../../assets/imageProducts/ariagold/ariagold33.png";
import ariagold44 from "../../assets/imageProducts/ariagold/ariagold44.png";
// import ariagold5 from "../../assets/imageProducts/ariagold/ariagold5.jpg";
import ariagold66 from "../../assets/imageProducts/ariagold/ariagold66.png";
// import ariagold7 from "../../assets/imageProducts/ariagold/ariagold7.jpg";
// ----------------------
import amazonchrome11 from "../../assets/imageProducts/amazonchrome/amazonchrom11.png";
import amazonchrome22 from "../../assets/imageProducts/amazonchrome/amazonchrom22.png";
import amazonchrome33 from "../../assets/imageProducts/amazonchrome/amazonchrom33.png";
import amazonchrome44 from "../../assets/imageProducts/amazonchrome/amazonchrom44.png";
const ProductImage = [
  {
    id: 1,
    images: [
      ariachrome1,
      ariachrome2,
      ariachrome3,
      ariachrome4,
      ariachrome5,
      ariachrome6,
    ],
    title: "آریا کروم ",
    desc1: "قابلیت ترکیب آب و هوا جهت فشار آب بیشتر ",
    desc2: "سردوش و گوشی ای بی اس با جوش پلاستیک",
    desc3: "سیستم کاهنده مصرف آب",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ",
  },
  {
    id: 10,
    images: [
      ariagold11,
      ariagold22,
      ariagold33,
      ariagold44,
      // ariagold5,
      ariagold66,
      // ariagold7,
    ],
    title: "آریا طلایی ",
    desc1: "قابلیت ترکیب آب و هوا جهت فشار آب بیشتر ",
    desc2: "سردوش و گوشی ای بی اس با جوش پلاستیک",
    desc3: "سیستم کاهنده مصرف آب",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ",
  },
  {
    id: 2,
    images: [amazongold1, amazongold2, amazongold3, amazongold4, amazongold5],
    title: "آمازون طلایی",
    desc1: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc2: "طراحی خاص لوله و سردوش و گوشی ",
    desc3: "امکان ترکیب آب و هوا جهت افزایش فشارآب و کاهش مصرف ",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ",
  },
  {
    id: 18,
    images: [amazonchrome11, amazonchrome22, amazonchrome33, amazonchrome44],
    title: "آمازون کروم",
    desc1: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc2: "طراحی خاص لوله و سردوش و گوشی ",
    desc3: "امکان ترکیب آب و هوا جهت افزایش فشارآب و کاهش مصرف ",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ",
  },
  {
    id: 3,
    images: [
      antikchrome1,
      antikchrome2,
      antikchrome3,
      antikchrome4,
      antikchrome5,
    ],
    title: "آنتیک کروم ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 4,
    images: [],
    title: "آنتیک طلایی ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 5,
    images: [],
    title: "آنتیک مشکی طلایی ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 6,
    images: [],
    title: "آنتیک مشکی کروم ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 7,
    images: [],
    title: "آنتیک  سفید ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 8,
    images: [],
    title: "آنتیک  سفید کروم ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 9,
    images: [],
    title: "آنتیک  سفید طلایی ",
    desc1: "قیمت اقتصادی ",
    desc2: "سردوش تمام ای بی اس با اتصال 20 عدد پیچ آلومینیومی",
    desc3: "استقاده از نازل های یک تیکه جهت سهولت در تمیز کردن",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 14,
    images: [],
    title: " صدف کروم",
    desc1: "قیمت اقتصادی",
    desc2: "سردوش و گوشی تمام ای بی اس با جوش تمام پلاستیک",
    desc3: "امکان ترکیب آب و هوا جهت افزایش فشارآب و کاهش مصرف ",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 11,
    images: [],
    title: " دریا رسوب گیر",
    desc1: "امکان رسوب زدایی سردوش بزرگ و گوشی به صورت دستی",
    desc2: "استفاده از بهترین متریال در سردوش و گوشی",
    desc3: "گوشی دستی با قابلیت پاشش آب در سه حالت ",
    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 13,
    images: [],
    title: "خورشید کروم",
    desc1: "طراحی لوکس و خاص لوله و سردوشو گوشی",
    desc2: "امکان انتخاب در 8 رنگ مختلف",
    desc3: "امکان ترکیب آب و هوا جهت افزایش فشارآب و کاهش مصرف ",

    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 16,
    images: [],
    title: "زنگوله طلایی",
    desc1: "نازل های یک تیکه جهت سهولت در تمیز کاری",
    desc2: "اتصال سردوش بزرگ با پیچ های آلومینیومی",
    desc3: "طراحی لوکس و خاص لوله و سردوشو گوشی",

    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 15,
    images: [],
    title: "زنگوله کروم",
    desc1: "نازل های یک تیکه جهت سهولت در تمیز کاری",
    desc2: "اتصال سردوش بزرگ با پیچ های آلومینیومی",
    desc3: "طراحی لوکس و خاص لوله و سردوشو گوشی",

    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 17,
    images: [],
    title: "زنگوله سفید طلایی",
    desc1: "نازل های یک تیکه جهت سهولت در تمیز کاری",
    desc2: "اتصال سردوش بزرگ با پیچ های آلومینیومی",
    desc3: "طراحی لوکس و خاص لوله و سردوشو گوشی",

    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
  {
    id: 12,
    images: [],
    title: "هما وی ای پی",
    desc1: "سردوش خاص و بزرگ سایز 30 در 30 ",
    desc2: "سه راهی و گوشی فیکس روی دیوار ",
    desc3: "امکان ترکیب آب و هوا جهت افزایش فشارآب و کاهش مصرف ",

    desc4: "یکسال بیمه محصول حتی پس از استفاده ", //این روی همه اش باید باشه
  },
];

function Product() {
  const { id } = useParams();
  const product = ProductImage.find((p) => p.id === Number(id));

  if (!product) {
    return <div>محصول پیدا نشد</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    autopaly: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <div className="container">
        <div className="product-details md:p-12 sm:p-4 grid sm:grid-cols-1 md:grid-cols-2   ">
          <div className="image-details justify-center items-center ">
            <div className="slider-container w-[200px] h-[200px] mb-[40px] ">
              <Slider {...settings}>
                {product.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      className="w-[200px] h-[200px] pt-4"
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="thumbnail-container">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail "
                />
              ))}
            </div>
          </div>
          <div className="desc-details flex-1 p-4 text-end">
            <h1 className="font-bold md:text-2xl sm:text-xl ">
              علم دوش ویتوس مدل {product.title}
            </h1>
            <p className="sm:text-xl md:text-xl text-gray-500 pt-2">
              {product.descdetail}
            </p>
            <ul>
              <li className="font-bold text-gray-400 bg-gray-200 flex text-center m-2 p-2 justify-end  ">
                {product.desc1}
              </li>
              <li className="font-bold text-gray-400  bg-gray-200 flex text-center m-2 p-2 justify-end ">
                {product.desc2}
              </li>
              <li className="font-bold text-gray-400  bg-gray-200 flex text-center m-2 p-2 justify-end ">
                {product.desc3}
              </li>
              <li className="font-bold text-gray-400  bg-gray-200 flex text-center m-2 p-2 justify-end ">
                {product.desc4}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
