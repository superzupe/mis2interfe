import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileAvatar, iconBars, iconLogout } from "../../assets";
import { logout } from "../../utils/auth";
import HeaderDropdown from "./HeaderDropdown";

const HeaderMenu = ({ isAllVideos, isAdmin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { id: 0, label: "Kategori" },
    { id: 1, label: "Admin" },
    { id: 2, label: "Profile Saya" },
    { id: 3, label: "Kelas Saya" },
    { id: 4, label: "Pesanan Saya" },
    { id: 5, label: "Keluar", icon: iconLogout, danger: true },
  ];
  const menuItemsMd = menuItems.filter((item) => item.id >= 1);
  const menuItemsAdmin = menuItems.filter((item) => item.id !== 1);
  const menuItemsAdminMd = menuItems.filter((item) => item.id >= 2);

  const navigate = useNavigate();
  const goLogout = () => {
    logout();
    navigate("/login");
  };
  const goShowAllVideos = () => navigate("/all-videos");

  const goAdminPage = () => navigate("/admin");

  const handleMenuClick = (item) => {
    if (item.label === "Kategori") return goShowAllVideos();
    if (item.label === "Admin") return goAdminPage();
    if (item.label === "Keluar") return goLogout();
    handleShow();
  };

  return (
    <div className="md:relative">
      <button
        onClick={handleShow}
        className="flex md:hidden"
      >
        <img
          src={iconBars}
          alt="Icon Bars"
        />
      </button>
      <div className="hidden flex-row items-center gap-5 md:flex">
        <button
          onClick={goShowAllVideos}
          className={`text-sm  ${
            isAllVideos
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
        <HeaderDropdown
          isAllVideos={isAllVideos}
          isAdmin={isAdmin}
          menuItems={menuItems}
          menuItemsMd={menuItemsMd}
          menuItemsAdmin={menuItemsAdmin}
          menuItemsAdminMd={menuItemsAdminMd}
          handleMenuClick={handleMenuClick}
        />
      )}
    </div>
  );
};

export default HeaderMenu;
