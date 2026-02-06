import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from "../../api/axios/axios";
import { endPoints } from "../../api/endPoints/endPoints";

const initialState = {
  loading: false,
  userId: null,
  email: null,
  token: null,
};

/* Register */
export const authRegistration = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const response = await AxiosInstance.post(endPoints.auth.signUp, payload);
    return response.data;
  },
);

/* Login */
export const authLogin = createAsyncThunk("auth/login", async (payload) => {
  const response = await AxiosInstance.post(endPoints.auth.signIn, payload);
  return response.data;
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.userId = null;
      state.email = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
        .addCase(authLogin.pending, (state) => {})
        .addCase(authLogin.fulfilled, (state, action) => {

        })
        .addCase(authLogin.rejected, (state, action) => {});
  },
})

export const { logout } = authSlice.actions;
export default authSlice;