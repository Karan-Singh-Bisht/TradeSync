import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import HomePage from "./landingPage/home/HomePage.jsx";
import AboutPage from "./landingPage/about/AboutPage.jsx";
import ProductsPage from "./landingPage/products/ProductsPage.jsx";
import PricingPage from "./landingPage/pricing/PricingPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import SignUpPage from "./landingPage/signUp/signUpPage.jsx";
import NotFound from "./landingPage/NotFound.jsx";
import Pricinglayout from "./layouts/Pricinglayout.jsx";
import CurrencyPage from "./landingPage/pricing/CurrencyPage.jsx";
import CommodityPage from "./landingPage/pricing/CommodityPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<Pricinglayout />}>
        <Route path="tab-equities" element={<PricingPage />} />
        <Route path="tab-currency" element={<CurrencyPage />}></Route>
        <Route path="tab-commodities" element={<CommodityPage />}></Route>
      </Route>
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
