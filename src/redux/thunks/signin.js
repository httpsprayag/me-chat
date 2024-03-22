import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../features/auth/authSlice";
import { auth } from "../../firebase/config";
import { setCookie } from "cookies-next";

export const userLogin = createAsyncThunk(
  "userLogin",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    console.log({ email, password });
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const token = res.user.stsTokenManager.accessToken;
      if (res.user) {
        setCookie("email", email);
        localStorage.setItem("token", token);
        dispatch(login(JSON.stringify(res.user)));
      }
      console.log("Response :", res);
      sessionStorage.setItem("user", true);
      return res;
    } catch (error) {
      console.log({ error });
      if (isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error);
    }
  }
);
