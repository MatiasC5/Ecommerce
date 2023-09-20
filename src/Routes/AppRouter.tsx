import { Route, Routes } from "react-router-dom";
import { EcommerceApp } from "../EcommerceApp";
import { Cart } from "../components/Cart/Cart";
import { ProductInfo } from "../components/Products/ProductInfo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EcommerceApp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="product/:productId" element={<ProductInfo />} />
      <Route path="cart/product/:productId" element={<ProductInfo />} />
      <Route path="/*" element={<EcommerceApp />} />
    </Routes>
  );
};
