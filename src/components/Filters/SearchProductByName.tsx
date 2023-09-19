import { useId } from "react";
import { useProducts } from "../../hooks/useProducts";

export const SearchProductByName = () => {
  const productNameLabel = useId();
  const { searchProductByName } = useProducts();
  return (
    <div className="flex flex-col w-44">
      <label htmlFor={productNameLabel}>Search Product</label>
      <input
        type="text"
        placeholder="Product name..."
        id={productNameLabel}
        onChange={searchProductByName}
      />
    </div>
  );
};
