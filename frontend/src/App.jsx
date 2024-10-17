import HomePage from "./landingPage/home/HomePage";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import AboutPage from "./landingPage/about/AboutPage.jsx";
import ProductsPage from "./landingPage/products/ProductsPage.jsx";
import PricingPage from "./landingPage/pricing/PricingPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import NotFound from "./landingPage/NotFound.jsx";
import Signup from "./landingPage/Signup.jsx";
import Pricinglayout from "./layouts/Pricinglayout.jsx";
import CurrencyPage from "./landingPage/pricing/CurrencyPage.jsx";
import CommodityPage from "./landingPage/pricing/CommodityPage.jsx";
import Login from "./landingPage/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/auth/signUp" element={<Signup />} />
      <Route path="/auth/Login" element={<Login />} />
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
