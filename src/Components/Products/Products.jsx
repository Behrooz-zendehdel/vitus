import React from "react";

import { Link } from "react-router-dom";
import ariachrome from "../../assets/imageProducts/ariachrome/ariachrome-def.png";
import amazongold from "../../assets/imageProducts/amazongold/amazongold-def.png";
import antikchrome from "../../assets/imageProducts/antikchrome/antikchrome-def.png";
import khorshidchrome from "../../assets/imageProducts/khorshidchrome/khorshidchrome-def.png";
import zangolegold from "../../assets/imageProducts/zangolegold/zangolegold-def.png";
import homavip from "../../assets/imageProducts/homa/homavip-def.png";
import antikgold from "../../assets/imageProducts/antikgold/antikgold-def.png";
import antikmeshkigold from "../../assets/imageProducts/antikmeshkigold/antikmeshkigold-def.png";
import antikmeshkichrome from "../../assets/imageProducts/antikmeshkichrome/antikmeshkichrome-def.png";
import antiksefid from "../../assets/imageProducts/antiksefid/antiksefid-def.png";
import antiksefidgold from "../../assets/imageProducts/antiksefidgold/antiksefidgold-def.png";
import antiksefidchrome from "../../assets/imageProducts/aniksefidchrome/antiksefidchrome-def.png";
import ariagold from "../../assets/imageProducts/ariagold/ariagold-def.png";
import sadafchrome from "../../assets/imageProducts/sadafchrome/sadafchrome-def.png";
import dariarosobgir from "../../assets/imageProducts/dariarosobgir/dariarosobgir-def.png";
import zangolechrome from "../../assets/imageProducts/zangolechrome/zangolechrome-def.png";
import zangolesefidgole from "../../assets/imageProducts/zangolesefidgold/zangolesefidgold-def.png";
import amazonchrome from "../../assets/imageProducts/amazonchrome/amazonchrome-def.png";
const ProductImage = [
  {
    id: 1,
    image: ariachrome,
    title: "آریا کروم ",
    link: "product/1",
  },
  {
    id: 2,
    image: amazongold,
    title: "آمازون طلایی",
    link: "product/2",
  },
  {
    id: 3,
    image: antikchrome,
    title: "آنیتک کروم",
    link: "product/3",
  },

  {
    id: 4,
    image: antikgold,
    title: "آنیتک طلایی",
    link: "product/4",
  },
  {
    id: 5,
    image: antikmeshkigold,
    title: " آنیتک  مشکی طلایی",
    link: "product/5",
  },
  {
    id: 6,
    image: antikmeshkichrome,
    title: " آنیتک  مشکی کروم",
    link: "product/6",
  },
  {
    id: 7,
    image: antiksefid,
    title: " آنیتک  سفید",
    link: "product/7",
  },
  {
    id: 8,
    image: antiksefidchrome,
    title: "   آنیتک  سفید کروم",
    link: "product/8",
  },
  {
    id: 9,
    image: antiksefidgold,
    title: "   آنیتک  سفید طلایی",
    link: "product/9",
  },
  {
    id: 10,
    image: ariagold,
    title: "آریا طلایی",
    link: "product/10",
  },
  {
    id: 11,
    image: dariarosobgir,
    title: "دریا رسوب گیر",
    link: "product/11",
  },
  {
    id: 12,
    image: homavip,
    title: "هما وی ای پی ",
    link: "product/12",
  },
  {
    id: 13,
    image: khorshidchrome,
    title: "خورشید کروم   ",
    link: "product/13",
  },
  {
    id: 14,
    image: sadafchrome,
    title: "صدف کروم   ",
    link: "product/14",
  },
  {
    id: 15,
    image: zangolechrome,
    title: "زنگوله  کروم   ",
    link: "product/15",
  },
  {
    id: 16,
    image: zangolegold,
    title: "زنگوله  طلایی   ",
    link: "product/16",
  },
  {
    id: 17,
    image: zangolesefidgole,
    title: "زنگوله  سفید طلایی   ",
    link: "product/17",
  },
  {
    id: 18,
    image: amazonchrome,
    title: "  آمازون کروم    ",
    link: "product/18",
  },
];

const Products = () => {
  return (
    <div id="#products" className="mt-14 mb-12">
      <div>
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-primary">
            {" "}
            پرفروش ترین محصولات
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            علم دوش های دوکاره
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2"></p>
        </div>
        {/* body section  */}
        <div>
          <div className="container ">
            <div className="product-list grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8  grid-flow-dense ">
              {ProductImage.map((product) => (
                <div
                  key={product.id}
                  data-aos="zoom-in"
                  className="product-card sm:w-[200px] md:w-[200px] hover:bg-gray-200 hover:rounded-xl"
                >
                  <Link to={product.link}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
