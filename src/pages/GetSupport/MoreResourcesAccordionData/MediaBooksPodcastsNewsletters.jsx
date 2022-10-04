import AccordionCard from "../../../components/AccordionCard";
import PrimaryBtn from "../../../components/bttons/PrimaryBtn";

const MediaBooksPodcastsNewsletters = () => {
  return (
    <div className="md:px-10">
      <AccordionCard title="Active Surveillor Newsletter">
        <p>
          The Active Surveillor is a well-researched and candid newsletter
          focused on active surveillance for low-risk prostate cancer – through
          the lens of a 50+ year American medical journalist and 12+ year active
          surveillance patient. It offers the latest news in AS and encourages
          the opinions and sharing of experiences by others.
        </p>
        <PrimaryBtn className="btn-main" href="https://howardwolinsky.substack.com/">Learn More</PrimaryBtn>
      </AccordionCard>
    </div>
  );
};

export default MediaBooksPodcastsNewsletters;
