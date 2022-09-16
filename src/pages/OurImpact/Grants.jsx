import { useEffect, useRef, useState } from "react";
import PageHero from "../../components/PageHero";
import PageTitle from "../../components/PageTitle";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";
import GrantsGrantees from "./GrantsGrantees";
import { useLocation } from "react-router-dom";

const Grants = () => {
  //   console.log(nodes);

  const applyForGrant = useRef();

  const { hash, pathname } = useLocation();
  const [imgLoaded, setImgLoaded] = useState();
  const [img2Loaded, setImg2Loaded] = useState();

  const scrollHandler = () => {
    console.log("kkk");
    window.scrollTo({
      left: 0,
      top: applyForGrant.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // console.log(applyForGrant.current.id);
    if (
      imgLoaded &&
      img2Loaded &&
      applyForGrant &&
      hash === `#${applyForGrant.current.id}`
    ) {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: applyForGrant.current.offsetTop,
          behavior: "smooth",
        });
      }, 0);
    }
  }, [imgLoaded, img2Loaded, hash]);

  return (
    <div>
      <PageHero imgSrc="/assets/img/our-impact/grants/hero.jpeg" />

      <PageTitle
        title="Grants"
        description="Each year, the Foundation provides funding to students and post doctoral researchers to help further enhance their work in supporting prostate cancer research. Over the last 20 years, PCFBC has awarded over $1.8M in grants and over 88 projects."
      />

      <section>
        <div className="container">
          <Row>
            <Col w={6}>
              <div className="md:-mx-5 md:translate-x-5 z-10">
                <img
                  onLoad={() => setImgLoaded(true)}
                  src="/assets/img/our-impact/grants/scoop.jpeg"
                />
                <div className="md:mb-10"></div>
              </div>
            </Col>
            <Col w={6}>
              <div className="md:-mr-10 md:-ml-20">
                <div className="bg-blue md:mt-20 p-11 md:p-32 md:pl-40 md:-translate-x-10">
                  <p className="text-white">
                    Our Grant-In-Aide Committee is made up of scientists,
                    doctors, professors, researchers and others in the field of
                    prostate cancer, along with input and participation from
                    members of support groups and the medical community.
                    Numerous applications are received each year and it is a
                    difficult task selecting the best. The selected recipients
                    of our grants are supervised and monitored for their
                    performance and achievements, to ensure full transparency
                    and accountability for every project we fund.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-center">
            <img
              onLoad={() => setImg2Loaded(true)}
              src="/assets/img/our-impact/grants/elements.svg"
            />
          </div>

          <div className="flex justify-center">
            <PrimaryBtn className="btn-main" onClick={scrollHandler}>
              HOW TO APPLY FOR A GRANT
            </PrimaryBtn>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Our Grantees</h2>
          <GrantsGrantees />
        </div>
      </section>

      <section id="apply-for-grant" ref={applyForGrant}>
        <div className="container">
          <Row>
            <Col w={6}>
              <div className="md:-mx-20">
                <img src="/assets/img/our-impact/grants/corss.jpeg" />
              </div>
            </Col>
            <Col w={6}>
              <div className="max-w-[400px]">
                <h2 className="mb-5">
                  How to Apply <br /> for a Grant
                </h2>
                <p>
                  The Foundation welcomes applications from graduate students
                  and clinical/post-doctoral fellows engaged in novel projects
                  into basic research, diagnostics, treatment,
                  palliative/end-of-life care, survivorship and prevention for
                  prostate cancer.
                </p>
                <p>
                  Please click{" "}
                  <a
                    href="/assets/pdfs/grant-application-2022.pdf"
                    target="_blank"
                    className="underline text-blue"
                  >
                    here
                  </a>{" "}
                  for more info on the Grant-in-Aid Program request for
                  application.
                </p>

                <p>
                  Call for 2023 applications will open Spring 2023. Check back
                  for updates.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Grants;
