import React from "react";

const GradingChartTd = ({ val, className, bold }) => {
  const baseClass = `border-2 border-darkBlue py-5 border-r-0 last:border-r-2 px-1 flex items-center justify-center ${
    bold ? "font-bold" : ""
  }`;

  return (
    <div
      className={
        className ? className + " " + baseClass : "basis-1/4 " + baseClass
      }
    >
      {val}
    </div>
  );
};

export default GradingChartTd;
