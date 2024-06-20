import React from "react";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import SubScribe from "./Components/SubScribe/SubScribe";
import AOS from "aos";
import "aos/dist/aos.css";
import TestImonials from "./Components/TestImonials/TestImonials";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-ease",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-secondary dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <SubScribe />
      <Products />
      <TestImonials />
      <Footer />
    </div>
  );
}

export default App;
