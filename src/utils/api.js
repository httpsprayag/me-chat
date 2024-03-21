import { axiosInstance } from "./axiosInstance";

export const POST = async ({ endpoint, data }) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const GET = async ({ endpoint, params }) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const API_STATUS = {
  idle: "idle",
  pending: "pending",
  success: "success",
  fail: "fail",
};
