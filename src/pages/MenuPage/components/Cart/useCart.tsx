import React from "react";
import { useCart as useCartReducer } from "@/providers/CartProvider";

export const useCart = () => {
  const { cart, cartAction } = useCartReducer();
  const reverseCart = React.useMemo(
    () => ({
      items: cart.items.slice().reverse(),
      totalPrice: cart.totalPrice,
    }),
    [cart.items, cart.totalPrice],
  );

  return {
    cart: reverseCart,
    cartAction,
  };
};
