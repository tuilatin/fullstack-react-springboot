import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) =>{
  
} 

const cartReducer = (state, action) => { 

export const CartProvider = ({ children }) => {
  useReducer(cartReducer)
  // const [cart, setCart] = useState(() => {
  //   try {
  //     const storedCart = localStorage.getItem("cart");
  //     return storedCart ? JSON.parse(storedCart) : [];
  //   } catch (error) {
  //     console.error("Failed to parse cart from localStorage", error);
  //     return [];
  //   }
  // });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

//   const addToCart = (product, quantity) => {
//     setCart((currentCart) => {
//       const existingItem = currentCart.find(
//         (item) => item.product.productId === product.productId,
//       );

//       if (existingItem) {
//         return currentCart.map((item) =>
//           item.product.productId === product.productId
//             ? { ...item, quantity: item.quantity + quantity }
//             : item,
//         );
//       }

//       return [...currentCart, { product, quantity }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((currentCart) =>
//       currentCart.filter((item) => item.product.productId !== productId),
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

}