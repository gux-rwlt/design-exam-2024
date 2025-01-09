import React from "react";
import { UseFilterProps } from "./types";

export const useFilter = (props: UseFilterProps) => {
  const { value, onChange } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleFilter = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return {
    isOpen,
    value,
    handleToggleFilter,
    onChange,
  };
};
