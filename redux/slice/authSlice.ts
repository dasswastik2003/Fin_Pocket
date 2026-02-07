// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { AxiosInstance } from "../../api/axios/axios";
// import { endPoints } from "../../api/endPoints/endPoints";
// import { toast } from "sonner";
// import { Cookies } from "react-cookie";

// interface AuthState {
//   userId: number | null;
//   username: string | null;
//   email: string | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   userId: null,
//   username: null,
//   email: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// // const cookies = new Cookies();

// /* Register */
// export const authRegistration = createAsyncThunk(
//   "auth/register",
//   async (payload: any, { rejectWithValue }) => {
//     try {
//       const res = await AxiosInstance.post(endPoints.auth.signUp, {
//         username: payload.email.split("@")[0], // REQUIRED by Django
//         email: payload.email,
//         password: payload.password,
//         confirm_password: payload.confirm_password,
//         full_name: payload.full_name,
//       });

//       return res.data;
//     } catch (err: any) {
      
//   return rejectWithValue(
//     err.response?.data || { message: "Backend not reachable" }
//   );

//     }},
//   );

// /* Login */
// export const authLogin = createAsyncThunk(
//   "auth/login",
//   async (
//     payload: { username: string; password: string },
//     { rejectWithValue },
//   ) => {
//     try {
//       const response = await AxiosInstance.post(endPoints.auth.signIn, payload);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue("Login failed");
//     }
//   },
// );

// /* Verify OTP */
// export const verifyOtp = createAsyncThunk(
//   "auth/verifyOtp",
//   async (payload: { email: string; otp: string }, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(
//         "/api/account/verify-otp/",
//         payload,
//       );
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data);
//     }
//   },
// );

// const authSlice = createSlice({
//   name: "authSlice",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.userId = null;
//       state.username = null;
//       state.email = null;
//       state.access = null;
//       state.refresh = null;
//       localStorage.clear();
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(authRegistration.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(authRegistration.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         toast.success(payload.message || "OTP sent");
//       })
//       .addCase(authRegistration.rejected, (state, { payload }: any) => {
//         state.loading = false;
//         toast.error(payload?.error || "Registration failed");
//       })

//       /* VERIFY OTP */
//       .addCase(verifyOtp.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(verifyOtp.fulfilled, (state, action) => {
//         const user = action.payload?.user;

//         if (user) {
//           state.userId = user.id;
//           state.username = user.username;
//           state.email = user.email;
//         }
//       })

//       .addCase(verifyOtp.rejected, (state, { payload }: any) => {
//         state.loading = false;
//         toast.error(payload?.error || "OTP verification failed");
//       })

//       /* LOGIN */
//       .addCase(authLogin.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(authLogin.fulfilled, (state, action) => {
//         Cookies.set("access_token", action.payload.access, {
//           sameSite: "lax",
//         });

//         Cookies.set("refresh_token", action.payload.refresh, {
//           sameSite: "lax",
//         });

//         state.isAuthenticated = true;
//       })

//       .addCase(authLogin.rejected, (state, { payload }: any) => {
//         state.loading = false;
//         toast.error(payload?.error || "Login failed");
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/axios/axios";
import { endPoints } from "../../api/endPoints/endPoints";
import { toast } from "sonner";
import { Cookies } from "react-cookie";
import axios from "../../api/axios/axios";

interface AuthState {
  userId: number | null;
  username: string | null;
  email: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  user: any | null;
}

const initialState: AuthState = {
  userId: null,
  username: null,
  email: null,
  isAuthenticated: false,
  user: null, 
  loading: false,
  error: null,
};

const cookies = new Cookies();

/* Register */
export const authRegistration = createAsyncThunk(
  "auth/register",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post(endPoints.auth.signUp, {
        username: payload.email.split("@")[0],
        email: payload.email,
        password: payload.password,
        confirm_password: payload.confirm_password,
        full_name: payload.full_name,
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || { message: "Backend not reachable" });
    }
  }
);

/* Login */
export const authLogin = createAsyncThunk(
    "auth/login",
    async (credentials: { username: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:8000/api/account/login/", credentials);
            return response.data; // backend returns message, access, refresh, user
        } catch (err: any) {
            // Catch backend error and pass it to frontend
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue({ error: "Network error" });
            }
        }
    }
);

/* Verify OTP */
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post("/api/account/verify-otp/", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: "OTP verification failed" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userId = null;
      state.username = null;
      state.email = null;
      state.isAuthenticated = false;
      cookies.remove("access_token");
      cookies.remove("refresh_token");
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      /* Registration */
      .addCase(authRegistration.pending, (state) => {
        state.loading = true;
      })
      .addCase(authRegistration.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success(payload.message || "OTP sent to your email");
      })
      .addCase(authRegistration.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload?.message || "Registration failed");
      })

      /* OTP Verification */
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.user) {
          state.userId = payload.user.id;
          state.username = payload.user.username;
          state.email = payload.user.email;
          state.isAuthenticated = true;
        }
        toast.success(payload.message || "OTP verified successfully");
      })
      .addCase(verifyOtp.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload?.message || "OTP verification failed");
      })

      /* Login */
         .addCase(authLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(authLogin.rejected, (state, action: any) => {
                state.loading = false;
                // Use backend error message if exists
                state.error = action.payload?.error || "Login failed";
            });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
