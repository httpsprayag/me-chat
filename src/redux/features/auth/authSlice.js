import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../../utils";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: { email: "", accessToken: "" },
  error: null,
  apiStatus: API_STATUS.idle,
};

export const authSlice = createSlice({
  initialState,
  reducers: {},
});
