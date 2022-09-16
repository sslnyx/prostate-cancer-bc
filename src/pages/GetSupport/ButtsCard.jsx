import React from "react";

const ButtsCard = (props) => {
  const { location, list, imgSrc } = props;
  return (
    <div className="basis-full md:basis-1/2 px-[22px] flex flex-col mb-5 md:mb-0">
      <div className="flex flex-col w-full h-full justify-center items-center bg-blue p-10 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <h2 className="md:px-10">{location}</h2>
          <ul className="md:px-10 list-disc list-inside">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <img
          className="w-full h-full object-cover"
          src={`/assets/img/get-support/butts-in-motion/${imgSrc}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ButtsCard;
