export const endPoints = {
<<<<<<< HEAD
  auth: {
    signIn: "/api/account/login/",
    signUp: "/api/account/register/",
    verifyOtp: "/api/account/verify-otp/",
  },
   budgetCategory: {
    list: "/api/budgets/",               // GET
    create: "/api/budgets/create/",      // POST
  },
  budget: {
    list: "/api/budgets/budgets/",               // GET
    create: "/api/budgets/budgets/create/",      // POST
    delete: (id) => `/api/budgets/budgets/${id}/delete/`,
  },
};
=======
    auth: {
        signIn: "/api/account/login/",
        signUp: "/api/account/register/",
        verifyOtp: "/api/account/verify-otp/",
    },

    expenses: {
    create: "/api/expenses/create/",
    list: "/api/expenses/",
    update: (id) => `/api/expenses/update/${id}/`,
    delete: (id) => `/api/expenses/delete/${id}/`,
  },
    
}
>>>>>>> 0286104b15940de616483bfd80b0e1fde60be82c
