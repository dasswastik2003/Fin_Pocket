export const endPoints = {
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
