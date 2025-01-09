import React from "react";

type IconsOptions = {
  viewBox?: string;
  size?: string;
  color?: string;
};

export type IconsProps = IconsOptions &
  Omit<React.ComponentPropsWithoutRef<"svg">, keyof IconsOptions>;
