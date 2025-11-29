import { useMemo, useState } from "react";
import { menuFilters } from "../../data/menuFilters";
import { getMergedCourses } from "../../utils/courseService";
import SidebarFilter from "../Filters/SidebarFilter";
import Search from "../Filters/Search";
import SortDropdown from "../Filters/SortDropdown";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const AllVideosSection = () => {
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    duration: null,
    search: "",
    sortBy: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //Search
  const handleSearch = (text) => {
    setFilters((prev) => ({ ...prev, search: text }));
  };

  //SortBy
  const handleSortChange = (type) => {
    setFilters((prev) => ({ ...prev, sortBy: type }));
  };

  const handleFilterChange = (key, item) => {
    setFilters((prev) => {
      //radio
      if (key === "duration") {
        return { ...prev, duration: item };
      }
      //checkbox
      const current = prev[key] || [];
      const exist = current.includes(item);

      return {
        ...prev,
        [key]: exist ? current.filter((v) => v !== item) : [...current, item],
      };
    });
  };

  const handleFilterReset = () => {
    setFilters((prev) => ({
      ...prev,
      categories: [],
      prices: [],
      duration: null,
    }));
  };

  //Array courses
  const filteredCourses = useMemo(() => {
    let temp = [...getMergedCourses()];

    // 1) SEARCH
    if (filters.search.trim() !== "") {
      const q = (filters.search || "").trim().toLowerCase();
      if (q !== "") {
        temp = temp.filter((c) => {
          const title = (c.title || "").toString().toLowerCase();
          const tagsText = Array.isArray(c.tags)
            ? c.tags.join("").toLowerCase()
            : (c.tags || "").toString().toLowerCase();
          return title.includes(q) || tagsText.includes(q);
        });
      }
    }

    //2) FILTER (categories, prices, duration)
    // categories
    if (filters.categories.length > 0) {
      temp = temp.filter((c) => filters.categories.includes(c.category));
    }

    //prices
    if (filters.prices.length > 0) {
      const priceConfig = menuFilters.find((m) => m.key === "prices").items;

      temp = temp.filter((course) =>
        filters.prices.some((priceId) => {
          const p = priceConfig.find((x) => x.id === priceId);
          if (!p) return false;
          return course.price >= p.min && course.price <= p.max;
        })
      );
    }

    // duration
    if (filters.duration) {
      const durationConfig = menuFilters.find(
        (m) => m.key === "duration"
      ).items;
      const d = durationConfig.find((x) => x.id === filters.duration);

      if (d) {
        temp = temp.filter(
          (course) =>
            course.durationMinutes >= d.min && course.durationMinutes <= d.max
        );
      }
    }

    // 3) SORT
    if (filters.sortBy) {
      temp.sort((a, b) =>
        filters.sortBy === "price_low"
          ? a.price - b.price
          : filters.sortBy === "price_high"
          ? b.price - a.price
          : filters.sortBy === "az"
          ? a.title.localeCompare(b.title)
          : filters.sortBy === "za"
          ? b.title.localeCompare(a.title)
          : filters.sortBy === "rating_high"
          ? (b.rating?.value || 0) - (a.rating?.value || 0)
          : filters.sortBy === "rating_low"
          ? (a.rating?.value || 0) - (b.rating?.value || 0)
          : 0
      );
    }

    return temp;
  }, [filters]);

  // 💗💗💗💗 hitung data yang tampil dari index berapa ke index berapa (di setiap page)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="flex flex-col w-full max-w-xs mx-auto gap-5 md:max-w-7xl md:gap-9">
      {/** Header */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-poppins text-2xl md:text-3xl font-semibold text-text-main">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="font-medium text-sm md:text-base text-text-base">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-8">
        <SidebarFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onFilterReset={handleFilterReset}
        />

        <main className="flex flex-col gap-8">
          <div className="flex flex-row justify-center md:justify-end gap-4">
            <SortDropdown
              sortBy={filters.sortBy}
              onSortChange={handleSortChange}
            />
            <Search searchValue={filters.search} onSearch={handleSearch} />
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 ">
            {currentData.length > 0 ? (
              currentData.map((course, i) => (
                <Card
                  key={i}
                  type="main"
                  course={course}
                />
              ))
            ) : (
              <p className="p-6 col-span-2 text-center text-text-base font-medium text-sm md:text-base">
                Tidak ada video yang cocok.
              </p>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCourses.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </section>
  );
};

export default AllVideosSection;
