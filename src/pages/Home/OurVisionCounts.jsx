import React from "react";

const OurVisionCounts = ({ number, title, plus }) => {
  return (
    <div className="p-8">
      <h2 className="mb-3 text-white text-6xl lg:text-8xl 2xl:text-9xl">
        {number}
        {plus ? "+" : ""}
      </h2>

      <p
        className="text-base 2xl:text-4xl font-bold"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default OurVisionCounts;
