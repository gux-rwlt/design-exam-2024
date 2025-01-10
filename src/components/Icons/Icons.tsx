import React from "react";
import { IconsProps } from "./types";

export const Icon: React.FC<IconsProps> = (props) => {
  const {
    className = "",
    viewBox = "0 0 24 24",
    size,
    color,
    style,
    children,
    ...otherProps
  } = props;

  return (
    <svg
      className={`design-exam-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox={viewBox}
      width={size}
      height={size}
      style={{ color, ...style }}
      {...otherProps}>
      {children}
    </svg>
  );
};

export const ArrowLeftIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z" />
  </Icon>
);

export const CaretDownIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" />
  </Icon>
);

export const CaretUpIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" />
  </Icon>
);

export const CartIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V8C3 7.45 3.19583 6.97917 3.5875 6.5875C3.97917 6.19583 4.45 6 5 6H7C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6H19C19.55 6 20.0208 6.19583 20.4125 6.5875C20.8042 6.97917 21 7.45 21 8V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V8H5V20ZM12 14C13.3833 14 14.5625 13.5125 15.5375 12.5375C16.5125 11.5625 17 10.3833 17 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H7C7 10.3833 7.4875 11.5625 8.4625 12.5375C9.4375 13.5125 10.6167 14 12 14ZM9 6H15C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6Z" />
  </Icon>
);

export const CloseIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
  </Icon>
);

export const MinusIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M2 12C2 11.4477 2.3731 11 2.83333 11L21.1667 11C21.6269 11 22 11.4477 22 12C22 12.5523 21.6269 13 21.1667 13L2.83333 13C2.3731 13 2 12.5523 2 12Z" />
  </Icon>
);

export const PlusIcon: typeof Icon = (props) => (
  <Icon {...props}>
    <path d="M12 2C11.4477 2 11 2.40701 11 2.90909V11H2.90909C2.40701 11 2 11.4477 2 12C2 12.5523 2.40701 13 2.90909 13H11V21.0909C11 21.593 11.4477 22 12 22C12.5523 22 13 21.593 13 21.0909V13H21.0909C21.593 13 22 12.5523 22 12C22 11.4477 21.593 11 21.0909 11H13V2.90909C13 2.40701 12.5523 2 12 2Z" />
  </Icon>
);
