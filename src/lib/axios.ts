import Axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const axios = Axios.create({
  baseURL: baseURL,
});
