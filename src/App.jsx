import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import SubScribe from "./Components/SubScribe/SubScribe";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/top products" element={<TopProducts />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/subscribe" element={<SubScribe />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
