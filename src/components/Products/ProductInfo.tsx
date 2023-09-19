import { useMemo } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

export const ProductInfo = () => {
  const { getProductById, product } = useProducts();
  const { productId } = useParams();
  useMemo(() => {
    getProductById(productId);
  }, [getProductById, productId]);

  return (
    <main>
      <section>
        <article key={product?.id}>
          {product?.title}
          <img
            src={product?.image}
            alt={product?.title}
            width={70}
            height={70}
          />
          <p>{product?.description}</p>
        </article>
      </section>
    </main>
  );
};
