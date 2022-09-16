import React from "react";

const Checkbox = ({ main, children }) => {
  const mainClass = "w-[30px] min-w-[30px] h-[30px] mr-2";
  const subClass = "w-[24px] min-w-[24px] h-[24px] mr-2";
  return (
    <label className="flex items-center py-1">
      <input type="checkbox" className={main ? mainClass : subClass} />
      {children}
    </label>
  );
};

export default Checkbox;
