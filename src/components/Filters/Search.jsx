import { useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

//BELUM FUNGSINYAAAAAAAAAAAAAA
const Search = ({ searchValue, onSearch }) => {
  const [input, setInput] = useState(searchValue || "");
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative  w-full max-w-55 "
    >
      <input
      ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cari Kelas"
        className="px-3 py-2 bg-bg-main border border-border-medium rounded-lg focus:outline-border-dark placeholder:text-sm placeholder:text-text-base placeholder:font-medium"
      />
      <button
        type="submit"
        className="absolute z-10 right-3 md:right-8 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <FaMagnifyingGlass className="text-text-base" />
      </button>
    </form>
  );
};

export default Search;
