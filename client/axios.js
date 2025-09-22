// client/src/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",   // backend
  withCredentials: true,
});

export default axiosInstance;
