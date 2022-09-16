import PageTitle from "../../components/PageTitle";

const SupportGroupCouncils = () => {
  return (
    <div>
      <PageTitle
        p1="Support Group"
        p2="COUNCILS"
        className="title-light"
        description="
        <p>As a grassroots charity, we couldn’t possibly do what we do without our incredible patient-led support group councils.</p>
        <p>Our support group councils are the voices of the patients in our
        community. They work closely with their local support groups and
        patient communities to determine and advocate for, their needs. They
        provide the patient context and perspective to ensure that our
        efforts as a Foundation, in providing accessible prostate cancer
        support for patients across Canada, remain focused to the desires of
        the community.
        </p>
        "
      />

      {/* <section>
        <div className="container flex justify-center">
          <p className="max-w-[750px]"></p>
        </div>
      </section> */}

      <section>
        <div className="container flex justify-center">
          <div className="max-w-[750px]">
            <h2 className="text-center text-5xl mb-[50px]">BC Council</h2>
            <p>
              Our BC Support Group Council was founded in 2009. Its mission is
              to assist and support prostate cancer support groups throughout BC
              by providing guidance, resources, and networking leadership.{" "}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-wrap -mx-10 mb-10">
            <div className="basis-full md:basis-1/2 flex flex-col justify-center order-2 md:order-1 px-10">
              <p className="italic"> Code of Conduct</p>
              <p className="font-bold text-darkBlue">
                As we are not medical professionals, it is essential to avoid
                giving medical advice, but to focus on the following and to
                encourage BC’s support groups:
              </p>
              <p>
                1. To create an inclusive community and to provide a
                confidential and safe space for all support group attendees,
              </p>
              <p>
                2. To help reduce feelings of loneliness and anxiety in
                attendees, and to help them learn new ways to cope,
              </p>
              <p>
                3. To help increase feelings of hope and empowerment in support
                group participants by sharing our experiences and providing
                practical information about treatment and resources to help
                communicate better with medical teams and loved ones.
              </p>
            </div>
            <div className="basis-full md:basis-1/2 order-1 md:order-2 mb-10 px-10">
              <img
                className="w-full"
                src="/assets/img/get-support/support-group-councils/councils-1.jpeg"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-darkBlue font-bold">
              Want to learn more about the BC Council or put yourself forward
              for a position?
            </p>
            <span>Reach out to </span>
            <a
              href="support@prostatecancersupport.ca"
              className="underline text-blue"
            >
              support@prostatecancersupport.ca
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-center mb-10">National Council</h2>

          <div className="max-w-[600px] mx-auto mb-10">
            <p>
              The Prostate Cancer Support Canada National Council was founded in
              2020 in response to a sudden loss in prostate cancer support in
              Canada.
            </p>
            <p>
              Our missing is to assist and support prostate cancer support
              groups across Canada by providing guidance, resources, and
              networking leadership.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-wrap -mx-10">
            <div className="basis-full md:basis-1/2 px-10 mb-10 md:mb-0">
              <p>
                Prostate Cancer Foundation BC (PCFBC) is a non-profit
                organization that was founded by prostate cancer support groups
                in BC in 1997 to provide leadership and resources for their
                three pillars: prostate cancer support, awareness, and research
                in BC.
              </p>
              <p>
                Utilizing its knowledge and experience in assisting and working
                with prostate cancer support groups in BC, PCFBC offered to
                extend its support and awareness pillars to include prostate
                cancer support groups across Canada through the Prostate Cancer
                Support Canada (PCSC) initiative - a network of grassroots
                prostate cancer support groups from across the country.
              </p>
              <p>
                The PCSC National Council functions as a separate committee
                within PCFBC, operating as the primary linkage between PCFBC and
                Canadian prostate cancer support groups. Any Canadian prostate
                cancer support group is welcome to take advantage of services
                offered by PCSC and the PCSC National Council. No formal
                relationship or affiliation with PCFBC or PCSC is required.
              </p>
            </div>
            <div className="basis-full md:basis-1/2 px-10">
              <img
                className="w-full"
                src="/assets/img/get-support/support-group-councils/councils-2.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center">
            <p className="font-bold">
              Want to learn more about the Prostate Cancer Support Canada
              National Council or put yourself forward for a position?{" "}
            </p>

            <span>Reach out at </span>
            <a
              className="text-blue underline"
              href="mailto:support@prostatecancersupport.ca"
            >
              support@prostatecancersupport.ca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportGroupCouncils;
