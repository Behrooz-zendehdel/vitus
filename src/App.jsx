import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/ProductImage1";
import Product2 from "./Pages/ProductImage2";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";
import Representation from "./Pages/Representation";
import TopProducts from "./Components/TopProducts/TopProducts";
import ProductHose from "./Components/ProductHose/ProductHose";
import Banner from "./Components/Banner/Banner";
import SubScribe from "./Components/SubScribe/SubScribe";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Analytics from "./Components/Analytics/Analytics";
import Performance from "./Components/Performance/Performance";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Analytics />
        <Performance />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/Representation" element={<Representation />} />
          <Route path="/topproducts" element={<TopProducts />} />
          <Route path="/producthose" element={<ProductHose />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/subscribe" element={<SubScribe />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
