import React from "react";
import { RadioGroupProps } from "./types";
import { useRadioGroup } from "./useRadioGroup";
import { RadioGroupContext } from "./RadioGroupContext";
import "./radioGroupStyles.css";

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const { className = "", children, ...otherProps } = props;
    const { deviceMode, getRadioGroupProps, getValueProps } =
      useRadioGroup(otherProps);

    return (
      <RadioGroupContext.Provider value={getValueProps()}>
        <div
          ref={ref}
          className={`design-exam-radio-group design-exam-radio-group-mode-${deviceMode} ${className}`}
          {...getRadioGroupProps()}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);
