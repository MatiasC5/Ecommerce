import { useContext } from "react";
import { CartContext, Product } from "../../context/cart";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  const { cart, addToCart, deleteFromCart } = useContext(CartContext);
  const productInCart = cart.find((item) => item.id === product.id);

  return (
    <article className="flex m-auto  justify-center items-center text-black gap-2 ">
      <img
        src={product.image}
        width={70}
        height={70}
        alt={product.title}
        className="object-contain"
      />
      <div className="flex flex-col w-full gap-3 items-center bg-slate-200">
        <Link to={`product/${product.id}`}>
          <h2 className="text-sm w-80 text-center">{product.title}</h2>
        </Link>
        <span className="text-3xl  bg-gray-700 w-28 text-white text-center ">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => {
            productInCart ? deleteFromCart(product) : addToCart(product);
          }}
        >
          {productInCart ? (
            <img
              width={30}
              height={30}
              src="https://icongr.am/material/cart-remove.svg?size=128&color=currentColor"
              alt="delete-from-cart-icon"
            />
          ) : (
            <img
              width={30}
              height={30}
              src="https://icongr.am/material/cart-arrow-down.svg?size=128&color=currentColor"
              className="cursor-pointer"
            />
          )}
        </button>
      </div>
    </article>
  );
};
