import React from "react";

const PageHero = ({ imgSrc, title }) => {
  return (
    <div className="w-full relative bg-darkBlue flex justify-center max-h-[600px]">
      <div className="max-w-[2560px] w-full relative">
        <div className="fade-out absolute w-[10%] h-full -left-1 bg-gradient-to-r from-darkBlue to-transparent"></div>
        <div className="fade-out absolute w-[10%] h-full -right-1 bg-gradient-to-l from-darkBlue to-transparent"></div>

        {title ? (
          <div className="flex items-center h-full w-full justify-center">
            <div className="container !max-w-[1563px] absolute z-20 hidden md:block">
              <h1
                className="text-white text-[6rem] leading-[7rem] xl:text-[8rem] xl:leading-[9.5rem]"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
            </div>

            <div className="flex flex-wrap w-full h-full">
              <div className="order-2 md:order-1 basis-full md:basis-1/2 flex items-center text-center justify-center pc-gradient relative z-10 pt-[100px] pb-[50px]">
                <h1
                  className="text-white md:hidden"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
              </div>
              <div className="order-1 md:order-2 h-[250px] md:h-[600px] basis-full md:basis-1/2  relative">
                <div className="fade-out absolute -right-1 w-[20%] bg-gradient-to-l from-darkBlue to-transparent h-full z-10"></div>
                <img
                  className="w-[125%] -left-[25%] max-w-[1600px] h-[130%] md:h-full object-cover absolute"
                  src={imgSrc}
                />
              </div>
            </div>
          </div>
        ) : (
          <img
            className="w-full min-h-[250px] h-full object-cover object-[20%_10%]"
            src={imgSrc}
            alt="page-hero"
          />
        )}
      </div>
    </div>
  );
};

export default PageHero;
