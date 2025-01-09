import React from "react";
import { UseItemCounterProps } from "./types";
import { useDevice } from "@/providers/DeviceProvider";

export const useItemCounter = (props: UseItemCounterProps) => {
  const {
    isDecreaseButtonDisabled,
    isIncreaseButtonDisabled,
    onDecreaseButtonClick,
    onIncreaseButtonClick,
    deviceMode: deviceModeProp,
  } = props;

  const d = useDevice();
  const deviceMode = deviceModeProp || d || "desktop";

  const handleClickDecreaseButton = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDecreaseButtonDisabled) {
        return;
      }

      onDecreaseButtonClick?.(e);
    },
    [isDecreaseButtonDisabled, onDecreaseButtonClick],
  );

  const getDecreaseButtonProps = React.useCallback(
    () => ({
      disabled: isDecreaseButtonDisabled,
      onClick: handleClickDecreaseButton,
    }),
    [handleClickDecreaseButton, isDecreaseButtonDisabled],
  );

  const handleClickIncreaseButton = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isIncreaseButtonDisabled) {
        return;
      }

      onIncreaseButtonClick?.(e);
    },
    [isIncreaseButtonDisabled, onIncreaseButtonClick],
  );

  const getIncreaseButtonProps = React.useCallback(
    () => ({
      disabled: isIncreaseButtonDisabled,
      onClick: handleClickIncreaseButton,
    }),
    [handleClickIncreaseButton, isIncreaseButtonDisabled],
  );

  return {
    deviceMode,
    getDecreaseButtonProps,
    getIncreaseButtonProps,
  };
};
