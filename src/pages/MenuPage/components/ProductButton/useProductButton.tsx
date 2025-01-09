import React from "react";
import { UseProductButtonProps } from "./types";
import { useDevice } from "@/providers/DeviceProvider";

export const useProductButton = (props: UseProductButtonProps) => {
  const {
    isDisabled,
    onClick,
    deviceMode: deviceModeProp,
    ...otherProps
  } = props;

  const d = useDevice();
  const deviceMode = deviceModeProp || d || "desktop";

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        return;
      }

      onClick?.(e);
    },
    [isDisabled, onClick],
  );

  const getProps = React.useCallback(
    () => ({
      disabled: isDisabled,
      onClick: handleClick,
      ...otherProps,
    }),
    [handleClick, isDisabled, otherProps],
  );

  return {
    deviceMode,
    getProps,
  };
};
