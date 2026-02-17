"use client";

import "@/styles/budgetcss/buget.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBudget,
  fetchBudgets,
  fetchCategories,
} from "@/redux/slice/budgetSlice";

export default function BudgetPage() {
  const dispatch = useDispatch<any>();

  const { budgets, categories, loading } = useSelector(
    (state: any) => state.budget
  );

  /* ================= VALIDATION ================= */

  const schema = Yup.object().shape({
    category: Yup.number()
      .typeError("Category is required")
      .required("Category is required"),

    month: Yup.string()
      .required("Month is required")
      .matches(/^\d{4}-(0[1-9]|1[0-2])$/, "Format must be YYYY-MM"),

    amount: Yup.number()
      .typeError("Amount must be number")
      .required("Amount is required")
      .positive("Amount must be positive"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* ================= LOCAL STATE ================= */

  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBudgets());
    console.log("categories", categories)
  }, [dispatch]);

  /* ================= SUBMIT ================= */

  const onSubmit = async (data: any) => {
    const formattedData = {
      category: Number(data.category),
      month: data.month + "-01", // backend expects full date
      amount: Number(data.amount),
    };

    const result = await dispatch(createBudget(formattedData));

    if (createBudget.fulfilled.match(result)) {
      reset();
      setSelectedCategory("");
      setIsOpen(false);
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="container">
      {/* ================= TITLE ================= */}
      <div className="title-section">
        <h1 style={{ marginTop: "130px" }}>
          Monthly Budget Management
        </h1>
        <p>Plan your expenses and control monthly spending.</p>
      </div>

      {/* ================= CREATE BUDGET ================= */}
      <div className="card budget-card">
        <div className="card-header">
          <span className="green-dot"></span>
          Create New Budget
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">

            {/* CATEGORY */}
            <div className="form-group custom-select-wrapper">
              <label>Category</label>

              <div className={`custom-select ${isOpen ? "active" : ""}`}>
                <div
                  className="select-trigger"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedCategory || "Select category"}
                </div>

                {isOpen && (
                  <div className="select-dropdown">
                    {categories?.length > 0 ? (
                      categories.map((item: any) => (
                        <div
                          key={item.id}
                          className="select-item"
                          onClick={() => {
                            setSelectedCategory(item.name);
                            setValue("category", item.id, {
                              shouldValidate: true,
                            });
                            setIsOpen(false);
                          }}
                        >
                          {item.name}
                        </div>
                      ))
                    ) : (
                      <div className="select-item">
                        No categories found
                      </div>
                    )}
                  </div>
                )}
              </div>

              <input type="hidden" {...register("category")} />
              <p className="error">{errors.category?.message}</p>
            </div>

            {/* MONTH */}
            <div className="form-group">
              <label>Month (YYYY-MM)</label>
              <input
                type="text"
                placeholder="2026-02"
                {...register("month")}
              />
              <p className="error">{errors.month?.message}</p>
            </div>
          </div>

          {/* AMOUNT */}
          <div className="form-group full">
            <label>Budget Amount</label>
            <input
              type="number"
              step="0.01"
              placeholder="5000"
              {...register("amount")}
            />
            <p className="error">{errors.amount?.message}</p>
          </div>

          <button type="submit" className="btn-green" disabled={loading}>
            {loading ? "Saving..." : "Save Budget"}
          </button>
        </form>
      </div>

      {/* ================= BUDGET LIST ================= */}
      <div className="card budget-list-card">
        <div className="card-header">
          <span className="green-dot"></span>
          Budget List
        </div>

        {!Array.isArray(budgets) || budgets.length === 0 ? (
          <p style={{ padding: "20px" }}>
            No budgets added yet.
          </p>
        ) : (
          <table className="budget-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Month</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((item: any) => {
                const categoryName =
                  categories.find(
                    (cat: any) => cat.id === item.category
                  )?.name || "Unknown";

                return (
                  <tr key={item.id}>
                    <td>{categoryName}</td>
                    <td>{item.month.slice(0, 7)}</td>
                    <td>₹ {item.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
