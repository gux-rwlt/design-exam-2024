import React from "react";
import { UseRadioGroupProps } from "./types";
import { useDevice } from "@/providers/DeviceProvider";

export const useRadioGroup = (props: UseRadioGroupProps) => {
  const {
    defaultValue: defaultValueProp,
    value: valueProp,
    name,
    isDisabled,
    onChange,
    deviceMode: deviceModeProp,
    ...otherProps
  } = props;

  const d = useDevice();
  const deviceMode = deviceModeProp || d || "desktop";

  const [valueState, setValue] = React.useState(defaultValueProp);

  const isControlled = valueProp !== undefined;
  const value =
    isControlled && typeof valueProp !== "undefined" ? valueProp : valueState;

  const handleChange = React.useCallback(
    (changeValue: string) => {
      if (isDisabled) return;
      if (!isControlled) setValue(changeValue);
      onChange?.(String(changeValue));
    },
    [isControlled, isDisabled, onChange],
  );

  const getRadioGroupProps = React.useCallback(
    () => ({
      role: "radiogroup",
      ...otherProps,
    }),
    [otherProps],
  );

  const getValueProps = React.useCallback(
    () => ({
      defaultValue: defaultValueProp,
      value,
      name,
      isDisabled,
      onChange: handleChange,
    }),
    [defaultValueProp, value, name, isDisabled, handleChange],
  );

  return {
    deviceMode,
    getRadioGroupProps,
    getValueProps,
  };
};
