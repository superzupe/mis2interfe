import { LogoVideobelajar } from "../../assets";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import FooterLink from "./FooterLink";

const Footer = () => {
  const socialLink = [
    <FaLinkedinIn />,
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
  ];

  return (
    <footer className="flex flex-col justify-center items-center w-full min-h-17 p-5 gap-4 bg-bg-main border-t border-border-medium md:py-15 md:px-30 md:gap-5">
      <div className="flex flex-col justify-start w-full max-w-xs gap-4 md:flex-row md:justify-between md:max-w-7xl">
        <div className="flex flex-col justify-start w-full max-w-xs md:max-w-sm gap-4">
          <img
            src={LogoVideobelajar}
            alt="Logo Videobelajar"
            className="w-40 md:w-48"
          />
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-bold text-base md:text-lg text-text-main">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h4>
            <p className="font-normal text-sm md:text-base text-text-main">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="font-normal text-sm md:text-base text-text-main">
              +62-877-7123-1234
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-7">
          <FooterLink />
        </div>
      </div>
      <div className="w-full h-px mt-2.5 md:mt-8 bg-border-medium"></div>
      <div className="flex flex-col justify-start w-full max-w-xs gap-3 md:flex-row-reverse md:justify-between md:max-w-7xl">
        <ul className="flex flex-row gap-4">
          {socialLink.map((element, index) => (
            <li
              key={index}
              className="flex justify-center items-center w-9 h-9 p-1 border border-border-dark rounded-full hover:border-border-medium transition-all duration-300 ease-in-out"
            >
              <a
                href="#"
                className="text-text-main"
              >
                {element}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-normal text-sm md:text-base text-text-base">
          &copy;2023 Gerobak Sayur All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
