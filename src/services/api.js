import axios from "axios";

export const key = "c970aa9b6053dcf14d231b62ff85056e5ebf5ba2";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
