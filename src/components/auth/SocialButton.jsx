import { googleLogo } from "../../assets";

const SocialButton = () => {
  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center w-full max-w-70 px-0 py-2 gap-2 bg-bg-main border border-border-light rounded-lg cursor-pointer hover:border-border-medium md:max-w-129 md:py-2.5"
    >
      <img
        src={googleLogo}
        alt="Google Icon"
      />
      <span className="text-sm font-bold text-text-gray md:text-base ">
        Masuk dengan Google
      </span>
    </button>
  );
};
export default SocialButton;