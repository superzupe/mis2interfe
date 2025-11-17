import { useState } from "react";
import { videobelajarLogo } from "../assets";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterLink = () => {
  const link = [
    {
      title: "Kategori",
      items: [
        "Digital & Teknologi",
        "Pemasaran",
        "Manajemen Bisnis",
        "Pengembangan Diri",
        "Desain",
      ],
    },
    {
      title: "Perusahaan",
      items: [
        "Tentang Kami",
        "FAQ",
        "Kebijakan Privasi",
        "Ketentuan Layanan",
        "Bantuan",
      ],
    },
    { title: "Komunitas", items: ["Tips Sukses", "Blog"] },
  ];

  const [showList, setShowList] = useState(Array(link.length).fill(false));

  const handleShow = (index) => {
    const updated = [...showList];
    updated[index] = !updated[index];
    setShowList(updated); //nilainya bergantung pada nilai updated skrg, yang nilai awalnya sama dengan nilai showList
  };

  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        {link.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between items-center md:flex-col md:justify-start md:items-start gap-4">
              <h3 className="font-bold text-base text-text-main">
                {item.title}
              </h3>
              <ul className="hidden md:flex flex-col gap-3 ">
                {item.items.map((e, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="font-medium text-base text-text-base hover:text-text-main transition-all duration-300 ease-in-out"
                    >
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleShow(index)}
                className="text-xl text-text-base md:hidden"
              >
                {showList[index] ? <HiChevronDown /> : <HiChevronRight />}
              </button>
            </div>
            {showList[index] && (
              <ul className="flex flex-col gap-1 md:hidden">
                {item.items.map((e, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="font-medium text-sm text-text-base"
                    >
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const Footer = () => {
const socialLink = [<FaLinkedinIn />, <FaFacebookF/>, <FaInstagram/>, <FaTwitter/>];

  return (
    <footer className="flex flex-col justify-center items-center w-full min-h-17 p-5 gap-4 bg-bg-main border-t border-border-medium md:py-15 md:px-30 md:gap-5">
      <div className="flex flex-col justify-start w-full max-w-xs gap-4 md:flex-row md:justify-between md:max-w-7xl">
        <div className="flex flex-col justify-start w-full max-w-xs md:max-w-sm gap-4">
          <img
            src={videobelajarLogo}
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
            <li key={index} className="flex justify-center items-center w-9 h-9 p-1 border border-border-dark rounded-full hover:border-border-medium transition-all duration-300 ease-in-out">
              <a href="#" className="text-text-main">
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
