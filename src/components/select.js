import React from "react";
const Select = ({ options, value, onChange }) => {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-select mt-3"
        id="validationDefault04"
        required
      >
        <option disabled value="">
          Сортировать по...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
