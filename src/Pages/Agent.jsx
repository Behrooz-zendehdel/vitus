import React, { useState } from "react";
import emailjs from "emailjs-com";
import Layout from "../Components/Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Agent = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    address: "",
    businessName: "",
    shopOwner: "بله",
    activityType: "پخش کننده",
    city: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // بررسی پر بودن فیلدها
    if (
      !formData.phone ||
      !formData.name ||
      !formData.address ||
      !formData.businessName ||
      !formData.city
    ) {
      setMessage("لطفا تمامی فیلدهای ضروری را پر کنید");
      return;
    }

    emailjs
      .send(
        "service_ylpx4rg",
        "template_lcqsbnh",
        formData,
        "oCfX3be4Ry8A3DO7A"
      )
      .then(
        (result) => {
          setMessage("");
          notify();
        },
        (error) => {
          setMessage("ارسال ایمیل با خطا مواجه شد. لطفا دوباره تلاش کنید");
        }
      );
  };

  const notify = () => {
    toast.success("سپاس از همراهی شما در اسرع وقت با شما تماس حاصل میشود ");
  };

  return (
    <Layout>
      <div className="container text-right">
        <div className="flex flex-col md:items-center md:justify-center pt-12 pb-12 w-full">
          <h1>جهت دریافت نمایندگی لطفا اطلاعات خود را ثبت و ارسال کنید</h1>
          <p className="pt-4 pb-12">
            بعد از بررسی احراز هویت کارشناسان مجموعه با شما تماس خواهند گرفت
          </p>
          {message && <p className="pb-4 text-red-500">{message}</p>}
          <div className="flex items-center justify-center border p-2 rounded-lg md:w-[600px]">
            <form className="w-full max-w-lg" onSubmit={sendEmail}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    نام و نام خانوادگی خود را وارد کنید
                  </label>
                  <input
                    className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="علی حسینی"
                    tabIndex="1"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    شماره تماس خود را وارد کنید
                  </label>
                  <input
                    className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="09121234567"
                    tabIndex="2"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    آدرس خود را وارد کنید
                  </label>
                  <input
                    className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    tabIndex="3"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    نام مجموعه خود را وارد کنید
                  </label>
                  <input
                    className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    tabIndex="4"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    آیا صاحب مغازه هستید؟
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full text-right bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="shopOwner"
                      value={formData.shopOwner}
                      onChange={handleChange}
                      tabIndex="5"
                    >
                      <option>بله</option>
                      <option>خیر</option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    نوع فعالیت خود را مشخص کنید
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full text-right bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="activityType"
                      value={formData.activityType}
                      onChange={handleChange}
                      tabIndex="6"
                    >
                      <option>پخش کننده</option>
                      <option>فروشگاه دار</option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-right">
                    نام شهر را وارد کنید
                  </label>
                  <input
                    className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    tabIndex="7"
                  />
                </div>
              </div>
              <div>
                <button
                  className="bg-secondary text-white hover:bg-primary font-bold py-2 px-2 rounded"
                  type="submit"
                  tabIndex="8"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Agent;
