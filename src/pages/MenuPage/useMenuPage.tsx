import React from "react";
import { Product } from "@/api/types";
import { useProduct } from "@/api/useProduct";
import { useCart as useCartReducer } from "@/providers/CartProvider";

export const useMenuPage = () => {
  const [category, setCategory] = React.useState("all");
  const [catalog, setCatalog] = React.useState<Product[]>([]);
  const { data, isLoading, error } = useProduct({ category });
  const { cart } = useCartReducer();
  const [isOpenCart, setIsOpenCart] = React.useState(false);

  const handleToggleCart = React.useCallback(() => {
    setIsOpenCart(!isOpenCart);
  }, [isOpenCart]);

  React.useMemo(() => {
    if (data && data.data && (data.data as Product[])) {
      setCatalog(data.data as Product[]);
    }
  }, [data, setCatalog]);

  return {
    category,
    setCategory,
    catalog,
    isLoading,
    error,
    cart,
    isOpenCart,
    handleToggleCart,
  };
};
