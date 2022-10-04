import SectionTitle from "../../components/SectionTitle";
import OurVisionCounts from "./OurVisionCounts";

const OurVision = () => {
  return (
    <section className="text-white pt-0">
      <div className="container !max-w-[1920px] px-0">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-1/2 bg-darkBlue flex flex-col">
            <div className="px-[22px] py-[50px] lg:pr-[100px] flex lg:justify-end">
              <div className="max-w-[650px]">
                <SectionTitle
                  p1="Our"
                  p2="Vision"
                  className="title-dark mb-5"
                />

                <p className="font-bold mb-[50px] text-2xl md:text-5xl">
                  To provide leadership and resources for prostate cancer
                  support, education and research in BC
                </p>

                <div className="">
                  <p className="mb-5 2xl:mb-10">
                    Since being formed by prostate cancer patients in 1997,
                    Prostate Cancer Foundation BC has been providing grassroots
                    leadership and resources for prostate cancer support,
                    awareness, and research.
                  </p>

                  <p className="mb-5 2xl:mb-10">
                    Why prostate cancer? It’s the most diagnosed cancer in men –
                    not only in Canada, but in more than 110 countries
                    worldwide. This translates into{" "}
                    <span className="font-bold">1 in 8 Canadian men</span>{" "}
                    diagnosed with prostate cancer in their lifetime.{" "}
                    <span className="font-bold">
                      Our goal is to make sure that no one ever has to feel like
                      they’re going through this alone.
                    </span>
                  </p>

                  <p>
                    With a 5 person staff and the support of hundreds of
                    volunteers—whether it’s through our fundraising efforts to
                    ensure research scientists can continue their life-saving
                    work, or creating and providing resources, free of charge,
                    to assist men and their loved ones—we’re here for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue flex-1">
              <div className="flex h-full">
                <div className="basis-5/12">
                  <img
                    className="w-full h-full object-cover"
                    src="/assets/img/home/our-vision/cross.jpg"
                  />
                </div>

                <div className="basis-7/12 flex justify-center items-center text-center">
                  <OurVisionCounts number={25} title="Years of Service" plus />
                </div>
              </div>
            </div>
          </div>

          <div className="basis-full flex flex-col md:basis-1/2 bg-blue">
            <div className="flex-1 flex flex-col order-2 md:order1">
              <div className="flex flex-1">
                <div className="basis-7/12">
                  <img
                    className="w-full object-cover max-h-[340px] h-full"
                    src="/assets/img/home/our-vision/meeting.jpg"
                  />
                </div>
                <div className="basis-5/12 flex text-center items-center justify-center">
                  <OurVisionCounts number={60} plus title="Support Groups" />
                </div>
              </div>

              <div className="flex flex-1 bg-blue">
                <div className="basis-7/12 flex text-center items-center justify-center">
                  <OurVisionCounts
                    number={92}
                    title="Research<br> Projects Funded"
                  />
                </div>

                <div className="basis-5/12 flex-1">
                  <img
                    className="w-full h-full max-h-[340px] object-cover"
                    src="/assets/img/home/our-vision/lab.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex-1 order-1 md:order-2">
              <img
                className="w-full h-full object-cover xl:max-h-[550px]"
                src="/assets/img/home/our-vision/band.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
