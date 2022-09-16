import PageTitle from "../../components/PageTitle";
import MissionAllLogos from "./MissionAllLogos";
import Row from "../../components/rows-cols/Row";
import Col from "../../components/rows-cols/Col";
import PrimaryBtn from "../../components/bttons/PrimaryBtn";

const Mission = () => {
  return (
    <div>
      <PageTitle
        title="MISSION"
        description="To provide leadership and resources for prostate cancer support, education and research across Canada. "
      />

      <MissionAllLogos />

      <section>
        <div className="container relative">
          <img
            className="absolute -right-[300px] -z-[1]"
            src="/assets/img/home/story/story-bg.svg"
          />

          <div className="flex flex-col items-center">
            <h2 className="mb-10">OUR HISTORY</h2>

            <div className="max-w-[750px]">
              <p>
                Founded in 1997 by prostate cancer patients and support group
                leaders, Prostate Cancer Foundation BC is a BC-based, grassroots
                nonprofit that has been providing leadership and resources in
                prostate cancer support, awareness, and research for 25 years.
              </p>
              <p>
                Prostate Cancer Foundation BC started as a simple phone service:
                a phone number in BC that you could call to receive support for
                prostate disease. Over the years, it has grown into an umbrella
                organization for several fundraiser events, support initiatives,
                and research grants – all dedicated to the most common cancer in
                British Columbian men.
              </p>
              <p>
                In 2020, Prostate Cancer Foundation BC proudly expanded its
                support services and awareness efforts to men and their loved
                ones across Canada through its initiative, Prostate Cancer
                Support Canada.
              </p>
              <p>
                Working in conjunction with prostate cancer support group
                leaders across the country, the Foundation aims to ensure that
                the many thousands of men living with prostate cancer, their
                families, and loved ones can access quality support services no
                matter where in Canada they live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="container">
          <h2 className="text-center mb-10">OUR Evolution</h2>
          <div className="flex justify-center">
            <p className="max-w-[750px]">
              From our humble beginnings in 1997 to now, please click{" "}
              <a
                href="/assets/pdfs/PCFBC_timeline.pdf"
                target="_blank"
                className="text-blue underline"
              >
                here
              </a>{" "}
              to view our milestones.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue p-0 relative">
        <div className="container">
          <Row className="">
            <Col w={6}>
              <div className="w-full py-10">
                <div className="max-w-[420px]">
                  <h2 className="mb-5 !text-darkBlue">Annual Report</h2>
                  <p className="text-white mb-10">
                    We are proud to share our latest Annual Report with you.
                    Over the past 12 months, our team, committees and volunteers
                    have continued to push the envelope and bring more services
                    and awareness opportunities forward.
                  </p>
                  <div className="flex justify-start">
                    <PrimaryBtn href="/about-us/annual-report">
                      READ MORE
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            </Col>
            <Col w={6} className="px-0">
              <div className="w-full h-full relative">
                <div className="bg-[#ececec] top-0 absolute w-[100vw] h-full left-[50%]"></div>
                <img
                  className="w-full h-full relative object-cover z-10"
                  src="/assets/img/about-us/mission/brochure.jpeg"
                />
                <div className="bg-gradient-to-l z-20 from-[#ececec] to-transparent w-[10%] right-0 h-full absolute top-0"></div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Mission;
