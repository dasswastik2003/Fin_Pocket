// "use client";

// import Image from "next/image";
// import "@/styles/expensecss/expense.css";

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import type { RootState, AppDispatch } from "@/redux/store/store";

// import {
//   fetchExpenses,
//   createExpense,
//   updateExpense,
//   deleteExpense,
//   setSelectedExpense,
//   clearSelectedExpense,
// } from "@/redux/slice/expenseSlice";

// // Category Options with IDs
// const categoryOptions = [
//   { id: 1, name: "Office Supplies", group: "Operational" },
//   { id: 2, name: "Utilities", group: "Operational" },
//   { id: 3, name: "Rent", group: "Operational" },
//   { id: 4, name: "Maintenance", group: "Operational" },
//   { id: 5, name: "Internet & Phone", group: "Operational" },

//   { id: 6, name: "Travel", group: "Travel & Client" },
//   { id: 7, name: "Accommodation", group: "Travel & Client" },
//   { id: 8, name: "Meals", group: "Travel & Client" },
//   { id: 9, name: "Client Entertainment", group: "Travel & Client" },
//   { id: 10, name: "Transportation", group: "Travel & Client" },

//   { id: 11, name: "Software Subscription", group: "Technology" },
//   { id: 12, name: "Hardware", group: "Technology" },
//   { id: 13, name: "Cloud Services", group: "Technology" },
//   { id: 14, name: "Web Hosting", group: "Technology" },
//   { id: 15, name: "Domain Renewal", group: "Technology" },

//   { id: 16, name: "Advertising", group: "Marketing" },
//   { id: 17, name: "Social Media Ads", group: "Marketing" },
//   { id: 18, name: "Printing", group: "Marketing" },
//   { id: 19, name: "Branding", group: "Marketing" },
//   { id: 20, name: "Content Creation", group: "Marketing" },

//   { id: 21, name: "Salaries", group: "HR & Admin" },
//   { id: 22, name: "Freelancers", group: "HR & Admin" },
//   { id: 23, name: "Training", group: "HR & Admin" },
//   { id: 24, name: "Recruitment", group: "HR & Admin" },
//   { id: 25, name: "Insurance", group: "HR & Admin" },

//   { id: 26, name: "Bank Charges", group: "Finance" },
//   { id: 27, name: "Taxes", group: "Finance" },
//   { id: 28, name: "Loan Repayment", group: "Finance" },
//   { id: 29, name: "Accounting Services", group: "Finance" },
// ];

// export default function DashboardExpense() {
//   const dispatch = useDispatch<AppDispatch>();

//   const { expenses, loading, selectedExpense } = useSelector(
//     (state: RootState) => state.expenses
//   );

//   const [formData, setFormData] = useState({
//     category: "", // will store ID now
//     amount: "",
//     date: "",
//     notes: "",
//   });

//   // Load Expenses
//   useEffect(() => {
//     dispatch(fetchExpenses());
//   }, [dispatch]);

//   // Fill Form When Edit Click
//   useEffect(() => {
//     if (selectedExpense) {
//       setFormData({
//         category: selectedExpense.category?.id || "", // use ID
//         amount: selectedExpense.amount || "",
//         date: selectedExpense.date || "",
//         notes: selectedExpense.notes || "",
//       });
//     }
//   }, [selectedExpense]);

//   // Handle Input Change
//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   // Submit Create/Update
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.category || !formData.amount || !formData.date) {
//       alert("Category, Amount, Date are required!");
//       return;
//     }

//     const payload = {
//       ...formData,
//       category: Number(formData.category), // send ID as number
//     };

//     if (selectedExpense) {
//       await dispatch(
//         updateExpense({
//           id: selectedExpense.id,
//           payload,
//         })
//       );

//       dispatch(clearSelectedExpense());
//       dispatch(fetchExpenses());
//     } else {
//       await dispatch(createExpense(payload));
//       dispatch(fetchExpenses());
//     }

//     setFormData({
//       category: "",
//       amount: "",
//       date: "",
//       notes: "",
//     });
//   };

//   // Delete
//   const handleDelete = async (id: number) => {
//     if (confirm("Are you sure you want to delete this expense?")) {
//       await dispatch(deleteExpense(id));
//       dispatch(fetchExpenses());
//     }
//   };

//   // Cancel Edit
//   const handleCancelEdit = () => {
//     dispatch(clearSelectedExpense());
//     setFormData({
//       category: "",
//       amount: "",
//       date: "",
//       notes: "",
//     });
//   };

//   // Helper: group categories for dropdown
//   const groupedCategories = categoryOptions.reduce((acc, cat) => {
//     if (!acc[cat.group]) acc[cat.group] = [];
//     acc[cat.group].push(cat);
//     return acc;
//   }, {} as Record<string, typeof categoryOptions>);

//   return (
//     <div className="container">
//       <h1 className="title" style={{ marginTop: "60px", textAlign: "center" }}>
//         Expense Management
//       </h1>

//       <p className="subtitle">
//         Track and manage your business expenditures with ease.
//       </p>

//       <div className="grid" style={{ alignItems: "flex-start" }}>
//         {/* LEFT FORM */}
//         <div className="card">
//           <div className="card-head">
//             <figure>
//               <Image
//                 src="/images/expences/add-icon.svg"
//                 alt="add-icon"
//                 width={30}
//                 height={30}
//               />
//             </figure>

//             <h2>{selectedExpense ? "Edit Expense" : "Add New Expense"}</h2>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="category">Category</label>

//               <select
//                 className="input"
//                 id="category"
//                 value={formData.category}
//                 onChange={handleChange}
//               >
//                 <option value="" disabled>
//                   Select category
//                 </option>

//                 {Object.keys(groupedCategories).map((group) => (
//                   <optgroup key={group} label={group}>
//                     {groupedCategories[group].map((cat) => (
//                       <option key={cat.id} value={cat.id}>
//                         {cat.name}
//                       </option>
//                     ))}
//                   </optgroup>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="amount">Amount</label>
//               <input
//                 className="input"
//                 placeholder="$ 0.00"
//                 id="amount"
//                 value={formData.amount}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 id="date"
//                 className="input"
//                 value={formData.date}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="notes">Notes</label>
//               <textarea
//                 className="input"
//                 id="notes"
//                 placeholder="Description of the expense..."
//                 value={formData.notes}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <input
//               type="submit"
//               value={selectedExpense ? "Update Expense" : "Submit Expense"}
//               className="submit-btn"
//             />

//             {selectedExpense && (
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="submit-btn"
//                 style={{ marginTop: "12px", background: "#444" }}
//               >
//                 Cancel Edit
//               </button>
//             )}
//           </form>
//         </div>

//         {/* RIGHT TABLE */}
//         <div className="card">
//           <div className="card-top">
//             <div className="card-head">
//               <figure>
//                 <Image
//                   src="/images/expences/recent-icon.svg"
//                   alt="recent-icon"
//                   width={30}
//                   height={30}
//                 />
//               </figure>
//               <h2>Recent Expenses</h2>
//             </div>

//             <div className="table-wrapper">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Category</th>
//                     <th>Notes</th>
//                     <th>Amount</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {loading ? (
//                     <tr>
//                       <td colSpan={5} style={{ textAlign: "center" }}>
//                         Loading...
//                       </td>
//                     </tr>
//                   ) : expenses.length > 0 ? (
//                     expenses.map((item) => (
//                       <tr key={item.id}>
//                         <td>{item.date}</td>

//                         <td>
//                           <span className="badge travel">
//                             {item.category?.name || ""}
//                           </span>
//                         </td>

//                         <td>{item.notes}</td>

//                         <td>${item.amount}</td>

//                         <td>
//                           <ul className="actions">
//                             <li>
//                               <button
//                                 type="button"
//                                 className="edit-btn-ico"
//                                 onClick={() =>
//                                   dispatch(setSelectedExpense(item))
//                                 }
//                               ></button>
//                             </li>

//                             <li>
//                               <button
//                                 type="button"
//                                 className="del-btn-ico"
//                                 onClick={() => handleDelete(item.id)}
//                               ></button>
//                             </li>
//                           </ul>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={5} style={{ textAlign: "center" }}>
//                         No expenses found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* STATS SECTION */}
//           <div className="stats">
//             <div className="financial-card">
//               <div className="financial-card-header">
//                 <span>Monthly Budget</span>
//                 <span className="positive">↗ 12%</span>
//               </div>
//               <h3>$5,000.00</h3>
//               <div className="progress">
//                 <div className="progress-fill"></div>
//               </div>
//               <p className="sub-text">65% of budget used</p>
//             </div>

//             <div className="financial-card">
//               <div className="financial-card-header">
//                 <span>Total Expenses (MTD)</span>
//                 <span className="financial-negative">↗ 8.4%</span>
//               </div>
//               <h3>$3,249.70</h3>
//               <div className="financial-mini-chart">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </div>

//             <div className="financial-card">
//               <div className="financial-card-header">
//                 <span>Pending Approvals</span>
//               </div>

//               <div className="approval-row">
//                 <h3>04</h3>

//                 <div className="financial-avatars">
//                   <figure>
//                     <Image
//                       src="/images/profile/user-1.svg"
//                       alt="user-1"
//                       width={30}
//                       height={30}
//                     />
//                   </figure>

//                   <figure>
//                     <Image
//                       src="/images/profile/user-2.svg"
//                       alt="user-2"
//                       width={30}
//                       height={30}
//                     />
//                   </figure>

//                   <figure>
//                     <Image
//                       src="/images/profile/user-3.svg"
//                       alt="user-3"
//                       width={30}
//                       height={30}
//                     />
//                   </figure>
//                 </div>
//               </div>

//               <a href="#" className="fn-btn">
//                 View report queue →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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

// Category Options with IDs
const categoryOptions = [
  { id: 1, name: "Office Supplies", group: "Operational" },
  { id: 2, name: "Utilities", group: "Operational" },
  { id: 3, name: "Rent", group: "Operational" },
  { id: 4, name: "Maintenance", group: "Operational" },
  { id: 5, name: "Internet & Phone", group: "Operational" },

  { id: 6, name: "Travel", group: "Travel & Client" },
  { id: 7, name: "Accommodation", group: "Travel & Client" },
  { id: 8, name: "Meals", group: "Travel & Client" },
  { id: 9, name: "Client Entertainment", group: "Travel & Client" },
  { id: 10, name: "Transportation", group: "Travel & Client" },

  { id: 11, name: "Software Subscription", group: "Technology" },
  { id: 12, name: "Hardware", group: "Technology" },
  { id: 13, name: "Cloud Services", group: "Technology" },
  { id: 14, name: "Web Hosting", group: "Technology" },
  { id: 15, name: "Domain Renewal", group: "Technology" },

  { id: 16, name: "Advertising", group: "Marketing" },
  { id: 17, name: "Social Media Ads", group: "Marketing" },
  { id: 18, name: "Printing", group: "Marketing" },
  { id: 19, name: "Branding", group: "Marketing" },
  { id: 20, name: "Content Creation", group: "Marketing" },

  { id: 21, name: "Salaries", group: "HR & Admin" },
  { id: 22, name: "Freelancers", group: "HR & Admin" },
  { id: 23, name: "Training", group: "HR & Admin" },
  { id: 24, name: "Recruitment", group: "HR & Admin" },
  { id: 25, name: "Insurance", group: "HR & Admin" },

  { id: 26, name: "Bank Charges", group: "Finance" },
  { id: 27, name: "Taxes", group: "Finance" },
  { id: 28, name: "Loan Repayment", group: "Finance" },
  { id: 29, name: "Accounting Services", group: "Finance" },
];

export default function DashboardExpense() {
  const dispatch = useDispatch<AppDispatch>();

  const { expenses, loading, selectedExpense } = useSelector(
    (state: RootState) => state.expenses
  );

  const [formData, setFormData] = useState({
    category: "", // will store ID
    amount: "",
    date: "",
    notes: "",
  });

  // Load Expenses
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  // Fill Form When Edit Click
  useEffect(() => {
    if (selectedExpense) {
      setFormData({
        category: selectedExpense.category || "", // ID
        amount: selectedExpense.amount || "",
        date: selectedExpense.date || "",
        notes: selectedExpense.notes || "",
      });
    }
  }, [selectedExpense]);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    const payload = {
      ...formData,
      category: Number(formData.category), // send ID
    };

    if (selectedExpense) {
      await dispatch(
        updateExpense({
          id: selectedExpense.id,
          payload,
        })
      );
      dispatch(clearSelectedExpense());
      dispatch(fetchExpenses());
    } else {
      await dispatch(createExpense(payload));
      dispatch(fetchExpenses());
    }

    setFormData({
      category: "",
      amount: "",
      date: "",
      notes: "",
    });
  };

  // Delete
  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      await dispatch(deleteExpense(id));
      dispatch(fetchExpenses());
    }
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    dispatch(clearSelectedExpense());
    setFormData({
      category: "",
      amount: "",
      date: "",
      notes: "",
    });
  };

  // Helper: group categories for dropdown
  const groupedCategories = categoryOptions.reduce((acc, cat) => {
    if (!acc[cat.group]) acc[cat.group] = [];
    acc[cat.group].push(cat);
    return acc;
  }, {} as Record<string, typeof categoryOptions>);

  return (
    <div className="container">
      <h1 className="title" style={{ marginTop: "60px", textAlign: "center" }}>
        Expense Management
      </h1>

      <p className="subtitle">
        Track and manage your business expenditures with ease.
      </p>

      <div className="grid" style={{ alignItems: "flex-start" }}>
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

                {Object.keys(groupedCategories).map((group) => (
                  <optgroup key={group} label={group}>
                    {groupedCategories[group].map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
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
              <label htmlFor="notes">Notes</label>
              <textarea
                className="input"
                id="notes"
                placeholder="Description of the expense..."
                value={formData.notes}
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
                    expenses.map((item) => {
                      // Find category name from ID
                      const categoryName =
                        categoryOptions.find(
                          (cat) => cat.id === Number(item.category)
                        )?.name || "";

                      return (
                        <tr key={item.id}>
                          <td>{item.date}</td>
                          <td>
                            <span className="badge travel">{categoryName}</span>
                          </td>
                          <td>{item.notes}</td>
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
                      );
                    })
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

          {/* STATS SECTION */}
          <div className="stats">
            {/* ... your stats cards ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

