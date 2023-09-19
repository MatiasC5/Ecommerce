import { CartContext } from "../../context/cart";
import { useContext } from "react";

export const Cart = () => {
  const { cart, addToCart, substractFromCart, deleteFromCart } =
    useContext(CartContext);
  return (
    <main>
      <section className="w-auto   flex justify-center items-center ">
        <ul>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex  w-full justify-between border-2 m-1 p-1"
            >
              <div className="flex w-3/4 gap-2 items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
                <h3 className="text-md truncate">{product.title}</h3>
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
                      className="bg-blue-600 w-6"
                      onClick={() => deleteFromCart(product)}
                    >
                      <img
                        src="../public/clean-cart.png"
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
        <div>
          Total:{" "}
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
