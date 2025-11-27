import { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

const SortDropdown = ({ sortBy, onSortChange }) => {
  const [showList, setShowList] = useState(false);

  const items = [
    { id: "price_low", label: "Harga Rendah" },
    { id: "price_high", label: "Harga Tinggi" },
    { id: "az", label: "A to Z" },
    { id: "za", label: "Z to A" },
    { id: "rating_high", label: "Rating Tertinggi" },
    { id: "rating_low", label: "Rating Terendah" },
  ];

  const handleClick = (id) => {
    onSortChange(id);
    setShowList(false);
  };

  return (
    <button
      type="button"
      onClick={() => setShowList(!showList)}
      className="relative flex flex-row justify-between items-center w-full max-w-31 px-3 py-2 bg-bg-main border border-border-medium rounded-lg text-sm text-text-base font-medium cursor-pointer"
    >
      <span>Urutkan</span>
      <span>{showList ? <FaCaretUp /> : <FaCaretDown />}</span>

      {/* list sortBy */}
      {showList && (
        <ul
          className="absolute mt-2 top-full  md:right-0
     w-full min-w-40 py-1 bg-bg-main border border-border-medium rounded-xl text-sm text-text-base font-medium cursor-pointer shadow-2xl"
        >
          {items.map((item) => {
            const active = sortBy === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-3 py-2.5 text-start hover:text-text-main hover:font-semibold hover:bg-gray-200 ${
                  active
                    ? "font-semibold text-text-main bg-gray-200"
                    : "font-medium bg-bg-main"
                } transition-all duration-300 ease-in-out`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};

export default SortDropdown;
