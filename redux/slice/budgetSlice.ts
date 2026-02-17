import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";

/* ================================
   TYPES
================================ */

interface Category {
  id: number;
  name: string;
}

interface Budget {
  id: number;
  category: number;
  category_name?: string;
  month: string;
  amount: number;
}

interface BudgetState {
  categories: Category[];
  budgets: Budget[];
  loading: boolean;
  error: string | null;
}

const initialState: BudgetState = {
  categories: [],
  budgets: [],
  loading: false,
  error: null,
};

/* ================================
   CATEGORY THUNKS
================================ */

export const fetchCategories = createAsyncThunk(
  "budget/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(endPoints.budgetCategory.list);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch categories");
    }
  }
);

export const createCategory = createAsyncThunk(
  "budget/createCategory",
  async (data: { name: string }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        endPoints.budgetCategory.create,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to create category");
    }
  }
);

/* ================================
   BUDGET THUNKS
================================ */

export const fetchBudgets = createAsyncThunk(
  "budget/fetchBudgets",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(endPoints.budget.list, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch budgets");
    }
  }
);

export const createBudget = createAsyncThunk(
  "budget/createBudget",
  async (
    data: { category: number; month: string; amount: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await AxiosInstance.post(
        endPoints.budget.create,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to create budget");
    }
  }
);

export const deleteBudget = createAsyncThunk(
  "budget/deleteBudget",
  async (id: number, { rejectWithValue }) => {
    try {
      await AxiosInstance.delete(endPoints.budget.delete(id));
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to delete budget");
    }
  }
);

/* ================================
   SLICE
================================ */

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* CATEGORY */
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })

      /* BUDGET */
      .addCase(fetchBudgets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBudgets.fulfilled, (state, action) => {
        state.loading = false;
        state.budgets = action.payload;
      })
      .addCase(fetchBudgets.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createBudget.fulfilled, (state, action) => {
        state.budgets.push(action.payload);
      })

      .addCase(deleteBudget.fulfilled, (state, action) => {
        state.budgets = state.budgets.filter(
          (budget) => budget.id !== action.payload
        );
      });
  },
});

export default budgetSlice;
