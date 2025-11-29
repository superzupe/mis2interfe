import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

const Header = ({ type = "simple" }) => {
  const isMain = type === "main";
  const isAllVideos = type === "all-videos";
  const isAdmin = type === "admin"

  return (
    <header className=" fixed top-0 left-0 z-50 flex flex-row justify-between items-center w-full h-20 px-6 bg-bg-main border-b border-border-medium shadow-lg md:px-30 md:shadow-none">
      <HeaderLogo />

      {(isMain || isAllVideos || isAdmin) && (
      <HeaderMenu isAllVideos={isAllVideos} isAdmin={isAdmin}/>
      )}
    </header>
  );
};

export default Header;
