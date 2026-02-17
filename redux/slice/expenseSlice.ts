import AxiosInstance from "@/api/axios/axios";
import { endPoints } from "@/api/endPoints/endPoints";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Expense {
  id: number;
  category: number | string;
  amount: string;
  date: string;
  notes: string; // ✅ backend field
}

interface ExpenseState {
  expenses: Expense[];
  loading: boolean;
  error: any;
  selectedExpense: Expense | null;
}

const initialState: ExpenseState = {
  expenses: [],
  loading: false,
  error: null,
  selectedExpense: null,
};

// ================= FETCH =================
export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.get(endPoints.expenses.list);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ================= CREATE =================
export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (payload: Omit<Expense, "id">, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post(endPoints.expenses.create, payload);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ================= UPDATE =================
export const updateExpense = createAsyncThunk(
  "expenses/updateExpense",
  async (
    { id, payload }: { id: number; payload: Omit<Expense, "id"> },
    { rejectWithValue }
  ) => {
    try {
      const res = await AxiosInstance.put(
        endPoints.expenses.update(id),
        payload
      );
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ================= DELETE =================
export const deleteExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async (id: number, { rejectWithValue }) => {
    try {
      await AxiosInstance.delete(endPoints.expenses.delete(id));
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setSelectedExpense: (state, action: PayloadAction<Expense>) => {
      state.selectedExpense = action.payload;
    },
    clearSelectedExpense: (state) => {
      state.selectedExpense = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;

        const payload = action.payload;

        if (Array.isArray(payload)) {
          state.expenses = payload;
        } else if (payload?.data && Array.isArray(payload.data)) {
          state.expenses = payload.data;
        } else if (payload?.results && Array.isArray(payload.results)) {
          state.expenses = payload.results;
        } else {
          state.expenses = [];
        }
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createExpense.fulfilled, (state, action) => {
        const payload = action.payload;
        const newExpense: Expense = payload?.data || payload?.result || payload;

        if (newExpense) {
          state.expenses.unshift(newExpense);
        }
      })

      .addCase(updateExpense.fulfilled, (state, action) => {
        const payload = action.payload;
        const updatedExpense: Expense =
          payload?.data || payload?.result || payload;

        const index = state.expenses.findIndex(
          (item) => item.id === updatedExpense.id
        );

        if (index !== -1) {
          state.expenses[index] = updatedExpense;
        }

        state.selectedExpense = null;
      })

      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (item) => item.id !== action.payload
        );
      });
  },
});

export const { setSelectedExpense, clearSelectedExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
