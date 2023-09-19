import { useId } from "react";
import { useProducts } from "../../hooks/useProducts";

export const SelectProductPrice = () => {
  const productPriceLabel = useId();
  const { handleProductPrice, filters } = useProducts();
  return (
    <div className="flex flex-col w-44">
      <label htmlFor={productPriceLabel}>Price</label>
      <input
        type="range"
        min="0"
        max="1000"
        id={productPriceLabel}
        value={filters.price}
        onChange={handleProductPrice}
      />
    </div>
  );
};
