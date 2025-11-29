import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { StaticRouterProvider } from "react-router-dom";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
  const [isMobile, setIsMobile] = useState(false);

  //TAMPILIN KOMPONENT YANG SESUAI DENGAN WIDTH BROWSER
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const limit = isMobile ? 5 : 10;

  //angka pages yang tampil
  let startPage = Math.max(1, currentPage - Math.floor(limit / 2));
  let endPage = startPage + limit - 1;
  
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - limit + 1);
  }

  //bikin array sesuai limit window
  const pages = Array.from({ length: endPage - startPage + 1}, (_, i) => startPage + i);

  

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="flex flex-row justify-center gap-1.5">
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="flex flex-row justify-center items-center w-10 h-10 bg-btn-accent rounded-md hover:bg-btn-accent-hover transition-all duration-200 ease-in-out cursor-pointer"
      >
        <FaChevronLeft className="text-text-base" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`w-10 h-10 font-semibold text-sm rounded-md transition-all duration-300 ease-in-out cursor-pointer
              ${
                currentPage === page
                  ? "bg-btn-alt text-white"
                  : "bg-bg-main text-text-base"
              }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        className="flex flex-row justify-center items-center w-10 h-10 bg-btn-accent rounded-md hover:bg-btn-accent-hover transition-all duration-200 ease-in-out cursor-pointer"
      >
        <FaChevronRight className="text-text-base" />
      </button>
    </div>
  );
};

export default Pagination;
