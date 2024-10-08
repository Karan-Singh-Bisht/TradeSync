import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landingPage/home/HomePage.jsx";
import AboutPage from "./landingPage/about/AboutPage.jsx";
import ProductsPage from "./landingPage/products/ProductsPage.jsx";
import Pricing from "./landingPage/home/Pricing.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import SignUpPage from "./landingPage/signUp/signUpPage.jsx";
import NotFound from "./landingPage/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
