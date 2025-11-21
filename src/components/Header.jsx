import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  videobelajarLogo,
  profileAvatar,
  barsIcon,
  logoutIcon,
} from "../assets";
import { logout } from "./../utils/auth";

const Header = ({ type = "simple" }) => {
  const isMain = type === "main";
  const isFilter = type === "filter";

  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { id: 0, label: "Kategori" },
    { id: 1, label: "Profile Saya" },
    { id: 2, label: "Kelas Saya" },
    { id: 3, label: "Pesanan Saya" },
    { id: 4, label: "Keluar", icon: logoutIcon, danger: true },
  ];
  const menuItemsMd = menuItems.filter((item) => item.id >= 1);

  const navigate = useNavigate();
  const goLogout = () => {
    logout();
    navigate("/login");
  };
  const goShowFilter = () => navigate("/filter");

  const handleMenuClick = (item) => {
    if (item.label === "Keluar") return goLogout(); 
    if (item.label === "Kategori") return goShowFilter();
    handleShow();
  };

  return (
    <header className=" fixed top-0 left-0 z-50 flex flex-row justify-between items-center w-full h-20 px-6 bg-bg-main border-b border-border-medium shadow-lg md:px-30 md:shadow-none">
      <Link to="/home">
        <img
          src={videobelajarLogo}
          alt="Logo Videobelajar"
          className="w-40 md:w-48"
        />
      </Link>

      {(isMain || isFilter) && (
        <div className="md:relative">
          <button
            onClick={handleShow}
            className="flex md:hidden"
          >
            <img
              src={barsIcon}
              alt="Bars Icon"
            />
          </button>
          <div className="hidden flex-row items-center gap-5 md:flex">
            <button
              //maybe disini ganti link atau useNavigate ya, tapi nested atau routes tadi ituloh
              onClick={goShowFilter}
              className={`text-sm  ${
                isFilter
                  ? "text-btn-primary font-semibold hover:font-bold"
                  : "text-text-base font-medium hover:font-semibold"
              }  md:text-base transition-all duration-300 ease-in-out cursor-pointer`}
            >
              {menuItems[0].label}
            </button>
            <button
              onClick={handleShow}
              className="cursor-pointer"
            >
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
                  onClick={() => handleMenuClick(item)}
                  className={`md:hidden flex flex-row gap-4 p-4 items-center text-base font-medium border-b border-border-medium hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
                    item.danger ? "text-red-500" : "text-text-base"
                  }`}
                >
                  {item.label} <img src={item.icon} />
                </li>
              ))}
              {menuItemsMd.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  className={`hidden md:flex flex-row gap-4 p-4 items-center text-base font-medium border-b border-border-medium hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
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
  );
};

export default Header;
