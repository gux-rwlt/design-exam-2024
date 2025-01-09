type RadioOptions = {
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  deviceMode?: "desktop" | "mobile";
};

export type RadioProps = RadioOptions &
  Omit<React.ComponentPropsWithoutRef<"input">, keyof RadioOptions>;

export type UseRadioProps = Omit<RadioProps, " className" | "children">;

export type RadioGroupOptions = {
  defaultValue?: string;
  value?: string;
  name?: string;
  isDisabled?: boolean;
  onChange?: (e: string) => void;
  deviceMode?: "desktop" | "mobile";
};

export type RadioGroupProps = RadioGroupOptions &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof RadioGroupOptions | "role">;

export type UseRadioGroupProps = Omit<
  RadioGroupProps,
  " className" | "children"
>;

export type RadioGroupContextProps = {
  defaultValue?: string;
  value?: string;
  name?: string;
  isDisabled?: boolean;
  onChange?: (e: string) => void;
  deviceMode?: "desktop" | "mobile";
};
