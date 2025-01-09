export type FilterButtonProps = {
  value?:string;
  onChange?: (e: string) => void;
};

export type FilterProps = {
  value?:string;
  onChange?: (e: string) => void;
  onClose?: () => void;
};

export type UseFilterProps = Omit<FilterProps, "">;

