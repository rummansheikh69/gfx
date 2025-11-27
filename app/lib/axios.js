import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gfxbackend.onrender.com/api",
  withCredentials: true,
});
