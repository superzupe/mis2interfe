import { Link } from "react-router-dom";

const AuthButton = ({ type }) => {
  const classBase =
    "px-0 py-2 font-bold text-sm border-none rounded-lg cursor-pointer md:px-0 md:py-2.5 md:text-base";

  const variant = {
    primary: "bg-btn-primary text-text-inverse hover:bg-btn-primary-hover",
    secondary: "bg-btn-accent text-btn-primary hover:bg-btn-accent-hover",
  };

  const isLogin = type === "login";
  return (
    <>
      <button
        type="submit"
        className={`${classBase} ${variant.primary}`}
      >
        {isLogin ? "Masuk" : "Daftar"}
      </button>
      <Link
        to={isLogin ? "/register" : "/login"}
        className={`${classBase} ${variant.secondary}`}
      >
        {isLogin ? "Daftar" : "Masuk"}
      </Link>
    </>
  );
};
export default AuthButton;
