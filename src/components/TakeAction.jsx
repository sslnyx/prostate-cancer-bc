// import React from "react";
import PrimaryBtn from "./bttons/PrimaryBtn";

const TakeAction = () => {
  return (
    <div className="relative text-white text-center">
      <div className="absolute w-full h-full top-0 left-0">
        <img
          className="w-full h-full object-cover"
          src="/assets/img/home/take-action/take-action.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-darkBlue bg-opacity-70"></div>
      </div>

      <div className="relative py-[150px]">
        <div className="container">
          <h2 className="xl:text-8xl mb-10 text-white">TAKE ACTION NOW</h2>

          <p className="max-w-[330px] font-[500] text-xl 2xl:text-2xl 2xl:max-w-[500px] mx-auto mb-10">
            We can't do it without you.
            <br /> There are so many ways you
            <br /> can make a difference.
          </p>

          <div className="flex flex-col md:flex-row justify-center">
            <PrimaryBtn className="btn-main mr-0 md:mr-10 mb-5">
              PARTICIPATE
            </PrimaryBtn>
            <PrimaryBtn className="btn-orange mr-0 md:mr-10 mb-5">
              GIVE TODAY
            </PrimaryBtn>
            <PrimaryBtn className="btn-main">VOLUNTEER</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
