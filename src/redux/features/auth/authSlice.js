import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS, POST } from "../../../utils";
import { userLogin } from "../../../redux/thunks/signin";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: { email: "", accessToken: "" },
  error: null,
  apiStatus: API_STATUS.idle,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, { payload }) => {
      localStorage.getItem("user", payload);
      return (state = { ...state, isLoading: false, isLoggedIn: true });
    },
    logout: (state) => {
      localStorage.clear();
      return (state = { ...state, isLoading: false, isLoggedIn: false });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => ({
        ...state,
        isLoading: true,
        apiStatus: API_STATUS.pending,
      }))
      .addCase(userLogin.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        apiStatus: API_STATUS.success,
      }));
  },
});

export const { login, logout } = authSlice.actions;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;
