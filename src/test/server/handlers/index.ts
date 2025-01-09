import { http } from "msw";

import productsMock from "./products";

import { backend } from "../helper";

export const handlers = [
  http.get(backend("products/"), productsMock.getAllProducts),
  http.get(
    backend("products/category/electronics"),
    productsMock.getElectronicsProducts,
  ),
  http.get(
    backend("products/category/jewelery"),
    productsMock.getJewelriesProducts,
  ),
  http.get(
    backend("products/category/men's%20clothing"),
    productsMock.getMensClothingProducts,
  ),
  http.get(
    backend("products/category/women's%20clothing"),
    productsMock.getWomensClothingProducts,
  ),
];
