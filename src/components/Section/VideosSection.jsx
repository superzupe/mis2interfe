import { forwardRef, useState, useMemo } from "react";
import { getMergedCourses } from "../../utils/courseService";
import { useNavigate } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import Card from "../Card/Card";
import ScrollableFilter from "../Filters/ScrollableFilter";

const VideosSection = forwardRef((props, ref) => {
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCourses = useMemo(() => {
    if (activeCategory === "Semua Kelas") return getMergedCourses().slice(0, 6);
    return getMergedCourses().filter(
      (course) => course.category === activeCategory
    );
  }, [activeCategory]);

  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="flex flex-col w-full max-w-xs mx-auto gap-4 md:max-w-7xl md:gap-5"
    >
      {/** Header */}
      <div className="flex flex-col gap-2.5">
        <h1 className="font-poppins text-2xl md:text-3xl font-semibold text-text-main">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="font-medium text-sm md:text-base text-text-base">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <ScrollableFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/**Card List */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 ">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            type="main"
            course={course}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex-1 h-1 bg-border-medium"></div>
        <button
          onClick={() => navigate("/all-videos")}
          className="flex flex-row justify-center items-center gap-2 px-3 md:px-24 py-2 font-medium text-sm md:text-base text-text-inverse bg-btn-tertiary hover:bg-btn-tertiary-hover rounded-4xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out"
        >
          <FaListAlt /> Tampilkan semua item?
        </button>
        <div className="flex-1 h-1 bg-border-medium"></div>
      </div>
    </section>
  );
});

export default VideosSection;
