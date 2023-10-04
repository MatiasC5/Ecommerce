import { useFilters } from "../../hooks/useFilters";
import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
  const { products } = useProducts();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <section className="products-list grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] mt-6  gap-8">
      {filteredProducts.map((product) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        );
      })}
    </section>
  );
};
