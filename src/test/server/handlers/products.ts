import { ResponseResolver } from "msw";
import { delayedResponse } from "../utils";
import {
  SampleProducts,
  SampleElectronics,
  SampleJewelries,
  SampleMensClothing,
  SampleWomensClothing,
} from "../products";

const getAllProducts: ResponseResolver = async () =>
  delayedResponse(SampleProducts);
const getElectronicsProducts: ResponseResolver = async () =>
  delayedResponse(SampleElectronics);
const getJewelriesProducts: ResponseResolver = async () =>
  delayedResponse(SampleJewelries);
const getMensClothingProducts: ResponseResolver = async () =>
  delayedResponse(SampleMensClothing);
const getWomensClothingProducts: ResponseResolver = async () =>
  delayedResponse(SampleWomensClothing);

const mock = {
  getAllProducts,
  getElectronicsProducts,
  getJewelriesProducts,
  getMensClothingProducts,
  getWomensClothingProducts,
};

export default mock;
