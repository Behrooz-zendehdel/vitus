import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import SubScribe from "./Components/SubScribe/SubScribe";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";
import Agent from "./Pages/Agent";

import Product from "./Components/Products/Product";
import ProductHose from "./Components/ProductHose/ProductHose";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="products" element={<Products />} />
        <Route path="/top products" element={<TopProducts />} />
        <Route path="productHose" element={<ProductHose />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/subscribe" element={<SubScribe />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
