// import React from "react";
import RightArrow from "../../components/icons/RightArrow";
import ArrowBtn from "../../components/bttons/ArrowBtn";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const HomeEventCard = (props) => {
  
  const {
    title,
    slug,
    event: { date, location, featuredImage },
  } = props;

  return (
    <div className="basis-full md:basis-1/3 outer-square mb-3 md:mb-0 text-white">
      <div className="inner px-5">
        <Link to={`/get-involved/find-an-event/${slug}`}>
          <div className="bg-blue w-full h-full flex relative">
            <div className="absolute w-full bottom-0 h-[30%] bg-gradient-to-t from-darkBlue to-transparent"></div>
            <img srcSet={featuredImage?.srcSet} className="object-cover" />
            <div className="absolute bottom-[22px] mx-auto px-[22px]">
              <h3 className="text-2xl md:text-3xl mb-3 text-white">{title}</h3>
              {/* <p dangerouslySetInnerHTML={{ __html: location }} /> */}
              {/* <p className="flex">
              <span className="mr-3">{date}</span>
              <RightArrow fill="white" />
            </p> */}
              <ArrowBtn className="font-normal" color="fill-white">
                {date}
              </ArrowBtn>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeEventCard;
