import React from "react";

const Select = ({ placeholder, name, options }) => {
  return (
    <div className="w-[50%] px-2 md:px-10">
      <select
        className="border border-darkBlue w-full text-darkBlue py-1 px-3 mb-5 h-[30px] md:h-[34px]"
        name={name}
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((val) => (
          <option>{val}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
