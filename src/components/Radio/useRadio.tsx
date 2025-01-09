import React from "react";
import { RadioGroupContext } from "./RadioGroupContext";
import { UseRadioProps } from "./types";
import { useDevice } from "@/providers/DeviceProvider";

export const useRadio = (props: UseRadioProps) => {
  const {
    name: nameProp,
    defaultChecked: defaultCheckedProp,
    isChecked: isCheckedProp,
    value,
    isDisabled: isDisabledProp = false,
    onChange,
    width = "auto",
    height = "auto",
    deviceMode: deviceModeProp,
    ...otherProps
  } = props;
  const groupProps = React.useContext(RadioGroupContext);
  const name = nameProp ?? groupProps?.name;
  const id = React.useId();

  const d = useDevice();
  const deviceMode = deviceModeProp || groupProps.deviceMode || d || "desktop";

  const isNotUndefinedAndNotNullForValue = React.useMemo(
    () => value !== undefined && value !== null,
    [value],
  );

  const defaultChecked = React.useMemo(
    () =>
      isNotUndefinedAndNotNullForValue && groupProps?.value !== undefined
        ? groupProps?.defaultValue === value
        : defaultCheckedProp,
    [
      defaultCheckedProp,
      groupProps?.defaultValue,
      groupProps?.value,
      isNotUndefinedAndNotNullForValue,
      value,
    ],
  );

  const isChecked = React.useMemo(
    () =>
      isNotUndefinedAndNotNullForValue && groupProps?.value !== undefined
        ? groupProps?.value === value
        : isCheckedProp,
    [groupProps?.value, isCheckedProp, isNotUndefinedAndNotNullForValue, value],
  );

  const isDisabled = React.useMemo(
    () => groupProps.isDisabled || isDisabledProp,
    [groupProps.isDisabled, isDisabledProp],
  );

  const [checkedState, setCheckedState] = React.useState(!!defaultChecked);
  const isControlled = React.useMemo(
    () => isChecked !== undefined,
    [isChecked],
  );
  const isControlledChecked = React.useMemo(
    () =>
      isControlled && typeof isChecked !== "undefined"
        ? isChecked
        : checkedState,
    [checkedState, isChecked, isControlled],
  );

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) {
        return;
      }

      if (value !== undefined) groupProps?.onChange?.(value.toString());
      onChange?.(e);
      if (!isControlled) {
        setCheckedState(e.currentTarget.checked);
      }
    },
    [groupProps, isControlled, isDisabled, onChange, value],
  );

  const getInputProps = React.useCallback(
    () => ({
      id,
      type: "radio",
      name,
      checked: isControlledChecked,
      disabled: isDisabled,
      onChange: handleChange,
      style: {
        "--radio-width": width,
        "--radio-height": height,
      } as React.CSSProperties,
      ...otherProps,
    }),
    [
      id,
      name,
      isControlledChecked,
      isDisabled,
      handleChange,
      width,
      height,
      otherProps,
    ],
  );

  const getOvalProps = React.useCallback(
    () => ({
      "data-checked": isControlledChecked,
    }),
    [isControlledChecked],
  );

  const getLabelProps = React.useCallback(
    () => ({
      htmlFor: id,
      "data-disabled": isDisabled,
    }),
    [id, isDisabled],
  );

  return {
    deviceMode,
    getInputProps,
    getOvalProps,
    getLabelProps,
  };
};
