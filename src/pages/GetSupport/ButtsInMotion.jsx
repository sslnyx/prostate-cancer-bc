import PageTitle from "../../components/PageTitle";
import ButtsCard from "./ButtsCard";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import Gallery from "../../components/Gallery";
import { useOutletContext } from "react-router-dom";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";

const ButtsInMotion = () => {
  const {
    butts_in_motion: { buttsInfo, gallery },
  } = useOutletContext();

  // console.log(gallery);

  return (
    <div>
      {/* <PageTitle reverse className="title-light" logoSrc="" description="" /> */}

      <section>
        <div className="container">
          <Row>
            <Col className="md:!justify-start mb-10 md:mb-0" w={6}>
              <img src="/assets/img/logos/butts-in-motion-logo.svg" />
            </Col>
            <Col w={6}>
              <div>
                <p>
                  Staying active can provide huge benefits both physically and
                  mentally – especially for prostate cancer patients. And you're
                  more likely to stick to an exercise routine if you enjoy it
                  and do it with people you enjoy being around.
                </p>
                <p>
                  With Butts in Motion’s unique approach to fitness and support,
                  you can join an activity with other prostate cancer patients
                  and their partners anywhere in Canada.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-center mb-10">
            <h2 className="max-w-[550px] text-5xl leading-[3.5rem] text-center">
              Through our Butts in Motion initiative, you can enjoy:
            </h2>
          </div>

          <div className="w-full mb-10">
            <div className="flex flex-row flex-wrap -mx-[22px]">
              {buttsInfo.map((info, i) => (
                <ButtsCard key={i} {...info} />
              ))}
            </div>
          </div>

          <p className="text-center mb-10">
            Have another activity in mind?
            <br /> We'll help you start your own Butts in Motion club, group or
            activity!
          </p>

          <div className="flex justify-center">
            <PrimaryBtn
              className="btn-main"
              href="https://www.buttsinmotion.ca/"
            >
              LEARN MORE
            </PrimaryBtn>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col items-center text-center">
          <div className="max-w-[550px] mb-10">
            <h2 className="text-5xl leading-[3.5rem] text-center mb-10">
              Why “Butts”?
            </h2>
            <p>
              Butts in Motion started as a movement to expand the original Butts
              in a Boat dragon boating team into more general fitness
              activities. The Butts in a Boat originally chose their name as a
              play on the Abreast in a Boat dragon boating team of breast cancer
              patients whom they were competing against.
            </p>
            <p>
              "Butts in Motion" encompasses our goal to make getting moving with
              prostate cancer something that's engaging, accessible, and
              sustainable for any man who's affected by prostate cancer.
            </p>
          </div>

          <div className="relative max-w-[800px] bg-blue py-20 px-10 text-white text-2xl mb-10">
            <img
              className="absolute -right-[35px] -bottom-[35px]"
              src="/assets/img/icons/right-quote.svg"
              alt=""
            />
            <img
              className="absolute -left-[35px] -top-[35px]"
              src="/assets/img/icons/left-quote.svg"
              alt=""
            />
            <p>
              To help improve the survival, and quality of life, of men
              diagnosed with prostate cancer through fitness, support and
              camaraderie.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <PrimaryBtn
              className="btn-main"
              href="https://www.buttsinmotion.ca/"
            >
              LEARN MORE
            </PrimaryBtn>
          </div>

          <p className="text-sm">
            Butts in Motion is an initiative of Prostate Cancer Foundation BC
            and the Butts in a Boat dragon boating team, a PCFBC support group.{" "}
          </p>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="text-5xl leading-[3.5rem] text-center mb-10">
            Gallery
          </h2>

          <Gallery gallery={gallery} />
        </div>
      </section>
    </div>
  );
};

export default ButtsInMotion;
