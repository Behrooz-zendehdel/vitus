import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../Button/Button";
import SEO from "../SEO/SEO";

const Layout = ({ children, seoProps = {} }) => {
  return (
    <div className="bg-white min-h-screen text-gray-700">
      <SEO {...seoProps} />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
