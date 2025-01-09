import React from "react";
import { ItemCounterProps } from "./types";
import { useItemCounter } from "./useItemCounter";
import "./itemCounter.css";
import { Button, MinusIcon, PlusIcon } from "@/components";

export const ItemCounter: React.FC<ItemCounterProps> = (props) => {
  const { count, ...otherProps } = props;
  const { deviceMode, getDecreaseButtonProps, getIncreaseButtonProps } =
    useItemCounter(otherProps);

  return (
    <div
      className={`design-exam-product-item-counter design-exam-product-item-counter-mode-${deviceMode} design-exam-product-item-counter--container design-exam-product-item-counter--container-${deviceMode}`}>
      <Button
        className={`design-exam-product-item-counter--decrease-button design-exam-product-item-counter--decrease-button-mode-${deviceMode}`}
        variant="basic"
        icon={<MinusIcon />}
        {...getDecreaseButtonProps()}
      />
      <span
        className={`design-exam-product-item-counter--count design-exam-product-item-counter--count-mode-${deviceMode}`}>
        {count}
      </span>
      <Button
        className={`design-exam-product-item-counter--increase-button design-exam-product-item-counter--increase-button-mode-${deviceMode}`}
        variant="basic"
        icon={<PlusIcon />}
        {...getIncreaseButtonProps()}
      />
    </div>
  );
};
