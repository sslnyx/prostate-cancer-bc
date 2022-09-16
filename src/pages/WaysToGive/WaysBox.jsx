import React from "react";

const WaysBox = ({ title, children }) => {
  const firstWord = title.split(" ").slice(0, 1).join("");
  const otherWords = title.split(" ").slice(1).join(" ");
  console.log(firstWord);
  return (
    <div>
      <div className="bg-blue px-5 py-3">
        <h2>
          <span className="text-darkBlue">{firstWord}</span> {otherWords}
        </h2>
      </div>
      <div className="max-w-[700px] mx-auto py-10">{children}</div>
    </div>
  );
};

export default WaysBox;
