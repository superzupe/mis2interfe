import { forwardRef, useState, useMemo } from "react";
import Card from '../Card/Card'
import ScrollableFilter from "../Filters/ScrollableFilter";
import { courses } from "../../data/coursesData";

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
    if (activeCategory === "Semua Kelas") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      ref={ref}
      className="flex flex-col w-full max-w-xs mx-auto gap-4 md:max-w-7xl md:gap-5"
    >
      {/** Header */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-poppins text-2xl md:text-3xl font-semibold text-text-main">
          Koleksi Video Pembelajaran Unggulan
        </h3>
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
            course={course}
          />
        ))}
      </div>
    </section>
  );
});

export default VideosSection;
