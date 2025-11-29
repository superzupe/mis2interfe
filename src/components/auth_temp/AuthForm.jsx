import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputField,
  PhoneField,
  PasswordField,
  AuthButton,
  SocialButton,
} from "./index";
import { validateForm, login } from "../../utils/auth";

const AuthForm = ({ type }) => {
  const navigate = useNavigate(); //gunain ini untuk navigate ke home ketika semua input yang require terisi
  const isLogin = type === "login";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+62",
    password: "",
    confirmPassword: "",
  });

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm(form, isLogin);
    if (error) alert(error);

    login("token-login-123")

    navigate("/home");
  };

  return (
    <section
      className={`min-h-screen flex justify-center items-center ${
        !isLogin && "mt-18"
      }  px-5 py-7 md:px-30 md:py-16`}
    >
      <div className="flex flex-col justify-center items-center text-center w-full max-w-80 p-5 gap-5 bg-bg-main border border-border-light rounded-sm md:max-w-148 md:p-9 md:gap-9">
        <div className="flex flex-col gap-2">
          <h3 className="font-poppins text-2xl font-semibold text-text-main md:text-3xl">
            {isLogin ? "Masuk ke Akun" : "Pendaftaran Akun"}
          </h3>
          <p className="text-sm font-normal text-text-base md:text-base">
            {isLogin
              ? "Yuk, lanjutin belajarmu di videobelajar."
              : "Yuk, daftarkan akunmu sekarang juga!"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 md:gap-6"
        >
          <div className="flex flex-col w-full min-w-70 gap-6 md:min-w-129">
            {!isLogin && (
              <InputField
                id="name"
                type="text"
                required={true}
                label="Nama Lengkap"
                value={form.name}
                onChange={(v) => setField("name", v)}
              />
            )}
            <InputField
              id="email"
              type="email"
              required={true}
              label="E-mail"
              value={form.email}
              onChange={(v) => setField("email", v)}
            />
            {isLogin && (
              <PasswordField
                id="password"
                label="Masukkan Sandi"
                type="login"
                value={form.password}
                onChange={(v) => setField("password", v)}
              />
            )}

            {!isLogin && (
              <>
                <PhoneField
                  code={form.countryCode}
                  number={form.phone}
                  onChangeCode={(v) => setField("countryCode", v)}
                  onChangeNumber={(v) => setField("phone", v)}
                />
                <PasswordField
                  id="password"
                  label="Masukkan Sandi"
                  type="register"
                  value={form.password}
                  onChange={(v) => setField("password", v)}
                />
                <PasswordField
                  id="confirmPassword"
                  label="Konfirmasi Sandi"
                  type="register"
                  value={form.confirmPassword}
                  onChange={(v) => setField("confirmPassword", v)}
                />
              </>
            )}

            <div className="text-end">
              <a
                href="#"
                className="text-sm font-semibold text-text-gray hover:text-text-base md:text-base "
              >
                Lupa password?
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-70 min-h-25 gap-4 md:max-w-129">
            {isLogin && <AuthButton type="login" />}
            {!isLogin && <AuthButton type="register" />}
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex-1 h-px bg-border-light "></div>
            <span className="text-sm font-normal text-text-base">atau</span>
            <div className="flex-1 h-px bg-border-light"></div>
          </div>

          <SocialButton />
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
