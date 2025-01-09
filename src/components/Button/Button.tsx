import React from "react";
import { ButtonProps } from "./types";
import { useButton } from "./useButton";
import "./buttonStyles.css";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className = "",
      variant = "basic",
      icon,
      children,
      ...otherProps
    } = props;
    const { deviceMode, getProps } = useButton(otherProps);

    const iconClass = (() => {
      if (icon && children)
        return `design-exam-button--leading-icon design-exam-button--leading-icon-mode-${deviceMode}`;
      if (icon && !children)
        return `design-exam-button--only-icon design-exam-button--only-icon-mode-${deviceMode}`;
      return "";
    })();

    return (
      <button
        className={`design-exam-button design-exam-button--${variant} design-exam-button-mode-${deviceMode} ${iconClass} ${className}`}
        type="button"
        ref={ref}
        {...getProps()}>
        {icon && (
          <span className={`design-exam-button--icon-container`}>{icon}</span>
        )}
        {children}
      </button>
    );
  },
);
