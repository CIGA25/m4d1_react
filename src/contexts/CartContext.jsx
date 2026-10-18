import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarCart = (pizza) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === pizza.id);

      if (index >= 0) {
        return prevCart.map((item, idx) =>
          idx === index ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  const sumarPizza = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const restarPizza = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarCart,
        sumarPizza,
        restarPizza,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};