import React from "react";

const AccordionTitle = ({ title, idx, type, category }) => {
  const btnClass =
    "accordion-button relative flex items-center justify-start w-full py-4 px-5 text-xl md:text-xl text-left border-0 !rounded-none transition focus:outline-none collapsed";

  const colorBlue = btnClass + " !bg-blue !text-white";

  const colorForm = btnClass + " !bg-white !text-darkBlue pl-0 font-['roboto']";

  const colorWhite = btnClass + " !bg-white !text-darkBlue";

  return (
    <h2 className="accordion-header" id={`flush-heading-${idx}`}>
      <button
        className={
          type === "form" ? colorForm : type === "white" ? colorWhite : colorBlue
        }
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#flush-collapse-${idx}`}
        aria-expanded="false"
        aria-controls={`flush-collapse-${idx}`}
      >
        <span className={`inline-block mr-3 ${(type = "form" ? "order-2" : "order-1")}`}>
          {title ? title : category ? category : ""}
        </span>
      </button>
    </h2>
  );
};

export default AccordionTitle;
