export const validateForm = (form, isLogin) => {
  if (isLogin) {
    if (!form.name.trim() && !form.email.trim())
      return "Semua input wajib diisi!";
  } else {
    const required = ["name", "email", "phone", "password", "confirmPassword"];
    if (required.some((f) => !form[f].trim()))
      return "Semua input harus diisi!";
    if (form.password.trim() !== form.confirmPassword.trim())
      return "Sandi tidak cocok!";
  }
  return null;
};

export const isAuthenticated = () => !!localStorage.getItem("authToken");

export const login = (token) => localStorage.setItem("authToken", token); //pasangan kunci nilai

export const logout = () => localStorage.removeItem("authToken");