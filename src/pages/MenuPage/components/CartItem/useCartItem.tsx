import React from "react";
import { UseCartItemProps } from "./types";
import { ItemCounterProps } from "../ItemCounter/types";
import { useDevice } from "@/providers/DeviceProvider";

export const useCartItem = (props: UseCartItemProps) => {
  const {
    price,
    count,
    isDecreaseButtonDisabled,
    isIncreaseButtonDisabled,
    onDecreaseButtonClick,
    onIncreaseButtonClick,
    deviceMode: deviceModeProp,
  } = props;

  const d = useDevice();
  const deviceMode = deviceModeProp || d || "desktop";

  const totalPrice = React.useMemo(
    () => parseFloat((price * count).toFixed(2)),
    [count, price],
  );

  const getItemCounterProps = React.useCallback(
    () =>
      ({
        count,
        isDecreaseButtonDisabled,
        onDecreaseButtonClick,
        isIncreaseButtonDisabled,
        onIncreaseButtonClick,
      }) as ItemCounterProps,
    [
      count,
      isDecreaseButtonDisabled,
      onDecreaseButtonClick,
      isIncreaseButtonDisabled,
      onIncreaseButtonClick,
    ],
  );

  return {
    deviceMode,
    totalPrice,
    getItemCounterProps,
  };
};
