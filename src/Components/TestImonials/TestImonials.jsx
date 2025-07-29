import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaUser, FaMapMarkerAlt, FaHeart, FaPlus, FaPaperPlane } from "react-icons/fa";

const TestimonialsData = [
  {
    id: 1,
    name: "بهروز زنده دل",
    text: "من اردیبهشت 1401 از این برند خرید کردم و خیلی راضی هستم. کیفیت محصولات واقعاً عالی است.",
    person: "مشتری",
    rating: 5,
    location: "تهران",
  },
  {
    id: 2,
    name: "بهنام دهقانی",
    text: "وقتی میگن گارانتی واقعا بهش عمل میکنن. من قطعه علم دوشم خراب شده بود بدون هزینه با تیپاکس برام ارسال کردند.",
    person: "مشتری",
    rating: 5,
    location: "گرگان",
  },
  {
    id: 3,
    name: "خشایار",
    text: "واقعا از لحاظ کیفیت درجه یک هستند. وقتی بسته بندی رو دیدم باورم نمیشد این محصول ایرانی باشه.",
    person: "مشتری",
    rating: 5,
    location: "اصفهان",
  },
  {
    id: 4,
    name: "پور ابراهیمی",
    text: "همین که الن نصب روی بسته بندی وجود داشت برای من کلی ارزش داشت. واقعا از کیفیت محصولتون راضی هستم.",
    person: "مشتری",
    rating: 5,
    location: "شیراز",
  },
  {
    id: 5,
    name: "علیرضا",
    text: "من همکار هستم واقعا از نظر تنوع بی نظیر هستین. هم قیمت ها خوبه و هم بسته بندی تون و همینطور کیفیت محصولات.",
    person: "همکار",
    rating: 5,
    location: "مشهد",
  },
  {
    id: 6,
    name: "دل آرام",
    text: "درسته قیمت هاتون از بازار یک مقدار بالاتر هستش ولی واقعا کیفیتتون عالیه. من دوسال پیش علم دوش ارزون قیمت خریداری کردم سه ماه بیشتر برام کار نکرد ولی علم دوش شما نزدیک به دوساله مثل روز اولش داره کار میکنه.",
    person: "مشتری",
    rating: 5,
    location: "یزد",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    person: "مشتری",
    rating: 5,
    location: "",
  });

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('vitusTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      // If no saved testimonials, use default data
      setTestimonials(TestimonialsData);
      localStorage.setItem('vitusTestimonials', JSON.stringify(TestimonialsData));
    }
  }, []);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.text || !formData.location) {
      alert("لطفاً تمام فیلدها را پر کنید");
      return;
    }

    const newTestimonial = {
      id: Date.now(), // Use timestamp for unique ID
      ...formData,
      text: formData.text.trim()
    };

    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    
    // Save to localStorage
    localStorage.setItem('vitusTestimonials', JSON.stringify(updatedTestimonials));
    
    setFormData({
      name: "",
      text: "",
      person: "مشتری",
      rating: 5,
      location: "",
    });
    setShowForm(false);
    
    // Show success message
    alert("نظر شما با موفقیت ثبت شد!");
  };

  return (
    <div className="py-12 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-300 px-3 py-1 rounded-full mb-4">
            <FaHeart className="text-purple-600 text-sm" />
            <p className="text-xs font-medium text-purple-700">
              نظرات مشتریان
            </p>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">
            نظرات مشتریان
          </h1>
          
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            مشتریان عزیز ما نظرات خود را در مورد کیفیت محصولات و خدمات ما به اشتراک می‌گذارند
          </p>
        </div>

        {/* Add Testimonial Form */}
        {showForm && (
          <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">نظر خود را ثبت کنید</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام شما</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">شهر</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="شهر خود را وارد کنید"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نوع کاربر</label>
                <select
                  name="person"
                  value={formData.person}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="مشتری">مشتری</option>
                  <option value="همکار">همکار</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">امتیاز</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`text-2xl transition-colors duration-200 ${
                        star <= formData.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      <FaStar />
                    </button>
                  ))}
                  <span className="text-sm text-gray-600 mr-2">({formData.rating}/5)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">نظر شما</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="نظر خود را در مورد محصولات و خدمات ما بنویسید..."
                  required
                />
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaPaperPlane className="text-sm" />
                  ثبت نظر
                </button>
                
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="inline-flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Rotating Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentIndex 
                  ? "transform scale-105 opacity-100" 
                  : "transform scale-95 opacity-60"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-5 border border-purple-100 relative overflow-hidden h-full">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-transparent rounded-full -translate-y-8 translate-x-8 opacity-50"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-3 right-3 text-2xl text-purple-200">
                  <FaQuoteLeft />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-xs leading-relaxed mb-4 min-h-[60px] relative z-10 text-center mt-4">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex flex-col items-center gap-2 relative z-10 mb-4">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaUser className="text-purple-500" />
                        <span>{testimonial.person}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-purple-500" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating - Bottom Left */}
                <div className="flex items-center gap-1 absolute bottom-3 left-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs ${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Testimonial Button - Below Comments */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaPlus className="text-sm" />
            افزودن نظر جدید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
