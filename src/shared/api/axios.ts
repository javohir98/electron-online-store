import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});
