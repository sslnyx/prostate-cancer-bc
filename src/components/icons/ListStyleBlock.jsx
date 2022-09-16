import React from "react";

const ListStyleBlock = ({ color }) => {
  return (
    <span className="inline-block mr-3 w-[15px] h-[15px] md:w-[25px] md:h-[25px]" style={{ background: color }}></span>
  );
};

export default ListStyleBlock;
