import { Product } from "@/api/types";

export type CatalogViewProps = {
  data: Product[];
  isLoading: boolean;
  error: unknown;
};
