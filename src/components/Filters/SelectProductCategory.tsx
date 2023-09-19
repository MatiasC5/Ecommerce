import { useId } from "react";
import { useProducts } from "../../hooks/useProducts";

export const SelectProductCategory = () => {
  const productCategoryLabel = useId();
  const { handleProductCategory } = useProducts();

  return (
    <div className="flex flex-col w-44">
      <label htmlFor={productCategoryLabel}>Product Category</label>
      <select
        id={productCategoryLabel}
        className="cursor-pointer"
        onChange={handleProductCategory}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </div>
  );
};
