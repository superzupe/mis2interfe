import { useRef, useEffect , useState} from "react";

const ScrollableFilter = ({categories, activeCategory, setActiveCategory}) => {
  const liRefs = useRef({});
  const ulRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeEl = liRefs.current[activeCategory];
    const ulEl = ulRef.current;

    if (activeEl && ulEl) {
      const liOffsetLeft = activeEl.offsetLeft;
      const liWidth = activeEl.offsetWidth;
      setIndicatorStyle({ left: liOffsetLeft, width: liWidth });
    }
  }, [activeCategory]);

  return (
    <ul
      ref={ulRef}
      className="relative flex flex-row overflow-x-auto px-2 whitespace-nowrap justify-start items-center"
    >
      {categories.map((cat) => (
        <li
          key={cat}
          ref={(el) => (liRefs.current[cat] = el)}
          onClick={() => setActiveCategory(cat)}
          className={`active py-5 pl-2 pr-6 cursor-pointer font-medium text-sm md:text-base ${
            activeCategory === cat ? "text-text-accent" : "text-text-base"
          }`}
        >
          {cat}
        </li>
      ))}
      <div
        className="w-24 absolute bottom-0 h-1.5 rounded-xl bg-text-accent transition-all duration-300 ease-in-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      ></div>
    </ul>
  );
};

export default ScrollableFilter;