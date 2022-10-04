import ArrowBtn from "./bttons/ArrowBtn";
import { Link } from "react-router-dom";

const StoryCard = (props) => {
  const {
    title,
    id,
    slug,
    story: { content, excerpt, location, featuredImage },
  } = props;

  return (
    <div className="story-card basis-full md:basis-1/3 text-center outer-square mb-5 last:mb-0 md:mb-0 text-white">
      <div className="inner px-5">
        <div className="relative h-full w-full bg-gray-200">
          <Link to={`/our-impact/patient-stories/${slug}`}>
            <img
              srcSet={featuredImage.srcSet}
              className="absolute top-0 left-0 h-full w-full object-cover"
            />

            <div className="title-box absolute w-full bottom-0 transition-all duration-500">
              <div className="absolute w-full bottom-0 left-0 h-[130%] bg-gradient-to-t from-darkBlue to-transparent"></div>
              <div className="py-5 relative">
                <h3 className="text-white">{title}</h3>
                <p>{location}</p>
              </div>
            </div>

            <div className="story-card-content transition-all duration-500 absolute top-0 left-0 h-full w-full flex items-center justify-center px-[22px] opacity-0 bg-darkBlue bg-opacity-70">
              <p className="max-w-[230px] mx-auto">{excerpt}</p>
              <ArrowBtn
                className="absolute bottom-10 w-full flex justify-center"
                color="fill-white"
              >
                Read{" "}
                <span className="inline-block capitalize">
                  {title.toLowerCase()}
                </span>
                's story
              </ArrowBtn>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
