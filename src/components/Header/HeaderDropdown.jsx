const HeaderDropdown = ({
  isAllVideos,
  isAdmin,
  menuItems,
  menuItemsMd,
  menuItemsAdmin,
  menuItemsAdminMd,
  handleMenuClick,
}) => {
  return (
    <ul className="fixed top-19 left-1/2 md:right-5 md:left-auto md:top-16 transform -translate-x-1/2 w-full md:w-50 bg-bg-main border border-border-medium rounded-md shadow-lg">
      {(isAllVideos ? menuItemsMd : isAdmin ? menuItemsAdmin : menuItems).map(
        (item) => (
          <li
            key={item.id}
            onClick={() => handleMenuClick(item)}
            className={`md:hidden flex flex-row gap-4 p-4 items-center text-base font-medium border-b border-border-medium hover:font-bold transition-all duration-300 ease-in-out cursor-pointer ${
              item.danger ? "text-red-500" : "text-text-base"
            }`}
          >
            {item.label} <img src={item.icon} />
          </li>
        )
      )}
      {(isAdmin ? menuItemsAdminMd : menuItemsMd).map((item) => (
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
  );
};

export default HeaderDropdown;
