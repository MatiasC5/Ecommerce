import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

export const ProductInfo = () => {
  const { getProductById, product } = useProducts();
  const { productId } = useParams();
  useEffect(() => {
    getProductById(productId);
  }, [getProductById, productId]);

  return (
    <main className=" h-screen flex justify-center items-center ">
      <section className="w-2/4 h-4/5 flex justify-center border-2 border-black">
        <article key={product?.id} className="grid items-center w-4/5 ">
          <div className="flex justify-center  items-center w-full flex-col gap-8">
            <h2 className="text-3xl underline"> {product?.title}</h2>
            <img
              src={product?.image}
              alt={product?.title}
              width={260}
              height={260}
            />
          </div>

          <p className="text-xl ">
            {product?.description.slice(0, 1).toUpperCase()}
            {product?.description.slice(1)}
          </p>
        </article>
      </section>
    </main>
  );
};
