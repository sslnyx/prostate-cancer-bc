import { Link } from "react-router-dom";
import ArrowBtn from "../../components/bttons/ArrowBtn";

const StoryCard = ({ title, id, story, slug }) => {
  const { featuredImage, excerpt } = story;
  return (
    <Link to={slug} className="bg-blue w-full flex justify-center items-center">
      <div className="w-full">
        <div className="outer-2_3">
          {featuredImage?.sourceUrl && (
            <img
              className="inner w-full h-full object-cover"
              src={featuredImage?.sourceUrl}
              alt=""
            />
          )}
        </div>

        <div className="py-10 px-[22px] md:min-h-[250px] text-white flex flex-col">
          <h2 className="mb-3">{title}</h2>
          <p className="text-sm">{excerpt}</p>
          <div className="flex-1"></div>

          <div className="flex justify-end">
            <ArrowBtn color="fill-white" className="text-white">
              Read More
            </ArrowBtn>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
