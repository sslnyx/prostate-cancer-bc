import React from "react";

const DonateFieldGroup = ({ label, note, children, nameId }) => {
  return (
    <div className="flex py-1 mb-5 -mx-3 items-center">
      <div className="basis-full md:basis-4/12 px-3">
        <label>{label}</label>
        <br />
        {note && <span>{`(${note})`}</span>}
      </div>
      <div className="basis-full md:basis-8/12 relative px-3">{children}</div>
    </div>
  );
};

export default DonateFieldGroup;
