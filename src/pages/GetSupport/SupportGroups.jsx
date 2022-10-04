import PageTitle from "../../components/PageTitle";
import QuoteBox from "../../components/QuoteBox";
import Accordion from "../../components/Accordion";
import { useOutletContext } from "react-router-dom";
import AccordionTitle from "../../components/AccordionTitle";
import AccordionContent from "../../components/AccordionContent";

const SupportGroups = () => {
  const {
    support_group: { accordion },
  } = useOutletContext();

  return (
    <div>
      <PageTitle logoSrc="/assets/img/get-support/support-groups/pcsc-logo.svg">
        <div>
          <p>
            Support groups offer helpful, volunteer-led monthly meetings to
            support the recently-diagnosed, those living with, and after,
            prostate cancer, and their loved ones.
          </p>
          <p>
            You can find a calendar of most support group meetings in Canada on
            our national support website—
            <a
              target="_blank"
              href="https://prostatecancersupport.ca/"
              className="text-blue underline"
            >
              Prostate Cancer Support Canada
            </a>
            .
          </p>
          <p>
            You can also find and contact a support group anywhere in Canada
            through our{" "}
            <a
              target="_blank"
              href="https://prostatecancersupport.ca/support-groups/"
              className="text-blue underline"
            >
              Prostate Cancer Support Canada directory
            </a>
            .
          </p>
          <p>
            Note that we do not permit, or offer, medical advice—though we do
            encourage attendees to share about their own treatments and
            decisions.
          </p>
        </div>
      </PageTitle>

      <section>
        <div className="container flex justify-center">
          <QuoteBox bg>
            <h2 className="text-blue md:text-5xl italic font-['roboto']">
              Listen. Learn. Ask. Talk.
            </h2>
          </QuoteBox>
        </div>
      </section>

      <section>
        <div className="container link-blue">
          <Accordion data={accordion} type="white" />
        </div>
      </section>
    </div>
  );
};

export default SupportGroups;
