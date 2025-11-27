import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Card = ({ course }) => {
  return (
    <div
      className="group flex flex-col bg-bg-main w-full max-w-xs p-4 border border-border-medium rounded-xl hover:border-border-dark md:max-w-sm md:p-5 md:gap-4 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-row gap-3 md:flex-col">
        <img
          src={course.thumbnail}
          alt={course.title}
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
                  <span className="font-bold">{course.instructor.company}</span>
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

export default Card;
