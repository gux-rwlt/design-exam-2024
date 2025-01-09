import { API_URL } from "@/config";
import Axios from "axios";

const baseURL = API_URL;

export const axios = Axios.create({
  baseURL: baseURL,
});
