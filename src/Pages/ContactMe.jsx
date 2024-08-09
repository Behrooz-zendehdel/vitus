import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
function ContactMe() {
  return (
    <Layout>
      <div className="container md:p-20 sm:p-12 ">
        <div className="contact-item flex flex-col text-right">
          <div className="flex  flex-row-reverse">
            <div className="address">
              <div className="item-daftar  md:text-xl   pt-4 sm:text-sm ">
                <a className="font-bold">
                  <span className="text-primary sm:font-bold">
                    آدرس دفتر مرکزی :
                  </span>{" "}
                  تهران - انتهای اتوبان نواب خیابان غلامرضایی بازار بورس کاشی و
                  سرامیک زمزم پلاک 249
                </a>
              </div>
              <div className="item-karkhane  md:text-xl   pt-4 sm:text-sm  ">
                <a className="font-bold">
                  <span className="text-primary sm:font-bold">
                    آدرس کارخانه :
                  </span>{" "}
                  اتوبان آزادگان خیابان امام خمینی کوچه علم و صنعت پلاک 408
                </a>
              </div>
              <div className="item-phone-daftar  md:text-xl   pt-4 sm:text-sm  ">
                <a className="font-bold">
                  <span className="text-primary sm:font-bold">
                    {" "}
                    تلفن دفتر :{" "}
                  </span>
                  55840416 -021
                </a>
              </div>
              <div className="item-phone-foorosh md:text-xl   pt-4 sm:text-sm  ">
                <a className="font-bold">
                  <span className="text-primary sm:font-bold">
                    {" "}
                    مدیریت فروش :{" "}
                  </span>
                  09129628596
                </a>
              </div>
              <div className="item-email md:text-xl   pt-4 sm:text-sm  ">
                <a className="text-primary sm:font-bold">
                  <span className="text-black">
                    ViraTradingTehran@gmail.com
                  </span>{" "}
                  : ایمیل
                </a>
              </div>
              <div className="flex  pt-4 flex-row-reverse items-center justify-start">
                <a
                  href=""
                  className="ml-5  md:text-xl  sm:text-sm text-primary sm:font-bold "
                >
                  : شبکه های اجتماعی
                </a>

                <div className=" flex gap-4">
                  <a href="#" title="اینستاگرام">
                    <FaInstagram className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#" title="فیسبوک">
                    <FaFacebook className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#" title="واتساپ">
                    <FaWhatsapp className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#" title="یوتیوب">
                    <FaYoutube className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#" title="تلگرام">
                    <FaTelegram className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#" title="لینکدین">
                    <FaLinkedin className="text-3xl cursor-pointer hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                </div>
              </div>
              <div className="item-download-catalog pt-4  md:text-xl sm:text-sm text-primary sm:font-bold">
                <a href="#">لینک دانلود کاتالوگ</a>
              </div>
              <div className="item-download-catalog pt-4 md:text-xl sm:text-sm text-primary sm:font-bold ">
                <a href="#"> لینک دانلود لیست قیمت</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] sm:pt-12 text-center">
            <h3 href="" className="font-bold">
              به راحتی ما را در نقشه پیدا کن
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d405.296834139061!2d51.3641331!3d35.6431395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01ea0fd8bcf1%3A0x77f753c800bb7a62!2z2b7Yrti0INmI24zYsdinKNqv2LHZiNmHINio2KfYstix2q_Yp9mG24wg2LLbjNmG2YTbjCDZvtmI2LEp!5e0!3m2!1sen!2s!4v1720001608396!5m2!1sen!2s"
              // className="sm:w-[100px]"
              loading="lazy"
              width="350"
              height="300"
              className="border-0 w-full h-full pt-4 pb-8"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactMe;
