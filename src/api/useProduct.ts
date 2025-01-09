import { axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { UseProduct } from "./types";

export const useProduct = ({ category }: UseProduct) =>
  useQuery({
    queryKey: ["fakestoreapi", category],
    queryFn: () =>
      axios.get(
        category === "all" ? `products/` : `products/category/${category}/`,
      ),
  });
