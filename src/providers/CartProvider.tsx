import { Product } from "@/api/types";
import React from "react";

type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalPrice: number;
};

type CartAction =
  | {
      type: "add_cart_item"; // 入荷
      payload: {
        product: Product;
        quantity: number;
      };
    }
  | {
      type: "delete_cart_item"; // カートから削除
      payload: {
        productId: number;
      };
    };

type CartContext = {
  cart: CartState;
  cartAction: React.Dispatch<CartAction>;
};

const addCartItem = (
  state: CartState,
  product: Product,
  quantity: number,
): CartState => {
  const existingItemIndex = state.items.findIndex(
    (item) => item.id === product.id,
  );
  let newItems: CartItem[];

  if (existingItemIndex === -1) {
    newItems = [...state.items, { ...product, quantity }];
  } else {
    newItems = state.items
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      )
      .filter((item) => item.quantity > 0);
  }

  return {
    ...state,
    items: newItems,
    totalPrice: calcTotalPrice(newItems),
  };
};

const calcTotalPrice = (items: CartItem[]): number => {
  return parseFloat(
    items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const reducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "add_cart_item":
      return addCartItem(
        state,
        action.payload.product,
        action.payload.quantity,
      );
    default:
      return state;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = React.createContext<CartContext | undefined>(
  undefined,
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    items: [],
    totalPrice: 0,
  });

  return (
    <CartContext.Provider value={{ cart: state, cartAction: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () =>
  React.useContext(CartContext as React.Context<CartContext>);
