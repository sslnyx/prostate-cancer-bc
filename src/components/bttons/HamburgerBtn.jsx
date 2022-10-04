// import React from "react";

const HamburgerBtn = (props) => {
  return (
    <div className="flex xl:hidden flex-row items-center cursor-pointer" {...props}>
      <div className="p-2 -mr-2">
        <div className="w-[30px] h-[4px] bg-blue mb-1"></div>
        <div className="w-[30px] h-[4px] bg-blue mb-1"></div>
        <div className="w-[30px] h-[4px] bg-blue"></div>
      </div>
    </div>
  );
};

export default HamburgerBtn;
