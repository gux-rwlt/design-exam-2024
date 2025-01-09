import React from "react";
import { CartItemProps } from "./types";
import { useCartItem } from "./useCartItem";
import "./cartItem.css";
import { ItemCounter } from "../ItemCounter";

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { imageUrl, description, title = "", ...otherProps } = props;
  const { deviceMode, totalPrice, getItemCounterProps } =
    useCartItem(otherProps);

  return (
    <div
      className={`design-exam-cart-item design-exam-cart-item-mode-${deviceMode} design-exam-cart-item--container design-exam-cart-item--container-mode-${deviceMode}`}>
      <span className="design-exam-cart-item--image-container">
        <img
          className={`design-exam-cart-item--image design-exam-cart-item--image-mode-${deviceMode}`}
          src={imageUrl}
          alt={description}
          width="100%"
          height="100%"
        />
      </span>
      <div
        className={`design-exam-cart-item--content design-exam-cart-item--content-mode-${deviceMode}`}>
        <span
          className={`design-exam-cart-item--title design-exam-cart-item--title-mode-${deviceMode}`}>
          {title}
        </span>
        <div
          className={`design-exam-cart-item--total-container design-exam-cart-item--total-container-mode-${deviceMode}`}>
          <ItemCounter {...getItemCounterProps()} />
          <span
            className={`design-exam-cart-item--total-price design-exam-cart-item--total-price-mode-${deviceMode}`}>
            ${totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
