import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordField = ({ id, label, type, value, onChange }) => {
  const isLogin = type === "login";
  const [visible, setVisible] = useState(false);

  const showPassword = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="flex flex-col items-start gap-3 md:gap-4">
        <label
          htmlFor={id}
          className="text-sm font-normal text-text-base md:text-base"
        >
          {label} <span className="text-red-500"> *</span>
        </label>
        <div className="relative w-full">
          {visible && (
            <input
              type="text"
              id={id}
              name={id}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              autoComplete={
                type === isLogin ? "current-password" : "new-password"
              }
              required
              className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
            />
          )}
          {!visible && (
            <input
              type="password"
              id={id}
              name={id}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              autoComplete={
                type === isLogin ? "current-password" : "new-password"
              }
              required
              className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
            />
          )}

          <button
            type="button"
            onClick={showPassword}
            className="absolute z-10 right-4 translate-y-1/2 cursor-pointer"
          >
            {visible ? (
              <FaEye className="text-gray-400 text-xl" />
            ) : (
              <FaEyeSlash className="text-gray-400 text-xl" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default PasswordField;
