import { ReactElement, ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface Product {
  title: string;
  id: number;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

interface CartContextValue {
  cart: Product[];
  setCart: (cart: Product[]) => void;
  addToCart: (product: Product) => void;
  substractFromCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  setCart: () => {},
  addToCart: (product: Product) => {
    return {
      product,
    };
  },
  substractFromCart: () => {},
  deleteFromCart: () => {},
});

export const CartProvider = ({ children }: Props): ReactElement => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product): void => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productIndex].quantity += 1;
      return setCart(newCart);
    }

    return setCart((prevState) => {
      return [
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const substractFromCart = (product: Product): void => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex >= 0 && cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1;
      setCart([...cart]);
    }
  };

  const deleteFromCart = (product: Product): void => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, substractFromCart, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
