import { useState } from "react";
import { flagID, flagKR, flagTH, flagUS, } from "../../assets";
import { HiChevronDown } from "react-icons/hi";

const countries = [
  { code: "+62", label: "Indonesia", flag: flagID },
  { code: "+82", label: "Korea", flag: flagKR },
  { code: "+66", label: "Thailand", flag: flagTH },
  { code: "+1", label: "USA", flag: flagUS },
];

const PhoneField = ({code, number, onChangeCode, onChangeNumber }) => {
  return (
    <>
      <div className="flex flex-col w-full items-start gap-3 md:gap-4">
        <label
          htmlFor="tel"
          className="text-sm font-normal text-text-base md:text-base"
        >
          No. Hp
          <span className="text-red-500"> *</span>
        </label>
        <div className="flex flex-row gap-3 w-full justify-center items-center">
          <CountryDropdown
            selected={code}
            onSelect={(code) => onChangeCode(code)}
          />
          <input
            type="tel"
            id="tel"
            name="tel"
            value={number}
            onChange={(e) => onChangeNumber(e.target.value)}
            autoComplete="tel-country-code"
            required
            className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
          />
        </div>
      </div>
    </>
  );
};

const CountryDropdown = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    onSelect(code);
    setIsOpen(false);
  };

  const current = countries.find((c) => c.code === selected);
  return (
    <>
      <div className="relative flex flex-row w-full max-w-36 cursor-pointer rounded-md">
        <div className="relative flex justify-center items-center bg-gray-100 border border-border-medium px-5 py-4 rounded-tl-md rounded-bl-md">
          <img
            src={current.flag}
            alt={current.label}
            className="absolute z-10 w-5"
          />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row justify-between w-full p-2 text-sm text-text-main border border-border-light rounded-br-md rounded-tr-md md:text-base hover:ring-2 hover:ring-border-medium"
        >
          <span>{current.code}</span>
          <span className="flex justify-center items-center">
            <HiChevronDown className="text-gray-400 text-xl" />
          </span>
        </button>

        {isOpen && (
          <ul className="absolute z-10 flex flex-col justify-center w-full bg-bg-main border-2 border-border-medium rounded-md">
            {countries.map((c) => {
              return (
                <li
                  key={c.code}
                  data-value={c.code}
                  onClick={() => handleSelect(c.code)}
                  className="flex flex-row justify-start w-full gap-2 px-4 py-2 text-sm text-text-main border border-border-light cursor-pointer md:text-base hover:ring-2 hover:ring-border-medium"
                >
                  <img
                    src={c.flag}
                    alt={c.label}
                    className="w-5"
                  />
                  <span>{c.label}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default PhoneField;
