

export const endPoints = {
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
