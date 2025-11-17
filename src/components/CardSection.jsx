import { courses } from "../data/coursesData";
import { useRef, useState, useEffect, forwardRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ScrollableTabs = () => {
  const videosFilter = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  const [activeTab, setActiveTab] = useState(videosFilter[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const liRefs = useRef({});
  const ulRef = useRef(null);

  useEffect(() => {
    const activeEl = liRefs.current[activeTab];
    const ulEl = ulRef.current;

    if (activeEl && ulEl) {
      const liOffsetLeft = activeEl.offsetLeft;
      const liWidth = activeEl.offsetWidth;
      setIndicatorStyle({ left: liOffsetLeft, width: liWidth });
    }
  }, [activeTab]);

  return (
    <ul
      ref={ulRef}
      className="relative flex flex-row overflow-x-auto px-2 whitespace-nowrap justify-start items-center"
    >
      {videosFilter.map((item) => (
        <li
          key={item}
          ref={(el) => (liRefs.current[item] = el)}
          onClick={() => setActiveTab(item)}
          className="active py-5 pl-2 pr-6 cursor-pointer"
        >
          <span
            className={`font-medium text-sm md:text-base ${
              activeTab === item ? "text-text-accent" : "text-text-base"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
      <div
        className="w-24 absolute bottom-0 h-1.5 rounded-xl bg-text-accent transition-all duration-300 ease-in-out"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      ></div>
    </ul>
  );
};

const StarRating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;

  return (
    <div className="flex gap-1 text-btn-alt text-base">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <span key={starIndex}>
          {starIndex <= fullStars ? (
            <FaStar />
          ) : starIndex === fullStars + 1 && hasHalf ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-3 ">
      {courses.map((course) => (
        <div
          key={course.id}
          className="group flex flex-col bg-bg-main w-full max-w-xs p-4 border border-border-medium rounded-xl hover:border-border-dark md:max-w-sm md:p-5 md:gap-4 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-row gap-3 md:flex-col">
            <img
              src={course.thumbnail}
              alt="Card Thumbnail"
              className="w-21 h-21 object-cover rounded-xl md:w-86 md:h-48"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h2 className=" font-poppins font-semibold text-base text-text-main md:text-base">
                  {course.title}
                </h2>
                <div className="hidden md:block">
                <p
                  className="font-medium text-sm md:text-base text-text-base clamp-2 transition-all duration-300 ease-in-out"
                  //JELEK PAS DI HOVER, KASIH SMOOTH DONG KAKA
                >
                  {course.description}
                </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-2.5">
                <img
                  src={course.instructor.avatar}
                  alt={`Avatar ${course.instructor.name}`}
                  className="w-9 h-9 rounded-lg md:w-10 md:h-10"
                />
                <div>
                  <h4 className="font-medium text-sm md:text-base text-text-main">
                    {course.instructor.name}
                  </h4>
                  <p className="font-normal text-xs md:text-sm text-text-base">
                    {course.instructor.role}
                    <span className="hidden md:inline">
                      {` di `}
                      <span className="font-bold">
                        {course.instructor.company}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
              <StarRating value={course.rating.value} />

              <p className="font-medium text-sm md:text-base text-text-base">
                {course.rating.value} ({course.rating.reviews})
              </p>
            </div>
            <h4 className="card-price font-poppins font-semibold text-xl md:text-2xl text-btn-primary">
              {course.priceLabel}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col width-full max-w-xs mx-auto gap-4 md:max-w-7xl md:gap-5"
      id="all Videos"
    >
      <div className="flex flex-col gap-2.5">
        <h3 className="font-poppins text-2xl md:text-3xl font-semibold text-text-main">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="font-medium text-sm md:text-base text-text-base">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <ScrollableTabs />
      <Card />
    </section>
  );
});

export default CardSection;
