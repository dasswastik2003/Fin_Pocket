import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const baseURL = "http://localhost:8000/";

export const AxiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

AxiosInstance.interceptors.request.use((config) => {
  const token = cookies.get("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default AxiosInstance;
