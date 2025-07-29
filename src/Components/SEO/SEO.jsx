import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ 
  title = "ویتوس - علم دوش مدرن و ساده",
  description = "خرید بهترین علم دوش‌های مدرن ویتوس با طراحی ساده و کیفیت عالی.",
  lang = 'fa',
  dir = 'rtl',
  keywords = "علم دوش, دوش, ویتوس, مدرن, ساده, خرید دوش",
  image = "/logo.png",
  url = window.location.href,
  type = "website"
}) => (
  <Helmet htmlAttributes={{ lang, dir }}>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content="ویتوس" />
    <meta property="og:locale" content="fa_IR" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="ویتوس" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#7c3aed" />
    <link rel="canonical" href={url} />
  </Helmet>
);

export default SEO; 