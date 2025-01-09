export type ItemCounterProps = {
  count?: number;
  isDecreaseButtonDisabled?: boolean;
  onDecreaseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isIncreaseButtonDisabled?: boolean;
  onIncreaseButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deviceMode?: "desktop" | "mobile";
};

export type UseItemCounterProps = Omit<ItemCounterProps, "count">;
