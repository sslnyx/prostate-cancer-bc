import React from "react";

const Select = ({ placeholder, name, options }) => {
  return (
    <div className="w-full px-2 md:px-10">
      <select
        className="border border-darkBlue w-full text-darkBlue py-1 px-3 mb-5 h-[30px] md:h-[34px]"
        name={name}
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((val,i) => (
          <option key={i}>{val}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
