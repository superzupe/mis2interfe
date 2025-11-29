import {
  loadLocalCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../../utils/courseService";
import Card from "../Card/Card";
import { useState } from "react";

//WIS, TINGGAL ATUR LOGIC, PUSING PUSING KALEN, AHAHAHAHAHHAHAHA
const AdminSection = () => {
  const [courses, setCourses] = useState(() => loadLocalCourses());
  const [editId, setEditId] = useState(null);

  const defaultForm = {
    title: "",
    description: "",
    category: "",
    price: "",
    durationMinutes: "",
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
  };

  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if(name === "category" && value !== "") setError("")
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.category) {
      setError("Pilih kategori yang tertera!");
      return;
    }
    setError("")

    if (editId) {
      //UPDATE
      updateCourse({ id: editId, ...form });
      setEditId(null);
    } else {
      //ADD
      addCourse(form);
    }

    setCourses(loadLocalCourses());
    resetForm();
  };

  const handleCancel = () => {
    const confirmCancel = window.confirm("Yakin mau buang perubahan ini?");
    if (!confirmCancel) return;

    resetForm();
    setEditId(null);
  };

  const handleEdit = (course) => {
    setEditId(course.id);

    setForm({
      title: course.title,
      description: course.description,
      category: course.category,
      price: course.price,
      durationMinutes: course.durationMinutes,
      instructorName: course.instructor.name,
      instructorRole: course.instructor.role,
      instructorCompany: course.instructor.company,
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Yakin mau hapus video pembelajaran ini?"
    );
    if (!confirmDelete) return;

    deleteCourse(id);
    setCourses(loadLocalCourses());
  };

  const resetForm = () => setForm(defaultForm);

  return (
    <section className="flex flex-col w-full max-w-xs min-w-4/5 mx-auto gap-5 md:max-w-7xl md:gap-9">
      {/** Header */}
      <div className="flex flex-col gap-2.5">
        <h1 className="font-poppins text-2xl md:text-3xl font-semibold text-text-main">
          Halooo. Selamat datang di Halaman Admin.
        </h1>
        <p className="font-medium text-base md:text-lg text-text-base">
          Tambahkan video pembelajaran di sini!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 gap-8 bg-bg-main border border-border-medium rounded-xl"
      >
        {error && (
          <div className="flex flex-col items-center">
          <p className="w-2/3 text-center p-2 bg-red-500 text-text-inverse font-medium rounded-md">
            {error}
          </p>
          </div>
        )}
            <h3 className="font-poppins text-xl font-semibold text-text-main">
              Ayoo, lengkapi data di bawah ini.
            </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex flex-col w-full max-w-3xl gap-3">
          {/* add course desc */}
            <InputField
              id="title"
              label="Masukkan judul."
              value={form.title}
              onChange={handleChange}
            />
            <TextAreaDesc
              value={form.description}
              onChange={handleChange}
            />
            <InputSelectCategory
              value={form.category}
              onChange={handleChange}
            />
            <InputField
              id="price"
              type="number"
              label="Masukkan harga."
              placeholder="Mis. 300000, 450000, 280000 dsb."
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-full max-w-3xl gap-3">
            <InputField
              id="durationMinutes"
              type="number"
              label="Masukkan waktu video pembelajaran (dalam menit)."
              placeholder="Mis. 300, 200 dsb."
              value={form.durationMinutes}
              onChange={handleChange}
            />
            {/* add biodata */}
            <h4 className="font-poppins font-semibold text-text-main">
              Masukkan Biodata Tutor.
            </h4>
            <InputField
              id="instructorName"
              label="Nama."
              value={form.instructorName}
              onChange={handleChange}
            />
            <InputField
              id="instructorRole"
              label="Pekerjaan/Jabatan."
              value={form.instructorRole}
              onChange={handleChange}
            />
            <InputField
              id="instructorCompany"
              label="Perusahaan."
              value={form.instructorCompany}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* form button */}
        <div className="flex flex-row gap-6 justify-end">
          <ButtonForm
            type="button"
            onClick={handleCancel}
            textColor="text-text-base"
            bg="bg-btn-accent"
            bgHover="bg-btn-accent-hover"
            label="cancel"
          />
          <ButtonForm
            type="submit"
            textColor="text-text-inverse"
            bg="bg-btn-primary"
            bgHover="bg-btn-primary-hover"
            label={editId ? "save changes" : "add course"}
          />
        </div>
      </form>

      {/* card preview */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            type="admin"
            course={course}
            onEdit={() => handleEdit(course)}
            onDelete={() => handleDelete(course.id)}
          />
        ))}
      </div>
    </section>
  );
};

const InputField = ({
  id,
  type = "text",
  placeholder = "",
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor={id}
        className="text-sm font-normal text-text-base md:text-base"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 text-sm md:text-base text-text-main placeholder:text-text-base placeholder:text-xs border border-border-medium rounded-md focus:outline-0 focus:ring-2 focus:ring-border-dark"
      />
    </div>
  );
};

const TextAreaDesc = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor="description"
        className="text-sm font-normal text-text-base md:text-base"
      >
        Masukkan deskripsi. <span className="text-red-500">*</span>
      </label>
      <textarea
        id="description"
        name="description"
        rows={4}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-2 text-sm md:text-base text-text-main placeholder:text-text-base placeholder:text-xs border border-border-medium rounded-md focus:outline-0 focus:ring-2 focus:ring-border-dark"
      />
    </div>
  );
};

const InputSelectCategory = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor="category"
        className="text-sm font-normal text-text-base md:text-base"
      >
        Tambahkan Kategori. <span className="text-red-500">*</span>
      </label>
      <select
        className="w-full px-4 py-2 text-sm text-text-main border border-border-medium rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-dark"
        name="category"
        id="category"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>Pilih Kategori</option>
        <option value="Pemasaran">Pemasaran</option>
        <option value="Desain">Desain</option>
        <option value="Pengembangan Diri">Pengembangan Diri</option>
        <option value="Bisnis">Bisnis</option>
      </select>
    </div>
  );
};

const ButtonForm = ({ type, onClick, textColor, bg, bgHover, label }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-3 font-semibold text-sm md:text-base ${textColor} ${bg} hover:${bgHover} rounded-md cursor-pointer transition-all duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default AdminSection;
