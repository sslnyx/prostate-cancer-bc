import React from "react";
import ArrowBtn from "../../components/bttons/ArrowBtn";
import { Link } from "react-router-dom";
import { cleanText } from "../../util/util";

const EventCard = ({ props }) => {
  const {
    id,
    title,
    slug,
    event: { description, date, featuredImage, website, location },
  } = props;
  
  return (
    <Link
      className="basis-full md:basis-1/3 flex"
      to={`/get-involved/find-an-event/${slug}`}
    >
      <div className="p-2 flex flex-col">
        <div className="thumb">
          {featuredImage?.srcSet ? (
            <img
              className="h-[230px] w-full object-cover"
              srcSet={featuredImage?.srcSet}
              alt="Featured Image"
            />
          ) : (
            <div className="h-[230px] w-full bg-darkBlue"></div>
          )}
        </div>
        <div className="w-full bg-blue p-5 text-white flex-1">
          <div className="text-sm flex flex-col h-full">
            <div className="flex flex-col flex-1 justify-around">
              <h3 className="mb-5 text-white">{title}</h3>
              <div className="mb-5 text-darkBlue font-bold">
                <p className="mb-0">Date: {date}</p>
                <p className="flex">
                  <span className="mr-1">Location:</span>
                  <span dangerouslySetInnerHTML={{ __html: location }} />
                </p>
              </div>
            </div>

            <div className="mb-5">
              <span>{cleanText(description).slice(0, 250)}</span>
              ...
            </div>

            <div className="flex justify-end">
              <ArrowBtn
                className="text-darkBlue font-bold"
                color="fill-darkBlue"
              >
                Read More
              </ArrowBtn>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
