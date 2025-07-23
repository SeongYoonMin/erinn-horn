import axios from "axios";

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_NEXON_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-nxopen-api-key": import.meta.env.VITE_NEXON_API_KEY,
    Accept: "application/json",
  },
});
