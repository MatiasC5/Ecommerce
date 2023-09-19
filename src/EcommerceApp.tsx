import { CartIcon } from "./components/Cart/CartIcon";
import { Filters } from "./components/Filters/Filters";
import { Products } from "./components/Products/Products";

export const EcommerceApp = () => {
  return (
    <main className="p-4 h-screen">
      <h1 className={"text-center text-2xl mt-2 "}>NoHayNombre Tienda</h1>
      <CartIcon />
      <Filters />
      <Products />
    </main>
  );
};
