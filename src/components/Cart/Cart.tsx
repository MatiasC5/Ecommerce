import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { useContext } from "react";

export const Cart = () => {
  const { cart, addToCart, substractFromCart, deleteFromCart } =
    useContext(CartContext);
  return (
    <main>
      <section className="w-auto   flex justify-center items-center ">
        <ul className="w-2/3">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex  border-2 border-gray-400 mt-4 p-1"
            >
              <div className="flex w-full  gap-2 items-center m-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
                <Link to={`product/${product.id}`}>
                  <h3 className="text-md truncate hover:underline cursor-pointer">
                    {" "}
                    {product.title}
                  </h3>
                </Link>
              </div>
              <div className="flex flex-col items-center m-auto ">
                <span>${product.price.toFixed(2)}</span>
                <strong className=" flex flex-col text-center">
                  {product.quantity}{" "}
                  <div className="flex gap-2 p-2">
                    <button
                      className="bg-blue-600 w-6"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    <button
                      className="bg-blue-600 w-6"
                      onClick={() => substractFromCart(product)}
                    >
                      -
                    </button>
                    <button
                      className="bg-red-400 w-6"
                      onClick={() => deleteFromCart(product)}
                    >
                      <img
                        src="https://icongr.am/material/cart-remove.svg?size=128&color=currentColor"
                        alt="delete-from-cart-icon"
                      />
                    </button>
                  </div>
                </strong>
              </div>
            </div>
          ))}
        </ul>
      </section>

      <section className="flex items-center h-4/6 mt-20  w-full justify-center text-3xl">
        <div className="fixed bottom-0 mb-4">
          Total: ${" "}
          {cart
            .reduce((acc, product) => {
              return (acc += product.quantity * product.price);
            }, 0)
            .toFixed(2)}
        </div>
      </section>
    </main>
  );
};
