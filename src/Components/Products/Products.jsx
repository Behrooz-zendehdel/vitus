import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 1",
    titleEn: "Product 1",
    descFa: "توضیحات محصول 1 به فارسی",
    descEn: "Product 1 description in English",
    phone: "021-12345678",
    whatsapp: "9123456789",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 2",
    titleEn: "Product 2",
    descFa: "توضیحات محصول 2 به فارسی",
    descEn: "Product 2 description in English",
    phone: "021-87654321",
    whatsapp: "9876543210",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 3",
    titleEn: "Product 3",
    descFa: "توضیحات محصول 3 به فارسی",
    descEn: "Product 3 description in English",
    phone: "021-11223344",
    whatsapp: "9988776655",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 4",
    titleEn: "Product 4",
    descFa: "توضیحات محصول 4 به فارسی",
    descEn: "Product 4 description in English",
    phone: "021-55667788",
    whatsapp: "9112233445",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 5",
    titleEn: "Product 5",
    descFa: "توضیحات محصول 5 به فارسی",
    descEn: "Product 5 description in English",
    phone: "021-99001122",
    whatsapp: "9223344556",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 6",
    titleEn: "Product 6",
    descFa: "توضیحات محصول 6 به فارسی",
    descEn: "Product 6 description in English",
    phone: "021-33445566",
    whatsapp: "9334455667",
  },
  {
    id: 7,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 7",
    titleEn: "Product 7",
    descFa: "توضیحات محصول 7 به فارسی",
    descEn: "Product 7 description in English",
    phone: "021-77889900",
    whatsapp: "9445566778",
  },
  {
    id: 8,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 8",
    titleEn: "Product 8",
    descFa: "توضیحات محصول 8 به فارسی",
    descEn: "Product 8 description in English",
    phone: "021-12345678",
    whatsapp: "9556677889",
  },
  {
    id: 9,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 9",
    titleEn: "Product 9",
    descFa: "توضیحات محصول 9 به فارسی",
    descEn: "Product 9 description in English",
    phone: "021-87654321",
    whatsapp: "9667788990",
  },
  {
    id: 10,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 10",
    titleEn: "Product 10",
    descFa: "توضیحات محصول 10 به فارسی",
    descEn: "Product 10 description in English",
    phone: "021-11223344",
    whatsapp: "9778899001",
  },
  {
    id: 11,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 11",
    titleEn: "Product 11",
    descFa: "توضیحات محصول 11 به فارسی",
    descEn: "Product 11 description in English",
    phone: "021-55667788",
    whatsapp: "9889900112",
  },
  {
    id: 12,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 12",
    titleEn: "Product 12",
    descFa: "توضیحات محصول 12 به فارسی",
    descEn: "Product 12 description in English",
    phone: "021-99001122",
    whatsapp: "9990011223",
  },
  {
    id: 13,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 13",
    titleEn: "Product 13",
    descFa: "توضیحات محصول 13 به فارسی",
    descEn: "Product 13 description in English",
    phone: "021-33445566",
    whatsapp: "9112233445",
  },
  {
    id: 14,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 14",
    titleEn: "Product 14",
    descFa: "توضیحات محصول 14 به فارسی",
    descEn: "Product 14 description in English",
    phone: "021-77889900",
    whatsapp: "9223344556",
  },
  {
    id: 15,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 15",
    titleEn: "Product 15",
    descFa: "توضیحات محصول 15 به فارسی",
    descEn: "Product 15 description in English",
    phone: "021-12345678",
    whatsapp: "9334455667",
  },
  {
    id: 16,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 16",
    titleEn: "Product 16",
    descFa: "توضیحات محصول 16 به فارسی",
    descEn: "Product 16 description in English",
    phone: "021-87654321",
    whatsapp: "9445566778",
  },
  {
    id: 17,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 17",
    titleEn: "Product 17",
    descFa: "توضیحات محصول 17 به فارسی",
    descEn: "Product 17 description in English",
    phone: "021-11223344",
    whatsapp: "9556677889",
  },
  {
    id: 18,
    img: "https://via.placeholder.com/150",
    titleFa: "محصول 18",
    titleEn: "Product 18",
    descFa: "توضیحات محصول 18 به فارسی",
    descEn: "Product 18 description in English",
    phone: "021-55667788",
    whatsapp: "9667788990",
  },
];

const Products = ({ lang }) => (
  <section className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map(product => (
      <div key={product.id} className="card flex flex-col items-center justify-between text-center">
        <img src={product.img} alt={product.title} className="w-32 h-32 object-contain mb-4" />
        <h2 className="font-bold text-lg mb-2">{lang === 'fa' ? product.titleFa : product.titleEn}</h2>
        <p className="text-gray-500 mb-4">{lang === 'fa' ? product.descFa : product.descEn}</p>
        <div className="flex gap-4 justify-center">
          <a href={`tel:${product.phone}`} className="text-primary text-xl" title="تماس"><FaPhoneAlt /></a>
          <a href={`https://wa.me/${product.whatsapp}`} className="text-primary text-xl" title="واتساپ"><FaWhatsapp /></a>
        </div>
      </div>
    ))}
  </section>
);

export default Products;
