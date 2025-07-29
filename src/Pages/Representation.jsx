import React from "react";
import Layout from "../Components/Layout/Layout";
import { FaMapMarkerAlt, FaPhone, FaUser, FaBuilding, FaHandshake } from "react-icons/fa";

const representatives = [
  {
    id: 1,
    city: "ساری",
    address: "کمربندی شرقی جنب بیمارستان شفا فروشگاه لقمانی",
    phone: "09046575603",
    name: "آقای لقمانی",
    businessName: "فروشگاه لقمانی",
  },
  {
    id: 2,
    city: "یزد",
    address: "میدان مسکن خیابان مقداد فروشگاه لوله و اتصالات محسن شعبه 1",
    phone: "09133547875",
    name: "آقای محسن زارع",
    businessName: "بازرگانی محسن",
  },
  {
    id: 3,
    city: "یزد",
    address: "بلوار دانشجو نرسیده به رستوران سادات اخوی نبش کوچه صالحیه شعبه 2",
    phone: "09133547875",
    name: "آقای محسن زارع",
    businessName: "بازرگانی محسن",
  },
];

function Representation() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-300 px-4 py-2 rounded-full mb-6">
              <FaHandshake className="text-purple-600" />
              <p className="text-sm font-medium text-purple-700">
                نمایندگی‌های سراسر ایران
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
              نمایندگی‌های ما
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              نمایندگی‌های معتبر برند ویتوس در سراسر ایران آماده ارائه خدمات به شما عزیزان می‌باشند
            </p>
          </div>

          {/* Representatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {representatives.map((rep, index) => (
              <div
                key={rep.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100 p-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-purple-600 text-lg" />
                    <h3 className="font-bold text-lg text-gray-800">{rep.city}</h3>
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    #{rep.id}
                  </div>
                </div>

                {/* Business Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FaBuilding className="text-purple-600" />
                    <span className="text-sm text-gray-700 font-medium">{rep.businessName}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FaUser className="text-purple-600" />
                    <span className="text-sm text-gray-700">{rep.name}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {rep.address}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${rep.phone}`}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105"
                  >
                    <FaPhone className="text-sm" />
                    تماس
                  </a>
                  
                  <span className="text-xs text-gray-500">
                    {rep.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                می‌خواهید نماینده ما شوید؟
              </h3>
              <p className="text-gray-600 mb-6">
                اگر علاقه‌مند به همکاری با برند ویتوس هستید، فرم درخواست نمایندگی را پر کنید
              </p>
              <a
                href="/agent"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaHandshake className="text-lg" />
                درخواست نمایندگی
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Representation;
