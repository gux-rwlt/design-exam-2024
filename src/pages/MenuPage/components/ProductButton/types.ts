export type ProductButtonProps = {
  imageUrl?: string;
  description?: string;
  title?: string;
  price?: number;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deviceMode?: "desktop" | "mobile";
};

export type UseProductButtonProps = Omit<ProductButtonProps, "imageUrl" | "description" | "title" | "price">;
