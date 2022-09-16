import React from "react";

const AccordionCard = ({ title, items, children }) => {
  return (
    <div className="border-b-2 border-blue last:border-none py-10">
      <div className="flex flex-wrap -mx-10">
        <div className="basis-full md:basis-5/12 flex items-start mb-5 md:mb-0 px-10">
          <div className="p-5 bg-blue">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="basis-full md:basis-7/12 px-10">
          {children ? (
            children
          ) : items ? (
            <ul className="p-0 pl-4 md:pl-14 pt-0 pr-0 list-disc">
              {items.map((item) => (
                <li className="mb-5">{item}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
