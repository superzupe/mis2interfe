import { useState } from "react";
import {
  FaBook,
  FaTags,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { menuFilters } from "../../data/menuFilters";

const SidebarFilter = ({ filters, onFilterChange, onFilterReset }) => {
  const [showList, setShowList] = useState(
    Array(menuFilters.length).fill(false)
  );

  const handleShow = (index) => {
    const updated = [...showList];
    updated[index] = !updated[index];
    setShowList(updated);
  };

  return (
    <div className="flex flex-col w-full max-w-xs md:max-w-sm p-5 gap-4 bg-bg-main border border-border-medium rounded-xl">
      <div className="flex flex-row justify-between">
        <span className="font-poppins text-lg text-text-base font-semibold ">
          Filter
        </span>
        <button
          onClick={onFilterReset}
          className="text-text-accent font-medium cursor-pointer hover:font-semibold"
        >
          Reset
        </button>
      </div>

      {menuFilters.map(({ label, type, key, items }, index) => {
        const isChecked = (item) => {
          if (key === "categories") {
            return filters.categories.includes(item);
          }
          if (key === "prices") {
            return filters.prices.includes(item.id);
          }
          if (key === "duration") {
            return filters.duration === item.id;
          }
        };

        return (
          <div
            key={label}
            className="flex flex-col w-full max-w-sm p-4 gap-4.5 bg-bg-main border border-border-medium rounded-xl"
          >
            <button
              onClick={() => handleShow(index)}
              className="flex flex-row justify-between text-btn-primary cursor-pointer"
            >
              <div className="flex flex-row gap-2 items-center">
                <span>
                  {key === "categories" && <FaBook />}
                  {key === "prices" && <FaTags />}
                  {key === "duration" && <FaClock />}
                </span>
                <h3 className="font-medium ">{label}</h3>
              </div>
              <span>
                {showList[index] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {showList[index] && (
              <div className="flex flex-col gap-3">
                {items.map((item, i) => (
                  <label
                    key={i}
                    className="flex flex-row items-center gap-3"
                  >
                    <input
                      type={type}
                      name={label}
                      checked={isChecked(item)}
                      onChange={() =>
                        onFilterChange(
                          key,
                          key === "categories" ? item : item.id
                        )
                      }
                      className={`appearance-none w-4 h-4 bg-btn-accent border border-btn-primary ${
                        type === "radio" ? "rounded-full" : "rounded-sm"
                      } checked:bg-btn-primary cursor-pointer transition-all duration-300 ease-in-out`}
                    />
                    <span className="text-text-base text-sm md:text-base">
                      {key === "categories" ? item : item.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarFilter;
