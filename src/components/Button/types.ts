type ButtonOptions = {
  variant?: "primary" | "basic";
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  icon?: React.ReactNode;
  deviceMode?: "desktop" | "mobile";
};

export type ButtonProps = ButtonOptions &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonOptions>;

export type UseButtonProps = Omit<
  ButtonProps,
  "className" | "children" | "variant" | "icon" 
>;
