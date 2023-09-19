import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filters";
import { CartProvider } from "./context/cart";
import { AppRouter } from "./Routes/AppRouter";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <FiltersProvider>
      <HashRouter>
        <React.StrictMode>
          <AppRouter />
        </React.StrictMode>
      </HashRouter>
    </FiltersProvider>
  </CartProvider>
);
