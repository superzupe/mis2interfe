import { courses } from "../data/coursesData";
import { DEFAULT_THUMBNAIL, DEFAULT_AVATAR } from "../assets/defaultImages";

const LS_KEY = "custom_course";

const generateId = () => {
  return "c_" + Math.random().toString(36).substring(2, 10);
};

//get
export const loadLocalCourses = () => {
  const data = localStorage.getItem(LS_KEY);
  return data ? JSON.parse(data) : [];
};

//set
const saveLocalCourses = (courses) => {
  localStorage.setItem(LS_KEY, JSON.stringify(courses));
};

const getDefaultThumbnail = () => {
  const index = Math.floor(Math.random() * DEFAULT_THUMBNAIL.length);
  return DEFAULT_THUMBNAIL[index];
};

const getDefaultAvatar = () => {
  const index = Math.floor(Math.random() * DEFAULT_AVATAR.length);
  return DEFAULT_AVATAR[index];
};

//merged data
export const getMergedCourses = () => {
  const local = loadLocalCourses();
  return [...courses, ...local];
};
//bikin add sm updatenya datanya nyatu ya
const mapFormToCourse = (prev, formData) => {
  return {
    ...prev,
    title: formData.title,
    description: formData.description,
    category: formData.category,
    price: Number(formData.price),
    priceLabel: `${Math.floor(Number(formData.price) / 1000)}K`,
    durationMinutes: formData.durationMinutes,
    instructor: {
      ...prev.instructor,
      name: formData.instructorName,
      role: formData.instructorRole,
      company: formData.instructorCompany,
    },
    tags: formData.title.toLowerCase().split(" ").filter(Boolean),
  };
};

//CREATE
export const addCourse = (formData) => {
  const base = {
    id: generateId(),
    thumbnail: getDefaultThumbnail(),
    instructor: {
      avatar: getDefaultAvatar(),
    },
    rating: { value: 0, reviews: 0 },
  };

  const newCourse = mapFormToCourse(base, formData);

  const local = loadLocalCourses();
  const update = [...local, newCourse];
  saveLocalCourses(update);

  return newCourse;
};

//UPDATE
export const updateCourse = (formData) => {
  const local = loadLocalCourses();
  const index = local.findIndex((c) => c.id === formData.id);
  if (index === -1) return false;

  const updated = mapFormToCourse(local[index], formData);

  local[index] = updated;

  saveLocalCourses(local);
  return updated;
};

//DELETE
export const deleteCourse = (id) => {
  const local = loadLocalCourses();
  const filtered = local.filter((c) => c.id !== id);
  saveLocalCourses(filtered);
  return true;
};
