"use client";

import Image from "next/image";
import "@/styles/expensecss/expense.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/redux/store/store";

import {
  fetchExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  setSelectedExpense,
  clearSelectedExpense,
} from "@/redux/slice/expenseSlice";

export default function DashboardExpense() {
  const dispatch = useDispatch<AppDispatch>();

  const { expenses, loading, selectedExpense } = useSelector(
    (state: RootState) => state.expenses
  );

  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    date: "",
    note: "",
  });

  // Load Expenses
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  // Fill Form When Edit Click
  useEffect(() => {
    if (selectedExpense) {
      setFormData({
        category: selectedExpense.category || "",
        amount: selectedExpense.amount || "",
        date: selectedExpense.date || "",
        note: selectedExpense.note || "",
      });
    }
  }, [selectedExpense]);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit Create/Update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category || !formData.amount || !formData.date) {
      alert("Category, Amount, Date are required!");
      return;
    }

    if (selectedExpense) {
      await dispatch(
        updateExpense({
          id: selectedExpense.id,
          payload: formData,
        })
      );

      dispatch(clearSelectedExpense());
      dispatch(fetchExpenses()); // IMPORTANT
    } else {
      await dispatch(createExpense(formData));
      dispatch(fetchExpenses()); // IMPORTANT
    }

    setFormData({
      category: "",
      amount: "",
      date: "",
      note: "",
    });
  };

  // Delete
  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      await dispatch(deleteExpense(id));
      dispatch(fetchExpenses()); // IMPORTANT
    }
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    dispatch(clearSelectedExpense());
    setFormData({
      category: "",
      amount: "",
      date: "",
      note: "",
    });
  };

  return (
    <div className="container">
      <h1 className="title" style={{ marginTop: "60px", textAlign: "center" }}>
        Expense Management
      </h1>

      <p className="subtitle">
        Track and manage your business expenditures with ease.
      </p>

      <div className="grid">
        {/* LEFT FORM */}
        <div className="card">
          <div className="card-head">
            <figure>
              <Image
                src="/images/expences/add-icon.svg"
                alt="add-icon"
                width={30}
                height={30}
              />
            </figure>

            <h2>{selectedExpense ? "Edit Expense" : "Add New Expense"}</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category</label>

              <select
                className="input"
                id="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select category
                </option>

                <optgroup label="Operational">
                  <option value="Office Supplies">Office Supplies</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Rent">Rent</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Internet & Phone">Internet & Phone</option>
                </optgroup>

                <optgroup label="Travel & Client">
                  <option value="Travel">Travel</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Meals">Meals</option>
                  <option value="Client Entertainment">
                    Client Entertainment
                  </option>
                  <option value="Transportation">Transportation</option>
                </optgroup>

                <optgroup label="Technology">
                  <option value="Software Subscription">
                    Software Subscription
                  </option>
                  <option value="Hardware">Hardware</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Web Hosting">Web Hosting</option>
                  <option value="Domain Renewal">Domain Renewal</option>
                </optgroup>

                <optgroup label="Marketing">
                  <option value="Advertising">Advertising</option>
                  <option value="Social Media Ads">Social Media Ads</option>
                  <option value="Printing">Printing</option>
                  <option value="Branding">Branding</option>
                  <option value="Content Creation">Content Creation</option>
                </optgroup>

                <optgroup label="HR & Admin">
                  <option value="Salaries">Salaries</option>
                  <option value="Freelancers">Freelancers</option>
                  <option value="Training">Training</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Insurance">Insurance</option>
                </optgroup>

                <optgroup label="Finance">
                  <option value="Bank Charges">Bank Charges</option>
                  <option value="Taxes">Taxes</option>
                  <option value="Loan Repayment">Loan Repayment</option>
                  <option value="Accounting Services">
                    Accounting Services
                  </option>
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                className="input"
                placeholder="$ 0.00"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="input"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="note">Note</label>
              <textarea
                className="input"
                id="note"
                placeholder="Description of the expense..."
                value={formData.note}
                onChange={handleChange}
              ></textarea>
            </div>

            <input
              type="submit"
              value={selectedExpense ? "Update Expense" : "Submit Expense"}
              className="submit-btn"
            />

            {selectedExpense && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="submit-btn"
                style={{ marginTop: "12px", background: "#444" }}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* RIGHT TABLE */}
        <div className="card">
          <div className="card-top">
            <div className="card-head">
              <figure>
                <Image
                  src="/images/expences/recent-icon.svg"
                  alt="recent-icon"
                  width={30}
                  height={30}
                />
              </figure>
              <h2>Recent Expenses</h2>
            </div>

            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} style={{ textAlign: "center" }}>
                        Loading...
                      </td>
                    </tr>
                  ) : expenses.length > 0 ? (
                    expenses.map((item) => (
                      <tr key={item.id}>
                        <td>{item.date}</td>

                        <td>
                          <span className="badge travel">{item.category}</span>
                        </td>

                        <td>{item.note}</td>

                        <td>${item.amount}</td>

                        <td>
                          <ul className="actions">
                            <li>
                              <button
                                type="button"
                                className="edit-btn-ico"
                                onClick={() =>
                                  dispatch(setSelectedExpense(item))
                                }
                              ></button>
                            </li>

                            <li>
                              <button
                                type="button"
                                className="del-btn-ico"
                                onClick={() => handleDelete(item.id)}
                              ></button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} style={{ textAlign: "center" }}>
                        No expenses found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* STATS SECTION (Your Design Same) */}
          <div className="stats">
            <div className="financial-card">
              <div className="financial-card-header">
                <span>Monthly Budget</span>
                <span className="positive">↗ 12%</span>
              </div>
              <h3>$5,000.00</h3>
              <div className="progress">
                <div className="progress-fill"></div>
              </div>
              <p className="sub-text">65% of budget used</p>
            </div>

            <div className="financial-card">
              <div className="financial-card-header">
                <span>Total Expenses (MTD)</span>
                <span className="financial-negative">↗ 8.4%</span>
              </div>
              <h3>$3,249.70</h3>
              <div className="financial-mini-chart">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="financial-card">
              <div className="financial-card-header">
                <span>Pending Approvals</span>
              </div>

              <div className="approval-row">
                <h3>04</h3>

                <div className="financial-avatars">
                  <figure>
                    <Image
                      src="/images/profile/user-1.svg"
                      alt="user-1"
                      width={30}
                      height={30}
                    />
                  </figure>

                  <figure>
                    <Image
                      src="/images/profile/user-2.svg"
                      alt="user-2"
                      width={30}
                      height={30}
                    />
                  </figure>

                  <figure>
                    <Image
                      src="/images/profile/user-3.svg"
                      alt="user-3"
                      width={30}
                      height={30}
                    />
                  </figure>
                </div>
              </div>

              <a href="#" className="fn-btn">
                View report queue →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
