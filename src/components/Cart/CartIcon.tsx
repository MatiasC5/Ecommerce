import { useId } from "react";
import { Link } from "react-router-dom";

export const CartIcon = () => {
  const cartLabelId = useId();

  return (
    <section>
      <Link to="/cart">
        <div className="cart-btn bg-blue-500 h-11 w-11 grid place-items-center rounded-full ">
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
