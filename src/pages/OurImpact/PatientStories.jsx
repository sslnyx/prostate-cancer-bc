import { useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";
import PageTitle from "../../components/PageTitle";
import StoryCard from "./StoryCard";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";

const PatientStories = () => {
  const { stories } = useOutletContext();

  // console.log(stories);
  return (
    <div>
      <PageTitle
        p1={"‘HE’S THE REASON’"}
        p2="PATIENT STORIES"
        className="title-light"
      />

      <section>
        <div className="container">
          <Row className="-mx-5">
            {stories?.nodes?.map((data) => (
              <Col gap={5} w={4}>
                <StoryCard key={data.id} {...data} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default PatientStories;
