import React from "react";
import Layout from "../Components/Layout/Layout";
function AboutMe() {
  return (
    <>
      <Layout>
        <div className="container px-4 sm:px-6 md:px-12 py-8 sm:py-12">
          <div className="contact-item flex flex-col md:flex-row-reverse text-right gap-6">
            <div className="address md:pt-12 md:pb-6 w-full">
              <div className="item-aboutme md:text-lg pt-4 text-sm md:text-base">
                <span className="font-bold">
                  شرکت بازرگانی ویرا ساختمان سپهر با نام مستعار بازرگانی ویرا
                  از سال 1396 با تکیه بر توان تولید داخل ایران شروع به فعالیت
                  خود کرده است
                </span>
              </div>
              <div className="item-vtous md:text-lg pt-4 text-sm md:text-base">
                <span className="font-bold">
                  به بازار ایران و همسایگان عرضه می گردد
                </span>{" "}
                <a href="" className="font-bold text-primary">
                  vtous
                </a>{" "}
                <span className="font-bold">
                  تمامی محصولات تولیدی ما با اسم برند اختصاصی
                </span>
              </div>
              <div className="item-phalsaphe md:text-lg font-bold pt-4 text-sm md:text-base">
                <span>
                  فلسفه ی وجودی <b className="text-primary">ویتوس </b>ارائه
                  کیفیت و خدمات در علم دوش و شلنگ توالت است با توجه به کیفیت
                  بالا و میزان توان تولید در کشور عزیزمان ایران می باشد
                </span>
              </div>
              <div className="item-star md:text-lg pt-4 text-sm md:text-base">
                <a className="font-bold">
                  <span className="text-primary font-bold">
                    ارزش های برند ویتوس
                  </span>{" "}
                  <br />
                  ارج نهادن به تولید ملی ، تکریم مصرف کنندگان ، ارزش آفرینی و
                  بومی سازی دانش صنعتی و جهانی سازی برند و محصول ایرانی
                </a>
              </div>
              <div className="item-details md:text-lg pt-4 text-sm md:text-base">
                <a className="font-bold">
                  <span className="text-primary">
                    جزئیات متمایز در محصولات ویتوس
                  </span>{" "}
                  <br />
                  <span> تمامی محصولات برند ویتوس </span>
                  علاوه بر بیمه یکساله بر روی تمام محصولات خود از بهترین و با
                  کیفیت ترین متریال و مواد اولیه در محصولات خود استفاده می
                  نماید . باتوان بر دانش ملی و توان تولید کشور عزیزمان سعی بر
                  این داریم نام تولید را جهانی کنیم
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Layout>
    </>
  );
}

export default AboutMe;
