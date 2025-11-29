const InputField = ({ id, type, required = false, label, value, onChange }) => {
  return (
    <div className="flex flex-col items-start gap-3 md:gap-4">
      <label
        htmlFor={id}
        className="text-sm font-normal text-text-base md:text-base"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={id}
        required={required}
        className="w-full px-4 py-2 text-sm text-text-main border border-border-light rounded-md md:text-base focus:outline-0 focus:ring-2 focus:ring-border-medium"
      />
    </div>
  );
};

export default InputField;