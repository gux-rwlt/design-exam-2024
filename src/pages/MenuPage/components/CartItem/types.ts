export type CartItemProps = {
  imageUrl?: string;
  description?: string;
  title?: string;
  price: number;

  count: number;
  isDecreaseButtonDisabled?: boolean;
  onDecreaseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isIncreaseButtonDisabled?: boolean;
  onIncreaseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deviceMode?: "desktop" | "mobile";
};

export type UseCartItemProps = Omit<CartItemProps, "image" | "title">;
