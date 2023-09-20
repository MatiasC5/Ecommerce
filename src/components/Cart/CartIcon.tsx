import { useContext, useId } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

export const CartIcon = () => {
  const cartLabelId = useId();
  const { cart } = useContext(CartContext);
  return (
    <section>
      <Link to="/cart">
        <div className="cart-btn h-14 w-14  grid place-items-center ">
          <div className="fixed top-3 right-6  bg-red-400  rounded-full w-6 h-6 flex justify-center items-center ">
            <div className="font-bold">{cart.length}</div>
          </div>
          <label htmlFor={cartLabelId}>
            {" "}
            <img
              src="https://icongr.am/clarity/shopping-cart.svg?size=128&color=171111"
              alt="cart-icon"
              width={30}
              height={30}
              className={"cursor-pointer"}
            />
          </label>
        </div>
      </Link>
    </section>
  );
};
