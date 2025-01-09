import { useCart as useCartReducer } from "@/providers/CartProvider";

export const useCatalogView = () => {
  const { cart, cartAction } = useCartReducer();

  return {
    cart,
    cartAction,
  };
};
