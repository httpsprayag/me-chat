import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) =>
    // You can modify request config here (e.g., add authentication headers)
    config,
  (error) =>
    // Handle request errors
    Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) =>
    // You can modify response data here
    response,
  (error) =>
    // Handle response errors
    Promise.reject(error)
);
