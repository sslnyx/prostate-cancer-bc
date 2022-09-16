import { useOutletContext } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import TeamCard from "./TeamCard";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
// import PageHero from "../../components/PageHero";
import BoardCard from "./BoardCard";
import QuoteBox from "../../components/QuoteBox";
import CommunityCard from "./CommunityCard";
import ArrowBtn from "../../components/bttons/ArrowBtn";

const OurTeam = () => {
  const { memberByCats } = useOutletContext();
  console.log(memberByCats);
  return (
    <div>
      <PageTitle
        p1="OUR"
        p2="TEAM"
        className="title-light"
        description="A small team with a giant heart, our team continues to push the envelope and bring more services and awareness opportunities forward. A grassroots team that continues to work tirelessly for men and their families across Canada. "
      />
      <section>
        <div className="container !max-w-[1440px]">
          <Row>
            {memberByCats["dGVybTo5NQ=="]?.map((member) => (
              <Col w={6} key={member.id}>
                <TeamCard {...member} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <PageTitle
        p1="OUR"
        p2="BOARD"
        className="title-light"
        description="<p>The volunteer ‘working board’ of Prostate Cancer Foundation BC is as diverse as it is passionate. </p><p>Made up of patients and other giving individuals, the board functions year-round to determine big picture strategies and policies for our organization, while helping staff and volunteers to implement those plans.</p>"
      />

      <section>
        <div className="container !max-w-[850px]">
          <Row mx="-mx-3">
            {memberByCats["dGVybTo5Ng=="]?.map((member) => (
              <Col w={6} key={member.id} gap={3}>
                <BoardCard {...member} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-center mb-10">
            <h2>Directors</h2>
          </div>

          <Row mx="-mx-3" className="justify-center">
            {memberByCats["dGVybToxMDY="]?.map((member) => (
              <Col w={4} gap={3} key={member.id}>
                <BoardCard {...member} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-center mb-10">
            <h2>Medical Advisors </h2>
          </div>

          <Row className="-mx-3 justify-center">
            {memberByCats["dGVybToxMDc="]?.map((member) => (
              <Col w={4} gap={3} key={member.id}>
                <BoardCard {...member} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section>
        <div className="container flex justify-center italic">
          <QuoteBox bg>
            <p>
              Our volunteer ‘working board’ has been the backbone of our
              Foundation. From running committees to advocating and fundraising,
              they give it their all and give all that they can. Their support
              has been unrelenting.
            </p>
            <div className="flex items-center justify-end">
              <span className="w-[50px] h-[2px] mr-3 inline-block bg-white"></span>

              <span>Leah Lariviere, Executive Director</span>
            </div>
          </QuoteBox>
        </div>
      </section>

      <section>
        <PageTitle
          p1="OUR"
          p2="COMMITTEES"
          className="title-light"
          description="<p>Our Board Committees provide a practical way to structure our Board’s work and ensure that they can adapt quickly to the changing demands and needs of our communities. </p><p>We are incredibly grateful for our committed board members who go above and beyond to share their expertise and skills with the Foundation and the communities we serve. </p>"
        />

        <div className="container">
          <Row className="-mx-3 mb-5">
            {memberByCats["dGVybToxMDg="]?.map((element) => (
              <Col w={4} gap={3} key={element.id}>
                <CommunityCard {...element} />
              </Col>
            ))}
          </Row>

          <div className="flex justify-end">
            <ArrowBtn
              pdf
              color="fill-darkBlue"
              href="/assets/pdfs/Prostate-Cancer-Organizational-chart-updated-Feb-9-2022.pdf"
            >
              <span className="font-bold text-darkBlue">
                See Our Organizational Chart
              </span>
            </ArrowBtn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
