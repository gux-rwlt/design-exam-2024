import React from "react";
import { ProductButtonProps } from "./types";
import { useProductButton } from "./useProductButton";
import "./productButton.css";

export const ProductButton: React.FC<ProductButtonProps> = (props) => {
  const { imageUrl, description, title = "", price = 0, ...otherProps } = props;
  const { deviceMode, getProps } = useProductButton(otherProps);

  return (
    <button
      className={`product-button product-button-mode-${deviceMode}`}
      {...getProps()}>
      <span
        className={`product-button--image-container product-button--image-container-mode-${deviceMode}`}>
        <img
          className={`product-button--image product-button--image-mode-${deviceMode}`}
          src={imageUrl}
          alt={description}
          width="100%"
          height="100%"
        />
      </span>
      <span
        className={`product-button--title product-button--title-mode-${deviceMode}`}>
        {title}
      </span>
      <span
        className={`product-button--price product-button--price-mode-${deviceMode}`}>
        ${price}
      </span>
    </button>
  );
};
