import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";
import { AppRouter } from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <FiltersProvider>
      <BrowserRouter>
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>
      </BrowserRouter>
    </FiltersProvider>
  </CartProvider>
);
