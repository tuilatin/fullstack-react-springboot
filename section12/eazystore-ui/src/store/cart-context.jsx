import { createContext } from "react";
const initialCartContext = {
  cart: [],
  setCart: () => {},
  addToCart: () => {
    console.log("Product added to cart");
  },
  removeFromCart: () => {},
  totalQuantity: 0,
};

export const CartContext = createContext();
