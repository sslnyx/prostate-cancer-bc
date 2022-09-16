import SectionTitle from "../../components/SectionTitle";
import { useOutletContext } from "react-router-dom";
import StoryCard from "../../components/StoryCard";

const HomeStories = () => {
  const {
    stories: { nodes },
  } = useOutletContext();

  // const stories = [...nodes];

  return (
    <section>
      <div className="container relative">
        <img
          className="absolute right-0 translate-x-[30%] -top-[300px] z-[-1]"
          src="/assets/img/home/story/story-bg.svg"
        />

        <SectionTitle p1="HE’S" p2="THE REASON" className="title-light mb-10" />

        <div className="flex -mx-5 flex-col md:flex-row">
          {nodes.slice(0, 3).map((storyProps) => (
            <StoryCard key={storyProps.id} {...storyProps} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStories;
