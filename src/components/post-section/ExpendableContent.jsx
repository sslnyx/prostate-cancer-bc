import { useState } from "react";

const ExpendableContent = ({ children, title }) => {
  const [expended, setExpended] = useState(false);

  return (
    <div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden
        ${
          !expended
            ? "opacity-0 max-h-0 pointer-events-none"
            : "pointer-events-auto opacity-1 max-h-[100000px]"
        }`}
      >
        {children}
      </div>

      <div
        className="text-blue flex py-3"
        onClick={() => setExpended(!expended)}
      >
        <span className="mr-3 font-bold cursor-pointer">
          {expended ? "Fold" : title ? title : "Expand To Read More"}
        </span>
        <img
          className={`transition-all duration-250 ${
            expended ? "rotate-180" : ""
          }`}
          src="/assets/img/icons/arrow-down-light-blue.svg"
        />
      </div>
    </div>
  );
};

export default ExpendableContent;
