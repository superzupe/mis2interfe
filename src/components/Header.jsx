import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  videobelajarLogo,
  profileAvatar,
  barsIcon,
  logoutIcon,
} from "../assets";

const Header = ({ type = "simple" }) => {
  const isMain = type === "main";
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();

  const goLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    { id: 1, label: "Profile Saya" },
    { id: 2, label: "Kelas Saya" },
    { id: 3, label: "Pesanan Saya" },
    { id: 4, label: "Keluar", icon: logoutIcon, danger: true },
  ];

  return (
    <>
      <header className=" fixed top-0 left-0 z-50 flex flex-row justify-between items-center w-full h-20 px-6 bg-bg-main border-b border-border-medium shadow-lg md:px-30 md:shadow-none">
        <a href="#">
          <img
            src={videobelajarLogo}
            alt="Logo Videobelajar"
            className="w-40 md:w-48"
          />
        </a>

        {isMain && (
          <div className="md:relative">
            <button onClick={handleShow} className="flex md:hidden">
              <img src={barsIcon} alt="Bars Icon" />
            </button>
            <div className="hidden  flex-row items-center gap-5 md:flex">
              <a
                href="#"
                className="text-sm font-medium text-text-base md:text-base"
              >
                Kategori
              </a>
              <button onClick={handleShow} className="cursor-pointer">
                <img
                  src={profileAvatar}
                  alt="Profile Avatar"
                  className="w-12 rounded-md hover:ring-2 hover:ring-border-medium transition-all duration-300 ease-in-out"
                />
              </button>
            </div>
            {showMenu && (
              <ul className="fixed top-19 left-1/2 md:right-5 md:left-auto md:top-16 transform -translate-x-1/2 w-full md:w-50 bg-bg-main border border-border-medium rounded-md shadow-lg">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      item.danger ? goLogout() : handleShow();
                    }}
                    className={`flex flex-row gap-4 p-4 items-center text-base font-medium border-b border-border-medium hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
                      item.danger ? "text-red-500" : "text-text-base"
                    }`}
                  >
                    {item.label} <img src={item.icon} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
