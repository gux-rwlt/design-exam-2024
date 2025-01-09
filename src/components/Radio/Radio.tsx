import React from "react";
import { RadioProps } from "./types";
import { useRadio } from "./useRadio";
import "./radioStyles.css";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const { className = "", children, ...otherProps } = props;
    const { deviceMode, getInputProps, getLabelProps } = useRadio(otherProps);

    return (
      <div
        className={`design-exam-radio design-exam-radio-mode-${deviceMode} ${className}`}>
        <input
          className={`design-exam-radio--input design-exam-radio--input-mode-${deviceMode}`}
          ref={ref}
          {...getInputProps()}
        />
        <span
          className={`design-exam-radio--oval design-exam-radio--oval-mode-${deviceMode}`}
        />
        {children && (
          <label
            className={`design-exam-radio--label design-exam-radio--label-mode-${deviceMode}`}
            {...getLabelProps()}>
            {children}
          </label>
        )}
      </div>
    );
  },
);
