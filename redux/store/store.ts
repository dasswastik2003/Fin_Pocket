import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import budgetSlice from "../slice/budgetSlice";

export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        budget: budgetSlice.reducer,
    }
})

export default store;