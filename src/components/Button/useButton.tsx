import React from "react";
import { UseButtonProps } from "./types";
import { useDevice } from "@/providers/DeviceProvider";

export const useButton = (props: UseButtonProps) => {
  const {
    isDisabled = false,
    onClick,
    deviceMode: deviceModeProp,
    width = "auto",
    height = "auto",
    style,
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
      style: {
        "--button-width": width,
        "--button-height": height,
        ...style,
      } as React.CSSProperties,
      ...otherProps,
    }),
    [handleClick, height, isDisabled, otherProps, style, width],
  );

  return {
    deviceMode,
    getProps,
  };
};
