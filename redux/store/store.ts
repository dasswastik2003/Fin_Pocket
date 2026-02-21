// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "../slice/authSlice";
// import expenseReducer from "../slice/expenseSlice";

// export const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer,
//         expenses: expenseReducer,
//     }
// })
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

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
